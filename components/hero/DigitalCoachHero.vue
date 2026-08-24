<template>
  <div class="relative w-full bg-[#FBF6F6] text-[#1A1A1A]">
    
    <!-- ========================================================================= -->
    <!-- 1. FRAMER 5-COLUMN SHUTTER CURTAIN REVEAL (ORANGE #FF7F11 -> #FBF6F6)     -->
    <!-- ========================================================================= -->
    <div
      v-if="showCurtain"
      class="fixed inset-0 z-50 flex pointer-events-none w-screen h-screen overflow-hidden"
    >
      <div
        v-for="col in 5"
        :key="col"
        class="relative h-full w-[20%] transition-transform shadow-2xl bg-[#FF7F11]"
        :style="{
          transform: isColumnOpen(col) ? 'translateY(-100%)' : 'translateY(0%)',
          transitionDuration: '950ms',
          transitionTimingFunction: 'cubic-bezier(1, 0, 0.56, 1)'
        }"
      >
        <div class="absolute inset-0 bg-gradient-to-b from-[#FF8C24] via-[#FF7F11] to-[#E66800]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>
    </div>


    <!-- ========================================================================= -->
    <!-- 2. FULL-SCREEN SCROLL TIMELINE CONTAINER (500vh SCROLL DEPTH)             -->
    <!-- ========================================================================= -->
    <div
      ref="timelineWrapRef"
      class="relative w-full"
      :style="{ height: totalScrollHeight }"
    >
      
      <!-- FULL-SCREEN STICKY CANVAS (100VW x 100VH IMMERSIVE EDGE-TO-EDGE) -->
      <div
        class="sticky top-0 w-full h-screen overflow-hidden z-20"
        style="height: 100vh; max-height: 100vh;"
      >
        
        <!-- ===================================================================== -->
        <!-- FULL-SCREEN PANELS (HORIZONTAL WIPE + ROTATING TYPOGRAPHY)            -->
        <!-- ===================================================================== -->
        <section
          v-for="(panel, idx) in timelinePanels"
          :key="panel.id"
          :ref="el => setPanelRef(el as HTMLElement, idx)"
          class="timeline-panel absolute inset-0 w-full h-full will-change-[clip-path] overflow-hidden"
          :style="{
            backgroundColor: panel.bg,
            color: panel.fg,
            zIndex: String(idx)
          }"
        >
          <!-- Full-Bleed Content Container (0% Cropping Guaranteed) -->
          <div class="relative w-full h-full pt-20 sm:pt-24 pb-8 sm:pb-12 lg:pb-14 px-6 sm:px-12 lg:px-16 xl:px-24 flex flex-col justify-between max-w-[1580px] mx-auto overflow-hidden">
            
            <!-- Volumetric Ambient Lighting Background Accents -->
            <div class="absolute inset-0 pointer-events-none opacity-40">
              <div
                class="absolute -top-24 right-1/4 w-[450px] h-[450px] rounded-full blur-[160px]"
                :style="{ backgroundColor: panel.accentGlow }"
              ></div>
              <div
                class="absolute -bottom-24 left-1/4 w-[450px] h-[450px] rounded-full blur-[160px]"
                :style="{ backgroundColor: panel.accentGlow }"
              ></div>
              <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]"></div>
            </div>

            <!-- Middle Main Narrative Area (Proportionate Heights Fit 100% On Screen) -->
            <div class="panel-content relative z-10 flex-1 flex flex-col justify-center py-2 sm:py-3 max-w-2xl xl:max-w-3xl space-y-2.5 sm:space-y-3 lg:space-y-3.5">
              
              <!-- Main Heading -->
              <div class="space-y-1">
                <div class="text-[10px] sm:text-xs font-mono uppercase tracking-widest font-black" :style="{ color: panel.accentCol }">
                  {{ panel.phaseTag }}
                </div>
                <h1
                  class="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] tracking-tight leading-[1.08] uppercase whitespace-pre-line"
                  :style="{ color: panel.fg }"
                >{{ panel.headline }}</h1>
              </div>

              <!-- Supporting Text -->
              <p
                class="text-xs sm:text-[13px] md:text-sm lg:text-[15px] leading-relaxed font-normal max-w-xl"
                :style="{ color: panel.mutedFg }"
              >
                {{ panel.desc }}
              </p>

              <!-- Highlight Keywords / Digital System Block -->
              <div
                class="p-2 sm:p-2.5 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-sm backdrop-blur-md max-w-xl"
                :style="{ backgroundColor: panel.cardBg, borderColor: panel.cardBorder }"
              >
                <div class="space-y-0.5">
                  <div class="text-[9px] sm:text-[10px] font-mono uppercase font-bold" :style="{ color: panel.accentCol }">
                    Key Highlight:
                  </div>
                  <div class="text-xs sm:text-sm font-semibold" :style="{ color: panel.fg }">
                    {{ panel.pillarFocus }}
                  </div>
                </div>

                <div class="flex items-center gap-2 font-mono text-[10px] sm:text-xs font-bold shrink-0" :style="{ color: panel.accentCol }">
                  <span>{{ panel.impactMetric }}</span>
                </div>
              </div>

              <!-- CTA Actions -->
              <div class="flex flex-wrap items-center gap-2.5 pt-0.5 sm:pt-1">
                <NuxtLink
                  :to="panel.ctaPrimaryRoute"
                  class="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wide uppercase transition-all duration-200 shadow-md hover:scale-105 active:scale-95"
                  :style="{ backgroundColor: panel.btnPrimaryBg, color: panel.btnPrimaryFg }"
                >
                  <span>{{ panel.ctaPrimary }}</span>
                  <span>&rarr;</span>
                </NuxtLink>

                <NuxtLink
                  v-if="panel.ctaSecondary"
                  :to="panel.ctaSecondaryRoute"
                  class="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm border transition-all duration-200 hover:bg-black/5"
                  :style="{ color: panel.fg, borderColor: panel.borderCol }"
                >
                  <span>{{ panel.ctaSecondary }}</span>
                </NuxtLink>
              </div>

            </div>

            <!-- Bottom Strip: Large Background Word & Bottom Text (Lifted Safe Above Screen Edge) -->
            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-t pt-2 sm:pt-2.5" :style="{ borderColor: panel.borderCol }">
              
              <!-- LARGE BACKGROUND WORD (ROTATING TYPOGRAPHY) -->
              <div class="overflow-visible">
                <h2
                  class="big-text font-display font-black tracking-tighter leading-none select-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase origin-bottom-left will-change-transform"
                  :style="{ color: panel.fg }"
                >
                  {{ panel.bigText }}
                </h2>
              </div>

              <!-- Bottom Status / Final Small Text -->
              <div class="text-right font-mono text-[10px] sm:text-xs space-y-0.5" :style="{ color: panel.mutedFg }">
                <div class="flex items-center gap-1.5 justify-end">
                  <span class="w-1.5 h-1.5 rounded-full" :style="{ backgroundColor: panel.accentCol }"></span>
                  <span class="font-bold tracking-wider uppercase">{{ panel.bottomText }}</span>
                </div>
                <div class="text-[9px] opacity-75">SCREEN 0{{ idx + 1 }} // 06 TOTAL</div>
              </div>

            </div>

          </div>
        </section>


        <!-- ===================================================================== -->
        <!-- FLOATING STAGE NAVIGATION SCRUBBER CONTROLS                           -->
        <!-- ===================================================================== -->
        <div class="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-1.5 p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#EAE4E4] shadow-2xl">
          <button
            v-for="(panel, i) in timelinePanels"
            :key="panel.id"
            type="button"
            class="group relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl text-xs font-mono font-bold transition-all duration-200 cursor-pointer"
            :class="currentActiveIndex === i
              ? 'bg-[#FF7F11] text-white shadow-md'
              : 'bg-transparent text-[#524F4E] hover:bg-[#F5EFEF] hover:text-[#1A1A1A]'"
            @click="scrollToPanel(i)"
            :title="panel.bigText"
          >
            <span>0{{ i + 1 }}</span>

            <!-- Tooltip Hover Label -->
            <span class="absolute right-full mr-2.5 px-2.5 py-1 rounded-lg bg-[#1A1A1A] text-white text-[11px] font-mono whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xl">
              {{ panel.bigText }}
            </span>
          </button>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
