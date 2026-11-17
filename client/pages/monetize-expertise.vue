<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Monetization</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Monetize Your Expertise: The 5 High-Margin Knowledge Assets
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Discover the 5 most profitable vehicles to monetize your deep professional expertise without building large teams or managing physical products.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 5 Knowledge Monetization Tiers</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Interactive Diagnostic Scorecards (Lead Gen):</strong> Free tool qualifying high-intent buyers.</li>
              <li><strong>Paid Live Masterclasses ($27 - $97):</strong> Liquidates customer acquisition costs.</li>
              <li><strong>Signature Flagship Coaching Program ($3,000 - $10,000):</strong> The core 85%+ margin revenue engine.</li>
              <li><strong>Alumni Masterminds & Peer Boards ($15,000 - $30,000/yr):</strong> High recurring retention.</li>
              <li><strong>B2B Enterprise Framework Licensing ($25,000 - $100,000+):</strong> Multi-year institutional contracts.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Calculate Your Knowledge Monetization Potential</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how to maximize your expertise revenue.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Monetization &rarr;</UiButton>
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
  title: 'How to Monetize Expertise — Digital Coach',
  description: 'The complete strategic guide for experts, consultants, and professionals to monetize knowledge through high-margin coaching and advisory models.',
  keywords: 'how to monetize expertise, monetize knowledge, productize expertise, expert business models'
})
</script>
