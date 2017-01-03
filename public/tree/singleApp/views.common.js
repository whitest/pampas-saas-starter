// 单店页面一些公共页面

const common = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    description: '单店页面一些公共页面',
    firstMenuIcon: '',
    promission: 'empty',
    children: {
        home: {
            files: ['template', 'scss', 'module', 'controller', 'service'],
            type: 'views',
            enforce: ['module'],
            description: '单店首页页面',
        },
        error: {
            files: ['template', 'scss', 'module', 'controller', 'service'],
            type: 'views',
            enforce: ['module'],
            description: '错误页面',
        },
        socket: {
            files: ['template', 'scss', 'module', 'controller', 'service'],
            type: 'views',
            enforce: ['module'],
            description: 'socket 测试页面',
        },
    },
};


module.exports = common;
