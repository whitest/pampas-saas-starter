const singleApp = require('./tree.singleApp.js');
const chainApp = require('./tree.chainApp.js');
const componment = require('./tree.componment.js');
const scss = require('./tree.scss.js');

const tree = {
    files: ['html', 'scss', 'js'],
    filesName: 'index',
    type: 'root',
    enforce: false, // 是否可强制重新替换文件, 开发时局部页面的该参数可设置为false，尽量避免重写文件
    children: {
        singleApp,
        chainApp: {},
        // lib: {},
        // factory,
        componment,
        imgs: {},
        // chainApp,
        scss: {},
        // scss,
    },
};

module.exports = tree;
