<template>
  <header class="w-full relative z-40 py-6 sm:py-8 select-none">
    <div class="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
      
      <!-- Top-Left: Brand Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-xl p-1">
        <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 border border-gold-400/40 flex items-center justify-center shadow-md shadow-gold-500/20 group-hover:scale-105 transition-transform duration-300">
          <svg class="w-5 h-5 text-purple-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-lg sm:text-xl tracking-tight text-purple-950 group-hover:text-gold-600 transition-colors">
            DIGITAL COACH
          </span>
          <span class="text-[9px] tracking-widest text-slate-500 font-semibold uppercase -mt-0.5">
            Business Operating System
          </span>
        </div>
      </NuxtLink>

      <!-- Top-Center: Floating Glass Navigation Pill (Desktop) -->
      <nav class="hidden lg:flex items-center gap-1 bg-white/90 border border-purple-900/10 rounded-full px-5 py-2 backdrop-blur-xl shadow-lg shadow-purple-900/5">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-purple-950 rounded-full hover:bg-purple-50 transition-all duration-200"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Top-Right: CTA + Menu Icon -->
      <div class="flex items-center gap-3 sm:gap-4">
        <NuxtLink
          to="/scorecard"
          class="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500 hover:bg-gold-400 text-purple-950 font-bold text-xs tracking-wide uppercase transition-all duration-200 shadow-md shadow-gold-500/20 hover:shadow-gold-500/30 hover:scale-[1.02]"
        >
          <span>Take the Scorecard</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </NuxtLink>

        <!-- Menu / Hamburger Button -->
        <button
          type="button"
          class="w-10 h-10 rounded-full bg-white border border-purple-900/15 hover:border-gold-400 flex items-center justify-center text-purple-950 transition-all focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-sm"
          aria-label="Toggle menu"
          @click="isMobileOpen = !isMobileOpen"
        >
          <svg v-if="!isMobileOpen" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else class="w-5 h-5 text-gold-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    </div>

    <!-- Mobile Drawer Overlay -->
    <div
      v-if="isMobileOpen"
      class="lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-white/98 backdrop-blur-2xl z-50 p-6 overflow-y-auto border-t border-purple-900/10 animate-fadeIn"
    >
      <div class="max-w-md mx-auto space-y-6 pt-2 pb-16">
        <div class="grid grid-cols-2 gap-3 pb-4 border-b border-purple-900/10">
          <NuxtLink
            to="/scorecard"
            class="p-3.5 rounded-2xl bg-gold-500 text-purple-950 font-bold text-xs uppercase tracking-wide text-center"
            @click="isMobileOpen = false"
          >
            Take Scorecard
          </NuxtLink>
          <NuxtLink
            to="/apply"
            class="p-3.5 rounded-2xl bg-purple-950 text-white font-bold text-xs uppercase tracking-wide text-center border border-purple-900/20"
            @click="isMobileOpen = false"
          >
            Apply Now
          </NuxtLink>
        </div>

        <div class="space-y-1">
          <div class="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-3 py-1">Navigation</div>
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between px-3 py-3 rounded-2xl text-base font-semibold text-slate-800 hover:text-purple-950 hover:bg-purple-50"
            @click="isMobileOpen = false"
          >
            <span>{{ link.label }}</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-gold-50/50 border border-purple-900/10 space-y-2">
          <div class="text-[10px] font-mono uppercase text-gold-600 font-bold tracking-wider">Live Masterclass</div>
          <div class="text-sm font-bold text-purple-950">Why Your Expertise Isn't Turning Into Consistent Clients</div>
          <NuxtLink
            to="/workshop"
            class="inline-block text-xs font-semibold text-gold-600 hover:underline pt-1"
            @click="isMobileOpen = false"
          >
            Reserve Free Seat &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMobileOpen = ref(false)

const navLinks = [
  { label: 'Who We Help', to: '/who-we-help' },
  { label: 'What We Build', to: '/what-we-build' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Programs', to: '/programs' },
  { label: 'Resources', to: '/resources' },
  { label: 'About', to: '/about' }
]

watch(isMobileOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
