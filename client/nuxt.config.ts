export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  experimental: {
    appManifest: false,
    configSchema: false
  },

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
      title: 'The Narayan Presence — Mental Clarity Coaching & Conscious Living',
      titleTemplate: '%s | The Narayan Presence',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=5' },
        { name: 'description', content: 'The Narayan Presence (Sarva Kalyan Global), founded by Ranu Patel in Ahmedabad, provides mental clarity coaching, conscious living workshops, NLP guidance, and business frameworks for life transformation.' },
        { name: 'keywords', content: 'The Narayan Presence, Ranu Patel, mental clarity coaching, life transformation coach Ahmedabad, 1 AM Reset Blueprint, conscious living, Narayan Reiki, NLP guidance, personal development India, coaching business systems' },
        { name: 'author', content: 'Ranu Patel · Sarva Kalyan Global' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'theme-color', content: '#171844' },
        { name: 'format-detection', content: 'telephone=no' },

        // Open Graph / Facebook / WhatsApp
        { property: 'og:site_name', content: 'The Narayan Presence' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'The Narayan Presence — Mental Clarity & Conscious Transformation' },
        { property: 'og:description', content: 'Explore 1-to-1 mental clarity coaching, the 1 AM Reset Blueprint, and conscious living practices by Ranu Patel in Ahmedabad, Gujarat, India.' },
        { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Ranu Patel · Co-Founder of The Narayan Presence' },
        { property: 'og:locale', content: 'en_IN' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'The Narayan Presence — Mental Clarity & Conscious Living' },
        { name: 'twitter:description', content: 'Learn to pause, understand emotional triggers, and establish conscious life clarity with Ranu Patel.' },
        { name: 'twitter:image', content: 'https://narayanpresence.com/ranu.webp' },
        { name: 'twitter:creator', content: '@narayanpresence' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap' }
      ]
    }
  },

  runtimeConfig: {
    public: {
      appUrl: process.env.NUXT_PUBLIC_APP_URL || 'https://narayanpresence.com',
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://narayanpresence.com',
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:5001/api',
      firebase: {
        apiKey: process.env.NUXT_PUBLIC_FIREBASE_API_KEY || 'AIzaSyCgf1LkSrwobzqsGOM3dFqwekxcXQSNw-M',
        authDomain: process.env.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'lyoo-7cc38.firebaseapp.com',
        projectId: process.env.NUXT_PUBLIC_FIREBASE_PROJECT_ID || 'lyoo-7cc38',
        storageBucket: process.env.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'lyoo-7cc38.firebasestorage.app',
        messagingSenderId: process.env.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '354508992918',
        appId: process.env.NUXT_PUBLIC_FIREBASE_APP_ID || '1:354508992918:web:f6be8b0a4a68568a78adb7',
        measurementId: process.env.NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID || 'G-94BXQNT24Y'
      }
    }
  },

  routeRules: {
    // Static asset performance caching
    '/style.css': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/ranu.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/logo.png': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/meditation-self.webp': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/site.webmanifest': { headers: { 'content-type': 'application/manifest+json; charset=utf-8' } },
    '/llms.txt': { headers: { 'content-type': 'text/plain; charset=utf-8' } },
    '/llms-full.txt': { headers: { 'content-type': 'text/plain; charset=utf-8' } },
    '/robots.txt': { headers: { 'content-type': 'text/plain; charset=utf-8' } }
  },

  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})
