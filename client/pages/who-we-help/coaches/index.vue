<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">Audience Solution: Existing Coaches</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD THE BUSINESS BEHIND <br />
            <span class="text-[#FF7F11]">YOUR COACHING.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Stop trading individual hours for money, chasing random referrals, and repeating the same fundamentals in every single session.
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

          <!-- 6 Coach Niche Pathways -->
          <div class="space-y-6 pt-6 border-t border-[#EAE4E4]">
            <div class="text-center max-w-xl mx-auto space-y-2">
              <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Specialized Coaching Niche Pathways</h3>
              <p class="text-xs sm:text-sm text-[#524F4E]">Select your coaching discipline for customized transformation models, pricing structures, and client acquisition funnels.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <NuxtLink to="/who-we-help/coaches/life-coach" class="p-5 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] transition-all group shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-[#FF7F11] font-bold">Niche 01</div>
                  <h4 class="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">Life Coach Business</h4>
                  <p class="text-xs text-[#524F4E] mt-1">Package subjective life breakthroughs into tangible high-ticket milestones.</p>
                </div>
                <span class="text-xs font-semibold text-[#FF7F11] mt-3 inline-flex items-center gap-1">Explore Niche &rarr;</span>
              </NuxtLink>

              <NuxtLink to="/who-we-help/coaches/business-coach" class="p-5 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] transition-all group shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-[#FF7F11] font-bold">Niche 02</div>
                  <h4 class="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">Business Coach Business</h4>
                  <p class="text-xs text-[#524F4E] mt-1">Implement institutional diagnostics and high-retention advisory retainers.</p>
                </div>
                <span class="text-xs font-semibold text-[#FF7F11] mt-3 inline-flex items-center gap-1">Explore Niche &rarr;</span>
              </NuxtLink>

              <NuxtLink to="/who-we-help/coaches/career-coach" class="p-5 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] transition-all group shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-[#FF7F11] font-bold">Niche 03</div>
                  <h4 class="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">Career Coach Business</h4>
                  <p class="text-xs text-[#524F4E] mt-1">Build executive career transition systems and compensation negotiation offers.</p>
                </div>
                <span class="text-xs font-semibold text-[#FF7F11] mt-3 inline-flex items-center gap-1">Explore Niche &rarr;</span>
              </NuxtLink>

              <NuxtLink to="/who-we-help/coaches/wellness-coach" class="p-5 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] transition-all group shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-[#FF7F11] font-bold">Niche 04</div>
                  <h4 class="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">Wellness Coach Business</h4>
                  <p class="text-xs text-[#524F4E] mt-1">Protocolize lifestyle, sleep, and physical vitality into subscription accountability.</p>
                </div>
                <span class="text-xs font-semibold text-[#FF7F11] mt-3 inline-flex items-center gap-1">Explore Niche &rarr;</span>
              </NuxtLink>

              <NuxtLink to="/who-we-help/coaches/leadership-coach" class="p-5 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] transition-all group shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-[#FF7F11] font-bold">Niche 05</div>
                  <h4 class="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">Leadership Coach Business</h4>
                  <p class="text-xs text-[#524F4E] mt-1">Enterprise-grade leadership development frameworks with institutional buy-in.</p>
                </div>
                <span class="text-xs font-semibold text-[#FF7F11] mt-3 inline-flex items-center gap-1">Explore Niche &rarr;</span>
              </NuxtLink>

              <NuxtLink to="/who-we-help/coaches/spiritual-coach" class="p-5 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] transition-all group shadow-sm flex flex-col justify-between">
                <div>
                  <div class="text-xs font-mono text-[#FF7F11] font-bold">Niche 06</div>
                  <h4 class="font-display font-bold text-base text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">Spiritual Coach Business</h4>
                  <p class="text-xs text-[#524F4E] mt-1">Ethical, grounded consciousness and purpose advisory without pseudo-guarantees.</p>
                </div>
                <span class="text-xs font-semibold text-[#FF7F11] mt-3 inline-flex items-center gap-1">Explore Niche &rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to build an engineered business engine for your coaching?</h4>
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
  title: 'Business Architecture for 1-on-1 and Cohort Coaches — Digital Coach',
  description: 'Learn how Digital Coach helps coaches escape the hourly billing trap and construct scalable, high-ticket transformation architectures.'
})
</script>
