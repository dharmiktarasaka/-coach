<template>
  <div class="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] select-none flex items-center justify-center">
    <!-- Ambient back glow -->
    <div class="absolute inset-0 bg-gradient-to-tr from-purple-900/10 via-gold-400/15 to-transparent rounded-3xl blur-2xl pointer-events-none"></div>

    <!-- Main Architectural Frame (The Expert Enterprise Lift Shaft) -->
    <div class="relative w-full h-full bg-ivory-100/90 border border-purple-900/15 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl flex gap-4 sm:gap-6 overflow-hidden">
      
      <!-- Left Column: Floor Call Panel & Control Buttons -->
      <div class="w-24 sm:w-28 shrink-0 flex flex-col justify-between py-2 border-r border-purple-900/10 pr-3 sm:pr-4">
        <div class="space-y-1">
          <div class="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">LIFT OS</div>
          <div class="text-xs font-bold font-display text-purple-950">FLOOR SELECT</div>
        </div>

        <!-- Floor Call Buttons (4 Levels) -->
        <div class="space-y-2.5 my-auto">
          <button
            v-for="floor in floors"
            :key="floor.level"
            type="button"
            :class="[
              'w-full p-2 rounded-xl text-left transition-all duration-300 border flex items-center justify-between group',
              currentFloor.level === floor.level
                ? 'bg-purple-950 text-white border-gold-400 shadow-md scale-105'
                : 'bg-white border-purple-900/10 text-slate-700 hover:border-gold-400 hover:bg-white'
            ]"
            @click="setFloor(floor)"
          >
            <div>
              <div class="text-[11px] font-mono font-bold" :class="currentFloor.level === floor.level ? 'text-gold-400' : 'text-purple-950'">
                L0{{ floor.level }}
              </div>
              <div class="text-[9px] truncate max-w-[58px]" :class="currentFloor.level === floor.level ? 'text-slate-200' : 'text-slate-500'">
                {{ floor.shortTitle }}
              </div>
            </div>
            <span
              class="w-2 h-2 rounded-full transition-colors shrink-0"
              :class="currentFloor.level === floor.level ? 'bg-gold-400 animate-pulse' : 'bg-slate-300 group-hover:bg-gold-400'"
            ></span>
          </button>
        </div>

        <!-- Manual Scroll Indicator -->
        <div class="pt-2 border-t border-purple-900/10 text-[9px] font-mono text-slate-400 text-center">
          <span class="block text-gold-600 font-bold">SCROLL / CLICK</span>
          <span>TO RIDE</span>
        </div>
      </div>

      <!-- Center-Right: The Glass Elevator Shaft & Moving Cabin -->
      <div class="flex-1 relative flex flex-col justify-between py-2 overflow-hidden">
        <!-- Top Pulley & Cable Rigging System -->
        <div class="flex items-center justify-between pb-3 border-b border-purple-900/10 z-20 bg-ivory-100/95 backdrop-blur-md">
          <div class="flex items-center gap-2">
            <div class="w-5 h-5 rounded-full border-2 border-gold-500 flex items-center justify-center animate-spin" style="animation-duration: 6s;">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-950"></span>
            </div>
            <div class="w-5 h-5 rounded-full border-2 border-gold-500 flex items-center justify-center animate-spin" style="animation-duration: 6s; animation-direction: reverse;">
              <span class="w-1.5 h-1.5 rounded-full bg-purple-950"></span>
            </div>
            <span class="text-[10px] font-mono font-bold text-purple-950 uppercase tracking-wider hidden sm:inline">
              TRACTION LIFT SYSTEM
            </span>
          </div>

          <div class="flex items-center gap-1.5">
            <span class="text-[10px] font-mono font-bold bg-gold-400/20 text-purple-950 border border-gold-400/40 px-2 py-0.5 rounded">
              FLOOR {{ currentFloor.level }}: {{ currentFloor.title.toUpperCase() }}
            </span>
          </div>
        </div>

        <!-- The Shaft Track & Architectural Floors -->
        <div class="flex-1 relative my-2 overflow-hidden rounded-2xl bg-white/70 border border-purple-900/10">
          <!-- Steel Track Vertical Rails -->
          <div class="absolute inset-y-0 left-8 sm:left-12 w-[2px] bg-slate-300 z-0"></div>
          <div class="absolute inset-y-0 right-8 sm:right-12 w-[2px] bg-slate-300 z-0"></div>

          <!-- Tension Cables that stretch to the cabin -->
          <div
            class="absolute top-0 left-8 sm:left-12 w-[2px] bg-gold-500 z-10 transition-all duration-500"
            :style="{ height: `${cabinTopPercent}%` }"
          ></div>
          <div
            class="absolute top-0 right-8 sm:right-12 w-[2px] bg-gold-500 z-10 transition-all duration-500"
            :style="{ height: `${cabinTopPercent}%` }"
          ></div>

          <!-- Floor Level Markers (Background Architectural Floors) -->
          <div class="absolute inset-0 flex flex-col justify-between py-6 px-4 pointer-events-none z-0">
            <div
              v-for="floor in floors"
              :key="floor.level"
              class="flex items-center justify-between border-b border-dashed border-slate-200 pb-2 text-[10px] font-mono transition-colors"
              :class="currentFloor.level === floor.level ? 'text-purple-950 font-bold' : 'text-slate-400'"
            >
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full" :class="currentFloor.level === floor.level ? 'bg-gold-500' : 'bg-slate-300'"></span>
                <span>LEVEL 0{{ floor.level }} &bull; {{ floor.title }}</span>
              </div>
              <span class="text-[9px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600 hidden sm:inline">{{ floor.capacityMetric }}</span>
            </div>
          </div>

          <!-- The Moving Glass Elevator Cabin -->
          <div
            class="absolute left-3 right-3 sm:left-6 sm:right-6 rounded-2xl border-2 border-gold-400 bg-purple-950 text-white shadow-2xl p-4 sm:p-5 z-20 transition-all duration-500 ease-out"
            :style="{ top: `${cabinTopPercent}%`, transform: 'translateY(-10%)' }"
          >
            <!-- Top Suspension Beam -->
            <div class="flex items-center justify-between pb-2 mb-2 border-b border-white/15">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping"></div>
                <span class="text-xs font-display font-bold text-gold-300">
                  LIFT CABIN &bull; LEVEL 0{{ currentFloor.level }}
                </span>
              </div>
              <div class="text-[10px] font-mono text-gold-400 bg-white/10 px-2 py-0.5 rounded font-bold">
                {{ currentFloor.status }}
              </div>
            </div>

            <!-- Inside Elevator Viewport / Glass Pod Content -->
            <div class="space-y-2.5">
              <div class="flex items-baseline justify-between">
                <h4 class="font-display text-base sm:text-lg font-bold text-white">
                  {{ currentFloor.title }}
                </h4>
                <span class="text-xs font-mono text-gold-400 font-bold">{{ currentFloor.metric }}</span>
              </div>

              <p class="text-xs text-ivory-200 leading-relaxed line-clamp-2 sm:line-clamp-none">
                {{ currentFloor.description }}
              </p>

              <!-- Live Telemetry Bar inside Elevator -->
              <div class="p-2.5 rounded-xl bg-white/10 border border-white/10 grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div>
                  <span class="text-slate-300 block">SYSTEM OUTPUT:</span>
                  <span class="text-gold-300 font-bold">{{ currentFloor.output }}</span>
                </div>
                <div>
                  <span class="text-slate-300 block">FOUNDER TIME:</span>
                  <span class="text-white font-bold">{{ currentFloor.founderTime }}</span>
                </div>
              </div>
            </div>

            <!-- Bottom Glass Floor Glow -->
            <div class="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-slate-300">
              <span>DIGITAL COACH ARCHITECTURE</span>
              <span class="text-gold-400 font-bold">SMOOTH TRANSIT</span>
            </div>
          </div>
        </div>

        <!-- Bottom Elevator Pit & Level Status Strip -->
        <div class="pt-3 border-t border-purple-900/10 flex items-center justify-between text-xs text-slate-600 font-mono z-20 bg-ivory-100/95">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-gold-500"></span>
            <span class="font-bold text-purple-950">Active Level: {{ currentFloor.shortTitle }}</span>
          </div>
          <button
            type="button"
            class="text-gold-700 font-bold hover:underline flex items-center gap-1 text-[11px]"
            @click="nextFloor"
          >
            <span>Next Level</span> &darr;
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  scrollProgress?: number
}>()

