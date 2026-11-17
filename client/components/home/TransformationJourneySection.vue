<template>
  <section class="py-20 md:py-32 relative overflow-hidden bg-[#FBF6F6] border-t border-[#EAE4E4]">
    <UiContainer size="xl">
      <!-- Section Heading: 6. THE PROGRESSION -->
      <UiSectionHeading
        tag="The Path"
        tag-variant="amber"
        title="FROM EXPERT TO A BUSINESS THAT ACTUALLY RUNS."
        subtitle="Real growth isn’t a lucky streak of tactics. It’s a clear progression — from raw expertise to a business that mostly runs itself."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- Visual Progression Timeline / Stepper Journey -->
      <div class="relative">
        <!-- Connecting Track Line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF7F11]/20 via-[#FF7F11]/60 to-[#FF7F11]/20 -translate-y-1/2 z-0"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          <div
            v-for="(step, idx) in journeySteps"
            :key="step.title"
            class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between shadow-md"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="w-8 h-8 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center font-mono text-xs font-bold text-[#FF7F11] group-hover:bg-[#FF7F11] group-hover:text-white transition-colors shadow-sm">
                  0{{ idx + 1 }}
                </span>
                <span class="text-[10px] font-mono text-[#8C8685] uppercase font-bold">{{ step.phase }}</span>
              </div>
              <h4 class="font-display text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#FF7F11] transition-colors">
                {{ step.title }}
              </h4>
              <p class="text-xs text-[#524F4E] leading-relaxed">
                {{ step.description }}
              </p>
            </div>

            <div class="mt-6 pt-4 border-t border-[#EAE4E4] text-[11px] text-[#8C8685] flex items-center justify-between">
              <span class="text-[#FF7F11] font-bold font-mono">{{ step.output }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Supporting Banner -->
      <div class="mt-14 p-6 rounded-2xl bg-white border border-[#EAE4E4] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 rounded-xl bg-[#FF7F11]/15 border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] shrink-0 font-bold">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div class="text-sm font-bold text-[#1A1A1A]">Not sure which stage you’re in?</div>
            <div class="text-xs text-[#524F4E]">Find your real constraint before you spend months building the wrong thing.</div>
          </div>
        </div>
        <UiButton to="/scorecard" variant="primary" size="md" custom-class="shrink-0">
          Take the Growth Scorecard &rarr;
        </UiButton>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const journeySteps = [
  {
    phase: '1. Foundation',
    title: 'Expertise & Positioning',
    description: 'Turn what you know into a clear position that attracts the right people.',
    output: '→ A market you own'
  },
  {
    phase: '2. Packaging',
    title: 'Offer & Authority',
    description: 'Shape your work into one signature program with proof behind it.',
    output: '→ A flagship offer'
  },
  {
    phase: '3. Pipeline',
    title: 'Acquisition & Conversion',
    description: 'Build steady lead flow and a consultation that converts.',
    output: '→ Predictable clients'
  },
  {
    phase: '4. Leverage',
    title: 'Delivery & Systems',
    description: 'Set up portals and workflows so you’re not the bottleneck.',
    output: '→ A business that runs'
  },
  {
    phase: '5. Scale',
    title: 'AI & Growth',
    description: 'Add AI, team, and higher-tier offers to grow without grinding harder.',
    output: '→ Lasting value'
  }
]
</script>
