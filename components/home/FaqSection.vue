<template>
  <section class="py-20 md:py-32 relative bg-[#FBF6F6] border-t border-[#EAE4E4]">
    <UiContainer size="xl">
      <!-- Section Heading: 15. FAQ -->
      <UiSectionHeading
        tag="Straight Answers"
        tag-variant="slate"
        title="DIRECT ANSWERS TO THE QUESTIONS YOU’RE ACTUALLY ASKING."
        subtitle="Clear, honest answers about our build process, methodology, target audiences, and engagement models."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- FAQ Accordion List -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqList"
          :key="faq.q"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/50 rounded-2xl transition-all duration-200 overflow-hidden shadow-sm"
        >
          <button
            type="button"
            class="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
            :aria-expanded="openIndex === index"
            @click="toggle(index)"
          >
            <span class="font-display text-base sm:text-lg font-bold text-[#1A1A1A]">
              {{ faq.q }}
            </span>
            <div
              class="w-8 h-8 rounded-full bg-[#FBF6F6] border border-[#EAE4E4] flex items-center justify-center text-[#8C8685] shrink-0 transition-transform duration-200 shadow-sm"
              :class="openIndex === index ? 'rotate-180 text-[#FF7F11] border-[#FF7F11]' : ''"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>

          <div
            v-show="openIndex === index"
            class="px-6 pb-6 pt-0 text-xs sm:text-sm text-[#524F4E] leading-relaxed border-t border-[#EAE4E4] mt-2 pt-4"
          >
            {{ faq.a }}
          </div>
        </div>
      </div>

      <!-- FAQ Schema JSON-LD Injection -->
      <component :is="'script'" type="application/ld+json">
        {{ JSON.stringify(faqSchema) }}
      </component>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const openIndex = ref<number | null>(0)

const toggle = (idx: number) => {
  openIndex.value = openIndex.value === idx ? null : idx
}

const faqList = [
  {
    q: 'Who is Digital Coach for?',
    a: 'Coaches, consultants, corporate trainers, creators, doctors and senior professionals moving into coaching — anyone with real expertise who wants a structured, scalable business behind it. If you get genuine results for people, this is for you.'
  },
  {
    q: 'Is Digital Coach a coaching course?',
    a: 'No. There are no video lectures to binge. It’s a build process and a set of systems: we work with you to create the actual assets your business runs on — your offer, positioning, pipeline, and workflows.'
  },
  {
    q: 'Can consultants use Digital Coach?',
    a: 'Yes — it’s one of our strongest fits. If you’ve been trading time for fees as a consultant, we help you turn that expertise into a productised, higher-leverage coaching or advisory business.'
  },
  {
    q: 'Can I use Digital Coach if I’m just starting?',
    a: 'Yes, if you already have real expertise. Starting early actually helps — it saves you from the expensive mistakes most experts make in their first two years. What matters is genuine skill, not a big following.'
  },
  {
    q: 'Do I need paying clients already?',
    a: 'Not necessarily. You don’t need a full client roster, but you do need real expertise and some evidence you can get results — even informally. We qualify by fit, not by follower count.'
  },
  {
    q: 'Does Digital Coach guarantee income?',
    a: 'No — and we won’t pretend otherwise. We build the systems and strategy; your results depend on your competence and effort. Anyone guaranteeing a specific income is guessing or selling. We’d rather be honest.'
  },
  {
    q: 'How does the Business Growth Scorecard work?',
    a: 'It’s a free, 5-minute diagnostic across the nine layers of your business. You get a score, a clear read on your strengths and gaps, and your single biggest constraint to fix first.'
  },
  {
    q: 'What happens after I complete the Scorecard?',
    a: 'You get your report immediately. If it looks like a fit, we’ll offer a no-pressure consultation to talk through your path. No hard sell — if it’s not right for you, we’ll say so.'
  },
  {
    q: 'How does the live workshop work?',
    a: 'We run periodic live sessions walking through the methodology. It’s a low-commitment way to see how we think and whether our approach fits you, before you decide anything.'
  },
  {
    q: 'What is the 9-layer business system?',
    a: 'It’s the nine parts every expert business needs to run reliably: positioning, offer, authority, acquisition, conversion, delivery, systems, AI leverage, and scale. Most experts are missing three or more — the system helps you find and build them.'
  }
]

const faqSchema = computed(() => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqList.map(item => ({
    '@type': 'Question',
    'name': item.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': item.a
    }
  }))
}))
</script>
