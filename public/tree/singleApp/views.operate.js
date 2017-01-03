// 经营菜单

const operate = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    firstMenuIcon: 'operate',
    promission: 'operate',
    children: {
        card: {
            type: 'views',
            enforce: ['module'],
            viewsEntry: true, // 表示入口页面，当点击菜单时，显示当前这个页面
            description: '卡种管理',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            children: {
                list: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '卡种列表',
                },
                add: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '新增卡种',
                },
                edit: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '编辑卡种',
                },
                details: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '卡种详情',
                },
            },
        },
        group: {
            type: 'views',
            enforce: ['module'],
            description: '团课管理',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            children: {
                species: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '团课种类',
                    children: {
                        list: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '团课列表',
                        },
                        add: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '新增团课',
                        },
                        edit: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '编辑团课',
                        },
                        details: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '团课详情',
                        },
                    },
                },
                schedule: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '团课排期',
                    children: {
                        calendar: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '团课排期 日历模式',
                        },
                        list: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '团课排期 列表模式',
                        },
                        add: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '新增排期',
                        },
                        edit: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '修改排期',
                        },
                        associate: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '修改关联排期',
                        },
                        info: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '排期信息',
                        },
                        details: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '排期详情',
                        },
                    },
                },
            },
        },
        privateEdu: {
            type: 'views',
            enforce: ['module'],
            description: '私教课管理',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            children: {
                species: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '私教课种类',
                    children: {
                        list: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '私教课列表',
                        },
                        add: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '新增私教课',
                        },
                        edit: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '编辑私教课',
                        },
                        details: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '私教课详情',
                        },
                    },
                },
                schedule: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '私教计划管理',
                    children: {
                        calendar: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '私教计划管理 日历模式',
                        },
                        info: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '私教计划信息',
                        },
                        details: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '私教计划详情',
                        },
                    },
                },
                remainder: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '私教课余量查询',
                    children: {
                        details: {
                            files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '详情',
                        },
                    },
                },
            },
        },
        goods: {
            type: 'views',
            enforce: ['module'],
            description: '商品管理',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            children: {
                list: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '商品列表',
                },
                add: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '新增商品',
                },
                edit: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '编辑商品',
                },
                storage: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '商品入库',
                },
                details: {
                    files: ['template', 'scss', 'module', 'directive', 'controller', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '商品详情',
                },
            },
        },
        // transfer:{
        //     type: 'views',
        //     enforce: ['module'],
        //     description: '转店管理',
        //     files: ['template', 'scss', 'module', 'controller', 'service'],
        // },
    },
};


module.exports = operate;
