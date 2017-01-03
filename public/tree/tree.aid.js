// 辅助开发页面

const aid = {
    files: ['html', 'rootScss', 'normalJs'],
    enforce: false,
    description: '辅助开发页面',
    children: {
        colors: {
            files: ['emptyJS'],
            enforce: false,
            description: '颜色',
        },
    },
};

module.exports = aid;
