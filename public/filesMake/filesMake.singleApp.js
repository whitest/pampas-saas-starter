/**
 * 处理singleApp
 * @param tree: 当前目录Json结构
 * @param dir: 当前目录路径
 * @param filesName: 当前文件名
 * @param fileInfo: 文件的信息
 */

const grunt = require('grunt');
const appViewsTree = require('../tree/singleApp/views.js');

const devUrl = './public/dev/';
const modelUrl = './public/model/';

const core = function(tree, dir, filesName, fileInfo) {
    const file = `${dir}${filesName}${fileInfo.suffix}`;
    // 如果页面已经存在，且不是强制替换，则不再更改文件内容
    if (grunt.file.isFile(`${file}`) && !tree.enforce) return;

    // 生成routerLink文件
    if (filesName == 'routerLink') {
        var template = tree.description ? `/* ${tree.description} */\n` : '';
        var _json = '';
        const makeRouterLink = function(obj, name, promission) {
            // 如果是局部页面了，进行routerLink的配置，同时不再向下遍历
            if (obj.type === 'views') {
                const p = promission === 'empty' ? '' : promission;
                _json += `${name}:{
                        promission: '${p}',
                        src: '/${!!obj.viewsEntry ? p : name}',
                    },`;
                return;
            };
            if (!!obj.children) {
                for (var i in obj.children) {
                    (function(i) {
                        const camel = i.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
                        const _name = `${name}${camel}`;
                        makeRouterLink(obj.children[i], _name, obj.promission);
                    }(i));
                };
            };
        };
        makeRouterLink(appViewsTree, 'Views');
        const buffer = grunt.file.read(`${modelUrl}${fileInfo.template}`);
        template += buffer.replace(/\[__JSON\]/, _json)
        grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
    };
};

