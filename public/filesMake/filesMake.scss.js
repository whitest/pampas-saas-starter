/**
 * 公共scss文件夹
 */

const grunt = require('grunt');
const appViewsTree = require('../tree/singleApp/views.js');
const checkEnforce = require('./checkEnforce.js');
const makeTemplate = require('./makeTemplate.js');

const devUrl = './public/dev/';
const modelUrl = './public/model/';


const scss = function(tree, dir, filesName, fileInfo) {
    if (!dir.startsWith('scss')) return;

    const file = `${devUrl}${dir}/${filesName}${fileInfo.suffix}`;
    if (!checkEnforce(file, fileInfo.type, tree.enforce)) return;

    dir = dir.replace('scss/base/', '');
    console.log(dir)

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

module.exports = scss;
