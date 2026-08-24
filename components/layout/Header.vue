<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#FBF6F6]/95 backdrop-blur-md border-b border-[#EAE4E4] shadow-sm py-3.5'
        : 'bg-[#FBF6F6]/85 backdrop-blur-sm border-b border-[#EAE4E4]/60 py-4'
    ]"
  >
    <UiContainer size="xl">
      <div class="flex items-center justify-between">
        <!-- Brand Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#FF7F11] rounded-xl p-1">
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#FF7F11] to-[#E66800] flex items-center justify-center shadow-md shadow-[#FF7F11]/25 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div class="flex flex-col">
            <span class="font-display font-black text-lg sm:text-xl tracking-tight text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
              DIGITAL COACH
            </span>
            <span class="text-[9px] tracking-widest font-bold uppercase -mt-1 text-[#8C8685]">
              Business Operating System
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
          <!-- Dropdown: Who We Help -->
          <div class="relative group" @mouseenter="activeDropdown = 'who-we-help'" @mouseleave="activeDropdown = null">
            <NuxtLink
              to="/who-we-help"
              class="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
            >
              Who We Help
              <svg class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>

            <div
              v-show="activeDropdown === 'who-we-help'"
              class="absolute top-full left-0 w-80 pt-2 transition-all duration-200"
            >
              <div class="bg-white border border-[#EAE4E4] rounded-2xl p-3 shadow-xl backdrop-blur-xl">
                <div class="text-[11px] font-semibold uppercase tracking-wider text-[#8C8685] px-3 py-1.5 border-b border-[#EAE4E4] mb-1.5">
                  Target Audiences
                </div>
                <div class="grid gap-1">
                  <NuxtLink
                    v-for="audience in audienceList"
                    :key="audience.to"
                    :to="audience.to"
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-sm text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#FBF6F6] transition-colors group/item"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div class="font-semibold text-[#1A1A1A] group-hover/item:text-[#FF7F11]">{{ audience.label }}</div>
                      <div class="text-xs text-[#8C8685]">{{ audience.sub }}</div>
                    </div>
                    <svg class="w-4 h-4 text-[#8C8685] group-hover/item:text-[#FF7F11] transition-transform group-hover/item:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Dropdown: What We Build -->
          <div class="relative group" @mouseenter="activeDropdown = 'what-we-build'" @mouseleave="activeDropdown = null">
            <NuxtLink
              to="/what-we-build"
              class="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
            >
              What We Build
              <svg class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>

            <div
              v-show="activeDropdown === 'what-we-build'"
              class="absolute top-full -left-20 w-[420px] pt-2 transition-all duration-200"
            >
              <div class="bg-white border border-[#EAE4E4] rounded-2xl p-4 shadow-xl backdrop-blur-xl">
                <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#EAE4E4]">
                  <span class="text-[11px] font-semibold uppercase tracking-wider text-[#8C8685]">9 Core Business Layers</span>
                  <NuxtLink to="/what-we-build" class="text-xs text-[#FF7F11] font-bold hover:underline" @click="activeDropdown = null">View All Layers &rarr;</NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-1.5">
                  <NuxtLink
                    v-for="layer in layersShortList"
                    :key="layer.number"
                    to="/what-we-build"
                    class="p-2 rounded-xl text-xs text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#FBF6F6] transition-colors flex items-center gap-2"
                    @click="activeDropdown = null"
                  >
                    <span class="text-[10px] font-mono text-white font-bold bg-[#FF7F11] px-1.5 py-0.5 rounded">{{ layer.number }}</span>
                    <span class="font-medium truncate">{{ layer.title }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/how-it-works"
            class="px-3.5 py-2 text-sm font-semibold rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
          >
            How It Works
          </NuxtLink>

          <NuxtLink
            to="/programs"
            class="px-3.5 py-2 text-sm font-semibold rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
          >
            Programs
          </NuxtLink>

          <!-- Dropdown: Resources -->
          <div class="relative group" @mouseenter="activeDropdown = 'resources'" @mouseleave="activeDropdown = null">
            <NuxtLink
              to="/resources"
              class="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
            >
              Resources
              <svg class="w-4 h-4 opacity-70 group-hover:opacity-100 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </NuxtLink>

            <div
              v-show="activeDropdown === 'resources'"
              class="absolute top-full -left-10 w-72 pt-2 transition-all duration-200"
            >
              <div class="bg-white border border-[#EAE4E4] rounded-2xl p-3 shadow-xl backdrop-blur-xl">
                <div class="text-[11px] font-semibold uppercase tracking-wider text-[#8C8685] px-3 py-1.5 border-b border-[#EAE4E4] mb-1.5">
                  Strategic Guides
                </div>
                <div class="grid gap-1">
                  <NuxtLink
                    v-for="guide in guideList"
                    :key="guide.to"
                    :to="guide.to"
                    class="px-3 py-2 rounded-xl text-xs font-medium text-[#524F4E] hover:text-[#FF7F11] hover:bg-[#FBF6F6] transition-colors block truncate"
                    @click="activeDropdown = null"
                  >
                    {{ guide.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink
            to="/about"
            class="px-3.5 py-2 text-sm font-semibold rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
          >
            About
          </NuxtLink>
        </nav>

        <!-- CTAs & Mobile Hamburger in #FF7F11 & #FBF6F6 -->
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/apply"
            class="hidden sm:inline-flex text-xs md:text-sm font-semibold px-3.5 py-2 rounded-lg text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
          >
            Apply
          </NuxtLink>

          <NuxtLink
            to="/scorecard"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-xs tracking-wide uppercase transition-all duration-200 shadow-md shadow-[#FF7F11]/25 hover:scale-[1.02]"
          >
            <span>Take Scorecard</span>
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <!-- Mobile Menu Trigger -->
          <button
            type="button"
            class="lg:hidden p-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF7F11] text-[#524F4E] hover:text-[#1A1A1A] hover:bg-[#EFE9E9] transition-colors"
            aria-label="Toggle mobile menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </UiContainer>

    <!-- Mobile Drawer Overlay -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 top-[68px] bg-[#FBF6F6]/98 backdrop-blur-2xl z-40 overflow-y-auto border-t border-[#EAE4E4] p-6 pb-20 animate-fadeIn shadow-xl"
    >
      <div class="space-y-6 max-w-lg mx-auto">
        <!-- Main Actions -->
        <div class="grid grid-cols-2 gap-3 pb-4 border-b border-[#EAE4E4]">
          <NuxtLink
            to="/scorecard"
            class="p-3 rounded-xl bg-[#FF7F11] text-white font-bold text-xs uppercase tracking-wide text-center shadow-md shadow-[#FF7F11]/25"
            @click="isMobileMenuOpen = false"
          >
            Take Scorecard
          </NuxtLink>
          <NuxtLink
            to="/apply"
            class="p-3 rounded-xl bg-white text-[#1A1A1A] font-bold text-xs uppercase tracking-wide text-center border border-[#EAE4E4]"
            @click="isMobileMenuOpen = false"
          >
            Apply Now
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="space-y-1">
          <div class="text-xs font-semibold text-[#8C8685] uppercase tracking-wider px-3 py-1">Navigation</div>
          <NuxtLink
            v-for="link in mobileLinks"
            :key="link.to"
            :to="link.to"
            class="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-[#1A1A1A] hover:text-[#FF7F11] hover:bg-[#EFE9E9]"
            @click="isMobileMenuOpen = false"
          >
            {{ link.label }}
            <svg class="w-4 h-4 text-[#8C8685]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Who We Help Section -->
        <div class="space-y-1 pt-2 border-t border-[#EAE4E4]">
          <div class="text-xs font-semibold text-[#8C8685] uppercase tracking-wider px-3 py-1">Who We Help</div>
          <div class="grid grid-cols-2 gap-2">
            <NuxtLink
              v-for="aud in audienceList"
              :key="aud.to"
              :to="aud.to"
              class="p-2.5 rounded-xl bg-white border border-[#EAE4E4] text-xs font-semibold text-[#1A1A1A] hover:bg-[#FBF6F6] hover:text-[#FF7F11]"
              @click="isMobileMenuOpen = false"
            >
              {{ aud.label }}
            </NuxtLink>
          </div>
        </div>

        <!-- Workshop Feature Banner -->
        <div class="p-4 rounded-2xl bg-white border border-[#EAE4E4] shadow-sm">
          <div class="text-xs font-bold uppercase text-[#FF7F11] tracking-wider mb-1">Live Growth Workshop</div>
          <div class="text-sm font-bold text-[#1A1A1A] mb-2">Why Your Expertise Isn't Turning Into Consistent Clients</div>
          <NuxtLink
            to="/workshop"
            class="inline-flex items-center text-xs font-bold text-[#FF7F11] hover:underline gap-1"
            @click="isMobileMenuOpen = false"
          >
            Reserve Your Free Seat &rarr;
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeDropdown = ref<string | null>(null)

const onScroll = () => {
  if (import.meta.client) {
    isScrolled.value = window.scrollY > 40
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

watch(isMobileMenuOpen, (isOpen) => {
  if (import.meta.client) {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  }
})

const audienceList = [
  { label: 'Coaches', sub: '1-on-1 & cohort coaches', to: '/who-we-help/coaches' },
  { label: 'Consultants', sub: 'Boutique & enterprise advisors', to: '/who-we-help/consultants' },
  { label: 'Trainers', sub: 'Corporate & technical educators', to: '/who-we-help/trainers' },
  { label: 'Creators', sub: 'Audience & knowledge creators', to: '/who-we-help/creators' },
  { label: 'Professionals', sub: 'Corporate executives in transition', to: '/who-we-help/professionals' },
  { label: 'Experts & Authors', sub: 'Domain specialists & thought leaders', to: '/who-we-help/experts' }
]

const layersShortList = [
  { number: '01', title: 'Positioning' },
  { number: '02', title: 'Offer Architecture' },
  { number: '03', title: 'Authority & IP' },
  { number: '04', title: 'Acquisition Engine' },
  { number: '05', title: 'Diagnostic Conversion' },
  { number: '06', title: 'Leveraged Delivery' },
  { number: '07', title: 'Business Systems' },
  { number: '08', title: 'AI Operating Layer' },
  { number: '09', title: 'Sustainable Scale' }
]

const guideList = [
  { title: 'The Expert Business Operating System', to: '/coaching-business' },
  { title: 'Building in India for the World', to: '/coaching-business-india' },
  { title: 'Crafting High-Value Flagship Offers', to: '/coaching-offer' },
  { title: 'Predictable Client Acquisition Architecture', to: '/get-coaching-clients' },
  { title: 'AI Leverage for Modern Coaches', to: '/ai-for-coaches' },
  { title: 'High-Ticket Diagnostic Enrollment', to: '/high-ticket-coaching' },
  { title: 'Coaching Automation & Systems', to: '/coaching-business-automation' }
]

const mobileLinks = [
  { label: 'Who We Help (Overview)', to: '/who-we-help' },
  { label: 'What We Build', to: '/what-we-build' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Programs & Advisory', to: '/programs' },
  { label: 'Strategic Resources', to: '/resources' },
  { label: 'Live Growth Workshop', to: '/workshop' },
  { label: 'About Digital Coach', to: '/about' }
]
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
