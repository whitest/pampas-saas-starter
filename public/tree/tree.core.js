// 核心js目录构成

const core = {
    files: ['ES6Export'],
    enforce: true,
    description: '核心js目录',
    type: 'exports',
    children: {
        tools: {
            files: ['ES6Export'],
            import: [{
                name: 'timer',
                template: 'emptyJS',
                description: '常用日期、时间方法',
            }, {
                name: 'calendar',
                template: 'emptyJS',
                description: '日历相关',
            }, {
                name: 'timeList',
                template: 'emptyJS',
                description: '时间相关',
            }, {
                name: 'phone',
                template: 'emptyJS',
                description: '电话相关',
            }],
            description: '常用工具',
            type: 'exports',
            enforce: true,
        },
        verification: {
            files: ['ES6Export'],
            import: [{
                name: 'compatCss3',
                template: 'emptyJS',
                description: '浏览器是否支持css3校验',
            }, {
                name: 'timer',
                template: 'emptyJS',
                description: '日期、时间验证方法',
            }],
            description: '验证方法',
            type: 'exports',
            enforce: true,
        },
        conf: {
            files: ['ES6Export'],
            description: '一些常量配置',
            type: 'exports',
            enforce: true,
            import: [{
                name: 'urls',
                template: 'emptyJS',
                description: '网站url配置',
            }, {
                name: 'popIconBase',
                template: 'emptyJS',
                description: 'popIcon基础的类型',
            }],
        }
    },
};

module.exports = core;
