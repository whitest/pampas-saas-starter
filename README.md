```
   dev/ ( 开发文件夹 )  
    |  
    |----singleApp/ ( 单店页面app )  
    |       |  
    |       |----app.js ( 单店app首页文件夹 )  
    |       |----app.html   ( 单店app首页 )  
    |       |----core/  ( 单店app核心文件夹，存放一些单店app特殊的核心文件配置 )  
    |       |       |----routerLink.js (一段json数组，用来配置singleApp的路径以及相关权限)
    |       |
    |       |----views/ ( 单店app的局部页面，根据业务划分的菜单，进行文件夹的归类 )  
    |              |----cashier/    ( 示例，收银中心模块文件夹 )  
    |                       |----cashier.route.js   ( 收银中心模块路由配置 )  
    |                       |----card/  ( 卡务操作模块文件夹 )  
    |                              |----add/    ( 开卡模块文件夹 )  
    |                                    |----add.html  ( 开卡模块html )  
    |                                    |----add.scss    ( 开卡模块样式 )  
    |                                    |----add.js    ( 开卡模块对外js，建立该页面 module )  
    |                                    |----add.controller.js ( 开卡模块 controller 设置 )  
    |                                    |----add.service.js    ( 开卡模块 service 设置 )  
    |                                    |----(_other_componments_)/    ( 如该页面比较复杂，可建立该页面的局部组件 )  
    |                                                           |----comp.html  
    |                                                           |----comp.scss  
    |                                                           |----comp.js  
    |                                                           |----comp.controller.js  
    |                                                           |----comp.directive.js  
    |                                                           |----comp.service.js  
    |  
    |----chainApp/ ( 连锁页面，结构与单店app类似 )  
    |       |  
    |       |----app.js  
    |       |----app.html  
    |       |----core/  
    |       |----views/  
    |               |----(_like_singleApp_)  
    |               | ......  
    |  
    |----lib/   ( 第三方库或组件 )  
    |  
    |----factory/   ( 公用方法，angular封装，可能会多个页面用到 )  
    |       |  
    |       |----factory.js ( 公用方法汇总js，对外方法 )  
    |       |----interface/ ( 示例，ajax调用接口方法文件夹 )  
    |                  |----interface.js ( 主要对外方法，建立 module )  
    |                  |----interface.factory.js ( ajax调用接口 factory 设置 )  
    |  
    |----componment/    ( 公用组件，angular封装，可能会多个页面用到的小组件模块 )  
    |       |  
    |       |----alert/ ( 示例，强提示组件 )  
    |               |----alert.html ( 强提示html )  
    |               |----alert.js ( 主要对外方法，建立 module )  
    |               |----alert.controller.js ( 强提示 controller 设置 )  
    |               |----alert.directive.js ( 强提示 directive 设置 )  
    |               |----alert.factory.js ( 强提示 factory 设置 )  
    |  
    |----core/ ( 核心功能, 非angular封装，基础js封装的方法 )  
    |      |  
    |      |----conf.js (一些常量的配置)
    |      |----verification.js (一些校验的js方法)
    |      |----tools.js (一些js方法)
    |  
    |----imgs/ ( 图片文件文件夹 )  
    |  
    |----scss/ ( 公共样式文件夹 )  
    |      |  
    |      |----config/
    |               |----color.scss
    |  
    |----favicon.ico  
    |  
    |----index.html ( 入口html，登录页面 )  
    |  
    |----index.js ( 入口js )  
    |  
    |----index.scss ( 入口scss )
```
