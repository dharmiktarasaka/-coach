<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help/coaches" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Coaches Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="amber" :dot="true">Niche Solution: Wellness Coaches</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD A WELLNESS COACHING <br />
            <span class="text-[#FF7F11]">BUSINESS.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Protocolize lifestyle, sleep, metabolic vitality, and stress management into high-retention subscription models and structured, high-ticket executive health transformations.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Start Coaching Scorecard &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Register for Workshop
            </UiButton>
          </div>
        </div>

        <!-- Problem / Transformation Breakdown -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6 rounded-2xl bg-red-50/70 border border-red-100 space-y-3">
              <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                The Free-App Ceiling
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Diet PDF Churn &amp; Low Compliance</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Selling workout routines or nutrition PDFs places you in direct competition with free mobile apps and social media noise, leading to 30-day drop-offs and minimal client compliance.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                The Vitality Operating System
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Biomarker &amp; Executive Energy Architecture</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                When you frame wellness as cognitive endurance, stress mitigation, and sustained executive energy, high-performing professionals readily invest $3,000 to $6,000 for guided transformation.
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Wellness Coaches</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Cognitive Energy &amp; Habit Audit</div>
                <p class="text-xs text-[#524F4E]">Proprietary intake diagnostics assessing sleep architecture, cortisol rhythm, and nutritional friction.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Tiered 12-Week Vitality Protocol</div>
                <p class="text-xs text-[#524F4E]">Phased habit installation replacing ad-hoc advice with systematic behavioral modification.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. High-Compliance Accountability Loop</div>
                <p class="text-xs text-[#524F4E]">Asynchronous biometric tracking and weekly audio voice check-ins with high client adherence.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Inbound Professional Health Funnel</div>
                <p class="text-xs text-[#524F4E]">Educational workshops that demonstrate how chronic stress impacts executive earnings.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to scale your wellness coaching practice?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Start Coaching Scorecard &rarr;
              </UiButton>
              <UiButton to="/apply" variant="secondary" size="md">
                Apply for Advisory
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Build a Wellness Coaching Business — Digital Coach',
  description: 'Package lifestyle, sleep, and physical energy protocols into high-retention coaching programs. Build a scalable wellness practice.'
})
</script>
