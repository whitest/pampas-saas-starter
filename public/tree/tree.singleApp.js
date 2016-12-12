// 单店层面文档目录结构
const singleAppViews = require('./singleApp/views');
const singleAppCore = require('./singleApp/core');
const singleApp = {
    files: ['html', 'rootScss', 'module', 'controller', 'service'],
    filesName: 'app',
    enforce: ['rootScss'],
    children: {
        core: singleAppCore,
        views: singleAppViews,
    },
    noInjectedJs: ['core'], // angular.module() 中，不需要注入的 children 中的 key
    noImportScss: ['core'], // scss 中，不需要引用的 children 中的 key
};
module.exports = singleApp;
