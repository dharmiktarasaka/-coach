<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-14">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Insights & Reflections
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            The Presence Journal
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Essays, field notes, and perspectives on mindfulness, leadership discipline, and living with authentic depth.
          </p>
        </div>

        <!-- Categories Strip -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2">
          <NuxtLink
            v-for="cat in categories"
            :key="cat.slug"
            :to="`/blog/${cat.slug}`"
            class="px-4 py-2 rounded-xl bg-white border border-[#EAE2D4] text-xs font-bold text-[#171844] hover:bg-[#171844] hover:text-[#F8D78B] transition-colors whitespace-nowrap"
          >
            {{ cat.name }}
          </NuxtLink>
        </div>

        <!-- Blog Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article
            v-for="post in posts"
            :key="post.slug"
            class="p-6 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm flex flex-col justify-between hover:border-[#171844] transition-colors"
          >
            <div class="space-y-4">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#8C6D57]">{{ post.category }}</span>
              <h2 class="text-xl font-bold text-[#171844] leading-snug">{{ post.title }}</h2>
              <p class="text-xs sm:text-sm text-[#352D47] leading-relaxed">{{ post.excerpt }}</p>
            </div>
            <div class="pt-6 border-t border-[#EAE2D4] mt-6 flex items-center justify-between">
              <span class="text-xs text-[#8C6D57]">{{ post.readTime }}</span>
              <NuxtLink
                :to="`/blog/${post.slug}`"
                class="text-xs font-bold text-[#171844] hover:text-[#8C6D57] transition-colors"
              >
                Read Article &rarr;
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog — Narayan Presence',
  description: 'Read the latest essays, articles, and insights from Narayan Presence.'
})

const categories = [
  { name: 'Mindfulness', slug: 'mindfulness' },
  { name: 'Leadership', slug: 'leadership' },
  { name: 'Focus & Productivity', slug: 'productivity' },
  { name: 'Personal Mastery', slug: 'mastery' }
]

const posts = [
  {
    slug: 'the-myth-of-hustle',
    title: 'The Architecture of Inner Calm in Chaos',
    category: 'Mindfulness',
    excerpt: 'Why high-velocity action without internal grounding produces burnout rather than enduring success.',
    readTime: '5 min read'
  },
  {
    slug: 'quiet-leadership',
    title: 'Leading With Silent Authority',
    category: 'Leadership',
    excerpt: 'How the most impactful leaders command rooms through presence rather than persuasion or volume.',
    readTime: '7 min read'
  },
  {
    slug: 'digital-declutter',
    title: 'Reclaiming Your Attention Span',
    category: 'Focus & Productivity',
    excerpt: 'Practical protocols to design your information diet and reclaim uninterrupted creative flow.',
    readTime: '6 min read'
  }
]
</script>
