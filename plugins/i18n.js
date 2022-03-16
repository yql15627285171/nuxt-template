import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: app.$cookies.get('lang') || 'zh-CN',
    fallbackLocale: 'zh-CH',
    messages: {
      'zh-CN': require('~/locales/zh-CN.json'),
      'zh-TW': require('~/locales/zh-TW.json'),
      'en': require('~/locales/en.json'),
    }
  })
}