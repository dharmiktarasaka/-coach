<template>
  <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
    
    <!-- Primary Scorecard CTA in Warm Amber (#FF7F11) with White text -->
    <NuxtLink
      to="/scorecard"
      class="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-md shadow-[#FF7F11]/25 hover:shadow-lg hover:shadow-[#FF7F11]/35 hover:-translate-y-0.5 active:translate-y-0"
    >
      <span>TAKE THE FREE GROWTH SCORECARD</span>
      <svg
        class="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </NuxtLink>

    <!-- Secondary Action in Clean Luxury Card -->
    <NuxtLink
      to="/how-it-works"
      class="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white hover:bg-[#F5EFEF] text-[#1A1A1A] font-semibold text-sm border border-[#EAE4E4] hover:border-[#FF7F11]/50 transition-all duration-200 shadow-sm"
    >
      <span>SEE HOW IT WORKS</span>
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
// Hero CTA buttons in #FF7F11 and #FBF6F6 palette
</script>
