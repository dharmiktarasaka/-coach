<template>
  <div class="narayan-subpage faqs-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Insights / FAQs</p>
        <p class="eyebrow">Frequently Asked Questions</p>
        <h1 style="margin-top:22px">Find answers <em>before you begin.</em></h1>
        <p class="lead hero-in">
          Programme formats, length, fees, access, support, suitability and cancellation policies.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Insights & Resources', to: '/blog' },
        { label: 'FAQs' }
      ]"
      :prev="{ label: 'Testimonials', to: '/testimonials' }"
      :next="{ label: 'Contact Us', to: '/contact' }"
    />

    <section class="sec">
      <div class="wrap" style="max-width:860px">
        <div class="faqs space-y-4">
          <details v-for="(f, i) in faqItems" :key="i" class="p-5 faq-card border rounded-2xl cursor-pointer transition-all">
            <summary class="font-bold faq-question text-base">{{ f.q }}</summary>
            <p class="mt-3 faq-answer text-sm leading-relaxed">{{ f.a }}</p>
          </details>
        </div>

        <div class="mt-12 p-8 rounded-3xl faq-cta-card border text-center">
          <h3 class="faq-cta-title" style="font-family:'Fraunces',serif;font-size:22px">Have an unaddressed question?</h3>
          <p class="text-sm faq-cta-desc mt-2">Send us a direct note and we will reply with relevant details.</p>
          <div class="mt-5">
            <NuxtLink to="/contact" class="btn btn-gold">Contact Us &rarr;</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const faqItems = [
  { q: 'Is this therapy or clinical mental healthcare?', a: 'No. Our programmes and 1-to-1 coaching provide education and personal self-awareness frameworks. They do not diagnose, treat, or cure any psychological or psychiatric condition. If emotional distress impacts your daily living, please consult a licensed medical clinician.' },
  { q: 'Who are the programmes for?', a: 'Presence Academy is designed for individuals seeking grounded clarity, emotional stability, and self-awareness in relationships and daily routines. Presence Business is tailored for coaches, consultants, and experts looking to turn their wisdom into structured, automated businesses.' },
  { q: 'Which programme should I start with?', a: 'If one recurring cognitive loop bothers you most, start with Clear Mind and Life Clarity. For a gentle, structured 3-week beginning, start with 21-Day Conscious Living. If you are launching a practice, start with Start Your Coaching Business.' },
  { q: 'How do I access materials after enrolling?', a: 'Upon enrolment, you receive immediate credentials to your private member area, where all video sessions, written lessons, worksheets, and schedule details are permanently preserved.' },
  { q: 'Are sessions live or recorded?', a: 'Format varies by offering. The 1 AM Reset Blueprint is strictly live with no recordings, but includes a free make-up session guarantee. Other Academy courses combine pre-recorded frameworks with live cohort Q&A calls.' },
  { q: 'What is the refund policy?', a: 'Because live cohorts require advance reservation and digital materials are instantly accessible upon registration, refunds are generally not offered once materials are delivered or cohorts commence.' },
  { q: 'Do you guarantee financial or business results?', a: 'No. We provide proven frameworks, architecture, and step-by-step guidance. Individual outcomes rely entirely upon your implementation, market positioning, and client execution.' }
]

useHead({
  title: 'Frequently Asked Questions · The Narayan Presence',
  meta: [
    { name: 'description', content: 'Explore clear answers on coaching scope, the 1 AM Reset Blueprint, course access, fees, and educational boundaries at The Narayan Presence.' },
    { property: 'og:title', content: 'Frequently Asked Questions | The Narayan Presence' },
    { property: 'og:description', content: 'Transparent answers regarding coaching, methodology, formats, and enrollment.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' }
  ],
  link: [{ rel: 'stylesheet', href: '/style.css' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqItems.map(item => ({
          '@type': 'Question',
          'name': item.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.a
          }
        }))
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
.narayan-subpage h1, .narayan-subpage h2, .narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}
details summary {
  outline: none;
}
details[open] summary {
  color: #D9AA55 !important;
}

.faq-card {
  background: var(--card);
  border-color: var(--line);
}
:root[data-theme="dark"] .faq-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}
:root[data-theme="light"] .faq-card {
  background: #ffffff;
  border-color: #EAE2D4;
}

.faq-question {
  color: var(--fg);
}
:root[data-theme="dark"] .faq-question {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .faq-question {
  color: #171848 !important;
}

.faq-answer {
  color: var(--body);
}
:root[data-theme="dark"] .faq-answer {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .faq-answer {
  color: #4A4B68 !important;
}

.faq-cta-card {
  background: var(--card);
  border-color: var(--line);
}
:root[data-theme="dark"] .faq-cta-card {
  background: #191c4d;
  border-color: rgba(217, 170, 85, 0.35);
}
:root[data-theme="light"] .faq-cta-card {
  background: #fdf8ed;
  border-color: #EAE2D4;
}

.faq-cta-title {
  color: var(--fg);
}
:root[data-theme="dark"] .faq-cta-title {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .faq-cta-title {
  color: #171848 !important;
}

.faq-cta-desc {
  color: var(--body);
}
:root[data-theme="dark"] .faq-cta-desc {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .faq-cta-desc {
  color: #4A4B68 !important;
}
</style>