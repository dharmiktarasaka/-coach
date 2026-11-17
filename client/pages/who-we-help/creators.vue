<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help" class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-mono font-bold">&larr; All Profiles</NuxtLink>
            <span class="text-[#D5CDCD]">&bull;</span>
            <UiBadge variant="amber">For Knowledge Creators & Thought Leaders</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            TURN AUDIENCE & KNOWLEDGE INTO A <br />
            <span class="text-[#FF7F11]">HIGH-VALUE BUSINESS ENGINE.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Stop relying on fickle brand sponsorships or cheap ₹999 ebooks. Build a backend business that monetizes your most committed top 1% audience through high-ticket transformational cohorts and strategic consulting.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take Creator Monetization Diagnostic &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Join Live Workshop
            </UiButton>
          </div>
        </div>

        <!-- Problem vs Solution Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 rounded-3xl bg-white border border-red-200 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-red-500"></span>
              The Low-Ticket Creator Grind
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Millions of Views, Low Profit</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              Pouring 40 hours a week into video production and social algorithms, only to earn meager ad splits or sell low-priced information products that have 80% refund rates and zero real student transformation.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#FF7F11]/40 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
              The High-Ticket Backend Architecture
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Monetizing the Top 1%</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              We help you build an enterprise backend. 99% of your content remains free top-of-funnel authority, while the top 1% of your audience invests ₹50,000–₹3,00,000 in your structured transformational accelerator.
            </p>
          </div>
        </div>

        <!-- What We Build for Creators -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              What Digital Coach Builds for Creators
            </h3>
            <p class="text-sm text-[#524F4E]">
              Turning social audience reach into high-margin, scalable enterprise backend infrastructure.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">01. Premium Flagship Cohort</div>
              <p class="text-xs text-[#524F4E]">Outcome-driven accelerator packaging that turns passive viewers into high-paying participants.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">02. Automated Funnel Architecture</div>
              <p class="text-xs text-[#524F4E]">Diagnostic quiz funnels that seamlessly segment high-intent buyers from casual viewers.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">03. High-Conversion Enrollment Team</div>
              <p class="text-xs text-[#524F4E]">SOPs and qualification protocols to enroll applicants without you ever taking sales calls.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">04. Evergreen Backend Retainers</div>
              <p class="text-xs text-[#524F4E]">Alumni masterminds providing ongoing monthly recurring revenue for your business.</p>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to monetize your knowledge at scale?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take the 5-Minute Diagnostic &rarr;
              </UiButton>
              <UiButton to="/apply" variant="secondary" size="md">
                Apply for Advisory Track
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
  title: 'Business Architecture for Creators — Digital Coach',
  description: 'Learn how Digital Coach helps knowledge creators transform social audience reach into high-ticket transformational programs and durable backend systems.'
})
</script>
