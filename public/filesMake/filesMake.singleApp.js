/**
 * 处理singleApp
 * @param tree: 当前目录Json结构
 * @param dir: 当前目录路径
 * @param filesName: 当前文件名
 * @param fileInfo: 文件的信息
 */

const grunt = require('grunt');
const appViewsTree = require('../tree/singleApp/views.js');
const makeTemplate = require('./makeTemplate.js');

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

    makeTemplate({
        fileInfo,
        tree,
        _dirArr,
        filesName,
    }).then(function(template) {
        grunt.file.write(`${devUrl}${dir}/${filesName}${fileInfo.suffix}`, template);
    }).catch(function(err) {
        console.error(`----------${err}----------`);
        console.error(fileInfo);
        console.error(`----------------------------------------\n`);
    });
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
