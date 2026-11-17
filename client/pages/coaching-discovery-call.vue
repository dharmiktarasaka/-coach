<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Discovery Protocol</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The 45-Minute Coaching Discovery Call: A Step-by-Step Diagnostic Structure
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Turn discovery calls from uncomfortable sales pitches into collaborative strategic roadmap sessions that leave prospects thanking you for the clarity.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 5 Stages of the Diagnostic Call</h2>
            <div class="space-y-4">
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">1. Frame & Agenda Setting (0–5 min)</h3>
                <p class="text-xs sm:text-sm">Set the tone: <em>"The goal of today is to diagnose where you are, where you want to be, and see if there is mutual alignment to work together."</em></p>
              </div>
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">2. Current State Diagnosis (5–18 min)</h3>
                <p class="text-xs sm:text-sm">Ask targeted diagnostic questions to uncover their primary pain points, previous attempts, and hidden bottlenecks.</p>
              </div>
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">3. Desired Future Mapping (18–28 min)</h3>
                <p class="text-xs sm:text-sm">Quantify their 12-month goals, revenue milestones, or lifestyle objectives to define the success gap.</p>
              </div>
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">4. Bridge Prescription (28–38 min)</h3>
                <p class="text-xs sm:text-sm">Outline how your proprietary milestone framework bridges the gap between their current and desired states.</p>
              </div>
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-1">
                <h3 class="font-bold text-base text-[#1A1A1A]">5. Agreement & Onboarding (38–45 min)</h3>
                <p class="text-xs sm:text-sm">Present the single investment tier, answer logistics questions, and send the onboarding deposit link live.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Enrollment Call Conversion</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to evaluate your conversion mechanics and close rates.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Discovery Calls &rarr;</UiButton>
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
  title: 'Coaching Discovery Call Structure — Digital Coach',
  description: 'Learn the exact 45-minute consultative coaching discovery call framework that closes high-ticket clients with 35%+ conversion.',
  keywords: 'coaching discovery call, discovery call structure, coaching sales call script, consultative enrollment call'
})
</script>
