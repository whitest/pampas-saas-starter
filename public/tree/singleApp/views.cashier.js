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
            children: {
                search: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '签到搜索',
                },
                customer: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '收索会员结果信息',
                    children: {
                        custInfo: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '会员信息',
                        },
                        custCard: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '会员卡信息',
                        },
                    },
                },
            },
        },
        cash: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '收银组件',
            children: {
                search: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '收银搜索',
                },
            },
        },
    },
};

// 售卖商品、课程消耗、待收款
const sales = {
    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
    type: 'directive',
    enforce: ['module'],
    description: '售卖商品、课程消耗、待收款',
    children: {
        cardCourse: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '售卖卡课组件',
        },
        goods: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '售卖商品组件',
        },
        deplete: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '课程消耗组件',
            children: {
                confirm: {
                    files: ['template', 'scss', 'module', 'directive'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '确认消课弹窗',
                },
            },
        },
        received: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '待收款组件',
        },
        empty: {
            files: ['template', 'scss', 'module', 'directive', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '收银空状态展示组件',
        },
        warelist: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '卡课、商品选择列表',
            children: {
                formGoods: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '实物商品表单',
                },
                formTimes: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '次卡表单',
                },
                formStore: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '储值卡表单',
                },
                formLimit: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '期限卡表单',
                },
                formGroup: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '团课表单',
                },
                formPrivate: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '私教课表单',
                },
            },
        },
        payment: {
            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
            type: 'directive',
            enforce: ['module'],
            description: '收银支付组件',
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
            children: {
                card: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '卡课购买记录',
                },
                good: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '商品购买记录',
                },
            },
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
