export default ({
  app,
  $axios,
  redirect
}, inject) => {
  const API = {}
  console.log("你好")
  API.getAboutUs = (params) => {
    return $axios({
      url: '/hk-daojia-server/api/content/aboutUs',
      method: "get",
      params
    })
  }

  app.api = API;

  // app.prototype.$api = API
  inject('api', API);

}
