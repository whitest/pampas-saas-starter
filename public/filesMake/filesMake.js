// 根据目录结构，生成相应的文件

const grunt = require('grunt');
// const devRoot = require('./filesMake.devRoot.js');
const singleApp = require('./filesMake.singleApp.js');
const componment = require('./filesMake.componment.js');
const base = require('./filesMake.base.js');
const imgs = require('./filesMake.imgs.js');
const login = require('./filesMake.login.js');
const scss = require('./filesMake.scss.js');
const core = require('./filesMake.core.js');

const filesMake = {
    // devRoot,
    login,
    singleApp,
    imgs,
    componment,
    base,
    scss,
    core,
};


module.exports = filesMake;
