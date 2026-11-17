<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Lead Generation</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">7 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            High-Converting Coaching Lead Magnets: Moving Beyond the Generic PDF
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Nobody wants another 40-page generic ebook. Discover the 4 types of modern, interactive lead magnets that attract high-intent buyers and position your paid coaching program as the natural next step.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 High-Authority Lead Magnet Formats</h2>
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">1. Interactive Diagnostic Scorecard / Benchmark</h3>
                <p class="text-xs text-[#524F4E] mt-1">A 2-minute self-assessment tool providing a personalized score and customized gap report.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">2. The Implementation Spreadsheet / Calculator</h3>
                <p class="text-xs text-[#524F4E] mt-1">A plug-and-play financial or operational model that saves hours of calculation.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">3. The SOP / Swipe File Vault</h3>
                <p class="text-xs text-[#524F4E] mt-1">A collection of proven templates, scripts, or operational checklists.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">4. The 15-Minute Framework Breakdown Video</h3>
                <p class="text-xs sm:text-sm mt-1 text-[#524F4E]">A concise teardown of your core proprietary methodology.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your Lead Magnet Quality</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how to optimize your top-of-funnel lead assets.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Lead Magnet &rarr;</UiButton>
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
  title: 'High-Converting Coaching Lead Magnets — Digital Coach',
  description: 'Learn how to create interactive diagnostic lead magnets, calculators, and SOP templates that convert high-ticket coaching leads.',
  keywords: 'coaching lead magnet, lead magnet ideas for coaches, high converting coach lead magnet, scorecard lead magnet'
})
</script>
