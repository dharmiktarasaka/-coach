<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help/coaches" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Coaches Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="amber" :dot="true">Niche Solution: Life Coaches</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD A LIFE COACHING <br />
            <span class="text-[#FF7F11]">BUSINESS.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Move beyond abstract "mindset & motivation" sessions. Learn how high-performing life coaches package emotional breakthroughs into structured, high-ticket transformation architectures.
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
                The Life Coaching Trap
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Abstract Offers &amp; Low Willingness to Pay</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Selling "unlimited hourly sessions" or "unlocking potential" leads to price resistance, non-committal clients, and exhaustion. Clients struggle to justify premium investments for open-ended conversation.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                The Productized Transformation
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Milestone-Based Breakthrough Roadmaps</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                We anchor your practice around concrete life inflection points (executive burnout, high-stakes career transitions, post-divorce reinvention) with locked boundaries and premium pricing ($3k–$10k+).
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Life Coaches</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Concrete Milestone Roadmap</div>
                <p class="text-xs text-[#524F4E]">Turning subjective breakthroughs into tangible 12-week stages with measurable progress markers.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Tiered Flagship Packages</div>
                <p class="text-xs text-[#524F4E]">Replacing $100/hr pay-as-you-go with $3,000 to $7,500 outcome-based packages.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. Inbound Qualification Funnels</div>
                <p class="text-xs text-[#524F4E]">Diagnostic scorecards that filter out casual tire-kickers and attract committed, coachable clients.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Asynchronous Support Infrastructure</div>
                <p class="text-xs text-[#524F4E]">Loom/WhatsApp check-in protocols that protect your calendar while accelerating client breakthroughs.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to scale your life coaching practice?</h4>
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
  title: 'Build a Life Coaching Business — Digital Coach',
  description: 'Move beyond the hourly trap. Learn how to package life coaching into high-ticket transformation architectures with predictable client systems.'
})
</script>
