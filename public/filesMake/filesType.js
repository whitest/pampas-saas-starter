// 文件类型 用于生成后缀(suffix)
const type = {
    html: '.html', // 主html，如 /index.html、/singleApp/app.html
    template: '.html', // 局部template页面
    scss: '.scss', // 局部scss文件
    importScss: '.scss', // 汇总scss文件
    rootScss: '.scss', // 主scss文件，如 /index.scss、/singleApp/app.scss
    baseScss: '.scss', // 基础scss，/scss/*中的scss文件，基本生成空文件，用于配置基础变量或方法
    normalJs: '.js', // 默认js
    objects: '.objects.js', // map格式的js文件
    module: '.js', // angular.module js文件
    route: '.js', // angular 路由js文件
    sumModule: '.js', // angular.module 汇总js文件
    controller: '.controller.js', // angular.controller js文件
    service: '.service.js', // angular.service js文件
    factory: '.factory.js', // angular.factory js文件
    directive: '.directive.js',  // angular.directive js文件
    sumFacModule: '.js', // angular.module 汇总children的module以及其factory的文件
};

// 文件模板
const template = {
    html: 'index.html', // 主html，如 /index.html、/singleApp/app.html
    template: 'template.html', // 局部template页面
    scss: 'index.scss', // scss文件
    importScss: 'import.scss', // 汇总scss文件
    rootScss: 'root.scss', // 主scss文件，如 /index.scss、/singleApp/app.scss
    baseScss: 'baseScss.scss', // 基础scss，/scss/*中的scss文件，基本生成空文件，用于配置基础变量或方法
    normalJs: 'normal.js', // 默认js
    objects: 'objects.js', // map格式的js文件
    module: 'module.js', // angular.module js文件
    route: 'route.js', // angular 路由js文件
    sumModule: 'sumModule.js', // angular.module 汇总js文件
    controller: 'controller.js', // angular.controller js文件
    service: 'service.js', // angular.service js文件
    factory: 'factory.js', // angular.factory js文件
    directive: 'directive.js',  // angular.directive js文件
    sumFacModule: 'sumFacModule.js', // angular.module 汇总children的module以及其factory的文件
};

const filesType = {};
for(var i in type){
    filesType[i] = {
        type: i,
        suffix: type[i],
        template: template[i],
    };
};

module.exports = filesType;
