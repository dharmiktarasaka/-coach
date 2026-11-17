<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/life-coach-business" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Life Coach Guide</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Life Coach Pricing</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">7 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Life Coach Pricing in India: How to Transition from ₹1,500/hr to ₹75,000 Packages
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop charging low hourly fees for life coaching in India. Learn how to package mindset and life transformations into high-ticket signature programs that clients gladly pay for.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Market Realities of Life Coaching Fees in India</h2>
            <p>
              When life coaches sell individual hours, Indian consumers compare them to commodity hourly services. When life coaches sell a <strong>12-Week Life Architecture & Executive Wellness Protocol</strong> with weekly accountability, the perceived value shifts into high-ticket territory (₹50,000 to ₹1,50,000+).
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Diagnose Your Life Coaching Pricing</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to calculate your ideal package price point in the Indian market.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Rates &rarr;</UiButton>
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
  title: 'Life Coach Pricing in India — Digital Coach',
  description: 'Learn standard life coach fees and pricing structures in India. How to price packages from ₹50,000 to ₹1,50,000 with high enrollment rates.',
  keywords: 'life coach pricing India, life coaching fees in India, how much does a life coach charge in India'
})
</script>
