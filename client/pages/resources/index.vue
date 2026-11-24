<template>
  <div class="narayan-subpage resources-page">
    <section class="phero dark grain">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"><svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle r="98" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="80" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="56" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <circle r="36" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(45)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(90)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
          <ellipse cx="0" cy="-70" rx="6.5" ry="21" transform="rotate(135)" fill="none" stroke="currentColor" stroke-width="0.28" class="dr" />
        </svg></span>
      <div class="wrap">
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Insights / Resources</p>
        <p class="eyebrow">Resources &amp; Journal</p>
        <h1 style="margin-top:22px">Guides and tools you can <em>use today.</em></h1>
        <p class="lead hero-in">
          A curated library of guides, worksheets, practical frameworks and articles from practice, organised by topic.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Insights & Resources', to: '/resources' },
        { label: 'Journal & Library' }
      ]"
      :prev="{ label: 'Books & Products', to: '/products' }"
      :next="{ label: 'Testimonials', to: '/testimonials' }"
    />

    <!-- 4 Cards per Row Grid Section -->
    <section class="sec">
      <div class="wrap">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <p class="eyebrow">Journal &amp; Insights</p>
            <h2 class="h2">Notes from <em>the practice</em></h2>
          </div>
          <!-- Filter Tabs -->
          <div class="flex flex-wrap items-center gap-2">
            <button
              v-for="tab in filterTabs"
              :key="tab.id"
              @click="activeFilter = tab.id"
              :class="[
                'filter-btn',
                activeFilter === tab.id ? 'active' : ''
              ]"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- 4-Column Card Grid (1 col mobile, 2 tablet, 3 md, 4 lg) -->
        <div v-if="filteredArticles && filteredArticles.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mt-4">
          <NuxtLink
            v-for="(art, idx) in filteredArticles"
            :key="art?.slug || idx"
            :to="art?.url || ('/blog/' + (art?.slug || ''))"
            class="resource-card group block cursor-pointer no-underline"
          >
            <!-- Card Cover Image with Badges -->
            <div class="card-cover">
              <img
                :src="art?.image || '/logo.png'"
                :alt="art?.title || 'Article'"
                class="card-img"
                loading="lazy"
                @error="onImageError"
              />
              <div class="card-overlay"></div>
              <div class="card-badges">
                <span
                  v-if="art?.cat"
                  class="card-cat-badge"
                  :style="{
                    color: art?.color || '#D9AA55',
                    backgroundColor: art?.bg || 'rgba(217, 170, 85, 0.16)',
                    borderColor: art?.border || 'rgba(217, 170, 85, 0.4)'
                  }"
                >
                  {{ art.cat }}
                </span>
                <span v-if="art?.readTime" class="card-time-badge">
                  <svg class="w-3 h-3 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {{ art.readTime }}
                </span>
              </div>
            </div>

            <!-- Card Content Body -->
            <div class="card-body">
              <h3 class="card-title">
                {{ art?.title || 'Article Title' }}
              </h3>
              <p v-if="art?.desc" class="card-desc">
                {{ art.desc }}
              </p>
              
              <!-- Card Footer with Author and CTA -->
              <div class="card-footer">
                <div class="card-author">
                  <img :src="art?.author?.avatar || '/ranu.webp'" :alt="art?.author?.name || 'Ranu Patel'" class="author-avatar" @error="onAvatarError" />
                  <span>{{ art?.author?.name || 'Ranu Patel' }}</span>
                </div>
                <span class="card-cta">
                  Read Guide <span class="arrow">→</span>
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="empty-state py-16 px-6 text-center rounded-3xl border border-[#D9AA55]/25 my-8" :class="isDark ? 'bg-[#141845]/50' : 'bg-white shadow-sm'">
          <div class="text-4xl mb-4 text-[#D9AA55]">📖</div>
          <h3 class="text-xl sm:text-2xl font-serif font-bold" style="color:var(--fg)">New Curated Guides Coming Soon</h3>
          <p class="text-sm sm:text-base max-w-lg mx-auto mt-2" style="color:var(--muted)">
            We are preparing fresh, transformative blog articles and reflective frameworks. Check back shortly as new topics are published.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useArticles } from '~/composables/useArticles'
import { useTheme } from '~/composables/useTheme'

