<template>
  <div class="narayan-subpage article-detail-page">
    <!-- Hero Article Header -->
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true">
        <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg>
      </span>
      <div class="wrap">
        <p class="crumb">
          <NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/resources">Resources</NuxtLink> / {{ article ? article.title : 'Article' }}
        </p>

        <div v-if="article">
          <div class="flex items-center gap-2.5 flex-wrap">
            <span
              class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
              :style="{
                color: article.color || '#D9AA55',
                backgroundColor: article.bg || 'rgba(217, 170, 85, 0.16)',
                borderColor: article.border || 'rgba(217, 170, 85, 0.4)'
              }"
            >
              {{ article.cat }}
            </span>
            <span class="text-xs text-[#EAE2D4]/70 flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {{ article.readTime }}
            </span>
          </div>

          <h1 style="margin-top:20px;font-size:clamp(32px,4.5vw,56px);line-height:1.18">
            {{ article.title }}
          </h1>

          <p class="lead hero-in" style="margin-top:16px;max-width:760px;font-size:clamp(17px,2vw,21px)">
            {{ article.desc }}
          </p>

          <!-- Author Bio Bar -->
          <div class="flex items-center gap-3.5 mt-8 pt-6 border-t border-white/10 max-w-md">
            <img
              :src="article.author?.avatar || '/ranu.webp'"
              :alt="article.author?.name || 'Ranu Patel'"
              class="w-12 h-12 rounded-full border border-[#D9AA55] object-cover"
            />
            <div>
              <div class="text-sm font-bold text-[#F8F5EF]">{{ article.author?.name || 'Ranu Patel' }}</div>
              <div class="text-xs text-[#D9AA55]">{{ article.author?.role || 'Life Transformation Coach & Healer' }}</div>
            </div>
          </div>
        </div>

        <div v-else>
          <p class="eyebrow">Article Not Found</p>
          <h1 style="margin-top:20px">Topic Under Preparation</h1>
          <p class="lead hero-in">
            This article is currently being prepared with fresh content.
          </p>
          <div class="btns" style="margin-top:24px">
            <NuxtLink class="btn btn-gold" to="/resources">&larr; Back to all Guides</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Breadcrumb Component -->
    <UiPageBreadcrumb
      :items="[
        { label: 'Resources & Journal', to: '/resources' },
        { label: article ? article.title : 'Article' }
      ]"
      :prev="{ label: 'All Guides', to: '/resources' }"
      :next="{ label: 'Workshops', to: '/workshops' }"
    />

    <!-- Main Article Body -->
    <section v-if="article" class="sec article-content-sec">
      <div class="wrap" style="max-width:860px">
        <!-- Featured Image -->
        <div v-if="article.image" class="article-cover-box mb-10">
          <img
            :src="article.image"
            :alt="article.title"
            class="article-cover-img"
          />
        </div>

        <!-- Key Takeaways Box (if available) -->
        <div v-if="article.keyTakeaways && article.keyTakeaways.length > 0" class="takeaways-card mb-10">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-lg text-[#D9AA55]">✦</span>
            <h3 class="text-base font-bold uppercase tracking-wider" style="color:var(--fg);margin:0">Key Takeaways</h3>
          </div>
          <ul class="takeaways-list space-y-2">
            <li v-for="(point, i) in article.keyTakeaways" :key="i" class="flex items-start gap-2.5 text-sm">
              <span class="text-[#D9AA55] font-bold">&bull;</span>
              <span>{{ point }}</span>
            </li>
          </ul>
        </div>

        <!-- Render Structured Sections (if available) -->
        <div v-if="article.sections && article.sections.length > 0" class="space-y-8 article-prose">
          <div v-for="(sec, idx) in article.sections" :key="idx" class="section-block">
            <h2 v-if="sec.heading" class="h2 text-2xl sm:text-3xl font-serif mb-4" style="color:var(--fg)">
              {{ sec.heading }}
            </h2>
            <div v-if="sec.content" class="prose-content leading-relaxed" style="color:var(--body);font-size:17px;line-height:1.75" v-html="sec.content"></div>
            <div v-else class="p-6 rounded-2xl border border-dashed border-[#D9AA55]/30 text-xs sm:text-sm text-[#8C6D57] dark:text-[#F8D78B]/80 bg-black/5 dark:bg-white/5 italic">
              ✦ Section content will appear here once provided.
            </div>
          </div>
        </div>

        <!-- Render Direct Raw Content (if available) -->
        <div v-else-if="article.content" class="article-prose leading-relaxed space-y-6" style="color:var(--body);font-size:17px;line-height:1.75" v-html="article.content"></div>

        <!-- Placeholder when content is being provided -->
        <div v-else class="p-8 rounded-3xl border border-[#D9AA55]/30 text-center space-y-4" :class="isDark ? 'bg-[#141845]' : 'bg-white shadow-sm'">
          <div class="text-3xl text-[#D9AA55]">✍️</div>
          <h3 class="text-xl font-bold font-serif" style="color:var(--fg)">Content In Production</h3>
          <p class="text-sm max-w-md mx-auto" style="color:var(--muted)">
            The complete guide for <strong>{{ article.title }}</strong> is being formatted. Check back shortly.
          </p>
        </div>

        <!-- Back to Resources Navigation -->
        <div class="pt-12 mt-12 border-t border-[#D9AA55]/20 flex items-center justify-between flex-wrap gap-4">
          <NuxtLink to="/resources" class="btn btn-line" style="font-size:14px">
            &larr; Back to all Guides
          </NuxtLink>
          <NuxtLink to="/coaching" class="btn btn-gold" style="font-size:14px">
            Work 1-to-1 with Ranu &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Deepen your <em>practice.</em></h2>
        <p class="lead">Explore structured coaching or register for our next live workshop.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/coaching">Explore 1-to-1 Coaching <span>→</span></NuxtLink>
          <NuxtLink class="btn btn-line" style="color:#F8F5EF" to="/workshops">View Workshops</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArticles } from '~/composables/useArticles'
import { useTheme } from '~/composables/useTheme'

const route = useRoute()
const { getArticle } = useArticles()
const { isDark } = useTheme()

const slug = computed(() => route.params.slug as string)
const article = computed(() => getArticle(slug.value))

// Seamlessly redirect /resources/:slug to the canonical /blog/:slug
if (article.value) {
  await navigateTo(article.value.url || `/blog/${article.value.slug}`, { redirectCode: 301 })
}

useHead(() => ({
  title: article.value ? `${article.value.title} — Narayan Presence` : 'Article — Narayan Presence',
  meta: [
    { name: 'description', content: article.value?.desc || 'Explore insights and mindful frameworks at Narayan Presence.' }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ]
}))
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}

.article-cover-box {
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(217, 170, 85, 0.3);
  box-shadow: 0 16px 40px -12px rgba(0, 0, 0, 0.35);
}

.article-cover-img {
  width: 100%;
  max-height: 480px;
  object-fit: cover;
  display: block;
}

.takeaways-card {
  padding: 24px 28px;
  border-radius: 20px;
  border: 1px solid rgba(217, 170, 85, 0.3);
  background: rgba(217, 170, 85, 0.08);
}

.article-prose {
  font-size: 18px;
  line-height: 1.8;
}

.article-prose p {
  margin-bottom: 20px;
}
</style>
