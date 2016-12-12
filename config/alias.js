// webpack alias 管理

const path = require('path');
const DEV_URL = require('./dev_url.js');

const alias = {
    jquery: path.join(DEV_URL, 'lib/jquery.1.9.1.js'),
    core: path.join(DEV_URL, 'core/core'),
    routerLink: path.join(DEV_URL, 'singleApp/core/routerLink/routerLink'),
};

module.exports = alias;
