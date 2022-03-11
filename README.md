# nuxt

## Build Setup

```bash
# install dependencies
$ npm install

# 开发环境
# serve with hot reload at localhost:3000
$ npm run dev

# 生产坏境
# build for production and launch server
$ npm run build
$ npm run start

#nuxt的生命周期
#运行在服务器中的钩子，获取不到window对象
#1-5运行在服务端
# SSR
1、nuxt服务器初始化  store/index.js -> nuxtServerInit

2、中间件  middleware
    #  运行顺序 nuxt.config.js > 匹配布局layout > 匹配页面

3 参数校验 validate
 # 函数中return false 就会返回404
 # 可以自定义404页面 在layout下创建一个error.vue

4 asyncData

5 fetch

#SSR & CSR
6 beforeCreate、created

#SCR
7、vue的其他生命周期钩子

#路由扩展 ？？

#loading
可以自定义loading组件


#transition
详情见transition.css

#路由守卫
    前置
        依赖中间件middleware,插件
        全局守卫：nuxt.config 指向middleware
                 layout定义中间件
        组件独享守卫：
                middleware
        插件

    后置
        beforeRouteEnter不触发
        使用vue的beforeRouteLeave


#数据交互
    安装：@nuxtjs/axios @nuxtjs/proxy


#状态持久化（cookie）
npm i cookie-universal-nuxt --save
思想：登录时，同步vuex && cookie ,强制刷新后，nuxtServerInit钩子取出cookie,同步vuex,axios拦截器读取vuex


#全局方法，过滤器，全局指令等 可以在pluging下建立一个mode:client的文件

#less与scss 下载安装包后无需引入，可以直接使用
    less:npm install less less-loader --save-dev
    scss:npm i node-sass sass-loader scss-loader --save-dev
    全局使用的使用需要安装
    @nuxtjs/style-resources

#可以在根目录中创建app.html作为html的入口文件

#资源指向
assets / static

#在已有js的项目中配置ts
1 npm install @nuxt/typescript-build --save-dev
2 nuxt.config.js 中的 buildModules 中加入 @nuxt/typescript-build
3 详细 https://typescript.nuxtjs.org/zh-Hant/guide/setup


#部署
 nuxt
    npm run build
    我们需要复制到阿里云服务器的文件
    .nuxt
    .package-lock.json
    package.json
    nuxt.config.json
    static
    server(反向代理的服务器 与Nginx作用相同)

 api(请求接口的服务器)

 阿里云
    需要开启安全组 3000 9001（阿里后台）
    远程工具（finallShell）
    启动api服务器
    nuxt的启动

全局安装pm2(node进程保护)
npm install -g pm2


# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

在此文件夹中的自愿文件的引入需用使用‘~’，比如<img src="~assets/age.png">,此文件下的资源会经过 webpack 中的插件处理

### `static`

静态文件
直接引用即可，比如<img src="/my-image.png" />

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
