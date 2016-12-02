/**
 * 处理 componment 公共小组件
 */

const grunt = require('grunt');
const checkEnforce = require('./checkEnforce.js');
const makeTemplate = require('./makeTemplate.js');

const devUrl = './public/dev/';
const modelUrl = './public/model/';

/**
 * componment 公共小组件
 * @param  {Object} tree      [description]
 * @param  {String} dir       [description]
 * @param  {String} filesName [description]
 * @param  {Object} fileInfo  [description]
 * @return {}           [description]
 */
const componment = function(tree, dir, filesName, fileInfo) {
    if (!dir.startsWith('componment')) return;
    // console.log(tree)
    // console.log(dir)
    // console.log(filesName)
    // console.log(fileInfo)

    const file = `${devUrl}${dir}/${filesName}${fileInfo.suffix}`;

    if (!checkEnforce(file, fileInfo.type, tree.enforce)) return;

    const _dirArr = dir.split('/');

    makeTemplate({
        fileInfo,
        tree,
        _dirArr,
        filesName,
    }).then(function(template) {
        grunt.file.write(file, template);
    }).catch(function(err) {
        console.error(`----------${err}----------`);
        console.error(fileInfo);
        console.error(`----------------------------------------\n`);
    });

};

module.exports = componment;
