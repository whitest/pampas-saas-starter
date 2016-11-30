// 单店层面文档目录结构
const singleAppViews = require('./singleApp/views');
const singleApp = {
    files: ['html', 'scss', 'sumModule'],
    filesName: 'app',
    enforce: false,
    children: {
        // core: {},
        views: singleAppViews,
    },
};
module.exports = singleApp;
