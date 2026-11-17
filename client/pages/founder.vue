<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Founder Profile
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Meet the Founder
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Guiding individuals, leaders, and creators through conscious transformation, practical wisdom, and sustainable mastery.
          </p>
        </div>

        <!-- Founder Bio Card -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-5 bg-white border border-[#EAE2D4] rounded-3xl p-6 shadow-sm">
            <div class="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#171844] to-[#242658] flex items-center justify-center text-[#F8D78B] relative overflow-hidden">
              <svg class="w-20 h-20 opacity-40 text-[#F8D78B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div class="mt-5 space-y-1">
              <h2 class="text-xl font-bold text-[#171844]">Narayan</h2>
              <p class="text-xs font-semibold text-[#8C6D57] uppercase tracking-wider">Founder & Master Coach</p>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
              <h3 class="text-2xl font-bold text-[#171844]">Vision & Journey</h3>
              <p class="text-sm sm:text-base text-[#352D47] leading-relaxed">
                With extensive experience in personal mastery, executive mentoring, and spiritual grounding, Narayan founded Narayan Presence to bridge timeless internal clarity with practical life systems.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div class="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4]">
                  <div class="text-2xl font-extrabold text-[#171844]">10+</div>
                  <div class="text-xs font-semibold text-[#8C6D57] mt-1">Years of Dedicated Practice</div>
                </div>
                <div class="p-4 rounded-2xl bg-[#FAFAFA] border border-[#EAE2D4]">
                  <div class="text-2xl font-extrabold text-[#171844]">1,000+</div>
                  <div class="text-xs font-semibold text-[#8C6D57] mt-1">Lives & Practices Mentored</div>
                </div>
              </div>
              <div class="pt-4">
                <NuxtLink
                  to="/coaching"
                  class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  Work 1-on-1 With Narayan &rarr;
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Founder Profile — Narayan Presence',
  description: 'Learn more about Narayan, founder and lead mentor at Narayan Presence.'
})
</script>
