// 根据目录结构，生成相应的文件

const grunt = require('grunt');
const devRoot = require('./filesMake.devRoot.js');
const singleApp = require('./filesMake.singleApp.js');

const filesMake = {
    devRoot,
    singleApp,
};


module.exports = filesMake;
