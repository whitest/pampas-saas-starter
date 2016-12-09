// webpack output 配置

const path = require('path');
const DEV_URL = require('./dev_url.js');

// 输出类型
const OUT_TYPE = {
    dest: 'dest',
    demo: 'demo',
    prod: 'production',
};

const _dir = DEV_URL.slice(0, DEV_URL.lastIndexOf('dev/'));

module.exports = function(argv) {
    var target;
    Object
        .keys(OUT_TYPE)
        .forEach(el => target = !!argv[el] ? OUT_TYPE[el] : '');

    return {
        publicPath: "/",
        path: path.join(_dir, target),
        filename: '[name].js'
    };
};
