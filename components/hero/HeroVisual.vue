<template>
  <div
    class="relative w-full max-w-[620px] mx-auto select-none aspect-square sm:aspect-[4/3.8] flex items-center justify-center"
    :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -20}px, ${mouseY * -20}px, 0)` }"
  >
    <!-- Background Radial Aura in Brand Gold & Royal Purple -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div class="w-[340px] h-[340px] rounded-full bg-gold-500/[0.1] blur-[80px]"></div>
      <div class="w-[480px] h-[480px] rounded-full border border-gold-400/[0.15] opacity-40 animate-pulse" style="animation-duration: 8s;"></div>
      <div class="w-[380px] h-[380px] rounded-full border border-dashed border-white/[0.08] opacity-50"></div>
    </div>

    <!-- The 3D Architectural Ecosystem Geometry (SVG + Layered HTML Panes) -->
    <div class="relative w-full h-full flex items-center justify-center">
      
      <!-- SVG Connecting Network Rails & Laser Pulses in Brand Gold -->
      <svg class="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 600 600" fill="none">
        <line x1="300" y1="280" x2="300" y2="130" stroke="#E6AD4A" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="4 4" />
        <circle cx="300" cy="130" r="4" fill="#E6AD4A" fill-opacity="0.9" />
        
        <line x1="280" y1="290" x2="130" y2="250" stroke="#E6AD4A" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="4 4" />
        <circle cx="130" cy="250" r="4" fill="#E6AD4A" fill-opacity="0.9" />

        <line x1="320" y1="290" x2="470" y2="250" stroke="#E6AD4A" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="4 4" />
        <circle cx="470" cy="250" r="4" fill="#E6AD4A" fill-opacity="0.9" />

        <line x1="280" y1="320" x2="160" y2="430" stroke="#E6AD4A" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="4 4" />
        <circle cx="160" cy="430" r="4" fill="#E6AD4A" fill-opacity="0.9" />

        <line x1="320" y1="320" x2="440" y2="430" stroke="#E6AD4A" stroke-width="1.5" stroke-opacity="0.45" stroke-dasharray="4 4" />
        <circle cx="440" cy="430" r="4" fill="#E6AD4A" fill-opacity="0.9" />

        <line x1="300" y1="330" x2="300" y2="510" stroke="#E6AD4A" stroke-width="1.5" stroke-opacity="0.3" stroke-dasharray="2 4" />

        <ellipse cx="300" cy="300" rx="220" ry="110" stroke="#F3F3EC" stroke-width="0.8" stroke-opacity="0.15" stroke-dasharray="6 8" />
      </svg>

      <!-- Layer 1: CENTRAL EXPERTISE CORE -->
      <div
        class="absolute z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-b from-purple-900/90 via-[#1F0135]/95 to-[#140024]/95 border border-gold-400/40 shadow-2xl shadow-gold-500/20 backdrop-blur-2xl p-4 flex flex-col items-center justify-center text-center group cursor-pointer transition-transform duration-500 hover:scale-105"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -35}px, ${mouseY * -35}px, 0)` }"
      >
        <div class="relative w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-400/50 flex items-center justify-center mb-2 shadow-inner shadow-gold-400/20">
          <div class="w-3 h-3 rounded-full bg-gold-400 animate-ping opacity-75"></div>
          <svg class="absolute w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
          </svg>
        </div>
        <span class="text-[10px] font-mono tracking-widest text-gold-400 font-bold uppercase">CORE FOUNDATION</span>
        <span class="font-display text-sm sm:text-base font-bold text-white tracking-tight">EXPERTISE</span>
        <span class="text-[9px] text-ivory-300 font-mono mt-0.5">Proprietary IP</span>
      </div>

      <!-- Layer 2: TOP ELEVATION — AUTHORITY & CATEGORY -->
      <div
        class="absolute top-[8%] sm:top-[10%] z-30 px-4 py-2.5 rounded-2xl bg-purple-950/90 border border-white/[0.14] hover:border-gold-400/50 backdrop-blur-xl shadow-xl flex items-center gap-3 transition-all duration-500 hover:scale-105 group"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -15}px, ${mouseY * -15}px, 0)` }"
      >
        <div class="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse"></div>
        <div>
          <div class="text-[9px] font-mono uppercase tracking-wider text-ivory-300">Layer 03 &bull; Stance</div>
          <div class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors">
            AUTHORITY & IP
          </div>
        </div>
        <span class="text-[9px] font-mono font-bold bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded border border-gold-400/30">
          Category of One
        </span>
      </div>

      <!-- Layer 3: WEST FLANK — FLAGSHIP OFFER -->
      <div
        class="absolute left-[2%] sm:left-[5%] top-[36%] z-30 px-4 py-3 rounded-2xl bg-purple-950/90 border border-white/[0.14] hover:border-gold-400/50 backdrop-blur-xl shadow-xl transition-all duration-500 hover:scale-105 group space-y-0.5"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -40}px, ${mouseY * -40}px, 0)` }"
      >
        <div class="text-[9px] font-mono uppercase tracking-wider text-ivory-300 flex items-center justify-between gap-2">
          <span>Layer 02</span>
          <span class="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
        </div>
        <div class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors">
          FLAGSHIP OFFER
        </div>
        <div class="text-[10px] text-ivory-300 font-mono">Outcome Packaging</div>
      </div>

      <!-- Layer 4: EAST FLANK — CLIENT ACQUISITION -->
      <div
        class="absolute right-[2%] sm:right-[5%] top-[36%] z-30 px-4 py-3 rounded-2xl bg-purple-950/90 border border-white/[0.14] hover:border-gold-400/50 backdrop-blur-xl shadow-xl transition-all duration-500 hover:scale-105 group space-y-0.5"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -10}px, ${mouseY * -10}px, 0)` }"
      >
        <div class="text-[9px] font-mono uppercase tracking-wider text-ivory-300 flex items-center justify-between gap-2">
          <span>Layer 04</span>
          <span class="text-gold-400 font-bold font-mono">35%+ Close</span>
        </div>
        <div class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors">
          CLIENT PIPELINE
        </div>
        <div class="text-[10px] text-ivory-300 font-mono">Inbound Diagnostic</div>
      </div>

      <!-- Layer 5: SOUTH-WEST — AUTONOMOUS SYSTEMS -->
      <div
        class="absolute left-[6%] sm:left-[12%] bottom-[12%] sm:bottom-[14%] z-30 px-3.5 py-2.5 rounded-2xl bg-purple-950/90 border border-white/[0.14] hover:border-gold-400/50 backdrop-blur-xl shadow-xl transition-all duration-500 hover:scale-105 group space-y-0.5"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -30}px, ${mouseY * -30}px, 0)` }"
      >
        <div class="text-[9px] font-mono uppercase text-ivory-300">Layer 07 &bull; Delivery</div>
        <div class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors">
          SYSTEMS & SOPs
        </div>
        <div class="text-[10px] text-ivory-300 font-mono">Asynchronous Vault</div>
      </div>

      <!-- Layer 6: SOUTH-EAST — AI OPERATING LEVERAGE -->
      <div
        class="absolute right-[6%] sm:right-[12%] bottom-[12%] sm:bottom-[14%] z-30 px-3.5 py-2.5 rounded-2xl bg-purple-950/90 border border-gold-400/30 hover:border-gold-400/60 backdrop-blur-xl shadow-xl transition-all duration-500 hover:scale-105 group space-y-0.5"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -18}px, ${mouseY * -18}px, 0)` }"
      >
        <div class="flex items-center justify-between gap-1 text-[9px] font-mono uppercase text-gold-400 font-bold">
          <span>Layer 08</span>
          <span>10x Speed</span>
        </div>
        <div class="text-xs sm:text-sm font-display font-bold text-white group-hover:text-gold-300 transition-colors">
          AI LEVERAGE
        </div>
        <div class="text-[10px] text-ivory-300 font-mono">Synthesized Triage</div>
      </div>

      <!-- Base Foundation: SCALE & DURABLE EQUITY -->
      <div
        class="absolute bottom-[2%] sm:bottom-[3%] z-30 px-4 py-1.5 rounded-full bg-purple-950/95 border border-gold-400/30 text-[10px] font-mono text-ivory-200 flex items-center gap-2 shadow-lg"
        :style="reducedMotion ? {} : { transform: `translate3d(${mouseX * -22}px, ${mouseY * -22}px, 0)` }"
      >
        <span class="w-2 h-2 rounded-full bg-gold-400"></span>
        <span class="text-white font-bold">ECOSYSTEM SCALE:</span>
        <span class="text-gold-400 font-bold">9 Connected Layers Operating</span>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mouseX: number
  mouseY: number
  reducedMotion: boolean
}>()
</script>
