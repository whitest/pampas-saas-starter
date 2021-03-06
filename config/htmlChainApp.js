// 连锁页面构建
const DEV_URL = require('./dev_url.js');
const path = require('path');
const template = path.join(DEV_URL, 'chainApp/app.html');

const opts = {
    favicon: path.join(DEV_URL, 'favicon.ico'),
    title: '潘帕斯健身房系统',
    filename: 'chaiApp.html',
    template,
    inject: 'body',
    minify: { //压缩HTML文件
        removeComments: true, //移除HTML中的注释
        collapseWhitespace: false //删除空白符与换行符
    },
    hash: true,
    chunks: [
        'commons',
        'manageApp',
    ],
};

module.exports = opts;
