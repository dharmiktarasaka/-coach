<template>
  <section id="how-to-grow" class="py-20 md:py-32 bg-white border-t border-[#EAE4E4] relative overflow-hidden">
    <!-- Ambient background light accents -->
    <div class="absolute top-1/2 left-0 w-96 h-96 bg-[#FF7F11]/5 rounded-full blur-[140px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#FF7F11]/5 rounded-full blur-[140px] pointer-events-none"></div>

    <UiContainer size="xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F2] border border-[#FF7F11]/25 text-[#FF7F11] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
          <span>Growth Modalities</span>
        </div>

        <h2 class="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight uppercase leading-tight">
          Choose how you want to grow
        </h2>

        <p class="text-base sm:text-lg text-[#524F4E] font-normal leading-relaxed">
          Whether you want free self-assessments, structured learning, daily digital practice, or direct 1:1 expert support — find the exact format that matches your rhythm.
        </p>
      </div>

      <!-- 5 Growth Modality Cards Grid (5 cols on xl, 3+2 on md, 1 on sm) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <NuxtLink
          v-for="(modality, idx) in modalities"
          :key="modality.title"
          :to="modality.link"
          class="group relative bg-[#FBF6F6] hover:bg-white rounded-2xl p-6 sm:p-7 border border-[#EAE4E4] hover:border-[#FF7F11] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
        >
          <!-- Top Accent Light Line on Hover -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF7F11] to-[#FF9334] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div>
            <!-- Icon & Number Header -->
            <div class="flex items-center justify-between mb-6">
              <div class="w-12 h-12 rounded-xl bg-white group-hover:bg-[#FFF8F2] border border-[#EAE4E4] group-hover:border-[#FF7F11]/30 flex items-center justify-center text-2xl transition-all duration-300 shadow-sm group-hover:scale-110">
                {{ modality.icon }}
              </div>
              <span class="font-mono text-xs font-bold text-[#8C8685] group-hover:text-[#FF7F11] transition-colors">
                0{{ idx + 1 }}
              </span>
            </div>

            <!-- Modality Step Tag -->
            <div class="text-[10px] font-mono font-black uppercase tracking-widest text-[#FF7F11] mb-1.5">
              {{ modality.tag }}
            </div>

            <!-- Title -->
            <h3 class="font-display font-black text-xl sm:text-2xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-tight mb-3">
              {{ modality.title }}
            </h3>

            <!-- Description -->
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed mb-6">
              {{ modality.description }}
            </p>

            <!-- Format Highlights -->
            <div class="space-y-2 mb-6">
              <div
                v-for="item in modality.highlights"
                :key="item"
                class="flex items-center gap-2 text-xs text-[#1A1A1A] font-medium"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-[#FF7F11] shrink-0"></span>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action CTA -->
          <div class="pt-4 border-t border-[#EAE4E4] group-hover:border-[#FF7F11]/20 flex items-center justify-between text-xs font-bold text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
            <span>{{ modality.actionText }}</span>
            <span class="transform group-hover:translate-x-1.5 transition-transform duration-200">&rarr;</span>
          </div>
        </NuxtLink>
      </div>

      <!-- Bottom Integrated Pathway Banner -->
      <div class="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-[#FF7F11] text-white flex items-center justify-center text-xl font-bold shrink-0 shadow-md">
            🎯
          </div>
          <div>
            <div class="text-sm sm:text-base font-bold text-[#1A1A1A]">
              Combine multiple formats for maximum impact
            </div>
            <div class="text-xs sm:text-sm text-[#524F4E]">
              From self-paced tools to immersive 1:1 advisory, build a flexible learning journey customized for your goals.
            </div>
          </div>
        </div>

        <NuxtLink
          to="/programs"
          class="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1A1A1A] hover:bg-[#2C2928] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
        >
          <span>View All Formats</span>
          <span>&rarr;</span>
        </NuxtLink>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
interface ModalityItem {
  icon: string
  tag: string
  title: string
  description: string
  highlights: string[]
  actionText: string
  link: string
}

const modalities: ModalityItem[] = [
  {
    icon: '🧭',
    tag: 'Stage 01',
    title: 'EXPLORE',
    description: 'Free resources and assessments.',
    highlights: ['Growth Scorecard', 'Diagnostic Guides', 'Free Blueprints'],
    actionText: 'Explore Free Resources',
    link: '/scorecard'
  },
  {
    icon: '🎓',
    tag: 'Stage 02',
    title: 'LEARN',
    description: 'Courses and structured programs.',
    highlights: ['Video Masterclasses', 'Structured Modules', 'Action Frameworks'],
    actionText: 'Explore Courses',
    link: '/programs'
  },
  {
    icon: '⚡',
    tag: 'Stage 03',
    title: 'PRACTICE',
    description: 'Workbooks, journals, audio and digital tools.',
    highlights: ['Execution Workbooks', 'Guided Audio Sessions', 'Digital Toolkits'],
    actionText: 'Access Practice Tools',
    link: '/shop'
  },
  {
    icon: '🤝',
    tag: 'Stage 04',
    title: 'GET SUPPORT',
    description: 'Coaching and consulting.',
    highlights: ['1:1 Strategic Advisory', 'Bespoke Roadmaps', 'Hands-On Guidance'],
    actionText: 'Get 1:1 Support',
    link: '/coaching-business-system'
  },
  {
    icon: '🌐',
    tag: 'Stage 05',
    title: 'CONNECT',
    description: 'Find appropriate experts.',
    highlights: ['Vetted Specialist Network', 'Tailored Matchmaking', 'Community Access'],
    actionText: 'Find Experts',
    link: '/how-it-works'
  }
]
</script>
