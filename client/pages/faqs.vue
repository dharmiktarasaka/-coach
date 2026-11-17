<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="md">
      <div class="space-y-14">
        <!-- Header -->
        <div class="space-y-4 text-center max-w-xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Answers & Guidance
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Frequently Asked Questions
          </h1>
          <p class="text-base text-[#352D47] leading-relaxed">
            Find answers to common questions about our coaching, courses, community membership, and approach.
          </p>
        </div>

        <!-- FAQ Accordion List -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="bg-white border border-[#EAE2D4] rounded-2xl p-6 shadow-sm cursor-pointer transition-all hover:border-[#171844]"
            @click="toggle(index)"
          >
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-base sm:text-lg font-bold text-[#171844]">{{ faq.question }}</h3>
              <span class="text-xl font-bold text-[#8C6D57] shrink-0">
                {{ openIndex === index ? '−' : '+' }}
              </span>
            </div>
            <div v-show="openIndex === index" class="mt-4 pt-4 border-t border-[#EAE2D4]/70 text-sm text-[#352D47] leading-relaxed">
              {{ faq.answer }}
            </div>
          </div>
        </div>

        <div class="p-8 rounded-3xl bg-[#171844] text-white text-center space-y-4">
          <h3 class="text-xl font-bold text-[#F8D78B]">Have a question not listed here?</h3>
          <p class="text-sm text-[#EAE2D4] max-w-md mx-auto">
            Our team is always happy to guide you to the right track for your journey.
          </p>
          <div>
            <NuxtLink
              to="/contact"
              class="inline-block px-6 py-3 rounded-xl bg-[#F8D78B] text-[#171844] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              Contact Us Directly &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(0)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

useSeoMeta({
  title: 'FAQs — Narayan Presence',
  description: 'Common questions and answers regarding programs and advisory.'
})

const faqs = [
  {
    question: 'How do I know if 1-on-1 coaching is right for me?',
    answer: '1-on-1 coaching is best suited for leaders, entrepreneurs, and practitioners ready to commit to deliberate inner inquiry and strategic implementation. We begin with a preliminary application to ensure strong mutual alignment.'
  },
  {
    question: 'What is the structure of the online courses?',
    answer: 'Our courses combine self-paced video modules, reflective worksheets, audio practices, and optional live cohort Q&A sessions with Narayan.'
  },
  {
    question: 'Can I cancel my Presence Circle membership anytime?',
    answer: 'Yes, memberships can be cancelled at any time directly through your account settings with no penalties or hidden fees.'
  },
  {
    question: 'Are in-person retreats open to beginners?',
    answer: 'Yes, while retreats are immersive, they are thoughtfully scaffolded so both newer practitioners and seasoned meditators receive profound depth and care.'
  }
]
</script>
