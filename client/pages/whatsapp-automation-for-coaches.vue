<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">WhatsApp Automation</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            WhatsApp Automation for Coaches: Complete Setup & Workflow Guide
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How to set up WhatsApp Business API, automated workshop reminders, abandoned booking follow-ups, and instant lead triage without getting your number banned.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Essential WhatsApp Automation Sequences</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Diagnostic Scorecard Delivery:</strong> Instant WhatsApp message with the personalized report PDF and custom video link.</li>
              <li><strong>Masterclass Show-Up Sequence:</strong> T-24h, T-1h, and T-10m alerts boosting live attendance to 70%+.</li>
              <li><strong>Post-Call Recap & Payment Link:</strong> Immediate automated dispatch of call action points and secure checkout URLs.</li>
              <li><strong>Weekly Program Milestone Reminders:</strong> Automated prompt ensuring students submit their weekly assignment worksheets on time.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Automation Architecture</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose which operational tasks you should automate next.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit WhatsApp Automation &rarr;</UiButton>
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
  title: 'WhatsApp Automation for Coaches — Digital Coach',
  description: 'Step-by-step guide to automating WhatsApp messaging, reminders, and lead qualification for high-ticket coaching businesses.',
  keywords: 'WhatsApp automation for coaches, WhatsApp Business API for coaching, automated WhatsApp reminders, coaching automation'
})
</script>
