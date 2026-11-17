<template>
  <section class="py-20 md:py-32 bg-[#FBF6F6] border-y border-[#EAE4E4] relative">
    <UiContainer size="xl">
      <!-- Heading: 7. THE METHODOLOGY -->
      <UiSectionHeading
        tag="How We Actually Work"
        tag-variant="amber"
        title="A BUILD PROCESS, NOT ANOTHER COURSE."
        subtitle="No pre-recorded videos. No motivational fluff. Digital Coach is a hands-on build — we diagnose, decide, and build the real assets your business needs, step by step."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- Interactive 6-Step Methodology Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(step, idx) in processSteps"
          :key="step.title"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-3xl p-8 transition-all duration-300 group hover:-translate-y-1 shadow-md flex flex-col justify-between"
        >
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
              <span class="font-mono text-xs font-bold text-white bg-[#FF7F11] px-2.5 py-1 rounded-full">
                Step 0{{ idx + 1 }}
              </span>
              <span class="text-xs text-[#8C8685] font-mono font-semibold">{{ step.stage }}</span>
            </div>

            <h3 class="font-display font-black text-xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
              {{ step.title }}
            </h3>

            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              {{ step.description }}
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-[#EAE4E4] space-y-2">
            <div class="text-[11px] font-mono text-[#8C8685] uppercase tracking-wider font-bold">Key Output:</div>
            <div class="text-xs font-semibold text-[#1A1A1A] flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-[#FF7F11]"></span>
              {{ step.keyDeliverable }}
            </div>
          </div>
        </div>
      </div>

      <!-- 8. HOW IT FITS TOGETHER -->
      <div class="mt-16 bg-white border border-[#EAE4E4] rounded-3xl p-8 lg:p-10 shadow-xl">
        <div class="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <UiBadge variant="amber">Why It Works</UiBadge>
          <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
            Four Things, Working As One.
          </h3>
          <p class="text-xs sm:text-sm text-[#524F4E]">
            AI can’t rescue a weak offer. And great expertise can’t scale without systems. The results come from combining all four:
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
            <div class="text-[#FF7F11] font-black font-display text-base sm:text-lg">1. Your Expertise</div>
            <p class="text-xs text-[#524F4E]">The real knowledge and results only you have.</p>
          </div>
          <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
            <div class="text-[#FF7F11] font-black font-display text-base sm:text-lg">2. Our Method</div>
            <p class="text-xs text-[#524F4E]">The proven 9-layer framework and playbooks.</p>
          </div>
          <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
            <div class="text-[#FF7F11] font-black font-display text-base sm:text-lg">3. Real Systems</div>
            <p class="text-xs text-[#524F4E]">Connected pipelines, portals, and automations.</p>
          </div>
          <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
            <div class="text-[#FF7F11] font-black font-display text-base sm:text-lg">4. AI Leverage</div>
            <p class="text-xs text-[#524F4E]">Smart assistance for research, prep, and follow-up.</p>
          </div>
        </div>

        <div class="mt-6 text-center text-xs sm:text-sm font-semibold text-[#1A1A1A]">
          Alone, each is partial. Together, they compound.
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const processSteps = [
  {
    stage: 'Step 1: Diagnose',
    title: 'Diagnose',
    description: 'We find exactly where your business stands, across all nine layers.',
    keyDeliverable: '→ A clear picture of your gaps'
  },
  {
    stage: 'Step 2: Decide',
    title: 'Decide',
    description: 'We pinpoint the one constraint holding back your revenue right now.',
    keyDeliverable: '→ A focused 90-day plan'
  },
  {
    stage: 'Step 3: Build',
    title: 'Build',
    description: 'We create your offer, positioning, and client-attraction assets.',
    keyDeliverable: '→ Ready-to-use business assets'
  },
  {
    stage: 'Step 4: Systems',
    title: 'Set Up Systems',
    description: 'We put your pipeline, CRM, and client portals in place.',
    keyDeliverable: '→ A business that runs itself'
  },
  {
    stage: 'Step 5: Refine',
    title: 'Test & Refine',
    description: 'We run real sprints and tune what’s working with live data.',
    keyDeliverable: '→ Better conversion, proven'
  },
  {
    stage: 'Step 6: Scale',
    title: 'Scale & Leverage',
    description: 'We add team, AI, and higher tiers so you grow without grinding.',
    keyDeliverable: '→ A durable, high-margin business'
  }
]
</script>
