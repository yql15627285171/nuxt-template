export default axios => ({
  /**
   * 关于我们
   */
  getAboutUs(params) {
    return axios({
      url: '/hk-daojia-server/api/content/aboutUs',
      method: "get",
      params
    })
  },
  /**
   * 帮助中心
   */
  getHelpCenter(params) {
    return axios({
      url: '/hk-daojia-server/api/content/helper',
      method: "get",
      params
    })
  },
  /**
   * 联系方式
   */
  getContactInfo(params) {
    return axios({
      url: '/hk-daojia-server/api/contactSetting/contactInfo',
      method: "get",
      params
    })
  },
  /**
   * 协议条款
   */
  getProtocol(params) {
    return axios({
      url: '/hk-daojia-server/api/content/privacyPolicy',
      method: "get",
      params
    })
  },
  /**
   * 注销协议
   */
   getCancelPolicy() {
    return axios({
      url: '/hk-daojia-server/api/content/queryContentByOneTypeId?oneTypeId=5',
      method: "get",
    })
  },
  /**
   * 注销协议
   */
   getIntegralRules() {
    return axios({
      url: '/hk-daojia-server/api/content/queryContentByOneTypeId?oneTypeId=6',
      method: "get",
    })
  },
  /**
   * 首页导航
   */
   getNavbarList(params) {
    return axios({
        url: '/hk-daojia-server/common/navigation/listPcIndex',
        method: "get",
        params
    })
  },
  /**
   * 获取登录，注册等界面的背景图片
   */
   getLoginBg() {
    return axios({
        url: '/hk-daojia-server/member/homeImg/loginImg',
        method: "get",
        params
    })
  },
  /**
   * 获取图片识别码
   */
   getVerifyCode() {
    return axios({
        url: '/hk-daojia-server/common/captcha/getVerifyCode',
        method: "get"
    })
  },
  /**
   * 获取公告内容
   */
   getNotice() {
    return axios({
        url: '/hk-daojia-server/common/notice/getNotice',
        method: "get",
    })
  },
})