const floors = [
  {
    level: 4,
    shortTitle: 'Scale & AI',
    title: 'Autonomous Scale & AI Layer',
    metric: '10x Leverage',
    status: 'OPTIMAL OPERATION',
    description: 'Enterprise licensing, multi-tier accelerators, and autonomous AI triage systems handling client operations seamlessly.',
    output: 'Durable Enterprise Asset',
    founderTime: '5-10 hrs / week',
    capacityMetric: 'Capacity: 500+ Clients'
  },
  {
    level: 3,
    shortTitle: 'Pipeline',
    title: 'Predictable Inbound Engine',
    metric: '35%+ Close Rate',
    status: 'INBOUND FLOW ACTIVE',
    description: 'Diagnostic authority funnels and consultative triage conversations delivering steady qualified decision-makers.',
    output: 'Systematic Revenue Flow',
    founderTime: '15 hrs / week',
    capacityMetric: 'Capacity: 100+ Clients'
  },
  {
    level: 2,
    shortTitle: 'Offer Model',
    title: 'Flagship Offer Architecture',
    metric: 'Fixed Outcome Fees',
    status: 'OFFER PACKAGED',
    description: 'Bespoke hourly billing is replaced with a 3-tier milestone transformation program and asynchronous learning vaults.',
    output: 'High-Margin Program',
    founderTime: '25 hrs / week',
    capacityMetric: 'Capacity: 30 Clients'
  },
  {
    level: 1,
    shortTitle: 'Foundation',
    title: 'Tacit Knowledge Foundation',
    metric: 'Raw Expertise',
    status: 'STARTING POINT',
    description: 'Years of deep subject competence and clinical insights ready to be codified into proprietary intellectual property.',
    output: 'Category-of-One Stance',
    founderTime: '40+ hrs / week',
    capacityMetric: 'Capacity: 5-10 Clients'
  }
]

