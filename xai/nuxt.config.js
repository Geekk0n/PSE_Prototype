export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Webapp for evaluating XAI',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/nuxt-axios-exporter.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {baseURL: ''},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    publicPath: process.env.NODE_ENV === 'production' ? 'assets/' : null,
    extractCSS: true,
  },

  generate: {
    dir: 'nuxt-public',
  },

  // Custom Routes
  router:{
    extendRoutes(routes,resolve){
      routes.push({
        name: 'Logo',
        path: '/logo',
        component: resolve(__dirname, 'components/Logo.vue')
      })
    },
    extendRoutes(routes,resolve){
      routes.push({
        name: 'VuetifyTest',
        path: '/vtest',
        component: resolve(__dirname, 'pages/vuetifytest.vue')
      })
    }
  }
}
