// 用angular封装的 base factory 公共方法

const baseTree = {
    files: ['sumFacModule', 'factory'],
    type: 'sumFactory',
    enforce: ['sumFacModule'],
    description: '公共factory汇总',
    children: {
        Interface: {
            files: ['module', 'factory'],
            type: 'factory',
            enforce: ['module'],
            description: '接口功能',
        },
    },
};

module.exports = baseTree;
