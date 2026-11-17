<template>
  <section class="py-20 md:py-32 bg-[#FBF6F6] border-y border-[#EAE4E4] relative">
    <UiContainer size="xl">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Left: Copy (6 cols) -->
        <div class="lg:col-span-6 space-y-6">
          <UiBadge variant="amber" :dot="true">Made For How Business Actually Works Here</UiBadge>

          <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-[1.1]">
            BUILT IN INDIA. <br />
            <span class="text-[#FF7F11]">READY FOR THE WORLD.</span>
          </h2>

          <p class="text-base text-[#524F4E] leading-relaxed">
            Most Western business playbooks quietly fail here — they ignore how much runs on trust, how people actually buy over WhatsApp, and how differently Indian buyers weigh price. We built for that reality first.
          </p>

          <p class="text-sm text-[#524F4E] leading-relaxed">
            We built Digital Coach with real understanding of how business works in India — while holding the standards it takes to win premium international clients in USD, GBP, and AED.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <UiButton to="/coaching-business-india" variant="secondary" size="md">
              Read our India market notes &rarr;
            </UiButton>
          </div>
        </div>

        <!-- Right: Realities Grid (6 cols) -->
        <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="point in indiaNuances"
            :key="point.title"
            class="p-6 rounded-2xl bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 transition-colors space-y-2 shadow-md"
          >
            <div class="flex items-center gap-2 text-[#FF7F11] font-mono text-xs font-bold">
              <span>&bull;</span>
              <span>{{ point.tag }}</span>
            </div>
            <h4 class="font-display text-base font-bold text-[#1A1A1A]">
              {{ point.title }}
            </h4>
            <p class="text-xs text-[#524F4E] leading-relaxed">
              {{ point.description }}
            </p>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const indiaNuances = [
  {
    tag: 'Client Flow',
    title: 'WhatsApp-First Client Flow',
    description: 'Qualify and follow up where your clients actually are, professionally and automatically. (Not slow, ignored email.)'
  },
  {
    tag: 'Market Economics',
    title: 'Pricing That Fits Indian Budgets',
    description: 'Tiers that respect both what corporates can spend and what serious individuals will invest.'
  },
  {
    tag: 'Sales Posture',
    title: 'Trust-Led Selling',
    description: 'Real consultations and credibility, not aggressive, pushy pitches.'
  },
  {
    tag: 'Global Scale',
    title: 'Ready To Go Global',
    description: 'Your assets structured so you can serve clients in the US, UK, Gulf, and beyond when you’re ready.'
  }
]
</script>
