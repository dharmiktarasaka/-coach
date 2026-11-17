<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Performance Marketing</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Facebook Ads for Coaches: High-Converting Campaigns & Funnel Architectures
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            A comprehensive guide to scaling your coaching client pipeline using Facebook ad campaigns, custom audience lookalikes, dynamic creatives, and frictionless application funnels.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3-Tier Facebook Ad Architecture</h2>
            <div class="space-y-4">
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">1. Top-of-Funnel (Cold Audience Engagement)</h3>
                <p class="text-xs sm:text-sm">Video views and educational reels highlighting client problem symptoms to warm up broad interest.</p>
              </div>
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">2. Middle-of-Funnel (Diagnostic Lead Generation)</h3>
                <p class="text-xs sm:text-sm">Direct response ads driving traffic to your Scorecard, Masterclass, or VSL asset.</p>
              </div>
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">3. Bottom-of-Funnel (Retargeting & Social Proof)</h3>
                <p class="text-xs sm:text-sm">Retargeting video testimonials and case studies to individuals who visited the booking page but didn't submit.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Facebook Ads Strategy</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your offer and economics are optimized for paid scaling.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Ads Readiness &rarr;</UiButton>
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
  title: 'Facebook Ads for Coaches Blueprint — Digital Coach',
  description: 'Master Facebook ads for coaching. Learn retargeting, video creative structures, and how to scale booked calls profitably.',
  keywords: 'Facebook ads for coaches, Facebook advertising for life coaches, business coach Facebook ads, paid ads for coaches'
})
</script>
