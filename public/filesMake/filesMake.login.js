/**
 * 处理登录页面文件夹
 */

const grunt = require('grunt');
const appViewsTree = require('../tree/singleApp/views.js');
const checkEnforce = require('./checkEnforce.js');
const makeTemplate = require('./makeTemplate.js');

const devUrl = './public/dev/';
const modelUrl = './public/model/';

/**
 * 处理登录页面文件夹
 * @param tree: 当前目录Json结构
 * @param dir: 当前目录路径
 * @param filesName: 当前文件名
 * @param fileInfo: 文件的信息
 */
const login = function(tree, dir, filesName, fileInfo){
    if (!dir.startsWith('login')) return;

    const file = `${devUrl}${dir}/${filesName}${fileInfo.suffix}`;
    if (!checkEnforce(file, fileInfo.type, tree.enforce)) return;

    // 文件路径数组
    const _dirArr = dir.split('/');

    makeTemplate({
        fileInfo,
        tree,
        _dirArr,
        filesName,
    }).then(function(template) {
        grunt.file.write(file, template);
    }).catch(function(err) {
        console.error(`----------${err}----------`);
        console.error(fileInfo);
        console.error(`----------------------------------------\n`);
    });
};

module.exports = login;
