<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <div class="space-y-12">
        <header class="space-y-4 text-center">
          <UiBadge variant="brand">Legal Governance</UiBadge>
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A]">Terms of Service</h1>
          <p class="text-xs font-mono text-[#524F4E]">Last Updated: {{ new Date().toLocaleDateString() }}</p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-[#524F4E] leading-relaxed shadow-sm">
          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">1. Acceptance of Terms</h2>
            <p>
              By accessing and browsing the Digital Coach website, taking the diagnostic scorecard, or applying for advisory programs, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">2. Intellectual Property Rights</h2>
            <p>
              All proprietary frameworks, diagnostic assessments, website copy, visual diagrams, and methodologies featured on this website are the exclusive intellectual property of Digital Coach and protected by copyright laws.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">3. Professional Services</h2>
            <p>
              Information on this website is for educational and marketing purposes. Formal advisory engagements are governed by separate, signed master service agreements.
            </p>
          </section>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Terms of Service — Digital Coach',
  description: 'Digital Coach terms of service and website usage terms.'
})
</script>
