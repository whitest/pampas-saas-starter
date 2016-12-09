// 处理 核心js目录

const grunt = require('grunt');
const checkEnforce = require('./checkEnforce.js');
const makeTemplate = require('./makeTemplate.js');

const devUrl = './public/dev/';
const modelUrl = './public/model/';

const singleApp = function(tree, dir, filesName, fileInfo) {
    if (!dir.startsWith('core')) return;
    // console.log(tree);
    // console.log(dir);
    // console.log(filesName);
    // console.log(fileInfo);

    // return;
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

module.exports = singleApp;
