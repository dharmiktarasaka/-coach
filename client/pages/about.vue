<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            About Us
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            About Narayan Presence
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Cultivating inner clarity, conscious mastery, and impactful leadership for modern founders, executives, and truth-seekers.
          </p>
        </div>

        <!-- Mission & Values Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div class="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-4">
            <h2 class="text-2xl font-bold text-[#171844]">Our Purpose</h2>
            <p class="text-sm sm:text-base text-[#352D47] leading-relaxed">
              We live in a world saturated with information yet starving for wisdom. Narayan Presence was established to help people strip away cognitive noise, inhabit their authentic presence, and execute their life's work with quiet strength.
            </p>
          </div>

          <div class="p-8 sm:p-10 rounded-3xl bg-[#171844] text-white shadow-xl space-y-4 border border-[#F8D78B]/30">
            <h2 class="text-2xl font-bold text-[#F8D78B]">Guiding Principles</h2>
            <ul class="space-y-3 text-sm text-[#EAE2D4]">
              <li class="flex items-start gap-2">
                <span class="text-[#35D9B0] font-bold">✓</span>
                <span><strong>Grounded Authenticity:</strong> Inner peace must be resilient in real-world challenges, not just in isolated silence.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#35D9B0] font-bold">✓</span>
                <span><strong>Disciplined Mastery:</strong> Growth is not an event, but a steady commitment to daily alignment.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-[#35D9B0] font-bold">✓</span>
                <span><strong>Service & Compassion:</strong> True authority elevates everyone around it.</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="pt-8 text-center space-y-4">
          <h3 class="text-2xl font-bold text-[#171844]">Begin Your Journey With Us</h3>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <NuxtLink
              to="/courses"
              class="px-6 py-3 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Explore Courses &rarr;
            </NuxtLink>
            <NuxtLink
              to="/founder"
              class="px-6 py-3 rounded-xl bg-white border border-[#EAE2D4] text-[#171844] font-bold text-xs uppercase tracking-wider hover:bg-[#EAE2D4]/50 transition-colors"
            >
              Meet The Founder
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'About Narayan Presence',
  description: 'Mission, principles, and story behind Narayan Presence.'
})
</script>
