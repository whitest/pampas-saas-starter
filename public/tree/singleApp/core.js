// 单店app自己的核心js
const routerLink = require('./core.routerLink.js');
const singleAppCore = {
    type: 'dir',
    enforce: false,
    children: {
        routerLink,
    },
};

module.exports = singleAppCore;
