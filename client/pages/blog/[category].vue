<template>
  <div class="py-28 md:py-36 min-h-screen transition-colors duration-300" :class="isDark ? 'bg-[#0f1233] text-[#F8F5EF]' : 'bg-[#FAFAFA] text-[#0D1431]'">
    <UiContainer size="md">
      <div class="space-y-12">
        <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6D57] hover:text-[#171844] transition-colors">
          &larr; Back to all articles
        </NuxtLink>

        <div class="space-y-4">
          <span class="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] border border-[#F8D78B]/30">
            Category / Article
          </span>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-[#171844] tracking-tight">
            {{ pageTitle }}
          </h1>
          <p class="text-base text-[#352D47] leading-relaxed">
            Explorations and perspectives under the {{ pageTitle }} archive.
          </p>
        </div>

        <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 sm:p-12 shadow-sm space-y-6 leading-relaxed text-[#352D47]">
          <p class="text-base sm:text-lg text-[#171844] font-medium">
            Sustainable transformation begins when you deliberately examine the quiet patterns of thought, attention, and daily choices that govern your life.
          </p>
          <p>
            When we stop reacting to every external demand and instead anchor ourselves in clear internal principles, our capacity to lead, create, and experience fulfillment expands exponentially.
          </p>
          <div class="p-6 rounded-2xl bg-[#FAFAFA] border-l-4 border-[#171844] italic text-[#171844]">
            "Presence is not the absence of thought; it is the presence of awareness behind every thought."
          </div>
          <p>
            Continue exploring more related articles in the journal or join our weekly reflective newsletter to receive essays directly to your inbox.
          </p>
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
const category = computed(() => (route.params.category as string) || 'journal')

const formatTitle = (str?: string) => {
  if (!str) return 'Category'
  return str.split('-').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

const pageTitle = computed(() => formatTitle(category.value))

useSeoMeta({
  title: `${pageTitle.value} — Blog Archive`,
  description: `Articles and insights about ${pageTitle.value}.`
})
</script>
