import utils from "~/api/utils"
export default ({
  app,
  $axios,
  redirect
}, inject) => {
  const API = {}
  const utObj = utils($axios)
  for (var i in utObj) {
    API[i] = utObj[i];
  }
  inject('api', API);

}
