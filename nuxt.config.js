export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Minha Pokedex Nuxt',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Aplicação feita com Nuxt por Stênio Amorim. Github: /stamorim28.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'minha pokedex, pokedex nuxt, nuxt axios, nuxt, pokedex axios' },
      { itemprop:'name', content:'Minha Pokedex Nuxt' },
      { itemprop:'description', content:'Aplicação feita com Nuxt por Stênio Amorim. Github: /stamorim28.' },
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: ''},
      { property: 'og:title', content: 'Minha Pokedex Nuxt'},
      { property: 'og:description', content: 'Aplicação feita com Nuxt por Stênio Amorim. Github: /stamorim28.'},
      { property: 'twitter:card', content: 'summary_large_image'},
      { property: 'twitter:url', content: ''},
      { property: 'twitter:title', content: 'Minha Pokedex Nuxt'},
      { property: 'twitter:description', content: 'Aplicação feita com Nuxt por Stênio Amorim. Github: /stamorim28.'},

    ],
    link: [
      { rel: 'icon', type: 'image/png', href: './static/img/poke.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/reset.css',
    './assets/css/poketypes.css'
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
