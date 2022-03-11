export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 3000,
    host: "0.0.0.0"
  },
  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: '自定义的描述信息'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  router: {
    middleware: 'auth'
  },
  // loading: {
  //   color: '#399',
  //   height: '3px'
  // },
  loading: '~/components/loading.vue',

  // 配置全局的样式
  css: [
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/transition.css',
    '~/assets/scss/globle.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/router',
    {
      src: '~/plugins/axios'
    },
    {
      src: '~/plugins/minxins',
      mode: 'client' // server
    },

    '~/plugins/api' // 没有配置mode的时候，服务端和客户端都能触发

  ],

  // 自动引入组件，无需import
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules 
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/style-resources'
  ],
  // 全局引入样式
  styleResources: {
    // scss: ['./assets/scss/globle.scss']
  },


  // 跨域配置
  axios: {
    proxy: true, // 开启跨域
    // prefix:'/api',baseUrl
  },
  proxy: {
    '/hk-daojia-server': {
      target: 'http://192.168.2.22:2510',
      changeOrigin: true,
      pathRewrite: {
        // "^/hk-daojia-server": 'http://192.168.2.22:2510/hk-daojia-server'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
  }
}