// Redirect /resources to the canonical /blog
await navigateTo('/blog', { redirectCode: 301 })

const { isDark } = useTheme()
const { articles } = useArticles()

const activeFilter = ref('all')

const filteredArticles = computed(() => {
  const list = articles.value || []
  if (!Array.isArray(list)) return []
  const valid = list.filter(a => a && typeof a === 'object' && a.title)
  if (activeFilter.value === 'all') return valid
  return valid.filter(a => a.tag === activeFilter.value)
})

const filterTabs = computed(() => [
  { id: 'all', label: `All Guides (${filteredArticles.value.length})` },
  { id: 'mind', label: 'Mind & Clarity' },
  { id: 'emotions', label: 'Emotions & Habits' },
  { id: 'coaching', label: 'Coaching & Business' }
])

const onImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/logo.png'
  }
}

const onAvatarError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/ranu.webp'
  }
}

useHead({
  title: 'Journal & Insights Library · The Narayan Presence',
  meta: [
    { name: 'description', content: 'Practical guides on self-awareness, emotional agility, boundaries, mindfulness, and conscious coaching business by Ranu Patel.' },
    { property: 'og:title', content: 'Journal & Knowledge Library | The Narayan Presence' },
    { property: 'og:description', content: 'In-depth notes, worksheets, and reflection practices from Ranu Patel\'s coaching room.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' },
    { property: 'og:type', content: 'website' }
  ],
  link: [{ rel: 'stylesheet', href: '/style.css' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'The Narayan Presence Journal & Guides',
        'itemListElement': (articles.value || []).map((art, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'Article',
            'name': art.title,
            'headline': art.title,
            'description': art.desc,
            'image': art.image,
            'author': {
              '@type': 'Person',
              'name': 'Ranu Patel'
            },
            'publisher': {
              '@type': 'Organization',
              'name': 'The Narayan Presence'
            }
          }
        }))
      })
    }
  ]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}

.narayan-subpage h1,
.narayan-subpage h2,
.narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}

/* Filter buttons */
.filter-btn {
  font-size: 12px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 9999px;
  transition: all 0.2s ease;
  background: rgba(234, 226, 212, 0.5);
  color: #4A4B68;
  border: 1px solid rgba(234, 226, 212, 0.8);
  cursor: pointer;
}

.filter-btn:hover {
  background: #EAE2D4;
  color: #171848;
}

.filter-btn.active {
  background: #171848;
  color: #F8D78B;
  border-color: #171848;
  box-shadow: 0 4px 12px rgba(23, 24, 72, 0.15);
}

:global(body.dark) .filter-btn {
  background: rgba(255, 255, 255, 0.06);
  color: #c4c4e2;
  border-color: rgba(217, 170, 85, 0.25);
}

:global(body.dark) .filter-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #F8F5EF;
}

:global(body.dark) .filter-btn.active {
  background: #D9AA55;
  color: #171848;
  border-color: #D9AA55;
  box-shadow: 0 4px 16px rgba(217, 170, 85, 0.3);
}

/* Card Container */
.resource-card {
  display: flex;
  flex-direction: column;
  background: var(--card, #141845);
  border-radius: 18px;
  border: 1px solid var(--line, rgba(217, 170, 85, 0.25));
  overflow: hidden;
  box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
  position: relative;
}

.resource-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 36px -4px rgba(23, 24, 72, 0.12);
  border-color: rgba(217, 170, 85, 0.55);
}

/* Dark Theme Specifics */
:global(:root:not([data-theme="light"])) .resource-card,
:global([data-theme="dark"]) .resource-card,
:global(.dark) .resource-card,
:global(html.dark) .resource-card,
:global(body.dark) .resource-card {
  background: #141845 !important;
  border-color: rgba(217, 170, 85, 0.28) !important;
  box-shadow: 0 4px 24px -2px rgba(0, 0, 0, 0.45) !important;
}

:global(:root:not([data-theme="light"])) .resource-card:hover,
:global([data-theme="dark"]) .resource-card:hover,
:global(.dark) .resource-card:hover,
:global(html.dark) .resource-card:hover,
:global(body.dark) .resource-card:hover {
  border-color: rgba(217, 170, 85, 0.7) !important;
  box-shadow: 0 18px 40px -4px rgba(0, 0, 0, 0.65), 0 0 20px rgba(217, 170, 85, 0.2) !important;
}

