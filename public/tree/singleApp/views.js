const common = require('./views.common.js');
const cashier = require('./views.cashier.js');
const customer = require('./views.customer.js');
const marketing = require('./views.marketing.js');
const operate = require('./views.operate.js');

const singleAppViews = {
    files: ['sumModule', 'importScss'],
    type: 'dir',
    enforce: true, // 是否可强制重新替换文件, 开发时局部页面的该参数可设置为false，尽量避免重写文件
    children: {
        common,
        cashier,
        customer,
        marketing,
        operate,
    },
};

module.exports = singleAppViews;
