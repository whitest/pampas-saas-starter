// 收银中心目录结构汇总

// 卡务操作
const card = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    description: '收银中心卡务操作',
    children: {
        add: {
            files: ['template', 'scss', 'module', 'controller', 'service'],
            type: 'views',
            enforce: false,
            description: '收银中心卡务操作新增页面',
            children: {
                testTable: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'factory'],
                    type: 'directive',
                    enforce: true,
                    description: '一个测试',
                },
                testModel2: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    filesName: 'secondTest',
                    type: 'directive',
                    enforce: true,
                    description: '第二个测试',
                },
            },
        },
        info: {
            type: 'views',
            enforce: false,
            description: '收银中心卡务操作详情页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            routeParams: ['id'],
        },
        list: {
            type: 'views',
            enforce: false,
            description: '收银中心卡务操作列表页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
        },
        offer: {
            type: 'views',
            enforce: false,
            description: '收银中心卡务操作开卡页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            routeParams: ['id'],
        },
        print: {
            type: 'views',
            enforce: false,
            description: '收银中心卡务操作打印页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            routeParams: ['id', 'ymd'],
        },
    },
};

// 实物商品
const goods = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    children: {
        list: {
            type: 'views',
            enforce: false,
            description: '实物商品列表页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
        },
        records: {
            type: 'views',
            enforce: false,
            description: '实物商品销售记录页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            routeParams: ['id', 'ymd'],
        },
        print: {
            type: 'views',
            enforce: false,
            description: '实物商品打印小票页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            routeParams: ['id', 'ymd'],
        },
    },
};

const cashier = {
    files: ['sumModule', 'importScss'],
    type: 'dir',
    enforce: true,
    children: {
        card: card,
        goods: goods,
    },
};


module.exports = cashier;
