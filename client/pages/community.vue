<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Collective Growth
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Community Overview
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            A global network of conscious leaders, founders, and practitioners committed to living with purpose, integrity, and deep impact.
          </p>
        </div>

        <!-- Community Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-3">
            <h3 class="text-xl font-bold text-[#171844]">Peer Accountability</h3>
            <p class="text-sm text-[#352D47] leading-relaxed">
              Connect with fellow practitioners who share your commitment to intentional living, deep work, and high standards.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-3">
            <h3 class="text-xl font-bold text-[#171844]">Bi-Weekly Circles</h3>
            <p class="text-sm text-[#352D47] leading-relaxed">
              Facilitated discussions and reflections on challenges, breakthroughs, and actionable frameworks in real-time.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm space-y-3">
            <h3 class="text-xl font-bold text-[#171844]">Resource Vault</h3>
            <p class="text-sm text-[#352D47] leading-relaxed">
              Exclusive member-contributed playbooks, curated reading summaries, and habit tracking templates.
            </p>
          </div>
        </div>

        <!-- Join Banner -->
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-primary text-white space-y-6 text-center">
          <h2 class="text-3xl font-extrabold text-white">Ready to join the collective?</h2>
          <p class="text-sm sm:text-base text-[#EAE2D4] max-w-xl mx-auto">
            Step into a space where personal growth is supported with authenticity, structure, and genuine camaraderie.
          </p>
          <div>
            <NuxtLink
              to="/membership"
              class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#F8D78B] hover:bg-white text-[#171844] font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Explore Membership Tiers &rarr;
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Community Overview — Narayan Presence',
  description: 'Discover the community, peer accountability circles, and global network.'
})
</script>
