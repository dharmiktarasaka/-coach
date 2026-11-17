<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">India High-Ticket</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            High-Ticket Coaching in India: How to Sell ₹1,00,000 to ₹5,00,000 Programs
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Debunking the myth that "Indian clients won't pay high fees." Discover the pricing psychology, consultative qualification, and payment infrastructures that make high-ticket coaching thrive in the Indian subcontinent.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Shift in Indian Purchasing Psychology</h2>
            <p>
              While price sensitivity exists for commoditized knowledge, affluent Indian executives, entrepreneurs, and high-net-worth families routinely invest lakhs in elite test prep, executive education, and private wellness. When your coaching is structured around high-stakes business or personal milestones, pricing power multiplies.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Key Enablers for High-Ticket Enrollment in India</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>No-Cost EMI & NBFC Financing:</strong> Integrating flexible payment gateway financing options that turn a ₹1,50,000 investment into ₹12,500/month.</li>
              <li><strong>WhatsApp Voice Triage:</strong> Building personalized rapport via concise 45-second voice notes before scheduling the diagnostic call.</li>
              <li><strong>Clear ROI Framing:</strong> Connecting the outcome directly to executive salary hikes, business revenue growth, or personal productivity.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Calculate Your High-Ticket Pricing Power in India</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how much your expertise can command in the Indian market.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Indian Market Pricing &rarr;</UiButton>
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
  title: 'High-Ticket Coaching in India — Digital Coach',
  description: 'How to design, price, and sell high-ticket coaching programs in India ranging from ₹1,00,000 to ₹5,00,000+ with predictable sales systems.',
  keywords: 'high ticket coaching in India, high ticket coaching India, sell coaching programs in India, coaching pricing India'
})
</script>
