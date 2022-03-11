export default ({
  app,
  redirect,
  params,
  query,
  store
}) => {
  // app = vue实例
  app.router.beforeEach((to, from, next) => {
    // 全局前置守卫 插件
    //  next(true) next(false) √
    //   next('/login') × 强制跳转到某个路由需要用到redirect
    // console.log('全局前置守卫 插件', to)
    next(true)
  })

  app.router.afterEach((to, from) => {
    // console.log("全局后置", to)
  })
}
