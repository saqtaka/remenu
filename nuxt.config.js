// import colors from 'vuetify/es5/util/colors'

export default {
  ssr: 'false',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Remenu',
    title: 'Remenu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Remenuは習慣を管理できるTODOアプリです。' },
      { hid: 'og:description', name: 'og:description', content: 'Remenu - 習慣を管理できるTODOアプリ' },
      { hid: 'og:image', name: 'og:image', content: 'https://remenu.app/ogimg.jpg' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'text/javascript',
        innerHTML: `(function(c,l,a,r,i,t,y){
                      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "5zf851uwlt");`
      },
      { src: 'https://www.googletagmanager.com/gtag/js?id=G-NKKF1WFDXE', async: true },
      {
        type: 'text/javascript',
        innerHTML: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'G-NKKF1WFDXE');`
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-i18n',
    '@nuxtjs/firebase'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      start_url: '/inbox'
    }
  },

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      },
      {
        code: 'ja',
        iso: 'ja-JP',
        file: 'ja-JP.js',
        name: '日本語'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'remenu_lang',
      onlyOnRoot: true // recommended
    },
    langDir: 'i18n/',
    lazy: true,
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  firebase: {
    config: {
      apiKey: 'AIzaSyCNd1yzV31939F-a0i_2M_fmTH9vKZqGCA',
      authDomain: 'tasbit-81cf6.firebaseapp.com',
      projectId: 'tasbit-81cf6',
      storageBucket: 'tasbit-81cf6.appspot.com',
      messagingSenderId: '<messagingSenderId>',
      appId: '880433504326',
      measurementId: 'G-R95KFBRPB9'
    },
    services: {
      auth: true,
      firestore: true
    }
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        light: {
          primary: '#536dfe',
          primaryConst: '#536dfe',
          secondary: '#FF5C93',
          secondaryConst: '#FF5C93',
          error: '#6e6e6e',
          warning: '#FFC260',
          success: '#3CD4A0',
          successConst: '#3CD4A0',
          info: '#9013FE',
          greyDefault: '#e0e0e0',
          greyBold: '#4a4a4a',
          greyBoldConst: '#4a4a4a',
          greyMedium: '#6e6e6e',
          greyTint: '#b9b9b9',
          default: '#e0e0e0',
          iconColor: '#FFFF59'
        },
        dark: {
          // primary: colors.blue.darken2,
          // accent: colors.grey.darken3,
          // secondary: colors.amber.darken3,
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3
          primary: '#536dfe',
          primaryConst: '#536dfe',
          secondary: '#FF5C93',
          secondaryConst: '#FF5C93',
          success: '#3CD4A0',
          successConst: '#3CD4A0',
          error: '#bfbfbf',
          greyDefault: '#23232d',
          greyMedium: '#bfbfbf',
          greyBold: '#d6d6d6',
          greyBoldConst: '#4a4a4a',
          greyTint: '#9b9b9b',
          default: '#e0e0e0'
        }
      }
    },
    defaultAssets: false,
    icons: {
      iconfont: 'mdiSvg'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            minChunks: 2,
            chunks: 'all',
            enforce: false,
            minSize: 30000,
            maxSize: 500000
          }
        }
      }
    }
  }
}
