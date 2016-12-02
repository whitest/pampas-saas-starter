// 文件类型 用于生成后缀(suffix)
const type = {
    html: '.html', // 主html
    template: '.html', // 局部template页面
    scss: '.scss', // scss文件
    importScss: '.scss', // 汇总scss文件
    js: '.js', // 默认js
    objects: '.js', // map格式的js文件
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
    html: 'index.html', // 主html
    template: 'template.html', // 局部template页面
    scss: 'index.scss', // scss文件
    importScss: 'import.scss', // 汇总scss文件
    js: 'normal.js', // 默认js
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
