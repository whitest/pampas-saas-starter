// webpack alias 管理

const path = require('path');
const DEV_URL = require('./dev_url.js');

const alias = {
    jquery: path.join(DEV_URL, 'lib/JQuery-2.1.4.min'),
    core: path.join(DEV_URL, 'core/core'),
    routerLink: path.join(DEV_URL, 'singleApp/core/routerLink/routerLink.objects'),
};

module.exports = alias;
