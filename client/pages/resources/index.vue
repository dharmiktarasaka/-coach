<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Header -->
      <UiSectionHeading
        tag="Editorial Knowledge Hub"
        tag-variant="brand"
        title="COACHING BUSINESS RESOURCES"
        subtitle="Deep-dive frameworks, operational blueprints, and honest perspectives on positioning, offer architecture, high-ticket sales, acquisition funnels, and niche business models."
        size="xl"
        align="center"
        custom-class="mb-16"
      />


      <!-- Category Navigation / Filter -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="activeCategory = cat"
          :class="[
            'px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all',
            activeCategory === cat
              ? 'bg-[#1A1A1A] text-white shadow-sm'
              : 'bg-white border border-[#EAE4E4] text-[#524F4E] hover:border-[#FF7F11] hover:text-[#1A1A1A]'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Strategic Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div
          v-for="guide in filteredGuides"
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
import { ref, computed } from 'vue'

const activeCategory = ref('All Guides')

const categories = [
  'All Guides',
  'Core Architecture',
  'Funnels & Acquisition',
  'Scale & Systems',
  'Niche Playbooks'
]

const guides = [
  {
    group: 'Core Architecture',
    category: 'Architecture',
    readTime: '8 min read',
    title: 'The Expert Business Operating System: Why Knowledge Alone Never Scales',
    excerpt: 'Why raw domain knowledge caps your earnings and how codifying an operational engine creates scalable equity.',
    to: '/coaching-business'
  },
  {
    group: 'Core Architecture',
    category: 'Offer Design',
    readTime: '7 min read',
    title: 'Crafting High-Value Flagship Offers: Beyond the Hourly Session',
    excerpt: 'How to transition from trading time for money into high-margin, outcome-based transformation architectures.',
    to: '/coaching-offer'
  },
  {
    group: 'Core Architecture',
    category: 'Program Design',
    readTime: '9 min read',
    title: 'How to Create a High-Ticket Coaching Program That Scales',
    excerpt: 'Step-by-step framework to design, package, price, and launch a signature high-ticket coaching program.',
    to: '/create-coaching-program'
  },
  {
    group: 'Funnels & Acquisition',
    category: 'Acquisition',
    readTime: '9 min read',
    title: 'Predictable Client Acquisition Architecture for Modern Experts',
    excerpt: 'Building an inbound pipeline that attracts high-intent decision-makers without relying on random word-of-mouth.',
    to: '/get-coaching-clients'
  },
  {
    group: 'Funnels & Acquisition',
    category: 'Funnels',
    readTime: '8 min read',
    title: 'The High-Ticket Coaching Funnel: Automated Client Acquisition',
    excerpt: 'Discover the lean, high-converting diagnostic funnel architecture that turns strangers into high-paying clients.',
    to: '/coaching-funnel'
  },
  {
    group: 'Funnels & Acquisition',
    category: 'Conversion',
    readTime: '8 min read',
    title: 'High-Ticket Diagnostic Enrollment: Selling Without Gimmicks',
    excerpt: 'A consultative diagnostic protocol that qualifies mutual fit and closes clients with 35%+ conversion rates.',
    to: '/high-ticket-coaching'
  },
  {
    group: 'Funnels & Acquisition',
    category: 'Sales Strategy',
    readTime: '8 min read',
    title: 'How to Sell Coaching & Advisory at Premium Price Points',
    excerpt: 'Why high prices are about risk reversal and outcome certainty, not ego-driven pricing tactics.',
    to: '/sell-coaching'
  },
  {
    group: 'Scale & Systems',
    category: 'Enterprise Scale',
    readTime: '10 min read',
    title: 'How to Scale a Coaching Business from 6 to 7 Figures',
    excerpt: 'Crossing the multi-six and seven-figure threshold by shifting from solo practitioner to operating a systematic institution.',
    to: '/scale-coaching-business'
  },
  {
    group: 'Scale & Systems',
    category: 'Operations',
    readTime: '7 min read',
    title: 'The Architecture of a Scalable Coaching Business System',
    excerpt: 'Centralizing CRM pipelines, automated scheduling, milestone portals, and standard operating procedures.',
    to: '/coaching-business-system'
  },
  {
    group: 'Scale & Systems',
    category: 'Automation',
    readTime: '6 min read',
    title: 'Coaching Automation: Removing the Founder Delivery Bottleneck',
    excerpt: 'How to deliver 10x transformation while reducing your live coaching calendar by 60% with asynchronous systems.',
    to: '/coaching-business-automation'
  },
  {
    group: 'Scale & Systems',
    category: 'AI & Leverage',
    readTime: '6 min read',
    title: 'AI Leverage for Modern Coaches: The Intelligent Operating Layer',
    excerpt: 'Using AI to multiply your authentic discernment, speed up client synthesis, and eliminate operational drag.',
    to: '/ai-for-coaches'
  },
  {
    group: 'Scale & Systems',
    category: 'Market Realities',
    readTime: '10 min read',
    title: 'Building a High-Ticket Coaching Business in India for the World',
    excerpt: 'How to navigate WhatsApp triage, INR pricing elasticity, relationship sales, and command high international USD fees.',
    to: '/coaching-business-india'
  },
  {
    group: 'Niche Playbooks',
    category: 'Life Coaching',
    readTime: '8 min read',
    title: 'How to Build a High-Ticket Life Coaching Business',
    excerpt: 'Move beyond generic mindset advice to build structured, high-ticket life milestone programs.',
    to: '/life-coach-business'
  },
  {
    group: 'Niche Playbooks',
    category: 'B2B Coaching',
    readTime: '9 min read',
    title: 'How to Build a High-Ticket Business Coaching Practice ($10k+ Retainers)',
    excerpt: 'Executive frameworks, diagnostic sales methodology, and enterprise offer structures for SMB founders and leaders.',
    to: '/business-coach-business'
  },
  {
    group: 'Niche Playbooks',
    category: 'Career Advisory',
    readTime: '8 min read',
    title: 'How to Build a High-Income Career & Executive Coaching Business',
    excerpt: 'Transition from resume reviews to high-stakes executive career acceleration and board transition advisory.',
    to: '/career-coach-business'
  },
  {
    group: 'Niche Playbooks',
    category: 'Wellness & Health',
    readTime: '8 min read',
    title: 'How to Build a Scalable Wellness & Health Coaching Business',
    excerpt: 'Transition from low-cost meal plans to high-value lifestyle, longevity, and metabolic transformation protocols.',
    to: '/wellness-coach-business'
  },
  {
    group: 'Niche Playbooks',
    category: 'Conscious Mentorship',
    readTime: '7 min read',
    title: 'How to Build an Ethical Spiritual & Mindset Coaching Business',
    excerpt: 'Bridge sacred wisdom and structured business systems without compromising your spiritual integrity.',
    to: '/spiritual-coach-business'
  },
  {
    group: 'Niche Playbooks',
    category: 'Consultant Pivot',
    readTime: '9 min read',
    title: 'How to Transition from Done-For-You Consulting to High-Leverage Coaching',
    excerpt: 'Productize your consulting knowledge into scalable Done-WITH-You advisory programs with 85%+ margins.',
    to: '/consultant-to-coach'
  },
  {
    group: 'Niche Playbooks',
    category: 'Medical Experts',
    readTime: '9 min read',
    title: 'How Doctors & Healthcare Professionals Can Build a Coaching Business',
    excerpt: 'Monetize decades of clinical mastery beyond hospital rounds with high-leverage health and executive advisory.',
    to: '/coaching-business-for-doctors'
  }
]

const filteredGuides = computed(() => {
  if (activeCategory.value === 'All Guides') return guides
  return guides.filter(g => g.group === activeCategory.value)
})

useSeoMeta({
  title: 'Strategic Resources, Playbooks & Guides — Digital Coach',
  description: 'Explore our complete library of strategic guides covering offer architecture, consultative enrollment, client acquisition, high-ticket funnels, and niche coaching playbooks.'
})
</script>
