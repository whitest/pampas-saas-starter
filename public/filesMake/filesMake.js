// 根据目录结构，生成相应的文件

const grunt = require('grunt');
const devRoot = require('./filesMake.devRoot.js');
const singleApp = require('./filesMake.singleApp.js');
const imgs = require('./filesMake.imgs.js');
const componment = require('./filesMake.componment.js');
const base = require('./filesMake.base.js');

const filesMake = {
    devRoot,
    singleApp,
    imgs,
    componment,
    base,
};


module.exports = filesMake;
