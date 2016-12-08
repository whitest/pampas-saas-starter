const path = require('path');
const fs = require('fs');
const tree = require('./public/tree/tree.js');
const filesGetName = require('./public/filesMake/filesGetName.js');
const filesMake = require('./public/filesMake/filesMake.js');
const grunt = require('grunt');

const baseUrl = path.join(__dirname, '/public/dev/');

/**
 * @param tree: 当前结构树，非深遍历
 * @param filesName: 当前结构树的filesName（根目录时为空）
 * @param dirName: 当前结构树对应的目录
 */
const getTree = function(tree, filesName, dirName) {
    if (!tree) {
        console.error('-----没有找到结构树-----\n');
        return;
    };
    if (tree !== Object(tree)) {
        console.error('-----结构树类型不正确-----\n');
        return;
    };
    if (!tree.files) {
        console.warn('\n---------------结构树未找到files--------------------');
        console.warn(`文件名：${filesName}`);
        console.warn(`路径：${dirName}`);
        console.warn('----------------------------------------------------\n');
    };
    if (!!dirName && !grunt.file.isDir(dirName)) {
        grunt.file.mkdir(dirName);
    };
    if (!!tree.files) {
        if (Object.prototype.toString.call(tree.files) != '[object Array]') {
            console.error('-----结构树files不是数组类型-----');
            console.error(tree);
            console.error('-----------------------------\n');
            return;
        };
        if (tree.files.length != 0) {
            tree.files.forEach(el => {
                filesName = tree.filesName || filesName;
                const fileInfo = filesGetName(el);
                if (!fileInfo) {
                    console.error('-----fileInfo获取失败-----\n');
                    return;
                };
                if (!fileInfo.suffix || !fileInfo.template) {
                    console.error('-----filesGetName获取类型失败-----');
                    console.error(fileInfo.suffix);
                    console.error(fileInfo.template);
                    console.error('---------------------------------\n');
                    return;
                };
                // 当前目录为根目录
                if (dirName.slice(baseUrl.length).startsWith('login')) {
                    filesMake.login(tree, dirName.slice(baseUrl.length), filesName, fileInfo);
                } else if (dirName.slice(baseUrl.length).startsWith('singleApp')) {
                    filesMake.singleApp(tree, dirName.slice(baseUrl.length), filesName, fileInfo);
                } else if (dirName.slice(baseUrl.length).startsWith('componment')) {
                    filesMake.componment(tree, dirName.slice(baseUrl.length), filesName, fileInfo);
                } else if (dirName.slice(baseUrl.length).startsWith('base')) {
                    filesMake.base(tree, dirName.slice(baseUrl.length), filesName, fileInfo);
                };

            });
        };
    };
    if (!!tree.children && tree.children === Object(tree.children)) {
        for (var i in tree.children) {
            (function(i) {
                const el = tree.children[i];
                if (el === Object(el)) {
                    const _dirName = path.join(dirName, i);
                    getTree(el, i, _dirName);
                };
            }(i));
        };
    };
};

getTree(tree, undefined, baseUrl);