const timelineWrapRef = ref<HTMLElement | null>(null)
const panelElements = ref<HTMLElement[]>([])
const showCurtain = ref(true)
const currentActiveIndex = ref(0)
const totalScrollHeight = '500vh'

const openColumns = ref({
  col1: false,
  col2: false,
  col3: false,
  col4: false,
  col5: false
})

const isColumnOpen = (col: number) => {
  switch (col) {
    case 1: return openColumns.value.col1
    case 2: return openColumns.value.col2
    case 3: return openColumns.value.col3
    case 4: return openColumns.value.col4
    case 5: return openColumns.value.col5
    default: return false
  }
}

const setPanelRef = (el: HTMLElement | null, idx: number) => {
  if (el) {
    panelElements.value[idx] = el
  }
}

// 6 Full-Screen Horizontal Scroll Hero Screens Matching Rewritten Strategy
const timelinePanels = [
  {
    id: 'stage-1',
    eyebrow: '01 / START HERE',
    phaseTag: '01 // START HERE',
    headline: 'YOU ALREADY KNOW HOW TO GET RESULTS.\nNOW BUILD THE BUSINESS THAT DELIVERS THEM AT SCALE.',
    desc: "Being brilliant at your craft and running a business that reliably brings you clients aren’t the same skill. Digital Coach helps you build the second one — the offer, the positioning, the client pipeline, and the systems behind it — so your growth stops depending on referrals, luck, and hustle.",
    pillarFocus: 'A real business behind your expertise — not another course',
    impactMetric: 'BUILT TO SCALE',
    deliverable: 'BUSINESS FOUNDATION',
    ctaPrimary: 'Find your #1 bottleneck — free',
    ctaPrimaryRoute: '/scorecard',
    ctaSecondary: 'See how it works',
    ctaSecondaryRoute: '/how-it-works',
    bigText: 'SCALE',
    bottomText: 'Scroll to see how experts become businesses ↓',
    bg: '#FBF6F6',
    fg: '#1A1A1A',
    mutedFg: '#524F4E',
    borderCol: '#EAE4E4',
    accentCol: '#FF7F11',
    accentGlow: 'rgba(255,127,17,0.15)',
    cardBg: '#FFFFFF',
    cardBorder: '#EAE4E4',
    badgeBg: '#FFFFFF',
    badgeFg: '#1A1A1A',
    badgeBorder: '#EAE4E4',
    pillBg: '#FFF8F2',
    pillBorder: '#FF7F11',
    btnPrimaryBg: '#FF7F11',
    btnPrimaryFg: '#FFFFFF'
  },
  {
    id: 'stage-2',
    eyebrow: '02 / THE HONEST TRUTH',
    phaseTag: '02 // THE HONEST TRUTH',
    headline: 'BEING AN EXPERT\nDOESN’T BUILD YOU A BUSINESS.',
    desc: 'Knowing how to change someone’s life is where it starts — not where it ends. A real business needs a clear offer people instantly understand, positioning that makes you the obvious choice, and systems that run without you in every seat.',
    pillarFocus: 'Clear Offer • Obvious Choice • Steady Clients',
    impactMetric: 'HONEST FOUNDATION',
    deliverable: 'THE HONEST TRUTH',
    ctaPrimary: 'Diagnose Your Gaps — Free',
    ctaPrimaryRoute: '/scorecard',
    ctaSecondary: 'See What We Build',
    ctaSecondaryRoute: '/what-we-build',
    bigText: 'SYSTEM',
    bottomText: 'Scroll to explore the two paths ↓',
    bg: '#FFF8F2',
    fg: '#1A1A1A',
    mutedFg: '#524F4E',
    borderCol: '#F0E4D8',
    accentCol: '#FF7F11',
    accentGlow: 'rgba(255,127,17,0.22)',
    cardBg: '#FFFFFF',
    cardBorder: '#FF7F11',
    badgeBg: '#FFFFFF',
    badgeFg: '#1A1A1A',
    badgeBorder: '#FF7F11',
    pillBg: '#FFFFFF',
    pillBorder: '#FF7F11',
    btnPrimaryBg: '#FF7F11',
    btnPrimaryFg: '#FFFFFF'
  },
  {
    id: 'stage-3',
    eyebrow: '03 / THE TWO PATHS',
    phaseTag: '03 // THE TWO PATHS',
    headline: 'RUNNING ON EFFORT\nVS. RUNNING ON SYSTEMS.',
    desc: 'When there’s no real business structure, your income is chained to your calendar. We help you package your expertise into a signature program where the right clients come to you and the day-to-day runs on systems, not on your nerves.',
    pillarFocus: 'Chained to calendar → Running on predictable systems',
    impactMetric: 'TRUE FREEDOM',
    deliverable: 'PREDICTABLE FREEDOM',
    ctaPrimary: 'See Where You Stand Today',
    ctaPrimaryRoute: '/scorecard',
    ctaSecondary: 'How We Work',
    ctaSecondaryRoute: '/how-it-works',
    bigText: 'FREEDOM',
    bottomText: 'Scroll to see who this is for ↓',
    bg: '#1A1A1A',
    fg: '#FBF6F6',
    mutedFg: '#B3B0A6',
    borderCol: '#2E2E2E',
    accentCol: '#FF7F11',
    accentGlow: 'rgba(255,127,17,0.25)',
    cardBg: '#242424',
    cardBorder: '#383838',
    badgeBg: '#262626',
    badgeFg: '#FDFCF7',
    badgeBorder: '#3A3A3A',
    pillBg: '#262626',
    pillBorder: '#FF7F11',
    btnPrimaryBg: '#FF7F11',
    btnPrimaryFg: '#FFFFFF'
  },
  {
    id: 'stage-4',
    eyebrow: '04 / WHO THIS IS BUILT FOR',
    phaseTag: '04 // WHO THIS IS BUILT FOR',
    headline: 'BUILT FOR PEOPLE WHO ALREADY KNOW\nSOMETHING WORTH PAYING FOR.',
    desc: 'Digital Coach is for coaches, consultants, trainers, creators, and transitioning leaders with real depth — people who genuinely get results and now want a durable business behind that skill, not just a busier calendar.',
    pillarFocus: 'Coaches • Consultants • Trainers • Creators • Experts',
    impactMetric: 'REAL EXPERTISE',
    deliverable: 'PRACTITIONER FOCUS',
    ctaPrimary: 'Explore Audiences',
    ctaPrimaryRoute: '/who-we-help',
    ctaSecondary: 'See The 9 Layers',
    ctaSecondaryRoute: '/what-we-build',
    bigText: 'DEPTH',
    bottomText: 'Scroll to see the 9-layer engine ↓',
    bg: '#F5EFEF',
    fg: '#1A1A1A',
    mutedFg: '#524F4E',
    borderCol: '#E2DBDB',
    accentCol: '#FF7F11',
    accentGlow: 'rgba(255,127,17,0.18)',
    cardBg: '#FFFFFF',
    cardBorder: '#E2DBDB',
    badgeBg: '#FFFFFF',
    badgeFg: '#1A1A1A',
    badgeBorder: '#E2DBDB',
    pillBg: '#FFF8F2',
    pillBorder: '#FF7F11',
    btnPrimaryBg: '#FF7F11',
    btnPrimaryFg: '#FFFFFF'
  },
  {
    id: 'stage-5',
    eyebrow: '05 // THE 9-LAYER ENGINE',
    phaseTag: '05 // THE 9-LAYER ENGINE',
    headline: "WE DON'T JUST HELP YOU BECOME A COACH.\nWE HELP YOU BUILD THE BUSINESS BEHIND IT.",
    desc: 'Positioning, Offer, Authority, Acquisition, Conversion, Delivery, Systems, AI Leverage, and Scale. These are the nine parts every expert business needs to run — and we build them with you.',
    pillarFocus: 'The 9 Parts Every Expert Business Needs',
    impactMetric: 'ENGINEERED ENGINE',
    deliverable: '9-LAYER ENGINE',
    ctaPrimary: 'Explore All 9 Layers',
    ctaPrimaryRoute: '/what-we-build',
    ctaSecondary: 'Join Live Workshop',
    ctaSecondaryRoute: '/workshop',
    bigText: 'ENGINE',
    bottomText: 'Scroll to start building today ↓',
    bg: '#FF7F11',
    fg: '#FFFFFF',
    mutedFg: '#FFF1E5',
    borderCol: 'rgba(255,255,255,0.25)',
    accentCol: '#1A1A1A',
    accentGlow: 'rgba(255,255,255,0.3)',
    cardBg: 'rgba(255,255,255,0.12)',
    cardBorder: 'rgba(255,255,255,0.3)',
    badgeBg: '#1A1A1A',
    badgeFg: '#FFFFFF',
    badgeBorder: '#1A1A1A',
    pillBg: '#FFFFFF',
    pillBorder: '#FFFFFF',
    btnPrimaryBg: '#1A1A1A',
    btnPrimaryFg: '#FFFFFF'
  },
  {
    id: 'stage-6',
    eyebrow: '06 / START TODAY',
    phaseTag: '06 // START TODAY',
    headline: 'YOU ALREADY HAVE THE EXPERTISE.\nNOW BUILD THE BUSINESS BEHIND IT.',
    desc: "Stop depending on word-of-mouth and manual hustle. Find your single biggest bottleneck, and start building a business that runs on systems — not on your nerves.",
    pillarFocus: 'Free 5-minute diagnostic · Instant report · No spam',
    impactMetric: 'ONE MOVE AWAY',
    deliverable: 'READY TO BUILD',
    ctaPrimary: "Take the Free Growth Scorecard",
    ctaPrimaryRoute: '/scorecard',
    ctaSecondary: 'Apply to Work With Us',
    ctaSecondaryRoute: '/apply',
    bigText: 'GROWTH',
    bottomText: 'Your next level is already waiting.',
    bg: '#FFFFFF',
    fg: '#1A1A1A',
    mutedFg: '#524F4E',
    borderCol: '#EAE4E4',
    accentCol: '#FF7F11',
    accentGlow: 'rgba(255,127,17,0.2)',
    cardBg: '#FBF6F6',
    cardBorder: '#EAE4E4',
    badgeBg: '#FFF8F2',
    badgeFg: '#FF7F11',
    badgeBorder: '#FF7F11',
    pillBg: '#FFF8F2',
    pillBorder: '#FF7F11',
    btnPrimaryBg: '#FF7F11',
    btnPrimaryFg: '#FFFFFF'
  }
]

