// componment 公共小组件 目录自动化
//

componmentTree = {
    files: ['sumModule', 'importScss'],
    type: 'dir',
    enforce: true,
    description: '公共小组件汇总',
    children: {
        alert: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'factory'],
            type: 'componment',
            enforce: true,
            description: '强提示弹窗',
        },
    },
};

module.exports = componmentTree;
