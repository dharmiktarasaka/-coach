<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Our Methodology
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            The Narayan Presence Framework
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            A comprehensive, multidimensional approach to internal clarity, disciplined focus, and impactful external action.
          </p>
        </div>

        <!-- 3 Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#171844] text-[#F8D78B] flex items-center justify-center font-bold text-lg">
              01
            </div>
            <h3 class="text-xl font-bold text-[#171844]">Awareness & Grounding</h3>
            <p class="text-sm text-[#352D47] leading-relaxed">
              Cultivating inner stability, identifying subconscious friction points, and developing unwavering present-moment focus.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#242658] text-[#F8D78B] flex items-center justify-center font-bold text-lg">
              02
            </div>
            <h3 class="text-xl font-bold text-[#171844]">Strategic Alignment</h3>
            <p class="text-sm text-[#352D47] leading-relaxed">
              Aligning personal values, daily rituals, and professional ambitions with deliberate focus and sustainable rhythm.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-2xl bg-[#352D47] text-[#F8D78B] flex items-center justify-center font-bold text-lg">
              03
            </div>
            <h3 class="text-xl font-bold text-[#171844]">Embodied Mastery</h3>
            <p class="text-sm text-[#352D47] leading-relaxed">
              Turning insights into repeatable habits, resilient decision-making frameworks, and authentic leadership presence.
            </p>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Methodology — Narayan Presence',
  description: 'Explore the Narayan Presence framework for personal and professional mastery.'
})
</script>
