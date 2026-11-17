<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Webinar Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Coaching Webinar Funnel: Modernizing the High-Ticket Presentation
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Automated and live webinars remain powerful client acquisition engines when built on education and diagnostic authority rather than 90 minutes of manipulative hype.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Pillars of a High-Converting Coaching Webinar</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>High-Friction Registration Page:</strong> Pre-qualify registrants by asking 2 key diagnostic questions on the opt-in form.</li>
              <li><strong>Automated Reminder Sequence:</strong> Combining email, SMS, and WhatsApp alerts to achieve a 50%+ live attendance rate.</li>
              <li><strong>The 45-Minute Value Masterclass:</strong> Delivering a deep breakdown of your core framework with live interactive Q&A.</li>
              <li><strong>Application Transition:</strong> Directing attendees to apply for a personalized strategy consultation rather than attempting an instant impulse purchase.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your Webinar Conversion Architecture</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how to optimize your webinar registration and show-up rates.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Webinar Performance &rarr;</UiButton>
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
  title: 'Coaching Webinar Funnel Architecture — Digital Coach',
  description: 'How to build high-converting live and automated webinar funnels for high-ticket coaching programs without hype.',
  keywords: 'coaching webinar funnel, automated webinar for coaches, live webinar coaching, coaching presentation funnel'
})
</script>
