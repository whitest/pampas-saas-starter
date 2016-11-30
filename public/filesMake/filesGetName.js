const path = require('path');
const modelUrl = '../model/';
const filesType = require('./filesType.js');
const filesGetName = (type) => {
    if (!filesType[type]) {
        console.error('--------未找到相对应的文件类型--------');
        console.error(type);
        return;
    };
    return filesType[type];
};
module.exports = filesGetName;
