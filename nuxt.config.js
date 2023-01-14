const isDev = process.env.NODE_ENV !== 'production'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  
  tagret: 'static',
  head: {
    title: 'deqo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { name: 'viewport', content: 'width=1920' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  // CSS file in the project
  '~/assets/css/main.css',
  '~/assets/css/fonts.css',
  'element-ui/lib/theme-chalk/index.css',
  '~/assets/css/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    ['nuxt-vuex-localstorage', {
      ...(isDev && {
        mode: 'debug'
      }),
      localStorage: ['favorites','cart'] //  If not entered, “localStorage” is the default value
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
