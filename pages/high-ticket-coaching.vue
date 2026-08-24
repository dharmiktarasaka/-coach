<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Conversion Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">6 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            High-Ticket Diagnostic Enrollment: Selling Without Gimmicks
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How to conduct consultative triage strategy sessions that achieve 35%+ close rates without manipulative objection-handling scripts.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Physician Metaphor for Consultative Sales</h2>
            <p>
              When you visit a specialist physician, they do not pitch you on buying surgery. They ask incisive diagnostic questions, conduct tests, identify the root cause of your pain, and prescribe an exact treatment protocol.
            </p>
            <p>
              In high-ticket coaching, your sales consultation should follow the exact same diagnostic posture. You are diagnosing mutual fit and root business bottlenecks, not debating prospects.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Phases of Diagnostic Enrollment</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Pre-Call Intake Triage:</strong> Filtering applicants through structured qualification questionnaires before confirming the call.</li>
              <li><strong class="text-[#1A1A1A]">Current State Diagnosis:</strong> Uncovering the prospect's real financial and operational pain points.</li>
              <li><strong class="text-[#1A1A1A]">Gap Identification:</strong> Demonstrating why their previous attempts to solve the problem failed.</li>
              <li><strong class="text-[#1A1A1A]">Prescription & Enrollment:</strong> Presenting your flagship program as the logical vehicle to close their gap.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Test Your Conversion Efficiency</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to diagnose your enrollment close rate and consultative sales maturity.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Free Growth Scorecard &rarr;
              </UiButton>
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
  title: 'High-Ticket Diagnostic Enrollment for Coaches — Digital Coach',
  description: 'Learn how to close high-ticket coaching clients through consultative diagnostic triage sessions without manipulative sales tactics.'
})
</script>
