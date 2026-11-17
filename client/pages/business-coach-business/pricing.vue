<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/business-coach-business" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Business Coach Guide</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">B2B Retainer Pricing</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Business Coach Pricing in India: Retainers, Milestones & ROI Formulas
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Discover how B2B business coaches in India structure monthly retainers of ₹50,000 to ₹3,00,000+ for MSME founders, startup CEOs, and enterprise clients.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">B2B Retainer & Milestone Pricing Tiers</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>SMB Strategy Retainer:</strong> ₹50,000 - ₹1,25,000 / month (2 strategy sessions + Slack/WhatsApp governance).</li>
              <li><strong>Growth Sprint Milestone:</strong> ₹1,50,000 - ₹4,00,000 (90-day sales/operations turnaround sprint).</li>
              <li><strong>Enterprise Board Advisory:</strong> ₹3,00,000 - ₹8,00,000+ / month (for companies with ₹50Cr+ annual turnover).</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your B2B Retainers</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to evaluate your enterprise pricing power.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your B2B Pricing &rarr;</UiButton>
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
  title: 'Business Coach Pricing in India — Digital Coach',
  description: 'Complete guide to business coaching pricing and retainer models in India for MSMEs, startups, and enterprise leadership.',
  keywords: 'business coach pricing India, business coaching retainers India, business coach charges in India'
})
</script>
