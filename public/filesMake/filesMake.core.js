// 处理 核心js目录

const grunt = require('grunt');
const checkEnforce = require('./checkEnforce.js');
const makeTemplate = require('./makeTemplate.js');
const filesGetName = require('./filesGetName.js');

const devUrl = './public/dev/';
const modelUrl = './public/model/';

const core = function(tree, dir, filesName, fileInfo) {
    if (!dir.startsWith('core')) return;

    const file = `${devUrl}${dir}/${filesName}${fileInfo.suffix}`;
    if (!checkEnforce(file, fileInfo.type, tree.enforce)) return;

    // 文件路径数组
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

    if (!!tree.import && Object.prototype.toString.call(tree.import) === '[object Array]') {
        tree.import.forEach(el => {
            const _fileInfo = filesGetName(el.template);
            const _filesName = el.name;
            const _file = `${devUrl}${dir}/${_filesName}${_fileInfo.suffix}`;
            const _tree = Object.assign({}, tree, {
                description: el.description,
            });
            if (!checkEnforce(_file, _fileInfo.type, el.enforce)) return;
            makeTemplate({
                fileInfo: _fileInfo,
                tree: _tree,
                _dirArr,
                filesName: _filesName,
            }).then(function(template) {
                grunt.file.write(_file, template);
            }).catch(function(err) {
                console.error(`----------${err}----------`);
                console.error(_fileInfo);
                console.error(`----------------------------------------\n`);
            });
        });
    };
};

module.exports = core;
