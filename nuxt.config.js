const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  // target: 'static',
  // router: {
  //   base: '/<deqo_nuxt2>/'
  // },
  ssr: false,
  head: {
    title: 'deqo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      // { name: 'viewport', content: 'width=1920' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '~/assets/css/variable.scss',
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/v-mask.js',
    { src: '~/plugins/ymapPlugin.js',  mode: 'client' }
  ],
  runtimeCompiler: true,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  axios: {
    baseURL: process.env.baseURL
  },
  publicRuntimeConfig: {
    baseURL: process.env.baseURL
  },
  env: {
    apiKey: process.env.yaAPIKey
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['favorites', 'cart', 'profile', 'collections'] //  If not entered, “localStorage” is the default value
    }]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
