<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">WhatsApp Marketing</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            WhatsApp Marketing for Coaches: The 90%+ Open Rate Acquisition Engine
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Why high-ticket coaches are shifting from crowded email inboxes to conversational WhatsApp funnels. Learn how to nurture leads and book discovery calls via WhatsApp.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Conversational Advantage of WhatsApp</h2>
            <p>
              In regions like India, the Middle East, Southeast Asia, and Europe, WhatsApp is the primary communication channel. Prospects respond to short, high-value voice notes and diagnostic scorecards 10x faster than traditional email sequences.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Conversational Funnel</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how to implement WhatsApp marketing into your client acquisition.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit WhatsApp Funnels &rarr;</UiButton>
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
  title: 'WhatsApp Marketing for Coaches — Digital Coach',
  description: 'Learn how to build high-converting WhatsApp marketing funnels for coaching. Automated reminders, conversational triage, and high-ticket closing.',
  keywords: 'WhatsApp marketing for coaches, WhatsApp coaching funnels, WhatsApp client acquisition, conversational marketing for coaches'
})
</script>
