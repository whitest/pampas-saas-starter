const common = require('./views.common.js');
const cashier = require('./views.cashier.js');

const singleAppViews = {
    files: ['sumModule', 'importScss'],
    type: 'dir',
    enforce: true, // 是否可强制重新替换文件, 开发时局部页面的该参数可设置为false，尽量避免重写文件
    children: {
        common,
        cashier,
    },

};

module.exports = singleAppViews;
