## 环境
node和npm以及angular(5)的版本
```
gongxufan@gongxufan-ThinkPad-E460 ~/project/angular-project $ node -v && npm -v && ng -v
v8.9.1
5.5.1

    _                      _                 ____ _     ___
   / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
  / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
 / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
/_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
               |___/
    
Angular CLI: 1.5.3
Node: 8.9.1
OS: linux x64
Angular: 5.0.2
... animations, common, compiler, compiler-cli, core, forms
... http, platform-browser, platform-browser-dynamic, router

@angular/cli: 1.5.3
@angular/language-service: 4.4.6
@angular-devkit/build-optimizer: 0.0.33
@angular-devkit/core: 0.0.20
@angular-devkit/schematics: 0.0.36
@ngtools/json-schema: 1.1.0
@ngtools/webpack: 1.8.3
@schematics/angular: 0.1.5
typescript: 2.4.2
webpack: 3.8.1

```

## 说明
官网的新手教程还是有几处纰漏，包括Location的注入并没有在AppModule中提供Provider，而且其代码组织结构也不是很规范。

我把最终的基于HTTP请求的英雄编辑app的代码写好并对目录结构重新调整，以供新手查阅。

## 依赖
http模块需要手动安装api服务的模拟程序
`npm install angular-in-memory-web-api --save`

## 运行
```
npm install && ng serve
```
