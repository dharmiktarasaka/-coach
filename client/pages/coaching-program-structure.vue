<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Program Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            High-Ticket Coaching Program Structure: The 12-Week Milestone Blueprint
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How to structure a signature 90-day coaching program that delivers exceptional client transformations, maintains an 85%+ completion rate, and protects the founder’s calendar.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3-Phase Structure of a Flagship Program</h2>
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 1: Foundation & Diagnostic Baseline (Weeks 1–3)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Audit current workflows, establish baseline KPIs, and eliminate immediate operational bottlenecks.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 2: Core Execution & Implementation Sprints (Weeks 4–8)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Deploy proprietary frameworks, templates, and SOPs with weekly diagnostic group reviews.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Phase 3: Optimization, Autonomy & Scale (Weeks 9–12)</h3>
                <p class="text-xs text-[#524F4E] mt-1">Stress-test client systems, review final KPIs, and transition into long-term alumni masterminds.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Program Structure</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your curriculum structure is optimized for client retention.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Program Structure &rarr;</UiButton>
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
  title: 'Coaching Program Structure Blueprint — Digital Coach',
  description: 'How to structure a high-ticket coaching program. Milestone frameworks, curriculum design, and hybrid delivery models.',
  keywords: 'coaching program structure, how to structure coaching program, 12 week coaching program template, coaching curriculum structure'
})
</script>
