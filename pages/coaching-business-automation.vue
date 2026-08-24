<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Automation & Scale</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">6 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            Coaching Automation: Removing the Founder Delivery Bottleneck
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How to automate administrative friction, reminder triggers, and client check-ins without sacrificing personalized human transformation.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Automation vs Personal Touch: The False Dichotomy</h2>
            <p>
              Many coaches resist automation because they fear losing their intimate, personalized client relationship. In reality, high-leverage automation eliminates the tedious, low-value administrative tasks (sending calendar links, chasing invoices, emailing zoom passwords) so you have more energy for high-impact strategic advisory.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">3 High-Leverage Automations to Install Immediately</h2>
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">1. WhatsApp Triage & Calendar Sync</div>
                <p class="text-xs text-[#524F4E]">Automate applicant verification and calendar booking confirmation via WhatsApp webhook triggers.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">2. Instant Agreement & Invoice Routing</div>
                <p class="text-xs text-[#524F4E]">Trigger electronic contract signatures and payment gateway invoices the moment a prospect is marked "Enrolled".</p>
              </div>
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">3. Milestone Accountability Check-Ins</div>
                <p class="text-xs text-[#524F4E]">Automate asynchronous weekly check-in forms that gather client wins, roadblocked tasks, and feedback.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Evaluate Your Automation Gaps</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to diagnose how much founder time can be saved through automation.
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
  title: 'Coaching Automation & Systematization — Digital Coach',
  description: 'Learn how to automate onboarding, invoicing, calendar booking, and progress check-ins to remove the founder delivery bottleneck.'
})
</script>
