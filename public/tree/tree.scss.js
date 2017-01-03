// 全局scss文档目录结构

const scss = {
    files: ['importScss'],
    filesName: 'main',
    type: 'dir',
    enforce: true, // 是否可强制重新替换文件, 开发时局部页面的该参数可设置为false，尽量避免重写文件
    description: '公共的scss文件',
    children: {
        base: {
            files: ['importScss'],
            type: 'dir',
            enforce: true,
            description: '一些固定的常量配置',
            children: {
                color: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '基础颜色配置'
                },
                animate:{
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '基础动画配置'
                },
                img: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '公共图片配置'
                },
                theme: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '风格主题配置'
                },
                word: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '基础文字配置'
                },
                border: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '基础边框配置'
                },
                common: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '一些公共样式'
                },
                mask: {
                    files: ['baseScss'],
                    type: 'scss',
                    enforce: false,
                    description: '蒙层配置'
                }
            }
        },
        reset: {
            files: ['scss'],
            type: 'scss',
            enforce: false,
            description: '网站样式格式化'
        },
        lib: {
            files: ['importScss'],
            type: 'dir',
            enforce: false,
            description: '第三方样式汇总'
        }
    }
};

module.exports = scss;
