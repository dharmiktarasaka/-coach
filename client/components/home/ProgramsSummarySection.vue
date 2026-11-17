<template>
  <section class="py-20 md:py-32 relative bg-[#FBF6F6] border-t border-[#EAE4E4]">
    <UiContainer size="xl">
      <!-- Section Heading: 13. PROGRAMS / TIERS -->
      <UiSectionHeading
        tag="Choose Your Level of Support"
        tag-variant="amber"
        title="GET EXACTLY AS MUCH HELP AS YOU NEED."
        subtitle="Whether you want quick clarity on your biggest bottleneck, a full build of your core system, or hands-on advisory — there’s a track that fits where you are."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- Programs Grid (6 tiers) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="prog in programs"
          :key="prog.id"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-md"
        >
          <div class="space-y-5">
            <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
              <UiBadge :variant="prog.format === 'accelerator' || prog.format === 'diagnostic' ? 'amber' : 'slate'">
                {{ prog.badge }}
              </UiBadge>
              <span class="text-xs font-mono text-[#8C8685] uppercase font-bold">Track</span>
            </div>

            <h3 class="font-display font-black text-2xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
              {{ prog.title }}
            </h3>

            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              {{ prog.tagline }}
            </p>

            <div class="p-3.5 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/30 text-xs text-[#1A1A1A] shadow-sm font-medium">
              <strong class="text-[#FF7F11]">Best for:</strong> {{ prog.forWho }}
            </div>

            <!-- Deliverables -->
            <div class="space-y-2 pt-2">
              <div class="text-[11px] font-mono uppercase text-[#8C8685] font-bold">Key Focus:</div>
              <ul class="space-y-2">
                <li
                  v-for="(deliv, i) in prog.deliverables.slice(0, 3)"
                  :key="i"
                  class="flex items-start gap-2 text-xs text-[#524F4E]"
                >
                  <span class="text-[#FF7F11] font-bold shrink-0">&check;</span>
                  <span>{{ deliv }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-[#EAE4E4]">
            <UiButton
              :to="prog.ctaRoute"
              :variant="prog.format === 'accelerator' || prog.format === 'diagnostic' ? 'primary' : 'secondary'"
              size="md"
              block
            >
              {{ prog.ctaText }} &rarr;
            </UiButton>
          </div>
        </div>
      </div>

      <!-- Bottom Path Finder Strip -->
      <div class="mt-14 p-8 rounded-3xl bg-white border border-[#EAE4E4] text-center max-w-4xl mx-auto space-y-4 shadow-lg">
        <h4 class="font-display font-black text-xl text-[#1A1A1A]">Not sure which fits?</h4>
        <p class="text-xs sm:text-sm text-[#524F4E] max-w-xl mx-auto">
          Our free 5-minute Scorecard reads your revenue, offer, and systems — and points you to the right track.
        </p>
        <div class="pt-2">
          <UiButton to="/scorecard" variant="primary" size="md">
            Find your path &rarr;
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { usePrograms } from '~/composables/usePrograms'

const { programs } = usePrograms()
</script>
