// 经营 目录结构

const marketing = {
    files: ['route', 'importScss'],
    type: 'route',
    enforce: true,
    firstMenuIcon: 'marketing',
    promission: 'marketing',
    children: {
        site: {
            // type==='views'表示局部页面，
            // 如果type==='views'，
            // 那么它的children只能是私有的 directive 或 function，
            // children里不可以再有 type==='views'
            type: 'views',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            enforce: ['module'],
            viewsEntry: true, // 表示入口页面，当点击菜单时，显示当前这个页面
            description: '经营-设置页面',
            children: {
                warrant: {
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    type: 'directive',
                    enforce: ['module'],
                    description: '微信授权',
                },
            },
        },
        // wechat: {
        //
        // },
        message: {
            type: 'views',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            enforce: ['module'],
            description: '短信设置'
        },
        koubei: {
            type: 'views',
            files: ['template', 'scss', 'module', 'controller', 'service'],
            enforce: ['module'],
            description: '口碑',
            children: {
                order: {
                    type: 'directive',
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    enforce: ['module'],
                    description: '口碑-订单管理',
                    children: {
                        search: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '口碑-订单搜索',
                        },
                    },
                },
                ware: {
                    type: 'directive',
                    files: ['template', 'scss', 'module', 'directive', 'service'],
                    enforce: ['module'],
                    description: '口碑-商品管理',
                    children: {
                        list: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '口碑-商品列表',
                        },
                        info: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '口碑-商品详情',
                        },
                        add: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '口碑-商品新增',
                        },
                        edit: {
                            files: ['template', 'scss', 'module', 'directive', 'service'],
                            type: 'directive',
                            enforce: ['module'],
                            description: '口碑-商品编辑',
                        },
                    },
                },
            },
        },
    },
};
module.exports = marketing;
