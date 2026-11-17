<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">India Advisory</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Coach Business Consultant in India: Scaling Domestic & NRI Practice Revenue
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Strategic consulting for Indian coaches, trainers, and corporate experts looking to scale their business from ₹1 Lakh to ₹10 Lakhs+ per month.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Advisory Tailored to the Indian Market</h2>
            <p>
              We help Indian coaches navigate domestic payment gateways, WhatsApp qualification pipelines, weekend masterclass funnels, and high-ticket USD international positioning.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Apply for 1-on-1 India Strategic Advisory</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Schedule a diagnostic evaluation to discuss scaling your coaching business in India.</p>
            <div class="pt-2">
              <UiButton to="/apply" variant="primary" size="md">Apply for Strategic Advisory &rarr;</UiButton>
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
  title: 'Coach Business Consultant India — Digital Coach',
  description: 'Specialized coaching business consultancy in India. Scale your coaching revenue from ₹1 Lakh to ₹10 Lakhs/month with proven systems.',
  keywords: 'coach business consultant India, coaching consultant in India, coaching business mentor India'
})
</script>
