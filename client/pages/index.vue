<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-24">
        <!-- Hero Section -->
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-[#35D9B0] animate-pulse"></span>
            Conscious Mastery & Presence
          </div>

          <h1 class="font-display font-extrabold text-4xl sm:text-6xl text-[#171844] tracking-tight leading-[1.12]">
            Cultivate Inner Clarity.<br />
            <span class="text-[#8C6D57]">Lead With Grounded Impact.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed max-w-2xl mx-auto">
            Practical mentorship, immersive courses, and reflective frameworks designed to help founders, leaders, and practitioners quiet mental noise and master their life's work.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <NuxtLink
              to="/courses"
              class="px-7 py-3.5 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#171844]/20 border border-[#F8D78B]/30"
            >
              Explore Courses &rarr;
            </NuxtLink>
            <NuxtLink
              to="/coaching"
              class="px-7 py-3.5 rounded-xl bg-white border border-[#EAE2D4] text-[#171844] font-bold text-xs uppercase tracking-wider hover:bg-[#EAE2D4]/50 transition-colors shadow-sm"
            >
              1-on-1 Coaching
            </NuxtLink>
          </div>
        </div>

        <!-- 3 Feature Pillars -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NuxtLink
            to="/methodology"
            class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm hover:border-[#171844] transition-all space-y-4 group"
          >
            <div class="w-10 h-10 rounded-xl bg-[#171844] text-[#F8D78B] flex items-center justify-center text-sm font-bold">
              01
            </div>
            <h3 class="text-xl font-bold text-[#171844] group-hover:text-[#242658]">Our Methodology</h3>
            <p class="text-xs sm:text-sm text-[#352D47] leading-relaxed">
              Explore the 3-pillar framework combining grounding, strategic focus, and embodied mastery.
            </p>
            <span class="text-xs font-bold text-[#8C6D57] block pt-2">Read Framework &rarr;</span>
          </NuxtLink>

          <NuxtLink
            to="/membership"
            class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm hover:border-[#171844] transition-all space-y-4 group"
          >
            <div class="w-10 h-10 rounded-xl bg-[#242658] text-[#F8D78B] flex items-center justify-center text-sm font-bold">
              02
            </div>
            <h3 class="text-xl font-bold text-[#171844] group-hover:text-[#242658]">The Presence Circle</h3>
            <p class="text-xs sm:text-sm text-[#352D47] leading-relaxed">
              Ongoing monthly collective mentorship, audio practice suites, and global peer network.
            </p>
            <span class="text-xs font-bold text-[#8C6D57] block pt-2">View Membership &rarr;</span>
          </NuxtLink>

          <NuxtLink
            to="/founder"
            class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm hover:border-[#171844] transition-all space-y-4 group"
          >
            <div class="w-10 h-10 rounded-xl bg-[#352D47] text-[#F8D78B] flex items-center justify-center text-sm font-bold">
              03
            </div>
            <h3 class="text-xl font-bold text-[#171844] group-hover:text-[#242658]">Founder Profile</h3>
            <p class="text-xs sm:text-sm text-[#352D47] leading-relaxed">
              Meet Narayan and discover the journey, lineage of practice, and vision behind the organization.
            </p>
            <span class="text-xs font-bold text-[#8C6D57] block pt-2">Meet Narayan &rarr;</span>
          </NuxtLink>
        </div>

        <!-- Testimonial Quote Preview -->
        <div class="p-8 sm:p-12 rounded-3xl bg-[#171844] text-white text-center space-y-6 border border-[#F8D78B]/25">
          <div class="text-[#F8D78B] text-xl">★★★★★</div>
          <blockquote class="text-lg sm:text-xl font-medium text-[#EAE2D4] max-w-2xl mx-auto italic leading-relaxed">
            "The work with Narayan Presence brought a stillness and clarity to my life that completely transformed how I lead my organization."
          </blockquote>
          <div class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">
            Founder & CEO, Technology Advisory
          </div>
          <div>
            <NuxtLink
              to="/testimonials"
              class="inline-block text-xs font-bold text-[#EAE2D4] hover:text-[#F8D78B] underline transition-colors"
            >
              Read More Client Stories &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Narayan Presence — Conscious Mastery & Purposeful Growth',
  description: 'Coaching, courses, and guidance for personal and professional presence.'
})
</script>
