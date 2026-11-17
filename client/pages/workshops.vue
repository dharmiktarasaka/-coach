<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-14">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Live Experiences
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Workshops & Events
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Immersive in-person and virtual workshops designed to break through stagnation, clarify direction, and restore mental vitality.
          </p>
        </div>

        <!-- Workshops Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="event in events"
            :key="event.title"
            class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-6 flex flex-col justify-between"
          >
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EAE2D4]/60 text-[#171844]">{{ event.type }}</span>
                <span class="text-xs font-mono font-semibold text-[#8C6D57]">{{ event.date }}</span>
              </div>
              <h3 class="text-2xl font-bold text-[#171844]">{{ event.title }}</h3>
              <p class="text-sm text-[#352D47] leading-relaxed">{{ event.description }}</p>
            </div>
            <div class="pt-6 border-t border-[#EAE2D4] flex items-center justify-between">
              <span class="text-sm font-semibold text-[#8C6D57]">{{ event.location }}</span>
              <NuxtLink
                to="/contact"
                class="px-5 py-2.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Register &rarr;
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
  title: 'Workshops & Events — Narayan Presence',
  description: 'Upcoming live immersion experiences and virtual intensives.'
})

const events = [
  {
    type: 'Virtual Intensive',
    date: 'Monthly Cohort',
    title: 'The Weekend Reset: Reclaiming Mind & Time',
    description: 'A 2-day live virtual intensive teaching daily presence protocols, cognitive decluttering, and strategic habits.',
    location: 'Live on Zoom'
  },
  {
    type: 'In-Person Immersion',
    date: 'Quarterly',
    title: 'Presence in Leadership Retreat',
    description: 'An intimate 3-day deep dive retreat for founders, executives, and leaders seeking centered clarity.',
    location: 'Rishikesh, India'
  }
]
</script>
