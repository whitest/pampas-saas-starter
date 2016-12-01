// 全局scss文档目录结构

const scss = {
    files: ['importScss'],
    type: 'dir',
    enforce: true, // 是否可强制重新替换文件, 开发时局部页面的该参数可设置为false，尽量避免重写文件
    description: '公共的scss文件',
    children:{
        config: {
            files: ['importScss'],
            type: 'dir',
            enforce: true,
            description: '一些固定的常量配置',
            children:{
                color: {
                    files: ['empty'],
                    type: 'scss',
                    enforce: false,
                    description: '基础颜色配置',
                },
                word: {
                    files: ['empty'],
                    type: 'scss',
                    enforce: false,
                    description: '基础文字配置',
                },
                border: {
                    files: ['empty'],
                    type: 'scss',
                    enforce: false,
                    description: '基础边框配置',
                },
            },
        },
    },
};

module.exports = scss;
