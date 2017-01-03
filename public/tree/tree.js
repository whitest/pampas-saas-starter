const singleApp = require('./tree.singleApp.js');
const chainApp = require('./tree.chainApp.js');
const component = require('./tree.component.js');
const scss = require('./tree.scss.js');
const base = require('./tree.base.js');
const core = require('./tree.core.js');
const login = require('./tree.login.js');
const aid = require('./tree.aid.js');

const tree = {
    // files: ['html', 'rootScss', 'normalJs'],
    // filesName: 'index',
    type: 'root',
    enforce: false, // 是否可强制重新替换文件，开发时局部页面的该参数可设置为false，尽量避免重写文件
    children: {
        login,
        singleApp,
        chainApp,
        // chainApp: {},
        lib: {},
        base,
        component,
        imgs: {},
        scss,
        core,
        aid,
    },
};

module.exports = tree;
