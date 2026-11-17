<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">Client Transformations &bull; Real Proof</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            REAL JOURNEYS. <br />
            <span class="text-[#FF7F11]">REAL IMPLEMENTATION.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            See how coaches, consultants, corporate trainers, and specialists turned volatile trading-hours practices into predictable, scalable high-ticket business systems.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/apply" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Apply to Work With Us &rarr;
            </UiButton>
            <UiButton to="/scorecard" variant="secondary" size="lg">
              Take Free Scorecard
            </UiButton>
          </div>
        </div>

        <!-- Real Implementation Case Studies Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Case 1 -->
          <div class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11] rounded-3xl p-8 sm:p-10 shadow-xl transition-all space-y-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
                <UiBadge variant="amber">Executive Coach</UiBadge>
                <span class="text-xs font-mono text-[#8C8685]">90-Day Sprint</span>
              </div>
              <h3 class="font-display font-bold text-2xl text-[#1A1A1A]">From $150/hr Sessions to $7,500 Retainers</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Replaced pay-as-you-go calendar chaos with a standardized 12-week Executive Presence & Transition Sprint, eliminating 20 weekly low-ticket hours while tripling monthly revenue.
              </p>
              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1">
                <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Key Transformation:</div>
                <p class="text-xs text-[#1A1A1A] font-medium">Standardized 3-tier milestone roadmap + inbound LinkedIn diagnostic audit.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-[#EAE4E4]">
              <UiButton to="/apply" variant="primary" size="sm" block>Apply for Transformation &rarr;</UiButton>
            </div>
          </div>

          <!-- Case 2 -->
          <div class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11] rounded-3xl p-8 sm:p-10 shadow-xl transition-all space-y-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
                <UiBadge variant="amber">Management Consultant</UiBadge>
                <span class="text-xs font-mono text-[#8C8685]">120-Day Implementation</span>
              </div>
              <h3 class="font-display font-bold text-2xl text-[#1A1A1A]">Replacing RFP Bidding with a $3k Paid Diagnostic</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Stopped writing uncompensated 30-page corporate proposals. Installed a paid Rapid Operational Assessment that corporate clients purchase to scope their own bottlenecks.
              </p>
              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1">
                <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Key Transformation:</div>
                <p class="text-xs text-[#1A1A1A] font-medium">100% close rate on follow-on $12k/quarter execution retainers.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-[#EAE4E4]">
              <UiButton to="/apply" variant="primary" size="sm" block>Apply for Transformation &rarr;</UiButton>
            </div>
          </div>

          <!-- Case 3 -->
          <div class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11] rounded-3xl p-8 sm:p-10 shadow-xl transition-all space-y-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
                <UiBadge variant="amber">Corporate Trainer</UiBadge>
                <span class="text-xs font-mono text-[#8C8685]">60-Day Sprint</span>
              </div>
              <h3 class="font-display font-bold text-2xl text-[#1A1A1A]">Packaging 1-Day Workshops into Annual Cohort Licenses</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Transformed volatile single-day corporate training gigs into an institutional year-long Leadership Acceleration Academy licensed to mid-market enterprises.
              </p>
              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1">
                <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Key Transformation:</div>
                <p class="text-xs text-[#1A1A1A] font-medium">Predictable recurring contractual revenue and protected intellectual property.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-[#EAE4E4]">
              <UiButton to="/apply" variant="primary" size="sm" block>Apply for Transformation &rarr;</UiButton>
            </div>
          </div>

          <!-- Case 4 -->
          <div class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11] rounded-3xl p-8 sm:p-10 shadow-xl transition-all space-y-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
                <UiBadge variant="amber">Domain Author &amp; Creator</UiBadge>
                <span class="text-xs font-mono text-[#8C8685]">90-Day Sprint</span>
              </div>
              <h3 class="font-display font-bold text-2xl text-[#1A1A1A]">Monetizing 50k Social Followers into Qualified Pipeline</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Escaped low-margin $29 ebook sales. Built an automated Diagnostic Assessment funnel that filters social followers into $4,500 private advisory clients on autopilot.
              </p>
              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1">
                <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Key Transformation:</div>
                <p class="text-xs text-[#1A1A1A] font-medium">Predictable weekly applications without high-pressure DM sales tactics.</p>
              </div>
            </div>
            <div class="pt-4 border-t border-[#EAE4E4]">
              <UiButton to="/apply" variant="primary" size="sm" block>Apply for Transformation &rarr;</UiButton>
            </div>
          </div>
        </div>

        <!-- Bottom CTA Block -->
        <div class="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE4E4] text-center max-w-4xl mx-auto space-y-4 shadow-lg">
          <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Ready to engineer your own business case study?</h3>
          <p class="text-sm text-[#524F4E] max-w-xl mx-auto">
            Take the free 5-minute Growth Scorecard to diagnose your positioning clarity, offer leverage, and acquisition systems.
          </p>
          <div class="pt-2 flex items-center justify-center gap-4">
            <UiButton to="/apply" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Apply for Advisory &rarr;
            </UiButton>
            <UiButton to="/scorecard" variant="secondary" size="lg">
              Start Free Scorecard
            </UiButton>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Real Journeys. Real Implementation. — Digital Coach Case Studies',
  description: 'Explore authentic transformation breakdowns showing how coaches, consultants, and experts built predictable, high-ticket business systems.'
})
</script>
