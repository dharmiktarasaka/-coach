<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Private Mentorship
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            One-to-One Coaching
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Tailored, confidential guidance for entrepreneurs, executives, and individuals navigating major inflection points.
          </p>
        </div>

        <!-- Coaching Tiers -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div class="p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#8C6D57]">Targeted Clarity</span>
              <h3 class="text-2xl font-bold text-[#171844]">Strategic Intensive</h3>
              <p class="text-sm text-[#352D47] leading-relaxed">
                A focused 90-minute private strategy session to dismantle a specific blockage, align vision, and chart immediate action.
              </p>
              <ul class="space-y-2 text-xs sm:text-sm text-[#352D47] pt-2">
                <li class="flex items-center gap-2">✓ 90-Minute 1-on-1 Video Session</li>
                <li class="flex items-center gap-2">✓ Customized Action Protocol</li>
                <li class="flex items-center gap-2">✓ 14 Days of Follow-up Support</li>
              </ul>
            </div>
            <div class="pt-6 border-t border-[#EAE2D4]">
              <NuxtLink
                to="/contact"
                class="block w-full py-3.5 text-center rounded-xl bg-[#FAFAFA] border border-[#171844] text-[#171844] font-bold text-xs uppercase tracking-wider hover:bg-[#171844] hover:text-[#F8D78B] transition-colors"
              >
                Apply for Intensive &rarr;
              </NuxtLink>
            </div>
          </div>

          <div class="p-8 sm:p-10 rounded-3xl bg-[#171844] text-white shadow-xl flex flex-col justify-between space-y-6 border border-[#F8D78B]/30">
            <div class="space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#F8D78B]">Comprehensive Mentorship</span>
              <h3 class="text-2xl font-bold text-white">6-Month Mastery Advisory</h3>
              <p class="text-sm text-[#EAE2D4] leading-relaxed">
                Long-term close mentorship providing high-accountability counsel on leadership presence, mental resilience, and personal evolution.
              </p>
              <ul class="space-y-2 text-xs sm:text-sm text-[#EAE2D4] pt-2">
                <li class="flex items-center gap-2">✓ Bi-Weekly 1-on-1 Deep Dives</li>
                <li class="flex items-center gap-2">✓ Direct Asynchronous Access via Voice/Chat</li>
                <li class="flex items-center gap-2">✓ VIP Access to All Courses & Workshops</li>
              </ul>
            </div>
            <div class="pt-6 border-t border-white/10">
              <NuxtLink
                to="/contact"
                class="block w-full py-3.5 text-center rounded-xl bg-[#F8D78B] text-[#171844] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Apply for Advisory &rarr;
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
  title: 'One-to-One Coaching — Narayan Presence',
  description: 'Private, confidential advisory and coaching with Narayan.'
})
</script>
