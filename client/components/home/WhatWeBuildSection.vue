<template>
  <section class="py-20 md:py-32 bg-[#FBF6F6] border-y border-[#EAE4E4] relative">
    <UiContainer size="xl">
      <!-- Heading: 5. THE 9 LAYERS -->
      <UiSectionHeading
        tag="The 9-Layer Business Engine"
        tag-variant="amber"
        title="WE DON’T JUST HELP YOU “BECOME A COACH.” WE HELP YOU BUILD THE BUSINESS BEHIND THE EXPERTISE."
        subtitle="These are the nine parts every expert business needs to run — and most experts are missing at least three of them."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- Interactive 9-Layer Accordion / Visual Explorer -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <!-- Left: Stage List Selector (5 cols) -->
        <div class="lg:col-span-5 space-y-2">
          <div
            v-for="layer in layers"
            :key="layer.id"
            :class="[
              'p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between',
              activeLayer.id === layer.id
                ? 'bg-[#FFF8F2] text-[#1A1A1A] border-[#FF7F11] shadow-md shadow-[#FF7F11]/10'
                : 'bg-white border-[#EAE4E4] hover:border-[#FF7F11]/50 hover:bg-[#F5EFEF]'
            ]"
            @click="activeLayer = layer"
          >
            <div class="flex items-center gap-3.5">
              <span
                :class="[
                  'text-xs font-mono font-bold px-2 py-1 rounded-lg',
                  activeLayer.id === layer.id
                    ? 'bg-[#FF7F11] text-white'
                    : 'bg-[#EAE4E4] text-[#6B6665]'
                ]"
              >
                {{ layer.number }}
              </span>
              <div>
                <div class="text-sm font-bold" :class="activeLayer.id === layer.id ? 'text-[#1A1A1A]' : 'text-[#524F4E]'">{{ layer.title }}</div>
                <div class="text-xs font-mono" :class="activeLayer.id === layer.id ? 'text-[#FF7F11] font-bold' : 'text-[#8C8685]'">{{ layer.question }}</div>
              </div>
            </div>

            <svg
              class="w-5 h-5 transition-transform"
              :class="activeLayer.id === layer.id ? 'text-[#FF7F11] rotate-90' : 'text-[#8C8685]'"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        <!-- Right: Active Layer Detailed Diagnostic Card (7 cols) -->
        <div class="lg:col-span-7 bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-10 shadow-xl relative">
          <div class="space-y-6">
            <!-- Header -->
            <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4]">
              <div class="flex items-center gap-3">
                <span class="text-xs font-mono font-bold bg-[#FF7F11]/15 text-[#FF7F11] border border-[#FF7F11]/40 px-3 py-1 rounded-full">
                  {{ activeLayer.title }} &middot; Layer {{ activeLayer.number }} of 09
                </span>
                <span class="text-xs text-[#8C8685] font-mono">{{ activeLayer.metricOrOutput }}</span>
              </div>
              <NuxtLink to="/what-we-build" class="text-xs text-[#FF7F11] font-bold hover:underline">
                Full Blueprint &rarr;
              </NuxtLink>
            </div>

            <!-- Title & Meaning -->
            <div class="space-y-2">
              <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
                {{ activeLayer.title }}: <span class="text-[#6B6665] font-normal">{{ activeLayer.question }}</span>
              </h3>
              <p class="text-sm sm:text-base text-[#524F4E] leading-relaxed">
                {{ activeLayer.meaning }}
              </p>
            </div>

            <!-- Why It Matters -->
            <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="text-xs font-bold uppercase tracking-wider text-[#FF7F11] font-mono">Why it matters:</div>
              <p class="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                {{ activeLayer.whyItMatters }}
              </p>
            </div>

            <!-- Common Mistake vs What Good Looks Like -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-1">
                <div class="text-xs font-bold uppercase tracking-wider text-red-600 font-mono flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  The common mistake:
                </div>
                <p class="text-xs text-[#524F4E] leading-relaxed">
                  {{ activeLayer.commonMistake }}
                </p>
              </div>

              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1">
                <div class="text-xs font-bold uppercase tracking-wider text-[#FF7F11] font-mono flex items-center gap-1.5">
                  <svg class="w-3.5 h-3.5 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  What good looks like:
                </div>
                <p class="text-xs text-[#1A1A1A] leading-relaxed font-bold">
                  {{ activeLayer.whatBetterLooksLike }}
                </p>
              </div>
            </div>

            <!-- Action -->
            <div class="pt-4 border-t border-[#EAE4E4] flex items-center justify-between">
              <span class="text-xs text-[#8C8685]">See how your {{ activeLayer.title.toLowerCase() }} scores</span>
              <UiButton to="/scorecard" variant="primary" size="sm">
                Diagnose Layer {{ activeLayer.number }} &rarr;
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { useBusinessLayers } from '~/composables/useBusinessLayers'

const { layers } = useBusinessLayers()
const activeLayer = ref(layers[0])
</script>
