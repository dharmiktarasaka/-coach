<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-14">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Training & Masterclasses
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Curated Courses
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Structured, self-paced, and cohort-based courses crafted to develop profound personal mastery, emotional clarity, and purposeful action.
          </p>
        </div>

        <!-- Course Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="course in courses"
            :key="course.slug"
            class="bg-white border border-[#EAE2D4] rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-[#171844] transition-colors"
          >
            <div class="space-y-4">
              <div class="aspect-video rounded-2xl bg-gradient-to-br from-[#171844] to-[#242658] flex items-center justify-center text-[#F8D78B]">
                <span class="text-xs font-bold uppercase tracking-widest text-[#F8D78B]/80">{{ course.level }}</span>
              </div>
              <div class="space-y-2">
                <span class="text-xs font-bold text-[#8C6D57] uppercase tracking-wider">{{ course.duration }}</span>
                <h3 class="text-xl font-bold text-[#171844] leading-snug">{{ course.title }}</h3>
                <p class="text-xs sm:text-sm text-[#352D47] leading-relaxed">{{ course.summary }}</p>
              </div>
            </div>
            <div class="pt-6 border-t border-[#EAE2D4]/70 mt-6 flex items-center justify-between">
              <span class="text-base font-bold text-[#171844]">{{ course.price }}</span>
              <NuxtLink
                :to="`/courses/${course.slug}`"
                class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                View Course &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Courses — Narayan Presence',
  description: 'Explore conscious growth, focus, and leadership courses.'
})

const courses = [
  {
    slug: 'conscious-mastery',
    title: 'The Art of Conscious Mastery',
    level: 'Foundational',
    duration: '6 Weeks',
    summary: 'A deep dive into building internal calm, emotional resilience, and intentional decision-making.',
    price: '$299'
  },
  {
    slug: 'focus-and-presence',
    title: 'Presence in Practice',
    level: 'Intermediate',
    duration: '4 Weeks',
    summary: 'Eliminate digital noise and align your attention with high-impact goals through guided focus protocols.',
    price: '$199'
  },
  {
    slug: 'purposeful-leadership',
    title: 'Purposeful Leadership & Influence',
    level: 'Advanced',
    duration: '8 Weeks',
    summary: 'Lead teams, clients, and initiatives with grounded presence, clear vision, and calm authority.',
    price: '$499'
  }
]
</script>
