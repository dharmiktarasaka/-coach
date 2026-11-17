<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Sales Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Coaching Sales Funnel: Converting High-Ticket Prospects with Zero Pushy Tactics
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            A step-by-step breakdown of high-converting coaching sales funnels designed to pre-sell your authority, filter unqualified prospects, and make enrollment consultative and effortless.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Mechanics of a Consultative Sales Funnel</h2>
            <p>
              High-value coaching is not an impulse purchase. An effective coaching sales funnel takes prospects through four psychological stages: <strong>Awareness of Problem &rarr; Diagnostic Realization &rarr; Solution Fit &rarr; Mutual Commitment</strong>.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Funnel Components & Conversion Levers</h2>
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">1. Diagnostic Intake Form</h3>
                <p class="text-xs text-[#524F4E] mt-1">Gathers context about their revenue, key obstacles, and commitment level before scheduling.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">2. Automated Pre-Call Homework Page</h3>
                <p class="text-xs text-[#524F4E] mt-1">Displays case studies, client breakdowns, and FAQs so the prospect arrives pre-educated and sold.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">3. Diagnostic Enrollment Session</h3>
                <p class="text-xs text-[#524F4E] mt-1">A collaborative 45-minute roadmap consultation that closes at 35%+ without manipulation.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Sales Funnel Performance</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose conversion drop-offs in your sales pipeline.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Sales Funnel &rarr;</UiButton>
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
  title: 'High-Ticket Coaching Sales Funnel Blueprint — Digital Coach',
  description: 'Learn how to build a consultative coaching sales funnel that pre-sells prospects and closes high-ticket packages without pushy tactics.',
  keywords: 'coaching sales funnel, sales funnel for coaches, high ticket sales funnel, coaching conversion funnel'
})
</script>
