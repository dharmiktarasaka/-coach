<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Package Sales</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Sell Coaching Packages: The Consultative Closing Framework
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop quoting prices over email or pitching unprepared prospects. Learn the exact consultative methodology used to present and close $3k–$10k coaching packages with confidence and ease.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Golden Rules of Selling Coaching Packages</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong>Never Pitch Until the Gap is Quantified:</strong> If the client does not clearly recognize their pain and its tangible cost, stating a price will always sound expensive.</li>
              <li><strong>Prescribe, Don't Pitch:</strong> Act as a specialized physician diagnosing symptoms. Recommend your program as the necessary prescription for their diagnosed bottleneck.</li>
              <li><strong>Anchor to Long-Term Value:</strong> Frame the investment relative to the cost of remaining in their current painful state for another 12 months.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Diagnose Your Package Sales Efficiency</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how to optimize your enrollment conversations.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Take Free Scorecard &rarr;</UiButton>
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
  title: 'How to Sell Coaching Packages — Digital Coach',
  description: 'Master the art of selling high-ticket coaching packages. Consultative framework, overcoming objections, and closing with high conversion.',
  keywords: 'how to sell coaching packages, sell coaching packages, selling high ticket coaching, coaching sales framework'
})
</script>
