export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
    // link: [
    //   { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    //   {
    //     rel: 'stylesheet',
    //     href: './node_modules/bulma-calendar/dist/css/bulma-calendar.min.css'
    //   }
    // ],
    // script: [
    //   {
    //     src: './node_modules/bulma-calendar/dist/js/bulma-calendar.min.js'
    //   }
    // ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    {
      src: 'bulma-calendar/dist/css/bulma-calendar.min.css',
      lang: 'css'
    }
    // {
    //   src: 'bulma-calendar/dist/js/bulma-calendar.js',
    //   lang: 'js'
    // }
  ],
  js: [
    // {
    //   src: 'bulma-calendar/dist/js/bulma-calendar.js',
    //   lang: 'js'
    // }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  styleResources: {
    // your settings here
    // sass: ['~/bulma-calendar/src/sass/index.sass'], // alternative: scss
    less: [],
    stylus: []
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  devModules: ['@nuxtjs/eslint-module'],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
