<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <div class="space-y-12">
        <header class="space-y-4 text-center">
          <UiBadge variant="brand">Compliance & Transparency</UiBadge>
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A]">Earnings & Methodology Disclaimer</h1>
          <p class="text-xs font-mono text-[#524F4E]">Last Updated: {{ new Date().toLocaleDateString() }}</p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-[#524F4E] leading-relaxed shadow-sm">
          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">1. No Guaranteed Financial Outcomes</h2>
            <p>
              Digital Coach does not guarantee specific monetary earnings, client volumes, or immediate revenue targets. The coaching, consulting, and advisory industries involve real commercial risks and market dependencies.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">2. Individual Responsibility</h2>
            <p>
              Your commercial results depend entirely on your individual domain expertise, market demand for your niche, quality of execution, pricing strategy, work ethic, and economic market conditions.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">3. Not Legal or Financial Advice</h2>
            <p>
              The frameworks, materials, and diagnostics provided by Digital Coach represent strategic business architecture methodologies and should not be construed as legal, tax, accounting, or formal securities advice.
            </p>
          </section>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Earnings & Methodology Disclaimer — Digital Coach',
  description: 'Digital Coach earnings disclaimer, compliance disclosure, and transparent business standards.'
})
</script>
