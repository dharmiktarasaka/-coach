<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">India Pricing</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Coaching Pricing in India: Complete INR Market Benchmarks (2026)
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            From ₹5,000 hourly sessions to ₹3,00,000+ flagship programs. Explore comprehensive coaching fee benchmarks across Indian business, career, executive, and wellness niches.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Indian Coaching Fee Breakdown by Tier</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border border-[#EAE4E4] rounded-xl overflow-hidden">
                <thead class="bg-[#F5EFEF] font-mono text-[#1A1A1A]">
                  <tr>
                    <th class="p-3">Niche / Category</th>
                    <th class="p-3">Per Session (INR)</th>
                    <th class="p-3 text-[#FF7F11]">Flagship Package (INR)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EAE4E4]">
                  <tr>
                    <td class="p-3 font-semibold">Life & Mindset Coaching</td>
                    <td class="p-3">₹2,500 - ₹7,500</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹45,000 - ₹1,25,000</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Career & Interview Coaching</td>
                    <td class="p-3">₹3,000 - ₹10,000</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹60,000 - ₹1,80,000</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Business & Revenue Coaching</td>
                    <td class="p-3">₹10,000 - ₹25,000</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹1,50,000 - ₹4,50,000</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Executive & Leadership Advisory</td>
                    <td class="p-3">₹15,000 - ₹50,000</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹3,00,000 - ₹10,00,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your Pricing in India</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether you are undercharging in the Indian market.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your INR Pricing &rarr;</UiButton>
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
  title: 'Coaching Pricing in India (INR Benchmarks) — Digital Coach',
  description: 'Complete guide to coaching fees and pricing in India. Discover average rates for life, business, career, and executive coaches.',
  keywords: 'coaching pricing India, life coach fees India, business coach charges India, coaching charges in India'
})
</script>
