// component 公共小组件 目录自动化

componentTree = {
    files: [
        'sumFacModule', 'factory', 'importScss'
    ],
    type: 'sumFactory',
    enforce: [
        'sumFacModule', 'importScss'
    ],
    description: '公共小组件汇总',
    children: {
        Alert: {
            files: [
                'template',
                'scss',
                'module',
                'directive',
                'controller',
                'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '强提示弹窗'
        },
        Confirm: {
            files: [
                'template',
                'scss',
                'module',
                'directive',
                'controller',
                'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '强选择弹窗'
        },
        shopLogo: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '店铺logo'
        },
        leftMenu: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '左侧导航菜单'
        },
        topBar: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '顶部二级菜单导航'
        },
        navTabs: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '标签页 顶部二级菜单'
        },
        pagination: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '分页组件'
        },
        msg: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '消息通知'
        },
        shops: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '店铺列表'
        },
        userCtrl: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '用户退出登录'
        },
        button: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '按钮组件'
        },
        input: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '输入框组件'
        },
        radio: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '单项选择组件'
        },
        checkbox: {
            files: [
                'template', 'scss', 'module', 'directive', 'factory'
            ],
            type: 'component',
            enforce: ['module'],
            description: '多项选择组件'
        },
        scrollLoad: {
            files: [
               'module', 'scss', 'directive', 'factory'
          ],
            type: 'component',
            enforce: ['module'],
            description: '滚动加载组件'
        },
        textarea: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '多行文本域组件'
        },
        topBack: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '一级返回按钮，通常用在关闭子页面或子弹窗等'
        },
        dateTime: {
            files: [
                'template', 'scss', 'module', 'directive'
            ],
            type: 'component',
            enforce: ['module'],
            description: '日历时间选择组件',
            children: {
                picker: {
                    files: [
                        'template', 'scss', 'module', 'directive', 'controller', 'factory'
                    ],
                    type: 'component',
                    enforce: ['module'],
                    description: '核心',
                },
            },
        },
        table: {
            files: ['template', 'scss', 'module', 'directive', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '表格组件',
        },
        popicon: {
            files: ['template', 'scss', 'module', 'directive'],
            type: 'component',
            enforce: ['module'],
            description: '气泡图标组件',
        },
        addCustomer: {
            files: ['template', 'scss', 'module', 'directive', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '新增会员组件',
        },
        popup: {
            files: ['scss', 'module', 'directive', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '弹窗组件',
        },
        advanceFilter: {
            files: ['template', 'scss', 'module', 'directive', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '高级筛选',
        },
        powerSwitch: {
            files: ['template', 'scss', 'module', 'directive', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '滑动开关组件',
        },
        select: {
            files: ['template', 'scss', 'module', 'directive', 'factory'],
            type: 'component',
            enforce: ['module'],
            description: '下拉框组件',
        },
    },
};

module.exports = componentTree;
