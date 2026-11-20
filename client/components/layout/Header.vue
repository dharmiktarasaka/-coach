<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? (isDark
            ? 'bg-[#0f1233]/95 backdrop-blur-md border-b border-[#D9AA55]/25 shadow-lg shadow-black/30 py-3'
            : 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#EAE2D4] shadow-sm py-3')
        : (isDark
            ? 'bg-[#0f1233]/85 backdrop-blur-sm border-b border-[#D9AA55]/20 py-4'
            : 'bg-[#FAFAFA]/85 backdrop-blur-sm border-b border-[#EAE2D4]/70 py-4')
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
            <span
              class="font-display font-extrabold text-lg sm:text-xl tracking-tight transition-colors"
              :class="isDark ? 'text-[#F8F5EF] group-hover:text-[#F8D78B]' : 'text-[#171844] group-hover:text-[#242658]'"
            >
              NARAYAN PRESENCE
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
          <!-- Home -->
          <NuxtLink
            to="/"
            class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors"
            :class="[
              isDark
                ? ($route.path === '/' ? 'text-[#F8D78B] bg-white/10' : 'text-[#F8F5EF]/85 hover:text-[#F8D78B] hover:bg-white/5')
                : ($route.path === '/' ? 'text-[#171844] bg-[#EAE2D4]/50' : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40')
            ]"
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
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              :class="[
                isDark
                  ? (activeDropdown === 'about' ? 'text-[#F8D78B] bg-white/10' : 'text-[#F8F5EF]/85 hover:text-[#F8D78B] hover:bg-white/5')
                  : (activeDropdown === 'about' ? 'text-[#171844] bg-[#EAE2D4]/40' : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40')
              ]"
            >
              <span>About</span>
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'about'"
              class="absolute top-full left-0 w-72 pt-2 transition-all duration-200 z-50"
            >
              <div
                class="rounded-2xl p-2.5 backdrop-blur-xl transition-colors border"
                :class="isDark
                  ? 'bg-[#141845] border-[#D9AA55]/30 shadow-2xl shadow-black/60 text-[#F8F5EF]'
                  : 'bg-white border-[#EAE2D4] shadow-xl shadow-[#171844]/10 text-[#171844]'"
              >
                <div
                  class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b mb-1"
                  :class="isDark ? 'text-[#D9AA55] border-[#D9AA55]/20' : 'text-[#8C6D57] border-[#EAE2D4]/60'"
                >
                  Who We Are
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in aboutLinks"
                    :key="item.to"
                    :to="item.to"
                    class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors group/item"
                    :class="[
                      isDark
                        ? ($route.path === item.to ? 'bg-[#0f1233] text-[#F8D78B] border border-[#D9AA55]/30' : 'text-[#F8F5EF] hover:bg-[#0f1233] hover:text-[#F8D78B]')
                        : ($route.path === item.to ? 'bg-[#171844] text-[#F8D78B]' : 'text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B]')
                    ]"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div :class="{ 'text-[#F8D78B]': $route.path === item.to }">{{ item.label }}</div>
                      <div
                        class="text-[11px] font-normal transition-colors"
                        :class="isDark
                          ? ($route.path === item.to ? 'text-[#EAE2D4]' : 'text-[#b4b4d4] group-hover/item:text-[#EAE2D4]')
                          : ($route.path === item.to ? 'text-[#EAE2D4]' : 'text-[#8C6D57] group-hover/item:text-[#EAE2D4]')"
                      >
                        {{ item.desc }}
                      </div>
                    </div>
                    <svg class="w-3.5 h-3.5 opacity-60 group-hover/item:opacity-100 transition-transform group-hover/item:translate-x-0.5" :class="{ 'text-[#F8D78B] opacity-100': $route.path === item.to }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              :class="[
                isDark
                  ? (activeDropdown === 'offerings' ? 'text-[#F8D78B] bg-white/10' : 'text-[#F8F5EF]/85 hover:text-[#F8D78B] hover:bg-white/5')
                  : (activeDropdown === 'offerings' ? 'text-[#171844] bg-[#EAE2D4]/40' : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40')
              ]"
            >
              <span>Offerings</span>
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'offerings'"
              class="absolute top-full -left-12 w-80 pt-2 transition-all duration-200 z-50"
            >
              <div
                class="rounded-2xl p-2.5 backdrop-blur-xl transition-colors border"
                :class="isDark
                  ? 'bg-[#141845] border-[#D9AA55]/30 shadow-2xl shadow-black/60 text-[#F8F5EF]'
                  : 'bg-white border-[#EAE2D4] shadow-xl shadow-[#171844]/10 text-[#171844]'"
              >
                <div
                  class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b mb-1"
                  :class="isDark ? 'text-[#D9AA55] border-[#D9AA55]/20' : 'text-[#8C6D57] border-[#EAE2D4]/60'"
                >
                  Programs & Services
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in offeringsLinks"
                    :key="item.to"
                    :to="item.to"
                    class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors group/item"
                    :class="[
                      isDark
                        ? ($route.path === item.to ? 'bg-[#0f1233] text-[#F8D78B] border border-[#D9AA55]/30' : 'text-[#F8F5EF] hover:bg-[#0f1233] hover:text-[#F8D78B]')
                        : ($route.path === item.to ? 'bg-[#171844] text-[#F8D78B]' : 'text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B]')
                    ]"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div :class="{ 'text-[#F8D78B]': $route.path === item.to }">{{ item.label }}</div>
                      <div
                        class="text-[11px] font-normal transition-colors"
                        :class="isDark
                          ? ($route.path === item.to ? 'text-[#EAE2D4]' : 'text-[#b4b4d4] group-hover/item:text-[#EAE2D4]')
                          : ($route.path === item.to ? 'text-[#EAE2D4]' : 'text-[#8C6D57] group-hover/item:text-[#EAE2D4]')"
                      >
                        {{ item.desc }}
                      </div>
                    </div>
                    <svg class="w-3.5 h-3.5 opacity-60 group-hover/item:opacity-100 transition-transform group-hover/item:translate-x-0.5" :class="{ 'text-[#F8D78B] opacity-100': $route.path === item.to }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            class="px-3 py-2 text-sm font-semibold rounded-lg transition-colors"
            :class="[
              isDark
                ? ($route.path === '/community' ? 'text-[#F8D78B] bg-white/10' : 'text-[#F8F5EF]/85 hover:text-[#F8D78B] hover:bg-white/5')
                : ($route.path === '/community' ? 'text-[#171844] bg-[#EAE2D4]/50' : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40')
            ]"
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
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              :class="[
                isDark
                  ? (activeDropdown === 'insights' ? 'text-[#F8D78B] bg-white/10' : 'text-[#F8F5EF]/85 hover:text-[#F8D78B] hover:bg-white/5')
                  : (activeDropdown === 'insights' ? 'text-[#171844] bg-[#EAE2D4]/40' : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40')
              ]"
            >
              <span>Insights</span>
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'insights'"
              class="absolute top-full -left-10 w-72 pt-2 transition-all duration-200 z-50"
            >
              <div
                class="rounded-2xl p-2.5 backdrop-blur-xl transition-colors border"
                :class="isDark
                  ? 'bg-[#141845] border-[#D9AA55]/30 shadow-2xl shadow-black/60 text-[#F8F5EF]'
                  : 'bg-white border-[#EAE2D4] shadow-xl shadow-[#171844]/10 text-[#171844]'"
              >
                <div
                  class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b mb-1"
                  :class="isDark ? 'text-[#D9AA55] border-[#D9AA55]/20' : 'text-[#8C6D57] border-[#EAE2D4]/60'"
                >
                  Learn & Reflect
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in insightLinks"
                    :key="item.to"
                    :to="item.to"
                    class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors group/item"
                    :class="[
                      isDark
                        ? ($route.path === item.to ? 'bg-[#0f1233] text-[#F8D78B] border border-[#D9AA55]/30' : 'text-[#F8F5EF] hover:bg-[#0f1233] hover:text-[#F8D78B]')
                        : ($route.path === item.to ? 'bg-[#171844] text-[#F8D78B]' : 'text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B]')
                    ]"
                    @click="activeDropdown = null"
                  >
                    <div>
                      <div :class="{ 'text-[#F8D78B]': $route.path === item.to }">{{ item.label }}</div>
                      <div
                        class="text-[11px] font-normal transition-colors"
                        :class="isDark
                          ? ($route.path === item.to ? 'text-[#EAE2D4]' : 'text-[#b4b4d4] group-hover/item:text-[#EAE2D4]')
                          : ($route.path === item.to ? 'text-[#EAE2D4]' : 'text-[#8C6D57] group-hover/item:text-[#EAE2D4]')"
                      >
                        {{ item.desc }}
                      </div>
                    </div>
                    <svg class="w-3.5 h-3.5 opacity-60 group-hover/item:opacity-100 transition-transform group-hover/item:translate-x-0.5" :class="{ 'text-[#F8D78B] opacity-100': $route.path === item.to }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              class="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
              :class="[
                isDark
                  ? (activeDropdown === 'policies' ? 'text-[#F8D78B] bg-white/10' : 'text-[#F8F5EF]/85 hover:text-[#F8D78B] hover:bg-white/5')
                  : (activeDropdown === 'policies' ? 'text-[#171844] bg-[#EAE2D4]/40' : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40')
              ]"
            >
              <span>Policies</span>
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              v-show="activeDropdown === 'policies'"
              class="absolute top-full -left-20 w-64 pt-2 transition-all duration-200 z-50"
            >
              <div
                class="rounded-2xl p-2.5 backdrop-blur-xl transition-colors border"
                :class="isDark
                  ? 'bg-[#141845] border-[#D9AA55]/30 shadow-2xl shadow-black/60 text-[#F8F5EF]'
                  : 'bg-white border-[#EAE2D4] shadow-xl shadow-[#171844]/10 text-[#171844]'"
              >
                <div
                  class="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border-b mb-1"
                  :class="isDark ? 'text-[#D9AA55] border-[#D9AA55]/20' : 'text-[#8C6D57] border-[#EAE2D4]/60'"
                >
                  Safety & Terms
                </div>
                <div class="space-y-1">
                  <NuxtLink
                    v-for="item in legalLinks"
                    :key="item.to"
                    :to="item.to"
                    class="block px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors"
                    :class="[
                      isDark
                        ? ($route.path === item.to ? 'bg-[#0f1233] text-[#F8D78B]' : 'text-[#F8F5EF] hover:bg-[#0f1233] hover:text-[#F8D78B]')
                        : ($route.path === item.to ? 'bg-[#171844] text-[#F8D78B]' : 'text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B]')
                    ]"
                    @click="activeDropdown = null"
                  >
                    {{ item.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <!-- CTA, Theme Switcher & Mobile Hamburger -->
        <div class="flex items-center gap-2 sm:gap-2.5">
          <!-- Student Login / Student Portal Button -->
          <NuxtLink
            v-if="!currentUser"
            to="/login"
            class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border shadow-sm hover:scale-[1.02]"
            :class="isDark
              ? 'bg-[#141845] hover:bg-[#1b1f55] text-[#F8F5EF] border-[#D9AA55]/30 shadow-black/20'
              : 'bg-white hover:bg-[#EAE2D4]/40 text-[#171844] border-[#EAE2D4] shadow-sm'"
          >
            <svg class="w-4 h-4" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            class="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md border hover:scale-[1.02]"
            :class="isDark
              ? 'bg-[#D9AA55] hover:bg-[#eab95e] text-[#0f1233] border-[#F8D78B] font-black shadow-[#D9AA55]/20'
              : 'bg-[#171844] hover:bg-[#242658] text-[#F8D78B] border-[#F8D78B]/30 shadow-[#171844]/20'"
          >
            <span>Contact Us</span>
            <svg class="w-3.5 h-3.5" :class="isDark ? 'text-[#0f1233]' : 'text-[#F8D78B]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </NuxtLink>

          <!-- Shop Icon Button -->
          <NuxtLink
            to="/shop"
            class="relative inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.04] group"
            :class="isDark
              ? 'bg-gradient-to-r from-[#FF9F00]/20 to-[#FB641B]/20 hover:from-[#FF9F00]/30 hover:to-[#FB641B]/30 border-[#FF9F00]/50 text-[#F8F5EF]'
              : 'bg-gradient-to-r from-[#FF9F00]/15 to-[#FB641B]/15 hover:from-[#FF9F00]/25 hover:to-[#FB641B]/25 border-[#FF9F00]/50 text-[#171844]'"
            title="Narayan Presence Store & Products"
            aria-label="Open Shop"
          >
            <div class="relative flex items-center">
              <svg class="w-4 h-4 text-[#FB641B] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <!-- Cart Count Badge -->
              <span
                v-if="cartTotalCount > 0"
                class="absolute -top-2.5 -right-2.5 min-w-[17px] h-[17px] px-1 bg-[#2874F0] text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse"
              >
                {{ cartTotalCount }}
              </span>
            </div>
            <span class="hidden md:inline font-extrabold" :class="isDark ? 'text-[#F8F5EF]' : 'text-[#171844]'">Shop</span>
          </NuxtLink>

          <!-- Light / Dark Theme Switcher Button -->
          <button
            type="button"
            id="theme"
            @click="toggleTheme"
            class="relative inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9AA55] group cursor-pointer shadow-sm hover:scale-105"
            :class="[
              isDark
                ? 'bg-[#141845] hover:bg-[#1c2260] border-[#D9AA55]/40 text-[#F8D78B] shadow-black/30'
                : 'bg-white hover:bg-[#EAE2D4]/50 border-[#EAE2D4] text-[#171844]'
            ]"
            :title="isDark ? 'Switch to Light theme' : 'Switch to Dark theme'"
            :aria-label="isDark ? 'Switch to Light theme' : 'Switch to Dark theme'"
          >
            <!-- In dark mode, show Sun icon with warm cosmic glow -->
            <span v-if="isDark" key="sun" class="flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
              <svg class="w-5 h-5 text-[#F8D78B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
            <!-- In light mode, show Moon icon -->
            <span v-else key="moon" class="flex items-center justify-center transition-transform duration-300 group-hover:-rotate-12">
              <svg class="w-5 h-5 text-[#171844]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
          </button>

          <!-- Mobile Hamburger -->
          <button
            type="button"
            class="lg:hidden p-2 rounded-xl focus:outline-none transition-colors cursor-pointer"
            :class="isDark ? 'text-[#F8F5EF] hover:bg-white/10' : 'text-[#171844] hover:bg-[#EAE2D4]/50'"
            aria-label="Toggle mobile menu"
            @click="isMobileMenuOpen = !isMobileMenuOpen"
          >
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" :class="isDark ? 'text-[#F8D78B]' : 'text-[#171844]'" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </UiContainer>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 top-[68px] backdrop-blur-xl z-40 overflow-y-auto p-6 pb-28 shadow-2xl transition-colors"
      :class="isDark ? 'bg-[#0f1233]/98 border-t border-[#D9AA55]/20 text-[#F8F5EF]' : 'bg-[#FAFAFA]/98 border-t border-[#EAE2D4] text-[#171844]'"
    >
      <div class="space-y-6 max-w-lg mx-auto">
        <!-- Prominent Mobile Theme Switcher Bar -->
        <div
          class="flex items-center justify-between p-3.5 rounded-2xl border transition-all shadow-sm"
          :class="isDark ? 'bg-[#141845] border-[#D9AA55]/30 text-[#F8F5EF]' : 'bg-white border-[#EAE2D4] text-[#171844]'"
        >
          <div class="flex items-center gap-3">
            <div
              class="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
              :class="isDark ? 'bg-[#0f1233] text-[#F8D78B]' : 'bg-[#FAFAFA] text-[#171844] border border-[#EAE2D4]'"
            >
              {{ isDark ? '🌙' : '☀️' }}
            </div>
            <div class="flex flex-col">
              <span class="text-xs font-bold uppercase tracking-wider">{{ isDark ? 'Dark Theme' : 'Light Theme' }}</span>
              <span class="text-[11px]" :class="isDark ? 'text-[#b4b4d4]' : 'text-[#8C6D57]'">
                {{ isDark ? 'Cosmic Navy & Gold' : 'Warm Editorial Cream' }}
              </span>
            </div>
          </div>
          <button
            type="button"
            @click="toggleTheme"
            class="px-3.5 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 border cursor-pointer hover:scale-105 shadow-sm"
            :class="isDark
              ? 'bg-[#0f1233] text-[#F8D78B] border-[#D9AA55]/40 hover:bg-[#1b1f55]'
              : 'bg-[#171844] text-[#F8D78B] border-[#171844] hover:bg-[#242658]'"
          >
            Switch to {{ isDark ? 'Light ☀️' : 'Dark 🌙' }}
          </button>
        </div>

        <!-- Direct Home, Shop, Student Login & Contact -->
        <div class="grid grid-cols-3 gap-2 pb-3 border-b" :class="isDark ? 'border-[#D9AA55]/20' : 'border-[#EAE2D4]'">
          <NuxtLink
            to="/"
            class="p-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center border transition-colors"
            :class="isDark
              ? 'bg-[#141845] text-[#F8F5EF] border-[#D9AA55]/30 hover:bg-[#1b1f55]'
              : 'bg-white text-[#171844] border-[#EAE2D4] hover:bg-[#EAE2D4]/40'"
            @click="isMobileMenuOpen = false"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/shop"
            class="p-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center border flex items-center justify-center gap-1 transition-colors"
            :class="isDark
              ? 'bg-gradient-to-r from-[#FF9F00]/20 to-[#FB641B]/20 text-[#F8F5EF] border-[#FF9F00]/50'
              : 'bg-gradient-to-r from-[#FF9F00]/15 to-[#FB641B]/15 text-[#171844] border-[#FF9F00]/40'"
            @click="isMobileMenuOpen = false"
          >
            <span>🛍️</span>
            <span>Shop</span>
            <span v-if="cartTotalCount > 0" class="min-w-[16px] h-4 px-1 rounded-full bg-[#2874F0] text-white text-[9px] font-black flex items-center justify-center">
              {{ cartTotalCount }}
            </span>
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="p-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-center border transition-colors"
            :class="isDark
              ? 'bg-[#D9AA55] text-[#0f1233] border-[#F8D78B] font-black'
              : 'bg-[#171844] text-[#F8D78B] border-[#F8D78B]/30'"
            @click="isMobileMenuOpen = false"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            v-if="!currentUser"
            to="/login"
            class="col-span-3 p-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border shadow-sm transition-colors"
            :class="isDark
              ? 'bg-gradient-to-r from-[#141845] to-[#1b1f55] text-[#F8D78B] border-[#D9AA55]/40'
              : 'bg-gradient-to-r from-[#242658] to-[#171844] text-[#F8D78B] border-[#F8D78B]/30'"
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
            class="col-span-3 p-3 rounded-xl bg-gradient-to-r from-[#242658] to-[#171844] text-[#F8D78B] font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border border-[#F8D78B]/40 shadow-sm"
            @click="isMobileMenuOpen = false"
          >
            <span class="w-2 h-2 rounded-full bg-[#35D9B0] animate-pulse"></span>
            Enter Student Portal
          </NuxtLink>
        </div>

        <!-- Section: About -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider px-2 py-1" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'">About</div>
          <NuxtLink
            v-for="item in aboutLinks"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
            :class="isDark ? 'text-[#F8F5EF] hover:bg-white/10' : 'text-[#171844] hover:bg-[#EAE2D4]/50'"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Section: Offerings -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider px-2 py-1" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'">Offerings</div>
          <NuxtLink
            v-for="item in offeringsLinks"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
            :class="isDark ? 'text-[#F8F5EF] hover:bg-white/10' : 'text-[#171844] hover:bg-[#EAE2D4]/50'"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Section: Community -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider px-2 py-1" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'">Community</div>
          <NuxtLink
            to="/community"
            class="block px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
            :class="isDark ? 'text-[#F8F5EF] hover:bg-white/10' : 'text-[#171844] hover:bg-[#EAE2D4]/50'"
            @click="isMobileMenuOpen = false"
          >
            Community Overview
          </NuxtLink>
        </div>

        <!-- Section: Insights -->
        <div class="space-y-1">
          <div class="text-[11px] font-bold uppercase tracking-wider px-2 py-1" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'">Insights & Resources</div>
          <NuxtLink
            v-for="item in insightLinks"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-2 rounded-xl text-sm font-semibold transition-colors"
            :class="isDark ? 'text-[#F8F5EF] hover:bg-white/10' : 'text-[#171844] hover:bg-[#EAE2D4]/50'"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- Section: Policies -->
        <div class="space-y-1 pt-2 border-t" :class="isDark ? 'border-[#D9AA55]/20' : 'border-[#EAE2D4]'">
          <div class="text-[11px] font-bold uppercase tracking-wider px-2 py-1" :class="isDark ? 'text-[#D9AA55]' : 'text-[#8C6D57]'">Legal & Safety</div>
          <div class="grid grid-cols-2 gap-1">
            <NuxtLink
              v-for="item in legalLinks"
              :key="item.to"
              :to="item.to"
              class="block px-3 py-1.5 rounded-xl text-xs transition-colors"
              :class="isDark
                ? 'text-[#F8F5EF]/80 hover:text-[#F8D78B] hover:bg-white/10'
                : 'text-[#171844]/80 hover:text-[#171844] hover:bg-[#EAE2D4]/40'"
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
import { useShopCart } from '~/composables/useShopCart'
import { useTheme } from '~/composables/useTheme'

const { currentUser } = useAuth()
const { cartTotalCount } = useShopCart()
const { isDark, toggleTheme, initTheme } = useTheme()

const activeDropdown = ref<string | null>(null)
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  initTheme()
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
  { to: '/resources', label: 'Blog & Journal', desc: 'Reflections, essays & actionable ideas' },
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
