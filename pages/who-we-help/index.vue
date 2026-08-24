<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Page Header -->
      <UiSectionHeading
        tag="Target Audience Ecosystem"
        tag-variant="amber"
        title="BUILT FOR EXPERTS READY TO BUILD A SERIOUS BUSINESS."
        subtitle="Digital Coach is designed specifically for practitioners who have spent years developing genuine domain competence. Explore how we tailor the 9-layer business operating system to your profile."
        size="xl"
        align="center"
        custom-class="mb-20"
      />

      <!-- Audience Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="aud in audiences"
          :key="aud.id"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
        >
          <div class="space-y-5">
            <div class="flex items-center justify-between pb-3 border-b border-[#EAE4E4]">
              <UiBadge variant="amber">{{ aud.badge }}</UiBadge>
              <span class="text-xs font-mono text-[#8C8685] font-bold">Profile</span>
            </div>

            <h2 class="font-display font-black text-2xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
              {{ aud.title }}
            </h2>

            <p class="text-sm text-[#524F4E] leading-relaxed">
              {{ aud.subtitle }}
            </p>

            <div class="p-4 rounded-2xl bg-red-50/70 border border-red-100 space-y-1 shadow-sm">
              <div class="text-xs font-mono uppercase text-red-600 font-bold">The Core Friction:</div>
              <p class="text-xs text-[#524F4E]">{{ aud.problem }}</p>
            </div>

            <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#1A1A1A] font-bold">What We Build:</div>
              <ul class="space-y-1.5 pt-1">
                <li v-for="(item, i) in aud.whatWeBuild.slice(0, 3)" :key="i" class="text-xs text-[#524F4E] flex items-start gap-1.5">
                  <span class="text-[#FF7F11] font-bold">&check;</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-6 mt-6 border-t border-[#EAE4E4] space-y-3">
            <UiButton :to="aud.ctaRoute" variant="primary" size="md" block>
              {{ aud.ctaText }} &rarr;
            </UiButton>
          </div>
        </div>
      </div>

      <!-- Bottom Scorecard Trigger -->
      <div class="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE4E4] text-center max-w-4xl mx-auto space-y-4 shadow-lg">
        <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Benchmark your profile across the 9 business layers</h3>
        <p class="text-sm text-[#524F4E] max-w-xl mx-auto">
          Take the free 5-minute Growth Scorecard to evaluate your positioning clarity, offer leverage, and client acquisition predictability.
        </p>
        <div class="pt-2">
          <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
            Take Free Scorecard Now &rarr;
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { useAudienceProfiles } from '~/composables/useAudienceProfiles'

const { audiences } = useAudienceProfiles()

useSeoMeta({
  title: 'Who We Help — Target Audience Architectures',
  description: 'Learn how Digital Coach builds tailored business systems for coaches, consultants, corporate trainers, creators, and transitioning executives.'
})
</script>
