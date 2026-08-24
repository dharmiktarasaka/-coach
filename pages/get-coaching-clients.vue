<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Acquisition Engine</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            Predictable Client Acquisition Architecture for Modern Experts
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How to replace volatile word-of-mouth with engineered inbound and outbound pipelines that consistently attract pre-qualified decision-makers.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Danger of Referral Dependency</h2>
            <p>
              Referrals are wonderful when they arrive, but they have one catastrophic flaw: they cannot be turned up on demand. Relying 100% on referrals keeps your expert practice in an endless cycle of anxiety and unpredictable cash flow.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3-Channel Systematic Acquisition Model</h2>
            <div class="space-y-4">
              <div class="p-5 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <h3 class="font-display text-base font-bold text-[#FF7F11]">1. Diagnostic Lead Magnet Funnels</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">Using interactive scorecards to capture high-intent contact data while delivering instant diagnostic value.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <h3 class="font-display text-base font-bold text-[#FF7F11]">2. High-Trust Authority Essays & IP</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">Publishing deep tactical case breakdowns on LinkedIn and newsletters that pre-qualify corporate and executive buyers.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <h3 class="font-display text-base font-bold text-[#FF7F11]">3. Consultative Peer-Level Outreach</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">Direct outreach to past alumni and executive peers offering complimentary diagnostic audits rather than aggressive pitches.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Diagnose Your Acquisition Predictability</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to evaluate your client acquisition engine.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Free Growth Scorecard &rarr;
              </UiButton>
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
  title: 'Predictable Client Acquisition for Coaches & Consultants — Digital Coach',
  description: 'Learn how to build systematic inbound and outbound client acquisition channels without relying on unpredictable word-of-mouth.'
})
</script>
