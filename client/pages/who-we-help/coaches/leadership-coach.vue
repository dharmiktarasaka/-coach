<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help/coaches" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Coaches Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="amber" :dot="true">Niche Solution: Leadership Coaches</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD A LEADERSHIP COACHING <br />
            <span class="text-[#FF7F11]">PRACTICE.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Move from subjective management pep-talks to institutional enterprise diagnostics, team governance frameworks, and high-margin organizational retainers.
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
                The Enterprise Bottleneck
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Budget Cuts &amp; One-Off Workshops</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                When leadership coaching is pitched as general professional development, corporate HR departments slash budgets during downturns or limit you to one-day speaking engagements.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                The Executive Asset
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Operational Leadership Architecture</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                We position your leadership methodology around operational execution, cross-functional velocity, and team retention metrics that enterprise CXOs fund directly from P&amp;L budgets.
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Leadership Coaches</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Organizational Leadership Audit</div>
                <p class="text-xs text-[#524F4E]">Institutional scorecard measuring leadership alignment, execution friction, and communication debt.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Tiered Executive Retainers</div>
                <p class="text-xs text-[#524F4E]">Quarterly advisory structures commanding $7,500 to $20,000/mo across executive leadership teams.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. Inbound Enterprise Distribution</div>
                <p class="text-xs text-[#524F4E]">Whitepaper and case architecture targeting enterprise board members and executive sponsors.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Scalable Cohort Framework</div>
                <p class="text-xs text-[#524F4E]">Internal leadership academy frameworks that allow you to license your IP across multiple business units.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to scale your leadership advisory practice?</h4>
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
  title: 'Build a Leadership Coaching Practice — Digital Coach',
  description: 'Enterprise-grade leadership development frameworks with institutional buy-in. Transform leadership coaching into high-margin advisory retainers.'
})
</script>
