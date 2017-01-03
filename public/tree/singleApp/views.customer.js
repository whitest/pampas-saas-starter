const customer = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    firstMenuIcon: 'customer',
    promission: 'customer',
    children: {
        list: {
            // type==='views'表示局部页面，
            // 如果type==='views'，
            // 那么它的children只能是私有的 directive 或 function，
            // children里不可以再有 type==='views'
            type: 'views',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            enforce: ['module'],
            viewsEntry: true, // 表示入口页面，当点击菜单时，显示当前这个页面
            description: '会员列表页面',
            children: {
                search: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '会员-会员搜索',
                },
                sign: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '会员-快速签到',
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
                filter: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '会员-会员列表筛选',
                },
                assignMember: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '会员-分配会籍',
                },
            },
        },
        details: {
            type: 'views',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            enforce: ['module'],
            description: '会员详情页面',
            routeParams: ['id'],
            children: {
                info: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '基本信息组件',
                },
                ctrl: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '会员相关操作组件',
                    children: {
                        cardCourse: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '卡课操作组件',
                            children: {
                                reserve: {
                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                    type: 'directive',
                                    enforce: ['module'],
                                    description: '已预约课程列表组件',
                                    children: {
                                        ctrl: {
                                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                            type: 'directive',
                                            enforce: ['module'],
                                            description: '操作弹窗组件',
                                        },
                                        more: {
                                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                            type: 'directive',
                                            enforce: ['module'],
                                            description: '展示更多弹窗组件',
                                        },
                                    },
                                },
                                list: {
                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                    type: 'directive',
                                    enforce: ['module'],
                                    description: '所持有卡课展示组件',
                                    children: {
                                        course: {
                                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                            type: 'directive',
                                            enforce: ['module'],
                                            description: '课程详情弹窗',
                                            children: {
                                                add: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '续课弹窗',
                                                },
                                                abort: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '退课弹窗',
                                                },
                                                coach: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '更换教练弹窗',
                                                },
                                            }
                                        },
                                        card: {
                                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                            type: 'directive',
                                            enforce: ['module'],
                                            description: '卡详情弹窗',
                                            children: {
                                                upgrade: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '升级弹窗',
                                                },
                                                add: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '续卡弹窗',
                                                },
                                                leave: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '请假弹窗',
                                                },
                                                transfer: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '转让弹窗',
                                                },
                                                transferShop: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '转店弹窗',
                                                },
                                                abort: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '退卡弹窗',
                                                },
                                                logout: {
                                                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                                    type: 'directive',
                                                    enforce: ['module'],
                                                    description: '注销弹窗',
                                                },
                                            },
                                        },
                                        reservePrivate: {
                                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                            type: 'directive',
                                            enforce: ['module'],
                                            description: '预约私教课',
                                        },
                                        reserveGroup: {
                                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                                            type: 'directive',
                                            enforce: ['module'],
                                            description: '预约团课',
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                records: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '会员相关记录组件',
                    children: {
                        maintain: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '维护记录组件',
                        },
                        transaction: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '交易记录组件',
                        },
                        operating: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '操作记录组件',
                        },
                        referral: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '转介绍信息组件',
                        },
                    }
                },
            },
        },
    },
};


module.exports = customer;
