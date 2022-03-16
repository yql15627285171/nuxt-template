export const state = () => ({
    locales: ["en","ch-CN","ch-TW"],
    locale: "ch-CN"
  })
  export const mutations = {
    SET_LANG(state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }