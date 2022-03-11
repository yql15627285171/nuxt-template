export default ({
  $axios,
  redirect,
  route,
  store,
  app: {
    $cookies
  },
}) => {
  // 创建axios实例
  $axios.defaults.timeout = 10000
  // $axios.defaults.baseURL = "/myapi"

  $axios.onRequest(config => {
    config.headers.token = store.state.user.token
    return config
  })

  $axios.onResponse(res => {
    return res.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      // redirect("/400");
    }
  });
}