// =============================================================================
// SCROLL TIMELINE ANIMATION ENGINE (1:1 FRAMER SCROLL-LINKED WIPES)
// =============================================================================
const applyTimelineProgress = (rawProgress: number) => {
  const panels = panelElements.value
  const n = panels.length
  if (!n) return

  const scaled = Math.min(n - 1, Math.max(0, rawProgress))
  const idx = Math.min(n - 2, Math.floor(scaled))
  const t = scaled - idx

  currentActiveIndex.value = Math.round(scaled)

  panels.forEach((panel, i) => {
    if (!panel) return
    const bigText = panel.querySelector<HTMLElement>('.big-text')

    if (i < idx) {
      panel.style.clipPath = 'inset(0 0 0 100%)'
      panel.style.pointerEvents = 'none'
      if (bigText) bigText.style.transform = 'rotate(-90deg)'
    } else if (i === idx) {
      const visible = 1 - t
      panel.style.clipPath = `inset(0 ${(1 - visible) * 100}% 0 0)`
      panel.style.pointerEvents = t > 0.5 ? 'none' : 'auto'
      if (bigText) bigText.style.transform = `rotate(${-90 * t}deg)`
    } else if (i === idx + 1) {
      const visible = t
      panel.style.clipPath = `inset(0 0 0 ${(1 - visible) * 100}%)`
      panel.style.pointerEvents = t > 0.5 ? 'auto' : 'none'
      if (bigText) bigText.style.transform = 'rotate(0deg)'
    } else {
      panel.style.clipPath = 'inset(0 0 0 100%)'
      panel.style.pointerEvents = 'none'
      if (bigText) bigText.style.transform = 'rotate(0deg)'
    }
  })
}

