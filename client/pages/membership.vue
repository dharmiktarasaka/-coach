<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="md">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 text-center max-w-xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Ongoing Practice
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            The Presence Circle
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            A private membership community for continuous inner mastery, monthly live masterclasses, and curated practice tools.
          </p>
        </div>

        <!-- Membership Card -->
        <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EAE2D4]">
            <div>
              <span class="text-xs font-bold text-[#8C6D57] uppercase tracking-wider">All-Access Member</span>
              <h2 class="text-2xl font-bold text-[#171844] mt-0.5">Presence Circle Annual</h2>
            </div>
            <div class="text-left sm:text-right">
              <div class="text-3xl font-extrabold text-[#171844]">$49<span class="text-sm font-normal text-[#8C6D57]">/month</span></div>
              <div class="text-xs text-[#35D9B0] font-semibold">Billed annually ($490/yr)</div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-sm font-bold uppercase tracking-wider text-[#171844]">Everything Included:</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#352D47]">
              <div class="flex items-center gap-2">✓ Monthly Live Coaching Calls</div>
              <div class="flex items-center gap-2">✓ Full Course Archive Access</div>
              <div class="flex items-center gap-2">✓ Private Community Discord</div>
              <div class="flex items-center gap-2">✓ Guided Audio Meditations</div>
              <div class="flex items-center gap-2">✓ Priority Retreat Booking</div>
              <div class="flex items-center gap-2">✓ Quarterly Reading Lists</div>
            </div>
          </div>

          <div class="pt-6 border-t border-[#EAE2D4]">
            <NuxtLink
              to="/contact"
              class="block w-full py-4 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-center text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              Join The Presence Circle &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Membership — Narayan Presence',
  description: 'Join the Presence Circle community membership.'
})
</script>
