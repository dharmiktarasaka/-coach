<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Lead Generation</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Lead Generation for Coaches: Attracting Pre-Qualified, High-Intent Buyers
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Generating hundreds of low-intent leads wastes time. Discover how top coaches engineer lead generation systems that filter exclusively for buyers with budget, urgency, and respect for your authority.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Volume Leads vs. Intent Leads</h2>
            <p>
              In high-ticket coaching, having 10,000 unengaged email subscribers is a vanity metric. You only need 15–20 highly qualified discovery conversations per month to build a $500,000/year coaching enterprise.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 High-Intent Lead Generation Assets</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Interactive Diagnostic Scorecards:</strong> Assesses prospective clients across your proprietary benchmarks and provides instant personalized gap analyses.</li>
              <li><strong>Teardown Case Study Essays:</strong> Detailed breakdowns of how you resolved an exact symptom for a past client.</li>
              <li><strong>Live Diagnostic Masterclasses:</strong> Interactive group workshops demonstrating your diagnostic process live.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Grade Your Lead Generation Quality</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free 5-minute Growth Scorecard to diagnose lead quality and conversion efficiency.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Lead Generation &rarr;</UiButton>
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
  title: 'Lead Generation for Coaches — Digital Coach',
  description: 'Learn high-intent lead generation strategies for coaches. Attract qualified clients without cold outreach or gimmicky sales funnels.',
  keywords: 'lead generation for coaches, coach leads, how to get coaching leads, high ticket lead gen'
})
</script>
