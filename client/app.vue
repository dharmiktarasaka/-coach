<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from '~/composables/useTheme'

const { initTheme } = useTheme()
const route = useRoute()

onMounted(() => {
  initTheme()
})

const canonicalUrl = computed(() => {
  const cleanPath = route.path === '/' ? '' : route.path.replace(/\/$/, '')
  return `https://narayanpresence.com${cleanPath}`
})

// Comprehensive Global SEO & Google/AI Knowledge Graph Structured Data
useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'EducationalOrganization',
            '@id': 'https://narayanpresence.com/#organization',
            'name': 'The Narayan Presence',
            'alternateName': ['Sarva Kalyan Global', 'Narayan Presence'],
            'url': 'https://narayanpresence.com',
            'logo': {
              '@type': 'ImageObject',
              '@id': 'https://narayanpresence.com/#logo',
              'url': 'https://narayanpresence.com/logo.webp',
              'contentUrl': 'https://narayanpresence.com/logo.webp',
              'caption': 'The Narayan Presence Logo'
            },
            'image': 'https://narayanpresence.com/ranu.webp',
            'description': 'The Narayan Presence, operated under Sarva Kalyan Global, provides structured personal clarity coaching, conscious living workshops, and life transformation frameworks founded by Ranu Patel.',
            'founder': {
              '@type': 'Person',
              '@id': 'https://narayanpresence.com/#founder',
              'name': 'Ranu Patel',
              'jobTitle': 'Co-Founder & Life Transformation Coach',
              'image': 'https://narayanpresence.com/ranu.webp',
              'description': 'Life Transformation Coach, Energy Healer, and former IT leader with 16+ years of digital strategy experience, specializing in Mindfulness, NLP, and Narayan Reiki.',
              'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Ahmedabad',
                'addressRegion': 'Gujarat',
                'addressCountry': 'IN'
              }
            },
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Ahmedabad',
              'addressRegion': 'Gujarat',
              'addressCountry': 'IN'
            },
            'sameAs': [
              'https://instagram.com/narayanpresence',
              'https://youtube.com/@narayanpresence',
              'https://linkedin.com/company/narayanpresence'
            ],
            'knowsAbout': [
              'Mental Clarity Coaching',
              'Mindfulness-Based Transformation',
              'Neuro-Linguistic Programming (NLP)',
              'Narayan Reiki',
              'Emotional Awareness',
              'The 1 AM Reset Blueprint',
              'Conscious Living'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': 'https://narayanpresence.com/#website',
            'url': 'https://narayanpresence.com',
            'name': 'The Narayan Presence',
            'publisher': {
              '@id': 'https://narayanpresence.com/#organization'
            },
            'potentialAction': {
              '@type': 'SearchAction',
              'target': 'https://narayanpresence.com/resources?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]
      })
    }
  ]
})
</script>
