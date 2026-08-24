<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Header -->
      <UiSectionHeading
        tag="Engagement Tracks & Advisory"
        tag-variant="amber"
        title="CHOOSE THE LEVEL OF SUPPORT YOU NEED."
        subtitle="We partner with coaches, consultants, and domain experts across multiple engagement formats—from initial diagnostic clarity to intensive 12-week implementation sprints and private executive advisory."
        size="xl"
        align="center"
        custom-class="mb-20"
      />

      <!-- Program Tiers Grid (6 options) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        <div
          v-for="prog in programs"
          :key="prog.id"
          class="bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
        >
          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4]">
              <UiBadge :variant="prog.format === 'accelerator' ? 'amber' : prog.format === 'diagnostic' ? 'amber' : 'slate'">
                {{ prog.badge }}
              </UiBadge>
              <span class="text-xs font-mono text-[#8C8685] uppercase font-bold">Format: {{ prog.format.toUpperCase() }}</span>
            </div>

            <h2 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
              {{ prog.title }}
            </h2>

            <p class="text-sm text-[#524F4E] leading-relaxed">
              {{ prog.tagline }}
            </p>

            <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Ideal Candidate Profile:</div>
              <p class="text-xs text-[#1A1A1A] leading-relaxed font-medium">{{ prog.forWho }}</p>
            </div>

            <!-- Deliverables -->
            <div class="space-y-3 pt-2">
              <div class="text-xs font-mono uppercase text-[#1A1A1A] font-bold">What is Included:</div>
              <ul class="space-y-2">
                <li
                  v-for="(item, i) in prog.deliverables"
                  :key="i"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-[#524F4E]"
                >
                  <span class="text-[#FF7F11] font-bold shrink-0">&check;</span>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="pt-8 mt-8 border-t border-[#EAE4E4] space-y-3">
            <UiButton
              :to="prog.ctaRoute"
              :variant="prog.format === 'accelerator' || prog.format === 'diagnostic' ? 'primary' : 'secondary'"
              size="lg"
              block
            >
              {{ prog.ctaText }} &rarr;
            </UiButton>
          </div>
        </div>
      </div>

      <!-- FAQ Callout on Pricing & Application -->
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto space-y-6 shadow-xl">
        <div class="space-y-2 text-center">
          <h3 class="font-display font-black text-2xl text-[#1A1A1A]">How Enrollment & Selection Works</h3>
          <p class="text-sm text-[#524F4E] max-w-2xl mx-auto">
            To preserve implementation quality, we review all candidates through our qualification intake process before extending an invitation.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
            <div class="text-xs font-mono text-[#FF7F11] font-bold">Step 01</div>
            <div class="text-sm font-bold text-[#1A1A1A]">Diagnostic Scorecard</div>
            <p class="text-xs text-[#524F4E]">Complete the initial 5-minute diagnostic to benchmark your business.</p>
          </div>

          <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
            <div class="text-xs font-mono text-[#FF7F11] font-bold">Step 02</div>
            <div class="text-sm font-bold text-[#1A1A1A]">Application Review</div>
            <p class="text-xs text-[#524F4E]">Submit your business profile and implementation readiness goals.</p>
          </div>

          <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
            <div class="text-xs font-mono text-[#FF7F11] font-bold">Step 03</div>
            <div class="text-sm font-bold text-[#1A1A1A]">Advisory Consultation</div>
            <p class="text-xs text-[#524F4E]">Conduct a 30-minute diagnostic session to confirm mutual program fit.</p>
          </div>
        </div>

        <div class="text-center pt-4">
          <UiButton to="/apply" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
            Apply to Work With Digital Coach &rarr;
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { usePrograms } from '~/composables/usePrograms'

const { programs } = usePrograms()

useSeoMeta({
  title: 'Programs & Advisory Tracks — Digital Coach',
  description: 'Explore the 6 Digital Coach engagement tracks: Business Growth Diagnostic, Digital Coach Accelerator, Growth Lab, Private Advisory, Done For You, and Done With You.'
})
</script>
