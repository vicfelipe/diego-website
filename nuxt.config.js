const path = require('path')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'DCorrea Design',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Especialista em Design de Marcas.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: function() {
      const fs = require('fs')
      const path = require('path')
      return fs.readdirSync('./site/content/blog').map(file => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./site/content/blog/${file}`)
        }
      })
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#4fd1c' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '@/plugins/typed', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', 'nuxt-purgecss', '@nuxtjs/moment'],
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production'
  },
  markdownit: {
    injected: true
  },
  moment: {
    defaultTimezone: 'America/Sao_Paulo',
    locales: ['pt-br']
  },
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    }
  }
}
