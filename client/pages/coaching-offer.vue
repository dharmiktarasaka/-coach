<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Offer Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">7 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            Crafting High-Value Flagship Offers: Beyond the Hourly Session
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Why selling 1-on-1 hours puts an artificial ceiling on your income, and how to structure a flagship transformation architecture that commands premium pricing.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Fatal Flaw of Hourly Pricing</h2>
            <p>
              When you sell coaching by the hour (e.g. ₹3,000/hour), you force prospective clients to evaluate your value in terms of labor cost rather than business impact. Buyers subconsciously compare your hourly rate to their own, leading to price resistance.
            </p>
            <p>
              Furthermore, hourly models incentivize inefficiency: the faster and more effectively you solve the client's problem, the less money you earn.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Elements of a Flagship Transformation Architecture</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Specific Outcome Promise:</strong> A crystal-clear definition of the Point A to Point B transformation.</li>
              <li><strong class="text-[#1A1A1A]">Phased Milestones:</strong> Breaking the journey into 3–4 distinct diagnostic and execution stages.</li>
              <li><strong class="text-[#1A1A1A]">Leveraged Curriculum Assets:</strong> Asynchronous frameworks, templates, and video vaults that teach concepts once.</li>
              <li><strong class="text-[#1A1A1A]">High-Value Accountability:</strong> Bi-weekly strategic reviews and private communication channels that eliminate low-value busywork.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Evaluate Your Offer Leverage</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Discover if your current offer is underpriced or unscalable by taking our free 5-minute diagnostic.
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
  title: 'Crafting High-Value Flagship Offers — Digital Coach',
  description: 'Learn how coaches and consultants structure flagship outcome-based offers, eliminate hourly billing, and command premium fees.'
})
</script>
