// 单店层面文档目录结构
const singleAppViews = require('./singleApp/views');
const singleAppCore = require('./singleApp/core');
const singleApp = {
    files: ['html', 'rootScss', 'module', 'controller', 'service'],
    filesName: 'app',
    enforce: ['rootScss', 'module'],
    children: {
        core: singleAppCore,
        views: singleAppViews,
    },
    noInjected: ['core'],
};
module.exports = singleApp;