const currentFloorIndex = ref(0) // Default at Floor 4 (top) or animated via scroll

const currentFloor = computed(() => floors[currentFloorIndex.value])

// Calculate cabin position (Floor 4 is near top 5%, Floor 1 is near bottom 60%)
const cabinTopPercent = computed(() => {
  if (props.scrollProgress !== undefined && props.scrollProgress >= 0) {
    // Map scroll progress 0.0 -> 1.0 to vertical travel 5% -> 60%
    return Math.min(62, Math.max(5, 5 + props.scrollProgress * 57))
  }
  // Discrete floor step mapping
  const positions = [5, 24, 43, 62] // index 0 (L4), 1 (L3), 2 (L2), 3 (L1)
  return positions[currentFloorIndex.value] ?? 5
})

const setFloor = (floor: typeof floors[0]) => {
  const idx = floors.findIndex(f => f.level === floor.level)
  if (idx !== -1) {
    currentFloorIndex.value = idx
  }
}

const nextFloor = () => {
  currentFloorIndex.value = (currentFloorIndex.value + 1) % floors.length
}

// Watch scroll progress prop if supplied from parent pinned hero section
watch(() => props.scrollProgress, (val) => {
  if (val !== undefined) {
    if (val < 0.25) currentFloorIndex.value = 0
    else if (val < 0.55) currentFloorIndex.value = 1
    else if (val < 0.82) currentFloorIndex.value = 2
    else currentFloorIndex.value = 3
  }
})
</script>
