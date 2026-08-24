export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Digital Coach — Build the Business Behind Your Expertise',
      titleTemplate: '%s | Digital Coach',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Digital Coach helps coaches, consultants, trainers, creators, and experts turn their knowledge into structured, credible, and scalable business systems.' },
        { name: 'theme-color', content: '#140024' },
        { property: 'og:site_name', content: 'Digital Coach' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'https://app.digitalcoach.com',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://digitalcoach.com'
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})
