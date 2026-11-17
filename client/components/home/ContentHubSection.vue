<template>
  <section id="content" class="py-20 md:py-32 bg-[#FBF6F6] border-t border-[#EAE4E4] relative overflow-hidden">
    <!-- Ambient background light -->
    <div class="absolute -top-20 left-1/4 w-96 h-96 bg-[#FF7F11]/5 rounded-full blur-[140px] pointer-events-none"></div>

    <UiContainer size="xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE4E4] text-[#FF7F11] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
          <span>Knowledge & Insights</span>
        </div>

        <h2 class="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight uppercase leading-tight">
          Learn. Reflect. Grow.
        </h2>

        <p class="text-base sm:text-lg text-[#524F4E] font-normal leading-relaxed">
          Deep-dive essays, diagnostic thinking, and actionable tools designed to help you self-identify and take your next step.
        </p>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex items-center justify-center flex-wrap gap-2 sm:gap-2.5 max-w-4xl mx-auto mb-12">
        <button
          type="button"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-200 cursor-pointer"
          :class="selectedCategory === 'All'
            ? 'bg-[#FF7F11] text-white shadow-md'
            : 'bg-white text-[#524F4E] border border-[#EAE4E4] hover:border-[#FF7F11]/50 hover:text-[#1A1A1A]'"
          @click="selectedCategory = 'All'"
        >
          All Topics
        </button>

        <button
          v-for="cat in categories"
          :key="cat"
          type="button"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-200 cursor-pointer"
          :class="selectedCategory === cat
            ? 'bg-[#FF7F11] text-white shadow-md'
            : 'bg-white text-[#524F4E] border border-[#EAE4E4] hover:border-[#FF7F11]/50 hover:text-[#1A1A1A]'"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-stretch">
        <article
          v-for="article in filteredArticles"
          :key="article.title"
          class="group bg-white rounded-2xl border border-[#EAE4E4] hover:border-[#FF7F11] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
        >
          <div class="p-6 sm:p-7 space-y-4">
            <!-- Article Category & Read Time -->
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFF8F2] text-[#FF7F11] border border-[#FF7F11]/20">
                {{ article.category }}
              </span>
              <span class="text-[11px] font-mono text-[#8C8685]">
                {{ article.readTime }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-snug">
              {{ article.title }}
            </h3>

            <!-- Excerpt -->
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              {{ article.excerpt }}
            </p>
          </div>

          <!-- Connected Ecosystem Pathway (Assessment → Product → Program → Service) -->
          <div class="px-6 py-4 bg-[#FBF6F6] border-t border-[#EAE4E4] space-y-2">
            <div class="text-[10px] font-mono uppercase tracking-wider text-[#8C8685] font-bold">
              Connected Next Steps:
            </div>
            <div class="grid grid-cols-4 gap-1 text-center font-mono text-[9px] sm:text-[10px]">
              <div class="p-1 rounded bg-white border border-[#EAE4E4] text-[#1A1A1A] font-semibold" title="Linked Assessment">
                📋 Assessment
              </div>
              <div class="p-1 rounded bg-white border border-[#EAE4E4] text-[#1A1A1A] font-semibold" title="Linked Tool/Product">
                ⚡ Product
              </div>
              <div class="p-1 rounded bg-white border border-[#EAE4E4] text-[#1A1A1A] font-semibold" title="Linked Course/Program">
                🎓 Program
              </div>
              <div class="p-1 rounded bg-white border border-[#EAE4E4] text-[#1A1A1A] font-semibold" title="Linked Coaching/Consulting">
                🤝 Service
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Bottom Content Ecosystem Bridge Banner -->
      <div class="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-[#EAE4E4] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-left">
          <div class="text-sm sm:text-base font-bold text-[#1A1A1A]">
            Every article connects you directly to actionable transformation
          </div>
          <div class="text-xs sm:text-sm text-[#524F4E]">
            Pathway: <span class="font-mono font-bold text-[#FF7F11]">Assessment &rarr; Product &rarr; Program &rarr; Service</span>
          </div>
        </div>

        <NuxtLink
          to="/scorecard"
          class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105"
        >
          <span>Find Your Next Step &rarr;</span>
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const selectedCategory = ref('All')

const categories = [
  'Mental Clarity',
  'Career',
  'Leadership',
  'Personal Growth',
  'Parenting',
  'Business',
  'Mindfulness'
]

interface Article {
  category: string
  title: string
  excerpt: string
  readTime: string
}

const articles: Article[] = [
  {
    category: 'Mental Clarity',
    title: 'How Cognitive Overload Drains Decision Quality (And How to Reset)',
    excerpt: 'Simple behavioral protocols to clear mental clutter, regain emotional baseline, and sharpen focus.',
    readTime: '4 min read'
  },
  {
    category: 'Career',
    title: 'The Mid-Career Inflection Point: Transitioning From Execution to Authority',
    excerpt: 'Why hard work alone hits a ceiling, and how strategic visibility elevates your professional trajectory.',
    readTime: '6 min read'
  },
  {
    category: 'Leadership',
    title: 'Calm Authority: Leading High-Stakes Teams Without Anxiety',
    excerpt: 'Frameworks for psychological safety, decisive prioritization, and clear team boundaries.',
    readTime: '5 min read'
  },
  {
    category: 'Personal Growth',
    title: 'Designing Habits That Survive High-Stress Weeks',
    excerpt: 'The micro-ritual framework that sustains daily momentum even when your schedule falls apart.',
    readTime: '5 min read'
  },
  {
    category: 'Parenting',
    title: 'Raising Resilient Kids in an Age of Instant Gratification',
    excerpt: 'Practical emotional intelligence skills and communication rituals for modern family dynamics.',
    readTime: '4 min read'
  },
  {
    category: 'Business',
    title: 'Moving From Calendar-Chained Expert to Scalable Digital Systems',
    excerpt: 'How packaging your tacit knowledge into structured offers unlocks true leverage and steady growth.',
    readTime: '7 min read'
  },
  {
    category: 'Mindfulness',
    title: 'The 3-Minute Presence Check: Grounding Practices for Busy Days',
    excerpt: 'Evidence-informed mindfulness techniques you can practice at your desk between meetings.',
    readTime: '3 min read'
  }
]

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'All') return articles
  return articles.filter(a => a.category === selectedCategory.value)
})
</script>
