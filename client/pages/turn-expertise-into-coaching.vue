<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Expert Transition</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Turn Your Domain Expertise into a 7-Figure Coaching Business
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            You already spent 10–20 years mastering your field. Here is the operational protocol to extract your subconscious intuition and package it into a scalable high-ticket coaching practice.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Steps of Knowledge Codification</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong>Extract Your Mental Models:</strong> Map out the diagnostic questions you ask yourself when looking at a client problem.</li>
              <li><strong>Build Visual Step-by-Step Architecture:</strong> Create proprietary diagrams and milestone roadmaps.</li>
              <li><strong>Design Implementation Worksheets:</strong> Give clients practical exercises rather than passive information.</li>
              <li><strong>Deploy Hybrid Group Delivery:</strong> Guide multiple clients through the codified roadmap simultaneously.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Expertise Monetization Score</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how quickly your knowledge can be productized.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Expertise &rarr;</UiButton>
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
  title: 'Turn Expertise into a Coaching Business — Digital Coach',
  description: 'Learn how corporate professionals, consultants, and experts can extract and monetize their domain knowledge into a 7-figure coaching business.',
  keywords: 'turn expertise into coaching business, how to monetize expertise, productize knowledge, expert business model'
})
</script>
