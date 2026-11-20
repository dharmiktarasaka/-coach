<template>
  <div class="py-28 md:py-36 min-h-screen transition-colors duration-300" :class="isDark ? 'bg-[#0f1233] text-[#F8F5EF]' : 'bg-[#FAFAFA] text-[#0D1431]'">
    <UiContainer size="md">
      <div class="space-y-12">
        <NuxtLink to="/courses" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6D57] hover:text-[#171844] transition-colors">
          &larr; Back to all courses
        </NuxtLink>

        <div class="space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Course Curriculum
          </div>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-[#171844] tracking-tight">
            {{ courseTitle }}
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Gain practical, life-tested tools to transform how you think, focus, and lead.
          </p>
        </div>

        <!-- Course Details Banner -->
        <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 sm:p-10 shadow-sm space-y-8">
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-[#EAE2D4]">
            <div>
              <div class="text-xs font-semibold text-[#8C6D57] uppercase tracking-wider">Format</div>
              <div class="text-base font-bold text-[#171844] mt-1">Self-Paced + Live Q&A</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-[#8C6D57] uppercase tracking-wider">Access</div>
              <div class="text-base font-bold text-[#171844] mt-1">Lifetime Access</div>
            </div>
            <div>
              <div class="text-xs font-semibold text-[#8C6D57] uppercase tracking-wider">Support</div>
              <div class="text-base font-bold text-[#171844] mt-1">Community Forum</div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-xl font-bold text-[#171844]">What You'll Learn</h3>
            <ul class="space-y-2.5 text-sm text-[#352D47]">
              <li class="flex items-start gap-2.5">
                <span class="text-[#35D9B0] font-bold">✓</span>
                <span>Foundational frameworks for emotional grounding and focus.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-[#35D9B0] font-bold">✓</span>
                <span>Practical daily rituals to protect energy and heighten clarity.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="text-[#35D9B0] font-bold">✓</span>
                <span>Real-world case studies and actionable reflective exercises.</span>
              </li>
            </ul>
          </div>

          <div class="pt-6 border-t border-[#EAE2D4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div class="text-xs text-[#8C6D57]">Enrollment Status</div>
              <div class="text-xl font-extrabold text-[#171844]">Admissions Open</div>
            </div>
            <NuxtLink
              to="/contact"
              class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-sm text-center"
            >
              Enroll Now &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()
const route = useRoute()
const slug = computed(() => (route.params.slug as string) || 'course')

const formatTitle = (str?: string) => {
  if (!str) return 'Course'
  return str.split('-').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

const courseTitle = computed(() => formatTitle(slug.value))

useSeoMeta({
  title: `${courseTitle.value} — Narayan Presence`,
  description: 'Course details, syllabus, and enrollment.'
})
</script>
