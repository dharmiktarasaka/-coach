<template>
  <div class="relative w-full max-w-2xl mx-auto select-none">
    <!-- Ambient glow behind visual -->
    <div class="absolute -inset-4 bg-gradient-to-r from-gold-400/20 via-purple-300/15 to-gold-400/10 rounded-3xl blur-3xl opacity-60 pointer-events-none"></div>

    <!-- Core Interactive Ecosystem Card -->
    <div class="relative bg-white/95 border border-purple-900/12 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-purple-900/10 backdrop-blur-xl overflow-hidden">
      <!-- Header bar with system status -->
      <div class="flex items-center justify-between pb-5 border-b border-purple-900/10 mb-6">
        <div class="flex items-center gap-2.5">
          <div class="flex gap-1.5">
            <span class="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
          <span class="font-mono text-xs text-purple-950 font-bold tracking-wider uppercase">
            Expert Business OS &bull; Architecture Map
          </span>
        </div>
        <div class="hidden sm:flex items-center gap-2">
          <span class="text-[11px] font-mono text-purple-950 bg-gold-400/20 px-2.5 py-1 rounded-full border border-gold-400/40 font-bold">
            System Live: 9 Layers Connected
          </span>
        </div>
      </div>

      <!-- Interactive Node Grid / Ecosystem Flow -->
      <div class="grid grid-cols-3 gap-3 sm:gap-4 relative">
        <!-- SVG connecting lines layer -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="18%" x2="50%" y2="18%" stroke="#E6AD4A" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="50%" y1="18%" x2="80%" y2="18%" stroke="#E6AD4A" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="80%" y1="18%" x2="80%" y2="50%" stroke="#E6AD4A" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="#460775" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#460775" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="20%" y1="50%" x2="20%" y2="82%" stroke="#E6AD4A" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="20%" y1="82%" x2="50%" y2="82%" stroke="#E6AD4A" stroke-width="2" stroke-dasharray="4 4" />
          <line x1="50%" y1="82%" x2="80%" y2="82%" stroke="#E6AD4A" stroke-width="2" stroke-dasharray="4 4" />
        </svg>

        <!-- 9 Interactive Ecosystem Nodes -->
        <div
          v-for="(node, index) in ecosystemNodes"
          :key="node.id"
          :class="[
            'relative z-10 p-3 sm:p-4 rounded-2xl border transition-all duration-300 text-left cursor-pointer group',
            activeNode.id === node.id
              ? 'bg-purple-950 text-white border-gold-400 shadow-lg shadow-purple-900/20 scale-[1.03]'
              : 'bg-ivory-100/90 border-purple-900/10 hover:border-gold-400 hover:bg-white text-slate-800'
          ]"
          @click="activeNode = node"
        >
          <div class="flex items-center justify-between mb-2">
            <span :class="['text-[10px] font-mono font-bold px-1.5 py-0.5 rounded', activeNode.id === node.id ? 'bg-gold-400 text-purple-950' : 'bg-slate-200 text-slate-700']">
              0{{ index + 1 }}
            </span>
            <span class="w-1.5 h-1.5 rounded-full" :class="activeNode.id === node.id ? 'bg-gold-400 animate-ping' : 'bg-slate-400'"></span>
          </div>
          <div class="font-display font-bold text-xs sm:text-sm" :class="activeNode.id === node.id ? 'text-white' : 'text-purple-950 group-hover:text-gold-600'">
            {{ node.title }}
          </div>
          <div class="text-[10px] truncate mt-0.5" :class="activeNode.id === node.id ? 'text-slate-300' : 'text-slate-500'">
            {{ node.shortMetric }}
          </div>
        </div>
      </div>

      <!-- Active Node Diagnostic Live Panel -->
      <div class="mt-6 pt-5 border-t border-purple-900/10 bg-ivory-100 rounded-2xl p-4 border border-purple-900/10">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-gold-600 uppercase tracking-wider">Layer Focus:</span>
              <span class="text-sm font-bold text-purple-950">{{ activeNode.title }} Architecture</span>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              {{ activeNode.description }}
            </p>
          </div>
          <div class="shrink-0 flex items-center gap-3">
            <div class="text-right">
              <div class="text-[10px] text-slate-400 uppercase font-mono">Transformation Output</div>
              <div class="text-xs font-bold text-purple-950">{{ activeNode.deliverable }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Status Bar -->
      <div class="mt-4 flex items-center justify-between text-[11px] text-slate-500 pt-2 font-mono">
        <span class="flex items-center gap-1.5">
          <span class="w-2 h-2 rounded-full bg-gold-500"></span>
          Autonomous Operating Architecture
        </span>
        <NuxtLink to="/what-we-build" class="text-gold-600 font-bold hover:underline flex items-center gap-1">
          Explore all 9 layers &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const ecosystemNodes = [
  {
    id: 'positioning',
    title: 'Positioning',
    shortMetric: 'Category of One',
    description: 'Elevates your market status from generalist commodity to high-credibility specialist with clear peer authority.',
    deliverable: 'Market Category Stance'
  },
  {
    id: 'offer',
    title: 'Flagship Offer',
    shortMetric: 'Outcome-Based',
    description: 'Packages your tacit knowledge into structured transformation milestones with premium, non-hourly pricing leverage.',
    deliverable: 'Proprietary Flagship Architecture'
  },
  {
    id: 'authority',
    title: 'Authority & IP',
    shortMetric: 'Proof Matrix',
    description: 'Codifies your authentic experience into diagnostic models, research assets, and undeniable frameworks that pre-sell trust.',
    deliverable: 'Intellectual Property Vault'
  },
  {
    id: 'acquisition',
    title: 'Acquisition',
    shortMetric: 'Inbound Pipeline',
    description: 'Systematic pipeline that attracts qualified decision-makers without relying on random word-of-mouth or social burnouts.',
    deliverable: 'Predictable Pipeline Engine'
  },
  {
    id: 'conversion',
    title: 'Conversion',
    shortMetric: '35%+ Close Rate',
    description: 'Consultative diagnostic triage script that qualifies mutual fit without manipulative high-pressure sales pitches.',
    deliverable: 'Diagnostic Enrollment Model'
  },
  {
    id: 'delivery',
    title: 'Leveraged Delivery',
    shortMetric: 'Milestone Portals',
    description: 'Hybrid asynchronous delivery architecture that produces exceptional client transformation without unscalable founder exhaustion.',
    deliverable: 'Asynchronous Client Portal'
  },
  {
    id: 'systems',
    title: 'Business Systems',
    shortMetric: 'Autonomous SOPs',
    description: 'Centralized CRM pipelines, automated payment scheduling, client onboarding triggers, and documented operating procedures.',
    deliverable: 'Centralized CRM Infrastructure'
  },
  {
    id: 'ai',
    title: 'AI Leverage',
    shortMetric: '10x Multiplier',
    description: 'Custom AI workflows trained on your proprietary methodology for rapid client synthesis, research, and automated triage.',
    deliverable: 'Custom Intelligence Prompts'
  },
  {
    id: 'scale',
    title: 'Scale & Growth',
    shortMetric: 'Multi-Tier Margin',
    description: 'Sustainable business expansion via multi-tier advisory, cohort accelerators, and high-margin enterprise licensing.',
    deliverable: 'Multi-Tier Ecosystem'
  }
]

const activeNode = ref(ecosystemNodes[0])
</script>
