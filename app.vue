<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global Organization Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Digital Coach',
        url: 'https://digitalcoach.com',
        logo: 'https://digitalcoach.com/favicon.svg',
        description: 'The Business-Building Ecosystem for Coaches, Consultants, Trainers, and Experts.',
        sameAs: [
          'https://linkedin.com',
          'https://youtube.com',
          'https://instagram.com'
        ]
      })
    }
  ]
})
</script>
