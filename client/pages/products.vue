<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-14">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Publications & Toolkits
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Books & Digital Products
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Essential guidebooks, audio contemplation tracks, and digital frameworks to support your daily practice.
          </p>
        </div>

        <!-- Products Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="item in products"
            :key="item.title"
            class="bg-white border border-[#EAE2D4] rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-[#171844] transition-colors"
          >
            <div class="space-y-4">
              <div class="aspect-[4/3] rounded-2xl bg-[#171844] flex items-center justify-center text-[#F8D78B] p-6 text-center">
                <span class="text-xs font-bold uppercase tracking-widest text-[#F8D78B]">{{ item.type }}</span>
              </div>
              <div class="space-y-1">
                <span class="text-xs font-semibold text-[#8C6D57]">{{ item.format }}</span>
                <h3 class="text-xl font-bold text-[#171844]">{{ item.title }}</h3>
                <p class="text-xs sm:text-sm text-[#352D47] leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
            <div class="pt-6 border-t border-[#EAE2D4] mt-6 flex items-center justify-between">
              <span class="text-lg font-bold text-[#171844]">{{ item.price }}</span>
              <NuxtLink
                to="/contact"
                class="px-4 py-2 rounded-xl bg-[#171844] hover:bg-[#242658] text-[#F8D78B] font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Get Copy &rarr;
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
  title: 'Books & Digital Products — Narayan Presence',
  description: 'Books, guided audios, and daily mastery workbooks.'
})

const products = [
  {
    type: 'Hardcover & eBook',
    format: 'Print + Digital',
    title: 'The Grounded Mind',
    description: 'A comprehensive treatise on cultivating calm resilience in an era of hyper-stimulation.',
    price: '$24'
  },
  {
    type: 'Interactive Toolkit',
    format: 'PDF + Notion Templates',
    title: 'Daily Presence Operating System',
    description: 'The exact morning and evening reflection frameworks used by high-performance leaders.',
    price: '$39'
  },
  {
    type: 'Audio Meditations',
    format: 'Hi-Fi Audio Series',
    title: 'Clarity & Stillness Audio Suite',
    description: '12 guided audio protocols designed for nervous system regulation and mental reset.',
    price: '$49'
  }
]
</script>
