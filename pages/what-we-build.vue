<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Header -->
      <UiSectionHeading
        tag="The Complete 9-Layer Architecture"
        tag-variant="amber"
        title="WE BUILD THE BUSINESS BEHIND THE EXPERTISE."
        subtitle="A comprehensive architectural breakdown of the nine interconnected systems that turn tacit domain knowledge into an autonomous, high-margin commercial enterprise."
        size="xl"
        align="center"
        custom-class="mb-20"
      />

      <!-- 9 Layers Detailed Deep Dive -->
      <div class="space-y-16 max-w-5xl mx-auto">
        <div
          v-for="layer in layers"
          :key="layer.id"
          :id="layer.id"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden transition-all duration-300"
        >
          <!-- Background layer number watermark -->
          <div class="absolute right-6 top-6 font-mono text-7xl sm:text-8xl font-black text-black/[0.04] select-none pointer-events-none">
            {{ layer.number }}
          </div>

          <div class="space-y-6 relative z-10">
            <!-- Header Strip -->
            <div class="flex items-center gap-3">
              <span class="text-xs font-mono font-bold bg-[#FFF8F2] text-[#FF7F11] border border-[#FF7F11]/40 px-3 py-1 rounded-full">
                Layer {{ layer.number }}
              </span>
              <span class="text-xs text-[#8C8685] font-mono">Deliverable: {{ layer.metricOrOutput }}</span>
            </div>

            <!-- Title & Strategic Question -->
            <div class="space-y-1">
              <h2 class="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight">
                {{ layer.title }}
              </h2>
              <p class="text-[#FF7F11] font-display text-lg sm:text-xl font-bold">
                "{{ layer.question }}"
              </p>
            </div>

            <!-- What It Means -->
            <div class="space-y-1">
              <div class="text-xs font-mono uppercase text-[#8C8685] font-bold">What It Means:</div>
              <p class="text-sm sm:text-base text-[#524F4E] leading-relaxed">
                {{ layer.meaning }}
              </p>
            </div>

            <!-- Why It Matters -->
            <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Why It Matters:</div>
              <p class="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                {{ layer.whyItMatters }}
              </p>
            </div>

            <!-- Common Mistake vs What Better Looks Like -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div class="p-5 rounded-2xl bg-red-50/70 border border-red-100 space-y-2">
                <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  The Common Mistake
                </div>
                <p class="text-xs text-[#524F4E] leading-relaxed">
                  {{ layer.commonMistake }}
                </p>
              </div>

              <div class="p-5 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-2">
                <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                  <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                  What Better Looks Like
                </div>
                <p class="text-xs text-[#1A1A1A] leading-relaxed font-bold">
                  {{ layer.whatBetterLooksLike }}
                </p>
              </div>
            </div>

            <!-- Action footer -->
            <div class="pt-4 border-t border-[#EAE4E4] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div class="text-xs text-[#8C8685]">
                Evaluate your maturity on Layer {{ layer.number }} in the Growth Diagnostic.
              </div>
              <UiButton to="/scorecard" variant="primary" size="sm">
                Diagnose Layer {{ layer.number }} &rarr;
              </UiButton>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Closer -->
      <div class="mt-20 text-center space-y-6">
        <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
          Ready to construct all nine layers in your business?
        </h3>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
            Take Free Growth Scorecard &rarr;
          </UiButton>
          <UiButton to="/apply" variant="secondary" size="lg">
            Apply to Work With Us
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { useBusinessLayers } from '~/composables/useBusinessLayers'

const { layers } = useBusinessLayers()

useSeoMeta({
  title: 'What We Build — The 9-Layer Expert Business Operating System',
  description: 'Explore the 9 core business layers: Positioning, Offer, Authority, Acquisition, Conversion, Delivery, Systems, AI Leverage, and Sustainable Scale.',
  ogTitle: 'The 9-Layer Expert Business Engine — Digital Coach'
})
</script>
