// componment 公共小组件 目录自动化

componmentTree = {
    files: ['sumFacModule', 'normal', 'importScss'],
    type: 'sumFactory',
    enforce: ['sumFacModule', 'importScss'],
    description: '公共小组件汇总',
    children: {
        Alert: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'factory'],
            type: 'componment',
            enforce: true,
            description: '强提示弹窗',
        },
        Confirm: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'factory'],
            type: 'componment',
            enforce: true,
            description: '强选择弹窗',
        },
    },
};

module.exports = componmentTree;
