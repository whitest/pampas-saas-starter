// 收银中心目录结构汇总

// 签到和收银
const signAndCash = {
    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
    type: 'directive',
    enforce: ['module'],
    description: '签到和收银',
    children: {
        sign: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '签到组件',
        },
        cash: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '收银组件',
        }
    }
};

// 售卖商品、课程消耗、待收款
const sales = {
    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
    type: 'directive',
    enforce: ['module'],
    description: '售卖商品、课程消耗、待收款',
    children: {
        goods: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '售卖商品组件',
        },
        cardCourse: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '卡课消耗组件',
        },
        received: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '待收款组件',
        },
    },
};

// 购买记录、消课记录
const records = {
    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
    type: 'directive',
    enforce: ['module'],
    description: '购买记录、消课记录组件',
    children: {
        purchase: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '购买记录组件',
        },
        course: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '消课记录组件',
        },
    },
};

const cashier = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    firstMenuIcon: 'AB8B7PQA3',
    promission: 'AB8B7PQAK',
    children: {
        manage: {
            // type==='views'表示局部页面，
            // 如果type==='views'，
            // 那么它的children只能是私有的 directive 或 function，
            // children里不可以再有 type==='views'
            type: 'views',
            enforce: ['module'],
            viewsEntry: true, // 表示入口页面，当点击菜单时，显示当前这个页面
            description: '收银中心功能汇总页面',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            children: {
                signAndCash,
                sales,
                records,
            },
        },
    },
};


module.exports = cashier;
