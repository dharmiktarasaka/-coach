<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Pricing Economics</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How Much Should a Coach Charge? The Definitive Coaching Pricing Guide
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop guessing your rates. Discover the value-based pricing formulas, market benchmarks, and psychological anchors that allow coaches to charge $3,000 to $15,000+ with conviction.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Standard Coaching Market Pricing Tiers</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border border-[#EAE4E4] rounded-xl overflow-hidden">
                <thead class="bg-[#F5EFEF] font-mono text-[#1A1A1A]">
                  <tr>
                    <th class="p-3">Coaching Level</th>
                    <th class="p-3">Pricing Range (USD)</th>
                    <th class="p-3">Typical Structure</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EAE4E4]">
                  <tr>
                    <td class="p-3 font-semibold">Entry / General</td>
                    <td class="p-3">$100 - $250 / session</td>
                    <td class="p-3">Hourly / Pay-as-you-go</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Specialized Practitioner</td>
                    <td class="p-3">$1,500 - $3,500</td>
                    <td class="p-3">8 to 12-week transformation package</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold text-[#FF7F11]">Flagship Signature Program</td>
                    <td class="p-3 font-bold text-[#FF7F11]">$3,000 - $10,000</td>
                    <td class="p-3 font-bold text-[#FF7F11]">12-week hybrid curriculum + mastermind</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Executive / Advisory</td>
                    <td class="p-3">$10,000 - $30,000+</td>
                    <td class="p-3">Annual founder board & retainer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Calculate Your Ideal Program Pricing</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose your pricing power and optimal tier.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Pricing &rarr;</UiButton>
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
  title: 'How Much Should a Coach Charge? — Digital Coach',
  description: 'Complete coaching pricing benchmarks and value-based pricing strategies. Learn how to package and price high-ticket coaching programs.',
  keywords: 'how much should a coach charge, coaching pricing, coach hourly rates, high ticket coaching prices, coaching fee structure'
})
</script>
