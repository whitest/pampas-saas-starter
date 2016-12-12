// 单店层面文档目录结构
const singleAppViews = require('./singleApp/views');
const singleAppCore = require('./singleApp/core');
const singleApp = {
    files: ['html', 'rootScss', 'sumModule'],
    filesName: 'app',
    enforce: ['rootScss'],
    children: {
        core: singleAppCore,
        views: singleAppViews,
    },
};
module.exports = singleApp;
