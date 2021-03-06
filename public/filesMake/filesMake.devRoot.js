/**
* 处理dev根目录文件自动化方法
*/
const grunt = require('grunt');
const devUrl = './public/dev/';
const modelUrl = './public/model/';
const checkEnforce = require('./checkEnforce.js');
const makeTemplate = require('./makeTemplate.js');

const devRoot = function(tree, dir, filesName, fileInfo){
    const file = `${devUrl}${dir}/${filesName}${fileInfo.suffix}`;
    if (!checkEnforce(file, fileInfo.type, tree.enforce)) return;

    // 文件路径数组
    const _dirArr = dir.split('/');

    // 

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

module.exports = devRoot;
