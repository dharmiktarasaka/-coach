<template>
  <div class="narayan-subpage workshops-page">
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"><svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg></span>
      <div class="wrap">
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/courses">Offerings</NuxtLink> / Workshops</p>
        <p class="eyebrow">Live Intensive</p>
        <h1 style="margin-top:22px">The 1 AM Reset <em>Blueprint</em></h1>
        <p class="lead hero-in">
          A 3-day live practical intensive for overworked professionals who replay their day at night. Name your own 1 AM loop, build a calm toolkit and make one grounded decision.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Offerings', to: '/courses' },
        { label: 'Workshops & Events' }
      ]"
      :prev="{ label: 'Courses & Programmes', to: '/courses' }"
      :next="{ label: '1-to-1 Coaching', to: '/coaching' }"
    />

    <!-- Intensive Details -->
    <section class="sec">
      <div class="wrap">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-7 space-y-6">
            <p class="eyebrow">Open now for enrolment</p>
            <h2 class="h2">Stop the nightly replay. <em>Regain your quiet.</em></h2>
            <p class="lead" style="color: var(--body);">
              There are no recordings. You take part live, with structured text lessons, worksheets and toolkits. If you miss a session, a free make-up session is guaranteed.
            </p>

            <div class="space-y-4 pt-4">
              <div class="workshop-card p-6 rounded-2xl border">
                <h4 style="font-family:'Fraunces',serif;font-size:20px">Day 1: Name Your Loop</h4>
                <p class="text-sm mt-2">Identify the exact triggers, conversations, and postponed choices keeping your mind running past midnight.</p>
              </div>
              <div class="workshop-card p-6 rounded-2xl border">
                <h4 style="font-family:'Fraunces',serif;font-size:20px">Day 2: Build Your Calm Toolkit</h4>
                <p class="text-sm mt-2">Learn the specific somatic and cognitive P.A.U.S.E. steps to decouple stress sensations from repetitive thoughts.</p>
              </div>
              <div class="workshop-card p-6 rounded-2xl border">
                <h4 style="font-family:'Fraunces',serif;font-size:20px">Day 3: One Clear Decision</h4>
                <p class="text-sm mt-2">Ground your clarity into one definitive, non-negotiable decision that resolves the loop.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <dl class="facts" style="background:#171848;color:#F8F5EF;border-color:rgba(217,170,85,.4);border-radius:24px;padding:32px">
              <div><dt style="color:#c4c4e2">Format</dt><dd style="color:#fff;font-weight:700">3 Live Sessions</dd></div>
              <div><dt style="color:#c4c4e2">Includes</dt><dd style="color:#fff;font-weight:700">Lessons, Worksheets, Toolkits</dd></div>
              <div><dt style="color:#c4c4e2">Make-up Policy</dt><dd style="color:#fff;font-weight:700">1 Free Make-up Session</dd></div>
              <div class="pt-4">
                <a class="btn btn-gold w-full text-center" href="https://r6e8zx.flexi-funnels.com/1-am-reset-blueprint" target="_blank" rel="noopener">
                  Register for 1 AM Reset &rarr;
                </a>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'The 1 AM Reset Blueprint Intensive · 3-Day Live Experience',
  meta: [
    { name: 'description', content: 'A 3-day practical live intensive led by Ranu Patel to calm midnight overthinking, interrupt cognitive rumination, and restore natural sleep.' },
    { property: 'og:title', content: 'The 1 AM Reset Blueprint Intensive | The Narayan Presence' },
    { property: 'og:description', content: 'Live 3-day practical workshop to quiet midnight loops and wake with mental clarity.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' }
  ],
  link: [{ rel: 'stylesheet', href: '/style.css' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': 'The 1 AM Reset Blueprint Intensive',
        'description': 'A 3-day live practical intensive for overworked minds to quiet nocturnal rumination and establish nervous system stillness.',
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'The Narayan Presence',
          'url': 'https://narayanpresence.com'
        },
        'instructor': {
          '@type': 'Person',
          'name': 'Ranu Patel'
        },
        'offers': {
          '@type': 'Offer',
          'availability': 'https://schema.org/InStock',
          'url': 'https://r6e8zx.flexi-funnels.com/1-am-reset-blueprint'
        }
      })
    }
  ]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}
.narayan-subpage h1, .narayan-subpage h2, .narayan-subpage h3, .narayan-subpage h4 {
  font-family: 'Fraunces', Georgia, serif;
}

.workshop-card {
  background: var(--card);
  border-color: var(--line);
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .workshop-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}
:root[data-theme="light"] .workshop-card {
  background: #ffffff;
  border-color: #EAE2D4;
}
.workshop-card h4 {
  color: var(--fg);
}
:root[data-theme="dark"] .workshop-card h4 {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .workshop-card h4 {
  color: #171848 !important;
}
.workshop-card p {
  color: var(--body);
}
:root[data-theme="dark"] .workshop-card p {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .workshop-card p {
  color: #4A4B68 !important;
}
</style>