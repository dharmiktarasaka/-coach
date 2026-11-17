<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Business Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The 5 Profitable Coaching Business Models: Which Architecture Actually Scales?
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Not all coaching models are created equal. Compare the unit economics, founder time investment, and profit margins of the 5 most prevalent coaching business models before building your practice.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Why Your Business Model Determines Your Ceiling</h2>
            <p>
              Many coaches mistakenly attribute slow revenue growth to poor marketing or weak sales skills. In 90% of cases, the underlying problem is a flawed <strong>coaching business model</strong> that mathematically caps the founder’s income and burns out their calendar.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Model Design Axiom:</div>
            <p class="text-[#1A1A1A] font-medium">
              "A business model is not just how you deliver coaching; it is the mathematical equation connecting your pricing, time expenditure, acquisition costs, and profit margin."
            </p>
          </div>

          <div class="space-y-6">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Breakdown of the 5 Core Coaching Business Models</h2>

            <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
              <h3 class="font-display text-lg font-bold text-[#1A1A1A]">1. The 1-on-1 Hourly Retainer Model</h3>
              <p>Clients pay per session ($100–$500/hr) or monthly for 2–4 calls. <strong>Verdict:</strong> Great for initial market validation, but caps income at 15–20 clients and creates extreme calendar fatigue.</p>
            </div>

            <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
              <h3 class="font-display text-lg font-bold text-[#1A1A1A]">2. The Low-Ticket Course / Membership Model</h3>
              <p>Recurring $29–$99/month subscriptions or $197 self-paced courses. <strong>Verdict:</strong> High churn (&gt;10%/mo) and requires enormous top-of-funnel traffic. Typically unprofitable on paid ads without backend upsells.</p>
            </div>

            <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
              <h3 class="font-display text-lg font-bold text-[#1A1A1A]">3. The Hybrid Flagship Program (Recommended)</h3>
              <p>A $3,000–$10,000 12-week transformation combining an asynchronous curriculum vault, weekly diagnostic group calls, and milestone check-ins. <strong>Verdict:</strong> 85%+ gross margin, scales to 50–100+ active clients with 5–8 founder delivery hours/week.</p>
            </div>

            <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
              <h3 class="font-display text-lg font-bold text-[#1A1A1A]">4. High-End Masterminds & Peer Boards</h3>
              <p>$15,000–$50,000/year cohorts for established founders and executives. High retention and high lifetime value (LTV), but requires strong existing authority and high-caliber networks.</p>
            </div>

            <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
              <h3 class="font-display text-lg font-bold text-[#1A1A1A]">5. Enterprise Licensing & Corporate Advisory</h3>
              <p>Licensing your proprietary framework, training modules, and diagnostic scorecards to B2B companies for $25,000–$100,000+ annual contracts.</p>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Find Your Optimal Coaching Business Model</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free 5-minute diagnostic to determine the ideal business model and pricing tier for your specific expertise.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Business Model &rarr;</UiButton>
            </div>
          </div>
        </div>

        <footer class="border-t border-[#EAE4E4] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NuxtLink to="/resources" class="text-xs font-semibold text-[#FF7F11] hover:text-[#E66800]">&larr; Back to Resource Hub</NuxtLink>
          <div class="flex items-center gap-3">
            <UiButton to="/workshop" variant="secondary" size="sm">Attend Live Workshop</UiButton>
            <UiButton to="/apply" variant="primary" size="sm">Apply for Advisory</UiButton>
          </div>
        </footer>
      </article>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'The 5 Most Profitable Coaching Business Models — Digital Coach',
  description: 'Compare the 5 core coaching business models. Learn how to structure pricing, delivery, and margins for sustainable 7-figure scale.',
  keywords: 'coaching business model, types of coaching business models, hybrid coaching model, high ticket coaching model, coaching economics'
})
</script>
