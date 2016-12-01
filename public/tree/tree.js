const singleApp = require('./tree.singleApp.js');
const chainApp = require('./tree.chainApp.js');
const scss = require('./tree.scss.js');

const tree = {
    files: ['html', 'scss', 'js'],
    filesName: 'index',
    type: 'root',
    enforce: false,
    children: {
        singleApp: singleApp,
        imgs: {},
        chainApp: {},
        // chainApp: chainApp,
        scss: {},
        // scss: scss,
    },
};

module.exports = tree;
