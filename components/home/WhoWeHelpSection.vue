<template>
  <section class="py-20 md:py-32 relative bg-[#FBF6F6]">
    <UiContainer size="xl">
      <!-- Heading: 4. WHO IT’S FOR -->
      <UiSectionHeading
        tag="Who This Is Built For"
        tag-variant="amber"
        title="BUILT FOR PEOPLE WHO ALREADY KNOW SOMETHING WORTH PAYING FOR."
        subtitle="Digital Coach is for practitioners with real depth — people who genuinely get results and now want a durable business behind that skill, not just a busier calendar."
        size="lg"
        align="center"
        custom-class="mb-14"
      />

      <!-- Interactive Audience Switcher / Explorer -->
      <div class="space-y-8">
        <!-- Audience Pill Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            v-for="aud in audiences"
            :key="aud.id"
            type="button"
            :class="[
              'px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 border cursor-pointer',
              activeAudienceId === aud.id
                ? 'bg-[#FF7F11] text-white border-[#FF7F11] font-bold shadow-lg shadow-[#FF7F11]/25 scale-[1.02]'
                : 'bg-white text-[#524F4E] border-[#EAE4E4] hover:border-[#FF7F11]/50 hover:bg-[#F5EFEF]'
            ]"
            @click="activeAudienceId = aud.id"
          >
            <span>{{ aud.title }}</span>
          </button>
        </div>

        <!-- Active Audience Deep Card Display -->
        <div v-if="activeAudience" class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <!-- Background accent glow -->
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-[#FF7F11]/5 rounded-full blur-3xl pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <!-- Left Info (7 cols) -->
            <div class="lg:col-span-7 space-y-6">
              <div class="flex items-center gap-3">
                <UiBadge variant="amber">{{ activeAudience.badge }}</UiBadge>
                <span class="text-xs text-[#8C8685] font-mono">Profile: #{{ activeAudience.id.toUpperCase() }}</span>
              </div>

              <h3 class="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight">
                {{ activeAudience.subtitle }}
              </h3>

              <!-- The Common Constraint -->
              <div class="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-1.5 shadow-sm">
                <div class="text-xs font-bold uppercase tracking-wider text-red-600 font-mono">What's holding you back:</div>
                <p class="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                  {{ activeAudience.problem }}
                </p>
              </div>

              <!-- The Strategic Opportunity -->
              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-1.5 shadow-sm">
                <div class="text-xs font-bold uppercase tracking-wider text-[#FF7F11] font-mono">Where we take you:</div>
                <p class="text-xs sm:text-sm text-[#1A1A1A] leading-relaxed font-medium">
                  {{ activeAudience.opportunity }}
                </p>
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <UiButton :to="activeAudience.ctaRoute" variant="primary" size="md">
                  {{ activeAudience.ctaText }} &rarr;
                </UiButton>
                <NuxtLink to="/scorecard" class="text-xs sm:text-sm text-[#6B6665] hover:text-[#FF7F11] font-semibold underline underline-offset-4">
                  Take the coach diagnostic &rarr;
                </NuxtLink>
              </div>
            </div>

            <!-- Right Deliverables Box (5 cols) -->
            <div class="lg:col-span-5 bg-[#FBF6F6] border border-[#EAE4E4] rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <div class="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] font-mono border-b border-[#EAE4E4] pb-3 flex items-center justify-between">
                <span>WHAT WE BUILD WITH YOU</span>
                <span class="text-[#FF7F11] font-bold">&check; 4 Core Pillars</span>
              </div>

              <ul class="space-y-3.5">
                <li
                  v-for="(point, idx) in activeAudience.whatWeBuild"
                  :key="idx"
                  class="flex items-start gap-3 text-xs sm:text-sm text-[#524F4E]"
                >
                  <span class="w-5 h-5 rounded-full bg-[#FF7F11]/15 border border-[#FF7F11]/40 flex items-center justify-center text-[10px] text-[#FF7F11] font-bold shrink-0 mt-0.5">
                    {{ idx + 1 }}
                  </span>
                  <span class="font-medium text-[#1A1A1A]">{{ point }}</span>
                </li>
              </ul>

              <div class="pt-4 border-t border-[#EAE4E4] text-xs text-[#8C8685]">
                <span class="font-bold text-[#1A1A1A]">Best first step:</span>
                <p class="text-[#524F4E] mt-1 font-medium">{{ activeAudience.recommendedNextStep }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
import { useAudienceProfiles } from '~/composables/useAudienceProfiles'

const { audiences } = useAudienceProfiles()
const activeAudienceId = ref('coaches')

const activeAudience = computed(() => {
  return audiences.find(a => a.id === activeAudienceId.value) || audiences[0]
})
</script>