const views = function(tree, dir, filesName, fileInfo) {
    const file = `${dir}${filesName}${fileInfo.suffix}`;
    // 如果页面已经存在，且不是强制替换，则不再更改文件内容
    if (grunt.file.isFile(`${file}`) && !tree.enforce) return;

    const _dir = dir.replace('singleApp/views/', 'views/');

    // 文件路径数组
    const _dirArr = _dir.split('/');
    // 根据文件类型，读取的文档流模板
    const buffer = grunt.file.read(`${modelUrl}${fileInfo.template}`);

    const moduleInjectArr = ['controller', 'directive', 'service', 'factory'];

    switch (fileInfo.type) {
        case 'importScss':
            var template = tree.description ? `/*${tree.description} 样式汇总*/\n` : '';
            var childrenNames = Object.keys(tree.children);
            childrenNames.forEach(el => template += buffer.replace(/\[__NAME\]/, `./${el}/${tree.children[el].filesName || el}`));
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'template':
            var template = tree.description ? `<!--${tree.description} html模板-->\n` : '';
            var className = '';
            _dirArr.forEach((el, i) => {
                if (i != 0) {
                    className += '__';
                };
                className += el.replace(/([A-Z])/g, '_$1').toLowerCase();
            });
            template += buffer.replace(/\[__CLASSNAME\]/, className);
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'scss':
            var template = tree.description ? `/*${tree.description} 样式*/\n` : '';
            var _depends = '';
            var className = '';
            _dirArr.forEach((el, i) => {
                if (i != 0) {
                    className += '__';
                };
                className += el.replace(/([A-Z])/g, '_$1').toLowerCase();
            });
            // 如果有依赖的子模块，引用
            Object
                .keys(tree.children || {})
                .forEach(el => {
                    const name = tree.children[el].filesName || el;
                    _depends += `@import './${el}/${name}';\n`;
                });
            template += buffer
                .replace(/\[__CLASSNAME\]/, className)
                .replace(/\[__DEPENDS\]/, _depends);
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'module':
            var template = tree.description ? `/*${tree.description} 对外module*/\n` : '';
            var _import = '';
            var _inject = '';
            var _depends = [];
            var modulesName = '';
            _dirArr.forEach(el => {
                modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
            });
            if (!modulesName) {
                console.error('-----module名称未获取到-----');
                console.error(fileInfo);
                return;
            };
            moduleInjectArr.forEach(el => {
                if (tree.files.indexOf(el) == -1) return;
                _import += `import ${el} from './${filesName}.${el}.js';\n`;
                if (el === 'service') {
                    _inject += `.${el}('${modulesName}Service', ${el})\n`;
                    return;
                };
                if (el === 'factory') {
                    _inject += `.${el}('${modulesName}Factory', ${el})\n`;
                    return;
                };
                _inject += `.${el}('${modulesName}', ${el})\n`;
            });
            // 查看是否含有子模块，
            // 如果有，写入依赖
            Object
                .keys(tree.children || {})
                .forEach(el => {
                    const name = tree.children[el].filesName || el;
                    _import += `import ${name} from './${el}/${name}.js';\n`;
                    _depends.push(`${name}.name`);
                });
            template += buffer
                .replace(/\[__NAME\]/g, modulesName)
                .replace(/\[__IMPORT\]/, _import)
                .replace(/\[__INJECT\]/, _inject)
                .replace(/\[__DEPENDS\]/g, _depends);
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'controller':
            var template = tree.description ? `/*${tree.description} controller*/\n` : '';
            var _inject = '';
            var modulesName = '';
            _dirArr.forEach(el => {
                modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
            });
            if (!modulesName) {
                console.error('-----controller名称未获取到-----');
                console.error(fileInfo);
                return;
            };
            moduleInjectArr.forEach(el => {
                if (tree.files.indexOf(el) == -1) return;
                if (el === 'service') {
                    _inject += `, ${modulesName}Service`;
                };
                if (el === 'factory') {
                    _inject += `, ${modulesName}Factory`;
                };
            });
            template += buffer.replace(/\[__INJECT\]/, _inject);
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'factory':
            var template = tree.description ? `/*${tree.description} factory*/\n` : '';
            template += buffer;
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'service':
            var template = tree.description ? `/*${tree.description} service*/\n` : '';
            template += buffer;
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'directive':
            var template = tree.description ? `/*${tree.description} directive*/\n` : '';
            var modulesName = '';
            var _inject = '';
            _dirArr.forEach(el => {
                modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
            });
            if (!modulesName) {
                console.error('-----directive名称未获取到-----');
                console.error(fileInfo);
                return;
            };
            moduleInjectArr.forEach(el => {
                if (tree.files.indexOf(el) == -1) return;
                if (el === 'service') {
                    _inject += `, ${modulesName}Service`;
                };
                if (el === 'factory') {
                    _inject += `, ${modulesName}Factory`;
                };
            });
            template += buffer.replace(/\[__FILENAME\]/g, filesName).replace(/\[__INJECT\]/, _inject);
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'sumModule':
            var template = tree.description ? `/*${tree.description} 模块汇总*/\n` : '';
            var _import = '';
            var _depends = [];
            var modulesName = '';
            _dirArr.forEach(el => {
                modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
            });
            if (!modulesName) {
                console.error('-----module名称未获取到-----');
                console.error(fileInfo);
                return;
            };
            Object
                .keys(tree.children || {})
                .forEach(el => {
                    const name = tree.children[el].filesName || el;
                    _import += `import ${name} from './${el}/${name}.js';\n`;
                    _depends.push(`${name}.name`);
                });
            template += buffer
                .replace(/\[__NAME\]/g, modulesName)
                .replace(/\[__IMPORT\]/, _import)
                .replace(/\[__DEPENDS\]/, _depends);
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'route':
            var template = tree.description ? `/*${tree.description} 路由配置*/\n` : '';
            var _import = '';
            var _router = '';
            var _depends = [];
            var modulesName = '';
            _dirArr.forEach(el => {
                modulesName += el.replace(/\b(\w)|\s(\w)/g, m => m.toUpperCase());
            });
            if (!modulesName) {
                console.error('-----module名称未获取到-----');
                console.error(fileInfo);
                return;
            };
            Object
                .keys(tree.children || {})
                .forEach(el => {
                    const name = tree.children[el].filesName || el;
                    var params = '';
                    (tree.children[el].routeParams || []).forEach(p => params += `/:${p}`);
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
                .replace(/\[__ROUTER\]/g, _router)
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        case 'html':
            var template = buffer;
            grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
            break;
        default:
            console.error('-----未匹配到文件类型-----');
            console.error(fileInfo.type);
    };
};

const singleApp = function(tree, dir, filesName, fileInfo) {
    if (!dir.startsWith('singleApp')) return;

    if (dir.startsWith('singleApp/core/')) {
        core(tree, dir, filesName, fileInfo);
        return;
    };
    if (dir.startsWith('singleApp/views/')) {
        views(tree, dir, filesName, fileInfo);
        return;
    };
    
};

module.exports = singleApp;
