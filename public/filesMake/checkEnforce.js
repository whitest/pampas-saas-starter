/**
 * 校验文件是否可替换
 */

const grunt = require('grunt');

/**
 * 校验文件是否可替换
 * @file  {String} file [文件绝对路径]
 * @file  {String} type [文件类型]
 * @param  {Boolean|Array} enforce [tree上的enforce属性，代表文件是否强制替换生成]
 * @return {Boolean}         [false表示不强制替换，true表示强制重新文件]
 */
const checkEnforce = function(file, type, enforce) {
    if (Array.isArray(enforce)) {
        // enforce数组不含这个文件，不强替换
        if (grunt.file.isFile(`${file}`) && enforce.indexOf(type) === -1) {
            return false;
        };
        return true;
    };
    if (grunt.file.isFile(`${file}`) && !enforce) return false;
    return true;
};

module.exports = checkEnforce;