/* Light Theme Specifics */
:global([data-theme="light"]) .resource-card,
:global(html.light) .resource-card,
:global(body.light) .resource-card,
:global(.light) .resource-card {
  background: #ffffff !important;
  border-color: #EAE2D4 !important;
  box-shadow: 0 4px 20px -2px rgba(23, 24, 72, 0.06) !important;
}

:global([data-theme="light"]) .resource-card:hover,
:global(html.light) .resource-card:hover,
:global(body.light) .resource-card:hover,
:global(.light) .resource-card:hover {
  border-color: rgba(217, 170, 85, 0.55) !important;
  box-shadow: 0 18px 36px -4px rgba(23, 24, 72, 0.12) !important;
}

/* Card Cover Image */
.card-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #171848;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.resource-card:hover .card-img {
  transform: scale(1.07);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0) 45%, rgba(0, 0, 0, 0.2) 100%);
  pointer-events: none;
}

.card-badges {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none;
  z-index: 2;
}

.card-cat-badge {
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 9999px;
  border-width: 1px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.card-time-badge {
  font-size: 10.5px;
  font-weight: 600;
  color: #ffffff;
  background: rgba(15, 23, 42, 0.7);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 3px 9px;
  border-radius: 9999px;
  display: inline-flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* Card Body */
.card-body {
  padding: 16px 18px 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.card-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 17.5px;
  line-height: 1.35;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 8px;
  transition: color 0.2s ease;
}

/* Dark mode text: Bright Ivory */
:global(:root:not([data-theme="light"])) .card-title,
:global([data-theme="dark"]) .card-title,
:global(.dark) .card-title,
:global(html.dark) .card-title,
:global(body.dark) .card-title {
  color: #F8F5EF !important;
}

:global(:root:not([data-theme="light"])) .resource-card:hover .card-title,
:global([data-theme="dark"]) .resource-card:hover .card-title,
:global(.dark) .resource-card:hover .card-title,
:global(html.dark) .resource-card:hover .card-title,
:global(body.dark) .resource-card:hover .card-title {
  color: #F8D78B !important;
}

/* Light mode text: Deep Navy */
:global([data-theme="light"]) .card-title,
:global(html.light) .card-title,
:global(body.light) .card-title,
:global(.light) .card-title {
  color: #171848 !important;
}

:global([data-theme="light"]) .resource-card:hover .card-title,
:global(html.light) .resource-card:hover .card-title,
:global(body.light) .resource-card:hover .card-title,
:global(.light) .resource-card:hover .card-title {
  color: #B8860B !important;
}

.card-desc {
  font-size: 12.5px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 16px;
  flex-grow: 1;
}

/* Dark mode desc */
:global(:root:not([data-theme="light"])) .card-desc,
:global([data-theme="dark"]) .card-desc,
:global(.dark) .card-desc,
:global(html.dark) .card-desc,
:global(body.dark) .card-desc {
  color: #c4c4e2 !important;
}

/* Light mode desc */
:global([data-theme="light"]) .card-desc,
:global(html.light) .card-desc,
:global(body.light) .card-desc,
:global(.light) .card-desc {
  color: #5A5B78 !important;
}

/* Card Footer */
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  margin-top: auto;
}

:global([data-theme="light"]) .card-footer,
:global(html.light) .card-footer,
:global(body.light) .card-footer,
:global(.light) .card-footer {
  border-top-color: #EAE2D4 !important;
}

.card-author {
  display: flex;
  align-items: center;
  font-size: 11.5px;
  font-weight: 600;
  color: #A3A6C2;
}

:global([data-theme="light"]) .card-author,
:global(html.light) .card-author,
:global(body.light) .card-author,
:global(.light) .card-author {
  color: #5A5B78 !important;
}

.author-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #D9AA55;
  margin-right: 6px;
}

.card-cta {
  font-size: 12px;
  font-weight: 700;
  color: #D9AA55;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.card-cta .arrow {
  display: inline-block;
  transition: transform 0.2s ease;
}

.resource-card:hover .card-cta .arrow {
  transform: translateX(4px);
}

.empty-state {
  text-align: center;
  padding: 48px 0;
  color: #7A7C93;
  font-size: 14px;
}
</style>
