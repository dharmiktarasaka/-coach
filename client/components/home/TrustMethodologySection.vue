<template>
  <section class="py-20 md:py-32 bg-[#FBF6F6] border-y border-[#EAE4E4] relative">
    <UiContainer size="xl">
      <!-- Section Heading: 14. PHILOSOPHY / TRUST -->
      <UiSectionHeading
        tag="What We Believe"
        tag-variant="amber"
        title="LESS HYPE. MORE BUSINESS."
        subtitle="Our industry is drowning in fake income screenshots, rented Lamborghinis, and “one weird trick” marketing. We built Digital Coach on the opposite: real assets, honest methods, and businesses that last."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- 6 Principles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="principle in principles"
          :key="principle.title"
          class="p-8 rounded-3xl bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 transition-all duration-200 space-y-3 shadow-md"
        >
          <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] font-mono text-sm font-bold">
            {{ principle.num }}
          </div>

          <h3 class="font-display font-black text-xl text-[#1A1A1A]">
            {{ principle.title }}
          </h3>

          <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
            {{ principle.description }}
          </p>
        </div>
      </div>

      <!-- What We'll Never Promise You Callout -->
      <div class="mt-14 p-8 rounded-3xl bg-white border border-red-200 max-w-4xl mx-auto space-y-4 shadow-lg">
        <div class="flex items-center gap-2 text-red-600 font-mono text-xs uppercase font-bold tracking-wider">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          Our Promise About Promises &middot; Our Integrity Standard
        </div>
        <h4 class="font-display font-black text-xl text-[#1A1A1A]">What we’ll never promise you.</h4>
        <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed font-medium">
          We will never promise you “₹10 lakh in 30 days,” effortless passive income, or overnight riches. A real expert business is built on genuine skill, real care for your clients, and steady, honest work. If someone’s promising you shortcuts, they’re selling the dream — we help you build the business.
        </p>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const principles = [
  {
    num: '01',
    title: 'Real assets over theory',
    description: 'Offers, pipelines, and systems you actually own, not just ideas.'
  },
  {
    num: '02',
    title: 'A proven method',
    description: 'Every move follows our 9-layer model, so you’re not guessing.'
  },
  {
    num: '03',
    title: 'Evidence over optimism',
    description: 'We tune positioning and pricing based on real numbers, not hope.'
  },
  {
    num: '04',
    title: 'Human + AI, in balance',
    description: 'AI handles the busywork; your judgment stays in charge.'
  },
  {
    num: '05',
    title: 'Systems that hold',
    description: 'Your income shouldn’t collapse the week you take off.'
  },
  {
    num: '06',
    title: 'Built to last',
    description: 'A brand and body of work with real, lasting value.'
  }
]
</script>
