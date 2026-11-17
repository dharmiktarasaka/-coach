<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Growth Roadmap</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Coaching Business Roadmap: From Zero to $50K/Month in 4 Phases
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            A chronological timeline detailing the exact actions, systems, and metrics to focus on at each milestone of your coaching business journey.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Chronological Milestones</h2>
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 1: Validation ($0 - $10k/mo)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Sign first 5 beta clients via organic authority; refine the transformation curriculum based on live student feedback.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 2: Standardization ($10k - $25k/mo)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Transition from 1-on-1 to hybrid delivery; launch diagnostic scorecard and structured discovery call scripts.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 3: Acquisition Scaling ($25k - $50k/mo)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Deploy paid workshop or VSL funnels; automate CRM pipeline and onboarding workflows.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 4: Institutional Equity ($50k+/mo)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Hire junior cohort coaches; introduce backend alumni masterminds and enterprise corporate licensing.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Where You Are on the Roadmap</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose which phase of the roadmap you are currently in.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Growth Phase &rarr;</UiButton>
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
  title: 'The Coaching Business Roadmap — Digital Coach',
  description: 'The 4-phase strategic roadmap for growing a coaching practice from $0 to $50k+ per month systematically.',
  keywords: 'coaching business roadmap, coaching practice milestones, how to scale coaching revenue, coaching business growth stages'
})
</script>
