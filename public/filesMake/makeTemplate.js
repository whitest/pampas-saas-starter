/**
 * 根据不同类型，生成不同模板
 */

const grunt = require('grunt');

const modelUrl = './public/model/';
const moduleInjectArr = ['controller', 'directive', 'service', 'factory', 'config'];

const core = {
    /**
     * 引用功能的scss文件模板生成
     * @param  {Object} opts  文件相关信息
     * @param  {String} template  文件相关信息
     * @param  {String} buffer  读取的文档流模板
     * @return {Promise}     返回生成的模板buffer
     */
    importScss: function(opts, template, buffer) {
        const __SELF_DESC = '样式汇总';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        const childrenNames = Object.keys(opts.tree.children);
        childrenNames.forEach(el => {
            if (!!opts.tree.noImportScss && opts.tree.noImportScss.indexOf(el) !== -1) return;
            template += buffer.replace(/\[__NAME\]/, `./${el}/${opts.tree.children[el].filesName || el}`);
        });
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    template: function(opts, template, buffer) {
        const __SELF_DESC = 'html模板';
        template = template
            .replace(/\[__SELF_DESC\]/, __SELF_DESC)
            .replace(/\/\*/, '<!--')
            .replace(/\*\//, '-->');
        var className = '';
        opts._dirArr.forEach((el, i) => {
            if (i != 0) {
                className += '__';
            };
            className += el.replace(/([A-Z])/g, '_$1')
                .toLowerCase();
        });
        template += buffer.replace(/\[__CLASSNAME\]/, className);
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    scss: function(opts, template, buffer) {
        const __SELF_DESC = '样式';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _depends = '';
        var className = '';
        opts._dirArr.forEach((el, i) => {
            if (i != 0) {
                className += '__';
            };
            className += el.replace(/([A-Z])/g, '_$1')
                .toLowerCase();
        });
        // 如果有依赖的子模块，引用
        Object
            .keys(opts.tree.children || {})
            .forEach(el => {
                if (!!opts.tree.noImportScss && opts.tree.noImportScss.indexOf(el) !== -1) return;
                const name = opts.tree.children[el].filesName || el;
                _depends += `@import './${el}/${name}';\n`;
            });
        template += buffer
            .replace(/\[__CLASSNAME\]/, className)
            .replace(/\[__DEPENDS\]/, _depends);

        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    module: function(opts, template, buffer) {
        const __SELF_DESC = '对外module';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _import = '';
        var _inject = '';
        var _depends = [];
        var modulesName = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        const _p = new Promise(function(resolve, reject) {
            if (!modulesName) {
                reject('module名称未获取到');
                return;
            };
            moduleInjectArr.forEach(el => {
                if (opts.tree.files.indexOf(el) == -1) return;
                _import += `import ${el} from './${opts.filesName}.${el}.js';\n`;
                if (el === 'service') {
                    _inject += `.${el}('${modulesName}Service', ${el})\n`;
                    return;
                };
                if (el === 'factory') {
                    _inject += `.${el}('${modulesName}Factory', ${el})\n`;
                    return;
                };
                if (el === 'directive') {
                    _inject += `.${el}('${modulesName.replace(/\b(\w)|\s(\w)/g, m => m.toLowerCase())}', ${el})\n`;
                    return;
                };
                if (el === 'config') {
                    _inject += `.config(${el})\n`;
                    return;
                };
                _inject += `.${el}('${modulesName}', ${el})\n`;
            });
            // 查看是否含有子模块，
            // 如果有，写入依赖
            Object
                .keys(opts.tree.children || {})
                .forEach(el => {
                    const name = opts.tree.children[el].filesName || el;
                    if (!!opts.tree.noInjectedJs && opts.tree.noInjectedJs.indexOf(el) !== -1) return;
                    _import += `import ${name} from './${el}/${name}.js';\n`;
                    _depends.push(`${name}.name`);
                });
            template += buffer
                .replace(/\[__NAME\]/g, modulesName)
                .replace(/\[__IMPORT\]/, _import)
                .replace(/\[__INJECT\]/, _inject)
                .replace(/\[__DEPENDS\]/g, _depends);
            resolve(template);
        });
        return _p;
    },
    controller: function(opts, template, buffer) {
        const __SELF_DESC = 'controller';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _inject = '';
        var modulesName = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        const _p = new Promise(function(resolve, reject) {
            if (!modulesName) {
                reject('controller名称未获取到');
                return;
            };
            moduleInjectArr.forEach(el => {
                if (opts.tree.files.indexOf(el) == -1) return;
                if (el === 'service') {
                    _inject += `, ${modulesName}Service`;
                };
                if (el === 'factory') {
                    _inject += `, ${modulesName}Factory`;
                };
            });
            template += buffer.replace(/\[__INJECT\]/, _inject);
            resolve(template);
        });
        return _p;
    },
    factory: function(opts, template, buffer) {
        const __SELF_DESC = 'factory';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    service: function(opts, template, buffer) {
        const __SELF_DESC = 'service';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    directive: function(opts, template, buffer) {
        const __SELF_DESC = 'directive';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var modulesName = '';
        var _inject = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        const _p = new Promise(function(resolve, reject) {
            if (!modulesName) {
                reject('directive名称未获取到');
                return;
            };
            moduleInjectArr.forEach(el => {
                if (opts.tree.files.indexOf(el) == -1) return;
                if (el === 'service') {
                    _inject += `, ${modulesName}Service`;
                };
                if (el === 'factory') {
                    _inject += `, ${modulesName}Factory`;
                };
            });
            template += buffer.replace(/\[__FILENAME\]/g, opts.filesName)
                .replace(/\[__INJECT\]/, _inject);
            resolve(template);
        });
        return _p;
    },
    sumModule: function(opts, template, buffer) {
        const __SELF_DESC = '模块汇总';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _import = '';
        var _depends = [];
        var modulesName = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        const _p = new Promise(function(resolve, reject) {
            if (!modulesName) {
                reject('module名称未获取到');
                return;
            };
            Object
                .keys(opts.tree.children || {})
                .forEach(el => {
                    const name = opts.tree.children[el].filesName || el;
                    if (!!opts.tree.noInjectedJs && opts.tree.noInjectedJs.indexOf(el) !== -1) return;
                    _import += `import ${name} from './${el}/${name}.js';\n`;
                    _depends.push(`${name}.name`);
                });
            template += buffer
                .replace(/\[__NAME\]/g, modulesName)
                .replace(/\[__IMPORT\]/, _import)
                .replace(/\[__DEPENDS\]/, _depends);
            resolve(template);
        });
        return _p;
    },
    route: function(opts, template, buffer) {
        const __SELF_DESC = '路由配置';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _import = '';
        var _router = '';
        var _depends = [];
        var modulesName = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        const _p = new Promise(function(resolve, reject) {
            if (!modulesName) {
                reject('module名称未获取到');
                return;
            };
            Object
                .keys(opts.tree.children || {})
                .forEach(el => {
                    const name = opts.tree.children[el].filesName || el;
                    var params = '';
                    (opts.tree.children[el].routeParams || [])
                    .forEach(p => params += `/:${p}`);
                    const controllerName = modulesName + name.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
                    _import += `import ${name} from './${el}/${name}.js';\nimport ${name}Temp from './${el}/${name}.html';\n`;
                    _router += `.when(routerLink.${controllerName}.src + '${params}', {
                template: ${name}Temp,
                controller: '${controllerName}',
            })`;
                    _depends.push(`${name}.name`);
                });
            template += buffer
                .replace(/\[__IMPORT\]/g, _import)
                .replace(/\[__NAME\]/g, modulesName)
                .replace(/\[__DEPENDS\]/g, _depends)
                .replace(/\[__ROUTER\]/g, _router);
            resolve(template);
        });
        return _p;
    },
    html: function(opts, template, buffer) {
        var className = '';
        opts._dirArr.forEach((el, i) => {
            if (i != 0) {
                className += '__';
            };
            className += el.replace(/([A-Z])/g, '_$1')
                .toLowerCase();
        });
        template += buffer.replace(/\[__CLASSNAME\]/, className);
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    sumFacModule: function(opts, template, buffer) {
        const __SELF_DESC = 'sumFacModule';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _import = '';
        var _injectArr = [];
        var _depends = [];
        var modulesName = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        Object
            .keys(opts.tree.children || {})
            .forEach(el => {
                const name = opts.tree.children[el].filesName || el;
                if (-1 !== opts.tree.children[el].files.indexOf('factory')) {
                    _injectArr.push(`${modulesName}${el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase())}Factory`);
                };
                if (-1 !== opts.tree.children[el].files.indexOf('service')) {
                    _injectArr.push(`${modulesName}${el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase())}Service`);
                };
                _import += `import ${name} from './${el}/${name}.js';\n`;
                if (!!opts.tree.noInjectedJs && opts.tree.noInjectedJs.indexOf(el) !== -1) return;
                _depends.push(`${name}.name`);
            });
        const _factory = `${opts.filesName}Factory`;
        _import += `import ${_factory} from './${opts.filesName}.factory.js';\n`;
        template += buffer
            .replace(/\[__IMPORT\]/g, _import)
            .replace(/\[__NAME\]/g, modulesName)
            .replace(/\[__DEPENDS\]/g, _depends)
            .replace(/\[__FACTORY\]/g, `${_factory}(args)`)
            .replace(/\[__INJECT\]/g, _injectArr.join(', '));
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    objects: function(opts, template, buffer) {
        const __SELF_DESC = 'map格式文件';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    rootScss: function(opts, template, buffer) {
        const __SELF_DESC = '入口样式文件';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _depends = '';
        var className = '';
        var _baseScss = 'scss/main.scss';
        if (!opts._dirArr || !opts._dirArr.length || (opts._dirArr.length == 1 && !opts._dirArr[0])) {
            _baseScss = `./${_baseScss}`;
        } else {
            opts._dirArr.forEach((el, i) => {
                _baseScss = `../${_baseScss}`;
                if (i != 0) {
                    className += '__';
                };
                className += el.replace(/([A-Z])/g, '_$1')
                    .toLowerCase();
            });
        };
        // 如果有依赖的子模块，引用
        Object
            .keys(opts.tree.children || {})
            .forEach(el => {
                if (!!opts.tree.noImportScss && opts.tree.noImportScss.indexOf(el) !== -1) return;
                const name = opts.tree.children[el].filesName || el;
                _depends += `@import './${el}/${name}';\n`;
            });
        template += buffer
            .replace(/\[__CLASSNAME\]/, className)
            .replace(/\[__BASESCSS\]/, _baseScss)
            .replace(/\[__DEPENDS\]/, _depends);

        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    normalJs: function(opts, template, buffer) {
        const __SELF_DESC = 'js';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    baseScss: function(opts, template, buffer) {
        const __SELF_DESC = '底层scss变量、常量、样式、方法等封装';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _var = '';
        var _camel = '';
        var _function = '';
        var _placeholder = '';
        opts._dirArr.forEach(el => {
            _var += `${el}-`;
            _camel += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        template += `
/*
 *  普通变量：$${_var}name: {value};
 *
 *  数组变量：$${_var}name-arr: (arg1, arg2);
 *
 *  map变量：$${_var}name-map: (key1: value1, key2: value2);
 *
 *  mixin方法封装：@mixin base${_camel}Name($args){}
 *
 *  function方法封装：@function base${_camel}Name($args){}
 *
 *  占位符封装：%base${_camel}Name{}
 */`;
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    ES6Export: function(opts, template, buffer) {
        const __SELF_DESC = ' export 对外模块封装';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _export = '';
        var childrenObj = opts.tree.children || {};
        var importArr = opts.tree.import || [];
        Object
            .keys(childrenObj)
            .forEach(el => {
                const name = opts.tree.children[el].filesName || el;
                opts.tree.children[el]
                _export += `export * as ${el} from './${el}/${name}.js';\n`
            });
        importArr.forEach(el => {
            _export += `export * as ${el.name} from './${el.name}.js';\n`
        });
        template += buffer
            .replace(/\[__EXPORT\]/g, _export);
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    emptyJS: function(opts, template, buffer) {
        const __SELF_DESC = ' export 对外模块封装';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
    rootModule: function(opts, template, buffer) {
        const __SELF_DESC = '对外module';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        var _import = `import './${opts.filesName}.scss'\n`;
        var _inject = '';
        var _depends = [];
        var modulesName = '';
        opts._dirArr.forEach(el => {
            modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
        });
        const _p = new Promise(function(resolve, reject) {
            if (!modulesName) {
                reject('module名称未获取到');
                return;
            };
            moduleInjectArr.forEach(el => {
                if (opts.tree.files.indexOf(el) == -1) return;
                _import += `import ${el} from './${opts.filesName}.${el}.js';\n`;
                if (el === 'service') {
                    _inject += `.${el}('${modulesName}Service', ${el})\n`;
                    return;
                };
                if (el === 'factory') {
                    _inject += `.${el}('${modulesName}Factory', ${el})\n`;
                    return;
                };
                if (el === 'directive') {
                    _inject += `.${el}('${modulesName.replace(/\b(\w)|\s(\w)/g, m => m.toLowerCase())}', ${el})\n`;
                    return;
                };
                if (el === 'config') {
                    _inject += `.config(${el})\n`;
                    return;
                };
                _inject += `.${el}('${modulesName}', ${el})\n`;
            });
            // 查看是否含有子模块，
            // 如果有，写入依赖
            Object
                .keys(opts.tree.children || {})
                .forEach(el => {
                    const name = opts.tree.children[el].filesName || el;
                    if (!!opts.tree.noInjectedJs && opts.tree.noInjectedJs.indexOf(el) !== -1) return;
                    _import += `import ${name} from './${el}/${name}.js';\n`;
                    _depends.push(`${name}.name`);
                });
            template += buffer
                .replace(/\[__NAME\]/g, modulesName)
                .replace(/\[__IMPORT\]/, _import)
                .replace(/\[__INJECT\]/, _inject)
                .replace(/\[__DEPENDS\]/g, _depends);
            resolve(template);
        });
        return _p;
    },
    roothtml: function(opts, template, buffer) {
        const self = this;
        const _p = new Promise(function(resolve, reject) {
            self
                .html(opts, template, buffer)
                .then(template => {
                    template = template
                        .replace(/\<body\>/, `<body ng-controller="${opts._dirArr[0].replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase())}">`)
                        .replace(/\<\/div\>/, `
                            <ng-view></ng-view>
                        </div>`);
                    resolve(template);
                });
        });
        return _p;
    },
    config: function(opts, template, buffer) {
        const __SELF_DESC = 'config';
        template = template.replace(/\[__SELF_DESC\]/, __SELF_DESC);
        template += buffer;
        const _p = new Promise(function(resolve, reject) {
            resolve(template);
        });
        return _p;
    },
};

/**
 * 根据不同类型，生成不同模板
 * @param  {Object} opts 文件相关信息
 *             {Object} fileInfo 文件相关信息
 *             {Object} tree 当前目录树
 *             {Array} _dirArr 路径所组成的数组
 *             {String} filesName 文件名
 *
 * @return {Promise}      返回的文件内容
 */
const makeTemplate = function(opts) {
    // 根据文件类型，读取的文档流模板
    const buffer = grunt.file.read(`${modelUrl}${opts.fileInfo.template}`);
    const template = opts.tree.description ? `/* ${opts.tree.description} [__SELF_DESC] */\n` : '';
    const _p = new Promise(function(resolve, reject) {
        if (!opts.fileInfo || !opts.fileInfo.type) {
            reject('未获取到文件类型');
            return;
        };
        if (!core[opts.fileInfo.type]) {
            reject(`makeTemplate.js中，没有处理${opts.fileInfo.type}的方法`);
            return;
        };
        core[opts.fileInfo.type](opts, template, buffer)
            .then(function(temp) {
                resolve(temp);
            })
            .catch(function(err) {
                reject(err);
            });
    });
    return _p;
};

module.exports = makeTemplate;