const handleScroll = () => {
  if (!timelineWrapRef.value || !import.meta.client) return
  const wrap = timelineWrapRef.value
  const rect = wrap.getBoundingClientRect()
  const total = wrap.offsetHeight - window.innerHeight

  let raw = total > 0 ? -rect.top / total : 0
  raw = Math.min(1, Math.max(0, raw))

  const scaled = raw * (timelinePanels.length - 1)
  applyTimelineProgress(scaled)
}

const scrollToPanel = (idx: number) => {
  if (!timelineWrapRef.value || !import.meta.client) return
  const wrap = timelineWrapRef.value
  const total = wrap.offsetHeight - window.innerHeight
  const targetFraction = idx / (timelinePanels.length - 1)
  const targetY = wrap.offsetTop + targetFraction * total

  window.scrollTo({
    top: targetY,
    behavior: 'smooth'
  })
}

// Initial 5-Column Shutter Curtain Reveal
const startCurtainSequence = () => {
  showCurtain.value = true
  openColumns.value = { col1: false, col2: false, col3: false, col4: false, col5: false }

  if (import.meta.client) {
    setTimeout(() => { openColumns.value.col3 = true }, 120)
    setTimeout(() => { openColumns.value.col2 = true; openColumns.value.col4 = true }, 280)
    setTimeout(() => { openColumns.value.col1 = true; openColumns.value.col5 = true }, 440)
    setTimeout(() => { showCurtain.value = false }, 1500)
  }
}

onMounted(() => {
  startCurtainSequence()
  nextTick(() => {
    applyTimelineProgress(0)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()
  })
})

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('resize', handleScroll)
  }
})
</script>

<style scoped>
.timeline-panel {
  transition: clip-path 0s linear;
  box-shadow: -15px 0 35px rgba(0, 0, 0, 0.08);
}
.big-text {
  transform-origin: left bottom;
}
</style>
