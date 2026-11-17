<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Executive Leadership</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Build a High-Ticket Executive Coaching Business ($15K+ Engagements)
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Discover the diagnostic frameworks, enterprise procurement processes, and 360 assessment protocols used by elite executive coaches advising Fortune 500 & high-growth leaders.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Engagement Models in Executive Coaching</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>6-Month C-Suite Retainer ($18,000 - $35,000):</strong> In-depth 360 interviews with board members, bi-weekly strategic sessions, and unlimited emergency triage.</li>
              <li><strong>Executive Team Alignment Offsite ($15,000 - $30,000):</strong> 2-day strategic facilitation resolving departmental friction and OKR alignment.</li>
              <li><strong>High-Potential VP Acceleration Program ($10,000 - $20,000):</strong> Sponsored corporate cohort preparing directors for executive officer roles.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your Executive Advisory Practice</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose your corporate enterprise positioning.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Executive Practice &rarr;</UiButton>
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
  title: 'How to Build an Executive Coaching Business — Digital Coach',
  description: 'Learn how to build a 7-figure executive coaching business. Corporate procurement, C-suite retainers, and high-ticket pricing.',
  keywords: 'executive coaching business, executive coach retainers, corporate coaching business, C suite executive coaching'
})
</script>
