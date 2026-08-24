<template>
  <section
    ref="heroContainerRef"
    class="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-white"
  >
    <!-- Ambient ambient glow effects -->
    <div class="absolute top-0 left-1/4 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-hero-gradient pointer-events-none opacity-40"></div>
    <div class="absolute top-1/3 right-1/4 w-full max-w-4xl h-[500px] bg-indigo-gradient pointer-events-none opacity-30"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

    <UiContainer size="xl">
      <!-- 2-Column Layout: Animated Elevator on Left, Grand Bold Typography on Right (Matching User Reference) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Left Side (6 cols): Animated Business Growth Elevator / Lift Structure -->
        <div class="lg:col-span-6 order-2 lg:order-1 z-10">
          <div class="relative">
            <!-- Floating Floor Indicator Label -->
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span class="w-2 h-2 rounded-full bg-gold-500 animate-ping"></span>
              Vertical Business Operating System &bull; Active Transit
            </div>

            <!-- The Architectural Elevator Component -->
            <HomeBusinessElevatorVisual :scroll-progress="scrollProgress" />
          </div>
        </div>

        <!-- Right Side (6 cols): Grand High-Impact Typography & Narrative (Matching Reference Style) -->
        <div class="lg:col-span-6 order-1 lg:order-2 space-y-8 text-left z-10">
          
          <!-- Category Tag Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950 text-white text-xs font-bold uppercase tracking-wider shadow-md">
            <span class="w-2 h-2 rounded-full bg-gold-400"></span>
            The Expert Business Operating System
          </div>

          <!-- Master Headline (Huge Bold Typography Inspired by Reference) -->
          <div class="space-y-2">
            <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-purple-950 leading-[1.04]">
              BUILD THE BUSINESS <br />
              <span class="text-gradient-gold">BEHIND YOUR</span> <br />
              <span class="text-purple-950">EXPERTISE.</span>
            </h1>
          </div>

          <!-- Narrative Body Copy -->
          <p class="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
            Elevate your tacit knowledge from unstructured hourly sessions into clear flagship offers, credible positioning, predictable inbound acquisition, and autonomous business systems.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-start gap-4 pt-2">
            <UiButton
              to="/scorecard"
              variant="primary"
              size="xl"
              custom-class="w-full sm:w-auto shadow-glow-gold"
            >
              Take Free Growth Scorecard
              <template #trailing>
                <svg class="w-4 h-4 text-purple-950 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </template>
            </UiButton>

            <UiButton
              to="/how-it-works"
              variant="secondary"
              size="xl"
              custom-class="w-full sm:w-auto"
            >
              Explore the 9 Layers &rarr;
            </UiButton>
          </div>

          <!-- Proof & Metric Strip -->
          <div class="pt-6 border-t border-purple-900/10 grid grid-cols-3 gap-4 text-left">
            <div class="space-y-0.5">
              <div class="font-display text-2xl font-bold text-purple-950">9 Layers</div>
              <div class="text-xs text-slate-500 font-mono">End-to-End System</div>
            </div>
            <div class="space-y-0.5">
              <div class="font-display text-2xl font-bold text-purple-950">35%+ Close</div>
              <div class="text-xs text-slate-500 font-mono">Diagnostic Triage</div>
            </div>
            <div class="space-y-0.5">
              <div class="font-display text-2xl font-bold text-purple-950">Zero Hype</div>
              <div class="text-xs text-slate-500 font-mono">Real Business IP</div>
            </div>
          </div>

        </div>

      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const heroContainerRef = ref<HTMLElement | null>(null)
const scrollProgress = ref(0)

const onScroll = () => {
  if (import.meta.client && heroContainerRef.value) {
    const rect = heroContainerRef.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Calculate progress as hero is scrolled through viewport
    if (rect.top <= 0) {
      const scrolled = Math.abs(rect.top)
      const total = Math.max(1, rect.height - windowHeight / 2)
      scrollProgress.value = Math.min(1, Math.max(0, scrolled / total))
    } else {
      scrollProgress.value = 0
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', onScroll)
  }
})
</script>
