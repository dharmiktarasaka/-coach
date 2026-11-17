<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">AI Business Model</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Build an AI-Powered Coaching Business: Scale Without Multiplying Hours
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            AI won't replace great coaches, but coaches who leverage AI systems will completely replace those who don't. Learn how to architect an AI-enabled expert business.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 AI Layers of an Modern Coaching Practice</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Intelligence Layer:</strong> Deep client analysis, diagnostic questionnaire scoring, and customized action blueprints.</li>
              <li><strong>Speed Layer:</strong> Automated session synthesis, instant content drafting from voice recordings, and instant email responses.</li>
              <li><strong>Leverage Layer:</strong> Custom trained AI mentors providing immediate 24/7 accountability for program participants.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Diagnose Your AI Leverage</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to evaluate your operational AI adoption.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit AI Leverage &rarr;</UiButton>
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
  title: 'How to Build an AI Coaching Business — Digital Coach',
  description: 'Learn how to integrate artificial intelligence into client onboarding, curriculum delivery, and marketing to build an AI-powered coaching business.',
  keywords: 'AI coaching business, AI for coaching business, AI powered coaching practice, artificial intelligence in coaching'
})
</script>
