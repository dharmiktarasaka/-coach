<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">India Scaling</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Scaling an Indian Coaching Practice: From ₹1 Lakh to ₹10 Lakhs Per Month
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            The operational blueprint for Indian coaches transitioning from erratic domestic revenue to a predictable ₹10 Lakh+/month ($120k+ ARR) high-margin expert business.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Economics of a ₹10 Lakh/Month Indian Coaching Enterprise</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border border-[#EAE4E4] rounded-xl overflow-hidden">
                <thead class="bg-[#F5EFEF] font-mono text-[#1A1A1A]">
                  <tr>
                    <th class="p-3">Component</th>
                    <th class="p-3">Target Metrics</th>
                    <th class="p-3">Monthly Revenue (INR)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-[#EAE4E4]">
                  <tr>
                    <td class="p-3 font-semibold">Flagship Program Enrollments</td>
                    <td class="p-3">6 clients @ ₹1,25,000</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹7,50,000</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Weekend Live Masterclass</td>
                    <td class="p-3">150 tickets @ ₹999</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹1,50,000</td>
                  </tr>
                  <tr>
                    <td class="p-3 font-semibold">Backend Mastermind Retainers</td>
                    <td class="p-3">5 alumni @ ₹20,000/mo</td>
                    <td class="p-3 font-bold text-[#FF7F11]">₹1,00,000</td>
                  </tr>
                  <tr class="bg-[#FFF8F2] font-bold">
                    <td class="p-3">Total Monthly Revenue</td>
                    <td class="p-3">Predictable Multi-Tier</td>
                    <td class="p-3 text-[#FF7F11]">₹10,00,000 / month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Diagnose Your ₹10 Lakh/Month Scale Potential</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to evaluate your readiness to scale to ₹10 Lakhs/month in India.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Scale Readiness &rarr;</UiButton>
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
  title: 'Scaling an Indian Coaching Practice to ₹10 Lakh/Month — Digital Coach',
  description: 'Learn the exact revenue model and acquisition systems needed to scale a coaching business to ₹10 Lakhs per month in India.',
  keywords: 'coaching business 10 lakh per month, coaching business 1 lakh per month, scale coaching practice India, coaching revenue model India'
})
</script>
