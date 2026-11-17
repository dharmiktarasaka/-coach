<template>
  <section id="personal-support" class="py-20 md:py-32 bg-[#FBF6F6] border-t border-[#EAE4E4] relative overflow-hidden">
    <!-- Ambient background light -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF7F11]/5 rounded-full blur-[160px] pointer-events-none"></div>

    <UiContainer size="xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE4E4] text-[#FF7F11] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
          <span>Direct Advisory & Support</span>
        </div>

        <h2 class="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight uppercase leading-tight">
          Need personal support?
        </h2>

        <p class="text-base sm:text-lg text-[#524F4E] font-normal leading-relaxed">
          Choose direct guidance tailored for your individual transformation, business scaling, or corporate team performance.
        </p>
      </div>

      <!-- Three Pillars Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        <div
          v-for="(card, idx) in supportCards"
          :key="card.title"
          class="group relative bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE4E4] hover:border-[#FF7F11] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          <!-- Top Accent Gradient Line on Hover -->
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7F11] via-[#FF9334] to-[#E66800] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div>
            <!-- Icon & Tier Header -->
            <div class="flex items-center justify-between mb-8">
              <div class="w-14 h-14 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/25 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {{ card.icon }}
              </div>
              <span class="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F5EFEF] text-[#524F4E] group-hover:bg-[#FFF8F2] group-hover:text-[#FF7F11] transition-colors">
                Tier 0{{ idx + 1 }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-snug mb-3">
              {{ card.title }}
            </h3>

            <!-- Primary Description -->
            <p class="text-sm sm:text-base font-medium text-[#524F4E] leading-relaxed mb-6">
              {{ card.description }}
            </p>

            <!-- Deliverable Highlights -->
            <div class="space-y-3 mb-8 pt-4 border-t border-[#F5EFEF]">
              <div
                v-for="item in card.deliverables"
                :key="item"
                class="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1A] font-medium"
              >
                <span class="w-4 h-4 rounded-full bg-[#FF7F11]/15 text-[#FF7F11] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">&check;</span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Button -->
          <div class="pt-4 border-t border-[#F5EFEF]">
            <NuxtLink
              :to="card.link"
              class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F5EFEF] group-hover:bg-[#FF7F11] text-[#1A1A1A] group-hover:text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-sm group-hover:shadow-md"
            >
              <span>{{ card.ctaText }}</span>
              <span class="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Quick Consultation Touchpoint -->
      <div class="mt-14 max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-[#EAE4E4] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div class="space-y-0.5">
          <div class="text-sm font-bold text-[#1A1A1A]">
            Need help selecting the right engagement format?
          </div>
          <div class="text-xs text-[#524F4E]">
            Speak with an advisor to match your requirements with the appropriate support tier.
          </div>
        </div>

        <NuxtLink
          to="/contact"
          class="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#EAE4E4] hover:border-[#FF7F11] bg-white hover:bg-[#FFF8F2] text-[#1A1A1A] text-xs font-bold uppercase tracking-wider transition-all shadow-sm"
        >
          <span>Schedule A Call &rarr;</span>
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
interface SupportCard {
  icon: string
  title: string
  description: string
  deliverables: string[]
  ctaText: string
  link: string
}

const supportCards: SupportCard[] = [
  {
    icon: '🎯',
    title: 'Coaching',
    description: 'Personal & professional transformation.',
    deliverables: [
      '1:1 Deep Dive Discovery & Roadmap',
      'Mindset, Habits & Resilience Sprints',
      'Ongoing Direct Feedback & Accountability'
    ],
    ctaText: 'Explore Coaching',
    link: '/coaching-business-system'
  },
  {
    icon: '📈',
    title: 'Consulting',
    description: 'Business and expert-practice growth.',
    deliverables: [
      'Flagship Offer Architecture & Positioning',
      'Predictable Client Inbound Pipelines',
      'Autonomous Delivery & Operational Systems'
    ],
    ctaText: 'Explore Consulting',
    link: '/coaching-business-system'
  },
  {
    icon: '🏢',
    title: 'Corporate',
    description: 'Workplace development and wellbeing.',
    deliverables: [
      'Executive Leadership Development',
      'Team Resilience & Burnout Prevention',
      'Custom Corporate Workshops & Programs'
    ],
    ctaText: 'Explore Corporate',
    link: '/contact'
  }
]
</script>
