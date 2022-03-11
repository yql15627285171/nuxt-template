import {
  Result
} from "element-ui"

export const actions = {
  // 初始化东西到store当中
  nuxtServerInit(store, {
    app: {
      $cookies
    }
  }) {
    // console.log("nuxtServerInit初始化", store)
    // 在登录接口中设置cookie
    // store.dispatch('user/U_set_info',data)
    // $cookies.set("user",data) 
    let user = $cookies.get('user') ? $cookies.get('user') : {
      err: 2,
      msg: '未登录'
    }

  }
}
