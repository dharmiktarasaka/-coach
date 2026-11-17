<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Workshop Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Paid Workshop Funnel: The Most Reliable High-Ticket Coaching Conversion Engine
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Why switching from free webinars to a low-cost paid live workshop (₹499 to ₹1,999 / $27 to $97) liquidates ad costs, filters serious buyers, and converts 15%+ of attendees into high-ticket clients.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Power of the Micro-Transaction</h2>
            <p>
              Free registrants have virtually zero psychological investment; typical free webinar show-up rates hover below 25%. When a prospect pays even ₹499 ($27), three crucial shifts occur:
            </p>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>70%+ Live Attendance:</strong> Buyers show up with notebooks open, ready to engage.</li>
              <li><strong>Zero Freebie Seekers:</strong> Eliminates tire-kickers who will never invest in coaching.</li>
              <li><strong>Self-Liquidating Ad Spend:</strong> Ticket sales cover 100% of your Meta ad spend, making high-ticket client acquisition essentially free.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Design Your Workshop Funnel</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose how to structure your first paid live workshop funnel.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Workshop Funnel &rarr;</UiButton>
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
  title: 'Paid Workshop Funnel for Coaches — Digital Coach',
  description: 'Learn how to build a paid live workshop funnel that liquidates ad spend and enrolls high-ticket coaching clients with high conversion.',
  keywords: 'coaching workshop funnel, paid workshop funnel, live masterclass coaching funnel, coaching client acquisition workshop'
})
</script>
