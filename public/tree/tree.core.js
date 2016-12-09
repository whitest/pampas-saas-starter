// 核心js目录构成

const core = {
    files: ['ES6Export'],
    enforce: true,
    discription: '核心js目录',
    type: 'exports',
    children: {
        tools: {
            files: ['ES6Export'],
            import: [{
                name: 'datetime',
                template: 'emptyJS',
                discription: '常用日期、时间方法',
            }],
            discription: '常用工具',
            type: 'exports',
            enforce: true,
        },
        verification: {
            files: ['ES6Export'],
            import: [{
                name: 'compatCss3',
                template: 'emptyJS',
                discription: '浏览器是否支持css3校验',
            }, {
                name: 'datetime',
                template: 'emptyJS',
                discription: '日期、时间验证方法',
            }],
            discription: '验证方法',
            type: 'exports',
            enforce: true,
        },
    },
};

module.exports = core;
