// component 公共小组件 目录自动化

componentTree = {
    files: ['sumFacModule', 'factory', 'importScss'],
    type: 'sumFactory',
    enforce: ['sumFacModule', 'importScss'],
    description: '公共小组件汇总',
    children: {
        Alert: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '强提示弹窗',
        },
        Confirm: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '强选择弹窗',
        },
    },
};

module.exports = componentTree;
