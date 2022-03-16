/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({
    isHMR, app, store, route, params, error, redirect
  }) {
    if (isHMR) { // ignore if called from hot module replacement
      return;
    } 
    // based on directory structure _lang/xxxx, en/about has params.lang as "en"
    const locale = app.$cookies.get('lang') || app.i18n.fallbackLocale;
    store.commit('locale/SET_LANG', locale); // set store
    app.i18n.locale = locale;

  }