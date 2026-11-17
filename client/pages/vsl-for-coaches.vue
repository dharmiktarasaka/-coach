<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Video Strategy</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Script & Produce a High-Converting VSL for Your Coaching Business
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            A concise 10–15 minute Video Sales Letter (VSL) can do 80% of the heavy lifting in pre-selling your high-ticket offer. Learn the proven 6-part high-converting script structure.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 6-Part Coaching VSL Framework</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong>The Hook & Symptom Callout (0:00 - 1:30):</strong> Call out your exact target audience and identify the hidden problem keeping them stuck.</li>
              <li><strong>The Flawed Old Way (1:30 - 4:00):</strong> Explain why conventional industry advice fails and causes burnout.</li>
              <li><strong>The New Mechanism / Unique IP (4:00 - 8:00):</strong> Introduce your proprietary methodology, visual model, or operational framework.</li>
              <li><strong>Case Studies & Proof (8:00 - 11:00):</strong> Walk through real client transformations using before-and-after timelines.</li>
              <li><strong>The Program Offer Overview (11:00 - 13:00):</strong> Outline the milestone structure and support systems of your flagship program.</li>
              <li><strong>The Direct Call to Action (13:00 - 15:00):</strong> Invite qualified prospects to apply for a diagnostic strategy session.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Video Asset Architecture</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our Growth Scorecard to diagnose whether your positioning and messaging are ready for VSL production.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Messaging &rarr;</UiButton>
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
  title: 'VSL for Coaching Business Blueprint — Digital Coach',
  description: 'Learn how to script, produce, and deploy a high-converting Video Sales Letter (VSL) that automates high-ticket coaching client acquisition.',
  keywords: 'VSL for coaching business, coaching video sales letter, how to script a VSL, coaching VSL funnel'
})
</script>
