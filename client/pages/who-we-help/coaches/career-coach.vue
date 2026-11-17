<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help/coaches" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Coaches Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="amber" :dot="true">Niche Solution: Career Coaches</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD A CAREER COACHING <br />
            <span class="text-[#FF7F11]">BUSINESS.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Transition from low-ticket resume reviews to high-value executive career transition architectures, compensation negotiation frameworks, and premium placement advisories.
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
                The Commodity Trap
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Resume Writing &amp; $150 One-Off Sessions</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Competing on resume edits and mock interviews commoditizes your expertise against AI tools and low-cost freelancers, leaving you trapped in transactional, exhausting cycles.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Executive Transition System
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Career Acceleration &amp; Compensation ROI</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                When you frame your offer around adding $40k–$100k+ in compensation via strategic executive positioning, a $5,000–$8,000 coaching package delivers undeniable 10x ROI.
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Career Coaches</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Hidden Executive Job Market Funnel</div>
                <p class="text-xs text-[#524F4E]">Reverse-recruiting and warm intro frameworks that bypass automated ATS resume filters.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Executive Compensation Blueprint</div>
                <p class="text-xs text-[#524F4E]">Equity, base, and bonus negotiation scripts that create measurable financial upside for clients.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. High-Conversion Diagnostic Assessment</div>
                <p class="text-xs text-[#524F4E]">Career inflection audit that pinpoints readiness for VP/Director/C-Suite advancement.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Outcome-Tied Tiered Packages</div>
                <p class="text-xs text-[#524F4E]">Transforming hourly pricing into $4,000 to $10,000 flagship transition acceleration programs.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to scale your career coaching business?</h4>
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
  title: 'Build a Career Coaching Business — Digital Coach',
  description: 'Move from commodity resume reviews to high-ticket executive career acceleration programs. Scale your career coaching practice.'
})
</script>
