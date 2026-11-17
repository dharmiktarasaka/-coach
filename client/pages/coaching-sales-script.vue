<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Sales Methodology</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The High-Ticket Coaching Sales Script: Consultative Enrollment Blueprint
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            A word-for-word consultative sales script designed for experts, advisors, and coaches who refuse to use high-pressure tactics.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Key Script Transitions & Objection Handlers</h2>
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1">
                <span class="text-xs font-mono text-[#FF7F11] font-bold uppercase">Transition to Price:</span>
                <p class="text-xs sm:text-sm text-[#1A1A1A]"><em>"Based on what you've shared, your main bottleneck is [X]. The program is structured as a 12-week sprint to get you to [Y milestone]. The total investment is [$X / ₹Y]. How does that sit with you?"</em></p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
                <span class="text-xs font-mono text-[#524F4E] font-bold uppercase">Handling "I need to think about it":</span>
                <p class="text-xs sm:text-sm text-[#1A1A1A]"><em>"I completely respect that. Usually when people say they need to think about it, it's either the financial commitment, the time required, or certainty that this will work for their situation. Which of those three is it for you?"</em></p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Upgrade Your Sales Conversion Architecture</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to evaluate your consultative sales metrics.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Sales Conversion &rarr;</UiButton>
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
  title: 'High-Ticket Coaching Sales Script — Digital Coach',
  description: 'The proven consultative sales script for closing high-ticket coaching programs without pressure or gimmicks.',
  keywords: 'coaching sales script, high ticket coaching script, consultative sales script, coaching enrollment script'
})
</script>
