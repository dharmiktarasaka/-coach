<template>
  <section id="categories" class="py-20 md:py-28 bg-[#FBF6F6] border-t border-[#EAE4E4] relative overflow-hidden">
    <!-- Ambient background light accents -->
    <div class="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF7F11]/5 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#FF7F11]/5 blur-[120px] pointer-events-none"></div>

    <UiContainer size="xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAE4E4] text-[#FF7F11] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
          <span>Self-Identify Your Path</span>
        </div>

        <h2 class="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight leading-tight">
          What would you like help with?
        </h2>

        <p class="text-base sm:text-lg text-[#524F4E] font-normal leading-relaxed">
          Choose a growth area below to discover tailored coaching, practical digital tools, consulting, and actionable courses.
        </p>
      </div>

      <!-- 8 Category Navigation Cards Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <NuxtLink
          v-for="(cat, idx) in categories"
          :key="idx"
          :to="cat.link"
          class="group relative bg-white rounded-2xl p-6 border border-[#EAE4E4] hover:border-[#FF7F11]/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
        >
          <!-- Top Accent Light Line on Hover -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7F11] to-[#FF9334] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div>
            <!-- Emoji & Category Number Strip -->
            <div class="flex items-center justify-between mb-5">
              <div class="w-12 h-12 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm">
                {{ cat.emoji }}
              </div>
              <span class="text-[11px] font-mono font-bold text-[#8C8685] group-hover:text-[#FF7F11] transition-colors">
                0{{ idx + 1 }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="font-display font-bold text-lg sm:text-xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-snug mb-2">
              {{ cat.title }}
            </h3>

            <!-- Short Summary -->
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed mb-4">
              {{ cat.description }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              <span
                v-for="tag in cat.tags"
                :key="tag"
                class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F5EFEF] text-[#524F4E] group-hover:bg-[#FFF8F2] group-hover:text-[#FF7F11] transition-colors"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Bottom Action Link -->
          <div class="pt-4 border-t border-[#F5EFEF] flex items-center justify-between text-xs font-bold text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
            <span>Explore Programs</span>
            <span class="transform group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Quick Self-Assessment Helper Bar -->
      <div class="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE4E4] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center sm:text-left">
          <div class="text-sm sm:text-base font-bold text-[#1A1A1A]">
            Not sure where to start?
          </div>
          <div class="text-xs sm:text-sm text-[#524F4E]">
            Take the quick 2-minute diagnostic to self-identify your biggest priority and find the exact path for you.
          </div>
        </div>

        <NuxtLink
          to="/scorecard"
          class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#FF7F11]/25 hover:shadow-lg hover:scale-105 active:scale-95"
        >
          <span>Take Free Assessment</span>
          <span>&rarr;</span>
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
interface CategoryItem {
  emoji: string
  title: string
  description: string
  tags: string[]
  link: string
}

const categories: CategoryItem[] = [
  {
    emoji: '🧠',
    title: 'Mind & Emotional Wellbeing',
    description: 'Master mental resilience, reduce burnout and anxiety, and cultivate lasting emotional balance.',
    tags: ['Mindset', 'Emotional Balance', 'Burnout Relief'],
    link: '/programs?category=wellbeing'
  },
  {
    emoji: '🌱',
    title: 'Personal Growth',
    description: 'Develop empowering daily habits, unlock self-discovery, and align your life with your highest values.',
    tags: ['Habits', 'Self-Discovery', 'Life Vision'],
    link: '/programs?category=personal-growth'
  },
  {
    emoji: '💼',
    title: 'Career & Professional Growth',
    description: 'Accelerate career transitions, command higher value, and build an unstoppable professional presence.',
    tags: ['Career Transition', 'Performance', 'Presence'],
    link: '/programs?category=career'
  },
  {
    emoji: '👔',
    title: 'Leadership',
    description: 'Inspire high-performing teams, navigate complex decisions, and lead with clarity and authenticity.',
    tags: ['Team Mastery', 'Decision Making', 'Visionary'],
    link: '/programs?category=leadership'
  },
  {
    emoji: '🚀',
    title: 'Business & Entrepreneurship',
    description: 'Turn your knowledge into scalable systems, clear high-ticket offers, and predictable client pipelines.',
    tags: ['Offer Architecture', 'Client Acquisition', 'Scale'],
    link: '/programs?category=business'
  },
  {
    emoji: '❤️',
    title: 'Relationships & Family',
    description: 'Deepen emotional connections, communicate with clarity, and navigate family dynamics with confidence.',
    tags: ['Communication', 'Deep Connection', 'Family'],
    link: '/programs?category=relationships'
  },
  {
    emoji: '🧘',
    title: 'Mindfulness & Spiritual Growth',
    description: 'Ground yourself with daily mindful practices, inner silence, purposeful presence, and deeper connection.',
    tags: ['Meditation', 'Inner Peace', 'Purpose'],
    link: '/programs?category=mindfulness'
  },
  {
    emoji: '👧',
    title: 'Kids & Life Skills',
    description: 'Equip the next generation with emotional intelligence, confidence, practical life skills, and resilience.',
    tags: ['Life Skills', 'Resilience', 'Youth Coaching'],
    link: '/programs?category=kids-skills'
  }
]
</script>
