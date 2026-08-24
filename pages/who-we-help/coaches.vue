<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">Audience Solution: 1-on-1 & Cohort Coaches</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            MOVE BEYOND THE HOURLY TRAP AND <br />
            <span class="text-[#FF7F11]">BUILD A SCALABLE COACHING ASSET.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Stop trading individual hours for money, chasing random referrals, and repeating the same fundamentals in every single session.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Diagnose Your Coaching Business &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Join Live Workshop
            </UiButton>
          </div>
        </div>

        <!-- Problem / Transformation Breakdown -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6 rounded-2xl bg-red-50/70 border border-red-100 space-y-3">
              <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                The Coaching Ceiling
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Why Most Coaches Burn Out</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                When you sell blocks of 1-on-1 hours, your income is physically capped by 20–30 client hours per week. Vacations stop revenue, client acquisition is sporadic, and you are constantly explaining the same basic foundational concepts.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                The Flagship Transformation Engine
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">How We Re-Architect Your Practice</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                We codify your core process into an asynchronous resource portal, restructure your pricing into a 3-tier flagship transformation package, and install automated CRM pipelines that attract qualified inbound clients.
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Coaches</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Flagship Transformation Architecture</div>
                <p class="text-xs text-[#524F4E]">Fixed milestone packages priced on outcomes rather than session duration.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Asynchronous Delivery Portals</div>
                <p class="text-xs text-[#524F4E]">Curricula and onboarding modules that eliminate repetitive foundational teaching.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. Consultative Diagnostic Scripts</div>
                <p class="text-xs text-[#524F4E]">Triage diagnostic scripts that convert with 35%+ close rates without high-pressure pitching.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Automated Lead Nurture CRM</div>
                <p class="text-xs text-[#524F4E]">WhatsApp and email automations ensuring no prospective client slips through the cracks.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to build an engineered business engine for your coaching?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take the 5-Minute Coaching Diagnostic &rarr;
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
  title: 'Business Architecture for 1-on-1 and Cohort Coaches — Digital Coach',
  description: 'Learn how Digital Coach helps coaches escape the hourly billing trap and construct scalable, high-ticket transformation architectures.'
})
</script>
