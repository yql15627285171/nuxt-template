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
    middleware: ['auth','i18n']
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
    '~/assets/style/variables.scss',
    '~/assets/style/index.scss'
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

    '~/plugins/api', // 没有配置mode的时候，服务端和客户端都能触发
    '~/plugins/i18n', 

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
  // styleResources 配置的资源路径不能使用 ~ 和 @,要使用绝对或者相对路径
  styleResources: {
    scss: [
      './assets/style/variables.scss'
    ] 
  },


  // 跨域配置
  axios: {
    proxy: true, // 开启跨域
    // prefix:'/api',baseUrl
  },
  proxy: {
    '/hk-daojia-server': {
      target: 'https://www.hkgallopexpress.com',
      changeOrigin: true,
      pathRewrite: {
        // "^/hk-daojia-server": 'http://192.168.2.22:2510/hk-daojia-server'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // vendor: ['vue-i18n'], // webpack vue-i18n.bundle.js
    extractCSS: true,
  }
}

