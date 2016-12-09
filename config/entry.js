// webpack entry 配置

const DEV_URL = require('./dev_url.js');
const path = require('path');

module.exports = function(IS_MY_LOCAL) {
    const obj = {
        login: [path.join(DEV_URL, 'login/login')],
        singleApp: [path.join(DEV_URL, 'singleApp/app')],
        // chainApp: [path.join(DEV_URL, 'chainApp/app')],
    };
    if (!!IS_MY_LOCAL) {
        Object
            .keys(obj)
            .forEach(el => obj[el].unshift('webpack-dev-server/client?http://127.0.0.1:7001', 'webpack/hot/only-dev-server'));
    };
    return obj;
}
