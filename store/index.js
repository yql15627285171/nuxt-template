export const actions = {
  // 初始化东西到store当中
  nuxtServerInit(store,{$cookies,redirect}) {
    let token = $cookies.get('token')
    let user = $cookies.get('user')
    if(token){
      store.dispatch('user/u_set_info',user)
    }else{
      redirect({path:'/login'})
    }
  }
}
