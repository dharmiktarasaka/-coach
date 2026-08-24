<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Header -->
      <UiSectionHeading
        tag="Editorial Knowledge Hub"
        tag-variant="brand"
        title="STRATEGIC ESSAYS ON THE BUSINESS OF EXPERTISE."
        subtitle="Deep-dive frameworks, operational blueprints, and honest perspectives on positioning, offer architecture, client acquisition, and business automation."
        size="xl"
        align="center"
        custom-class="mb-20"
      />

      <!-- Strategic Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div
          v-for="guide in guides"
          :key="guide.to"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11] rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md hover:-translate-y-1"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs font-mono text-[#524F4E]">
              <span class="bg-[#FFF8F2] text-[#FF7F11] font-bold px-2.5 py-1 rounded-full border border-[#FF7F11]/30">{{ guide.category }}</span>
              <span>{{ guide.readTime }}</span>
            </div>

            <h2 class="font-display text-xl font-bold text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-snug">
              {{ guide.title }}
            </h2>

            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              {{ guide.excerpt }}
            </p>
          </div>

          <div class="pt-6 mt-6 border-t border-[#EAE4E4]">
            <NuxtLink
              :to="guide.to"
              class="text-xs font-bold text-[#1A1A1A] group-hover:text-[#FF7F11] flex items-center gap-1.5 transition-colors"
            >
              Read Full Strategic Guide &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Scorecard CTA banner -->
      <div class="p-10 rounded-3xl bg-white border border-[#EAE4E4] text-center max-w-3xl mx-auto space-y-4 shadow-sm">
        <h3 class="font-display text-2xl font-bold text-[#1A1A1A]">
          Want to apply these frameworks directly to your business?
        </h3>
        <p class="text-xs sm:text-sm text-[#524F4E]">
          Take the free 5-minute Growth Scorecard to diagnose which pillar is currently your primary bottleneck.
        </p>
        <div class="pt-2">
          <UiButton to="/scorecard" variant="primary" size="md">
            Take Free Scorecard &rarr;
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
const guides = [
  {
    category: 'Architecture',
    readTime: '8 min read',
    title: 'The Expert Business Operating System: Why Knowledge Alone Never Scales',
    excerpt: 'Why raw domain knowledge caps your earnings and how codifying an operational engine creates scalable equity.',
    to: '/coaching-business'
  },
  {
    category: 'Market Realities',
    readTime: '10 min read',
    title: 'Building a High-Ticket Coaching Business in India for the World',
    excerpt: 'How to navigate WhatsApp triage, INR pricing elasticity, relationship sales, and command high international USD fees.',
    to: '/coaching-business-india'
  },
  {
    category: 'Offer Design',
    readTime: '7 min read',
    title: 'Crafting High-Value Flagship Offers: Beyond the Hourly Session',
    excerpt: 'How to transition from trading time for money into high-margin, outcome-based transformation architectures.',
    to: '/coaching-offer'
  },
  {
    category: 'Acquisition',
    readTime: '9 min read',
    title: 'Predictable Client Acquisition Architecture for Modern Experts',
    excerpt: 'Building an inbound pipeline that attracts high-intent decision-makers without relying on random word-of-mouth.',
    to: '/get-coaching-clients'
  },
  {
    category: 'Conversion',
    readTime: '8 min read',
    title: 'High-Ticket Diagnostic Enrollment: Selling Without Gimmicks',
    excerpt: 'A consultative diagnostic protocol that qualifies mutual fit and closes clients with 35%+ conversion rates.',
    to: '/high-ticket-coaching'
  },
  {
    category: 'AI & Leverage',
    readTime: '6 min read',
    title: 'AI Leverage for Modern Coaches: The Intelligent Operating Layer',
    excerpt: 'Using AI to multiply your authentic discernment, speed up client synthesis, and eliminate operational drag.',
    to: '/ai-for-coaches'
  },
  {
    category: 'Operations',
    readTime: '7 min read',
    title: 'The Architecture of a Scalable Coaching Business System',
    excerpt: 'Centralizing CRM pipelines, automated scheduling, milestone portals, and standard operating procedures.',
    to: '/coaching-business-system'
  },
  {
    category: 'Automation',
    readTime: '6 min read',
    title: 'Coaching Automation: Removing the Founder Delivery Bottleneck',
    excerpt: 'How to deliver 10x transformation while reducing your live coaching calendar by 60% with asynchronous systems.',
    to: '/coaching-business-automation'
  },
  {
    category: 'Sales Strategy',
    readTime: '8 min read',
    title: 'How to Sell Coaching & Advisory at Premium Price Points',
    excerpt: 'Why high prices are about risk reversal and outcome certainty, not ego-driven pricing tactics.',
    to: '/sell-coaching'
  }
]

useSeoMeta({
  title: 'Strategic Resources & Architectural Essays — Digital Coach',
  description: 'Explore our library of strategic guides covering offer architecture, consultative enrollment, client acquisition, and AI leverage.'
})
</script>
