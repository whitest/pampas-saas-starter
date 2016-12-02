/**
 * 处理 componment 公共小组件
 * @param tree: 当前目录Json结构
 * @param dir: 当前目录路径
 * @param filesName: 当前文件名
 * @param fileInfo: 文件的信息
 */

const grunt = require('grunt');

const devUrl = './public/dev/';
const modelUrl = './public/model/';


const componment = function(tree, dir, filesName, fileInfo) {
    if (!dir.startsWith('componment')) return;
    
};

module.exports = componment;
