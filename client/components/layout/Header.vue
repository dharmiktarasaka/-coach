<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#EAE2D4] shadow-sm py-3'
        : 'bg-[#FAFAFA]/85 backdrop-blur-sm border-b border-[#EAE2D4]/70 py-4'
    ]"
  >
    <UiContainer size="xl">
      <div class="flex items-center justify-between">
        <!-- Brand Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group focus:outline-none">
          <img
            src="/logo.png"
            alt="Narayan Presence"
            class="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
          />
          <div class="flex flex-col">
            <span class="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#171844] group-hover:text-[#242658] transition-colors">
              NARAYAN PRESENCE
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
          <!-- Home -->
          <NuxtLink
            to="/"
            class="px-3 py-2 text-sm font-semibold rounded-lg text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
            active-class="text-[#171844] bg-[#EAE2D4]/50"
          >
            Home
          </NuxtLink>

          <!-- Dropdown: About -->
          <div
            class="relative group"
            @mouseenter="activeDropdown = 'about'"
            @mouseleave="activeDropdown = null"
          >
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
              :class="{ 'text-[#171844] bg-[#EAE2D4]/40': activeDropdown === 'about' }"
            >
              <span>About</span>
              <svg class="w-4 h-4 text-[#8C6D57] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'about'"
              class="absolute top-full left-0 w-72 pt-2 transition-all duration-200 z-50"
            >
              <div class="bg-white border border-[#EAE2D4] rounded-2xl p-2.5 shadow-xl shadow-[#171844]/10 backdrop-blur-xl">
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#8C6D57] px-3 py-1.5 border-b border-[#EAE2D4]/60 mb-1">
                  Who We Are
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in aboutLinks"
                    :key="item.to"
                    :to="item.to"
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B] transition-colors group/item"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div>{{ item.label }}</div>
                      <div class="text-[11px] text-[#8C6D57] group-hover/item:text-[#EAE2D4] font-normal">{{ item.desc }}</div>
                    </div>
                    <svg class="w-3.5 h-3.5 opacity-60 group-hover/item:opacity-100 transition-transform group-hover/item:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Dropdown: Offerings -->
          <div
            class="relative group"
            @mouseenter="activeDropdown = 'offerings'"
            @mouseleave="activeDropdown = null"
          >
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
              :class="{ 'text-[#171844] bg-[#EAE2D4]/40': activeDropdown === 'offerings' }"
            >
              <span>Offerings</span>
              <svg class="w-4 h-4 text-[#8C6D57] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'offerings'"
              class="absolute top-full -left-12 w-80 pt-2 transition-all duration-200 z-50"
            >
              <div class="bg-white border border-[#EAE2D4] rounded-2xl p-2.5 shadow-xl shadow-[#171844]/10 backdrop-blur-xl">
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#8C6D57] px-3 py-1.5 border-b border-[#EAE2D4]/60 mb-1">
                  Programs & Services
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in offeringsLinks"
                    :key="item.to"
                    :to="item.to"
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B] transition-colors group/item"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div>{{ item.label }}</div>
                      <div class="text-[11px] text-[#8C6D57] group-hover/item:text-[#EAE2D4] font-normal">{{ item.desc }}</div>
                    </div>
                    <svg class="w-3.5 h-3.5 opacity-60 group-hover/item:opacity-100 transition-transform group-hover/item:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Community -->
          <NuxtLink
            to="/community"
            class="px-3 py-2 text-sm font-semibold rounded-lg text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
            active-class="text-[#171844] bg-[#EAE2D4]/50"
          >
            Community
          </NuxtLink>

          <!-- Dropdown: Insights & Stories -->
          <div
            class="relative group"
            @mouseenter="activeDropdown = 'insights'"
            @mouseleave="activeDropdown = null"
          >
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
              :class="{ 'text-[#171844] bg-[#EAE2D4]/40': activeDropdown === 'insights' }"
            >
              <span>Insights</span>
              <svg class="w-4 h-4 text-[#8C6D57] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'insights'"
              class="absolute top-full -left-10 w-72 pt-2 transition-all duration-200 z-50"
            >
              <div class="bg-white border border-[#EAE2D4] rounded-2xl p-2.5 shadow-xl shadow-[#171844]/10 backdrop-blur-xl">
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#8C6D57] px-3 py-1.5 border-b border-[#EAE2D4]/60 mb-1">
                  Learn & Reflect
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in insightLinks"
                    :key="item.to"
                    :to="item.to"
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B] transition-colors group/item"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div>{{ item.label }}</div>
                      <div class="text-[11px] text-[#8C6D57] group-hover/item:text-[#EAE2D4] font-normal">{{ item.desc }}</div>
                    </div>
                    <svg class="w-3.5 h-3.5 opacity-60 group-hover/item:opacity-100 transition-transform group-hover/item:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Dropdown: Information / Policies -->
          <div
            class="relative group"
            @mouseenter="activeDropdown = 'policies'"
            @mouseleave="activeDropdown = null"
          >
            <button
              type="button"
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40 transition-colors"
              :class="{ 'text-[#171844] bg-[#EAE2D4]/40': activeDropdown === 'policies' }"
            >
              <span>Policies</span>
              <svg class="w-4 h-4 text-[#8C6D57] transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'policies'"
              class="absolute top-full -left-20 w-64 pt-2 transition-all duration-200 z-50"
            >
              <div class="bg-white border border-[#EAE2D4] rounded-2xl p-2.5 shadow-xl shadow-[#171844]/10 backdrop-blur-xl">
                <div class="text-[10px] font-bold uppercase tracking-wider text-[#8C6D57] px-3 py-1.5 border-b border-[#EAE2D4]/60 mb-1">
                  Safety & Terms
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in legalLinks"
                    :key="item.to"
                    :to="item.to"
                    class="block px-3 py-1.5 rounded-xl text-xs font-semibold text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B] transition-colors"
                    @click="activeDropdown = null"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- CTA & Mobile Hamburger -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Student Login / Student Portal Button -->
          <NuxtLink
            v-if="!currentUser"
            to="/login"
            class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-[#EAE2D4]/40 text-[#171844] font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-[#EAE2D4] shadow-sm hover:scale-[1.02]"
          >
            <svg class="w-4 h-4 text-[#8C6D57]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Student Login</span>
          </NuxtLink>

          <NuxtLink
            v-else
            to="/portal"
            class="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#242658] hover:bg-[#171844] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-[#F8D78B]/40 shadow-sm"
          >
            <span class="w-2 h-2 rounded-full bg-[#35D9B0] animate-pulse"></span>
            <span>Student Portal</span>
          </NuxtLink>

          <!-- Contact CTA -->
          <NuxtLink
            to="/contact"
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#171844]/20 border border-[#F8D78B]/30 hover:scale-[1.02]"
          >
            <span>Contact Us</span>
            <svg class="w-3.5 h-3.5 text-[#F8D78B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="lg:hidden p-2 rounded-xl text-[#171844] hover:bg-[#EAE2D4]/50 focus:outline-none transition-colors"
            aria-label="Toggle mobile menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6 text-[#171844]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </UiContainer>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 top-[68px] bg-[#FAFAFA]/98 backdrop-blur-xl z-40 overflow-y-auto border-t border-[#EAE2D4] p-6 pb-24 shadow-2xl"
    >
      <div class="space-y-6 max-w-lg mx-auto">
        <!-- Direct Home, Student Login & Contact -->
        <div class="grid grid-cols-2 gap-2.5 pb-3 border-b border-[#EAE2D4]">
          <NuxtLink
            to="/"
            class="p-2.5 rounded-xl bg-white text-[#171844] font-bold text-xs uppercase tracking-wider text-center border border-[#EAE2D4]"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="p-2.5 rounded-xl bg-[#171844] text-[#F8D78B] font-bold text-xs uppercase tracking-wider text-center border border-[#F8D78B]/30"
            @click="isMobileMenuOpen = false"
          >
            Contact Us
          </NuxtLink>
          <NuxtLink
            v-if="!currentUser"
            to="/login"
            class="col-span-2 p-3 rounded-xl bg-gradient-to-r from-[#242658] to-[#171844] text-[#F8D78B] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-[#F8D78B]/30 shadow-sm"
            @click="isMobileMenuOpen = false"
          >
            <svg class="w-4 h-4 text-[#F8D78B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Student Login
          </NuxtLink>
          <NuxtLink
            v-else
            to="/portal"
            class="col-span-2 p-3 rounded-xl bg-gradient-to-r from-[#242658] to-[#171844] text-[#F8D78B] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-[#F8D78B]/40 shadow-sm"
            @click="isMobileMenuOpen = false"
          >
            <span class="w-2 h-2 rounded-full bg-[#35D9B0] animate-pulse"></span>
            Enter Student Portal
          </NuxtLink>
        </div>

        <!-- Section: About -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider text-[#8C6D57] px-2 py-1">About</div>
          <NuxtLink
            v-for="item in aboutLinks"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-xl text-sm font-semibold text-[#171844] hover:bg-[#EAE2D4]/50"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Section: Offerings -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider text-[#8C6D57] px-2 py-1">Offerings</div>
          <NuxtLink
            v-for="item in offeringsLinks"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-xl text-sm font-semibold text-[#171844] hover:bg-[#EAE2D4]/50"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Section: Community -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider text-[#8C6D57] px-2 py-1">Community</div>
          <NuxtLink
            to="/community"
            class="block px-3 py-2 rounded-xl text-sm font-semibold text-[#171844] hover:bg-[#EAE2D4]/50"
            @click="isMobileMenuOpen = false"
          >
            Community Overview
          </NuxtLink>
        </div>

        <!-- Section: Insights -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider text-[#8C6D57] px-2 py-1">Insights & Resources</div>
          <NuxtLink
            v-for="item in insightLinks"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-xl text-sm font-semibold text-[#171844] hover:bg-[#EAE2D4]/50"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Section: Policies -->
        <div class="space-y-1 pt-2 border-t border-[#EAE2D4]">
          <div class="text-[11px] font-bold uppercase tracking-wider text-[#8C6D57] px-2 py-1">Legal & Safety</div>
          <div class="grid grid-cols-2 gap-1">
            <NuxtLink
              v-for="item in legalLinks"
              :key="item.to"
              :to="item.to"
              class="block px-3 py-1.5 rounded-xl text-xs text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const { currentUser } = useAuth()

const activeDropdown = ref<string | null>(null)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const aboutLinks = [
  { to: '/about', label: 'About Narayan Presence', desc: 'Our mission, vision and presence' },
  { to: '/founder', label: 'Founder Profile', desc: 'Meet the mind behind the work' },
  { to: '/methodology', label: 'Our Methodology', desc: 'Framework for sustainable growth' }
]

const offeringsLinks = [
  { to: '/courses', label: 'Courses', desc: 'Curated deep-dive training programs' },
  { to: '/workshops', label: 'Workshops & Events', desc: 'Live experiential learning sessions' },
  { to: '/coaching', label: '1-to-1 Coaching', desc: 'Private, tailored mentorship' },
  { to: '/membership', label: 'Membership', desc: 'Ongoing support, network & tools' },
  { to: '/products', label: 'Books & Digital Products', desc: 'Practical toolkits and publications' }
]

const insightLinks = [
  { to: '/blog', label: 'Blog', desc: 'Reflections, essays & actionable ideas' },
  { to: '/testimonials', label: 'Testimonials', desc: 'Real experiences & impact' },
  { to: '/faqs', label: 'FAQs', desc: 'Frequently asked questions' }
]

const legalLinks = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
  { to: '/disclaimer', label: 'Disclaimer & Safety' }
]
</script>
