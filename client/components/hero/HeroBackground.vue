<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-white">
    <!-- Subtle Volumetric Glows in Soft Brand Tint -->
    <div
      class="absolute -top-[15%] left-[10%] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-purple-100/60 via-purple-50/40 to-transparent blur-[140px] transition-transform duration-700 ease-out"
      :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -20}px, ${mouseY * -20}px, 0)` }"
    ></div>

    <div
      class="absolute top-[25%] right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-gold-100/50 via-amber-50/30 to-transparent blur-[130px] transition-transform duration-700 ease-out"
      :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * 20}px, ${mouseY * 20}px, 0)` }"
    ></div>

    <div
      class="absolute -bottom-[10%] left-[25%] w-[800px] h-[500px] rounded-full bg-gradient-to-t from-purple-50/70 via-gold-50/20 to-transparent blur-[120px] transition-transform duration-700 ease-out"
      :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -10}px, ${mouseY * -10}px, 0)` }"
    ></div>

    <!-- Architectural Perspective Subtle Grid on White -->
    <div
      class="absolute inset-0 opacity-[0.06] transition-transform duration-700 ease-out"
      :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -8}px, ${mouseY * -8}px, 0)` }"
    >
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid-white" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#2C014B" stroke-width="0.9" stroke-dasharray="2 4" />
            <circle cx="64" cy="64" r="1.5" fill="#E6AD4A" fill-opacity="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid-white)" />
      </svg>
    </div>

    <!-- Environmental Horizon Depth Line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-900/[0.08] to-transparent"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mouseX: number
  mouseY: number
  reducedMotion: boolean
}>()
</script>
