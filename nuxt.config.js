export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Exhaust Baba | Bike Exhaust and Silencer Trader',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Exhaust Baba | Bike Exhaust and Silencer Trader based in delhi and trade across span india' },
      { name: 'format-detection', content: 'telephone=no' },
      { name="og:title", content="Exhaust Baba | Bike Exhaust and Silencer Trader"},
      {name="og:type" ,content="Company.business"},
      {name="og:url", content="https://exhaustbaba.com/"},
      {name="og:image" ,content="https://exhaustbaba.com/_nuxt/img/eblogotext.dec9206.svg"}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/eblogo.svg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/app.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  generate: {
    dir: 'dist'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
