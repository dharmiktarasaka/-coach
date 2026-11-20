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
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 mt-4">
          <article
            v-for="(art, idx) in filteredArticles"
            :key="idx"
            class="resource-card group"
          >
            <!-- Card Cover Image with Badges -->
            <div class="card-cover">
              <img
                :src="art.image"
                :alt="art.title"
                class="card-img"
                loading="lazy"
                @error="onImageError"
              />
              <div class="card-overlay"></div>
              <div class="card-badges">
                <span
                  class="card-cat-badge"
                  :style="{
                    color: art.color,
                    backgroundColor: art.bg,
                    borderColor: art.border
                  }"
                >
                  {{ art.cat }}
                </span>
                <span class="card-time-badge">
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
                {{ art.title }}
              </h3>
              <p class="card-desc">
                {{ art.desc }}
              </p>
              
              <!-- Card Footer with Author and CTA -->
              <div class="card-footer">
                <div class="card-author">
                  <img src="/ranu.webp" alt="Ranu Patel" class="author-avatar" @error="onAvatarError" />
                  <span>Ranu Patel</span>
                </div>
                <span class="card-cta">
                  Read Guide <span class="arrow">→</span>
                </span>
              </div>
            </div>
          </article>
        </div>

        <div v-if="filteredArticles.length === 0" class="empty-state">
          <p>No guides found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeFilter = ref('all')

const filterTabs = [
  { id: 'all', label: 'All Guides (12)' },
  { id: 'mind', label: 'Mind & Clarity' },
  { id: 'emotions', label: 'Emotions & Habits' },
  { id: 'coaching', label: 'Coaching & Business' }
]

const articles = [
  {
    cat: 'Self-Awareness',
    tag: 'mind',
    title: 'How to practise self-awareness without judging yourself',
    desc: 'Learn to observe your inner dialogue as a curious witness rather than a harsh critic.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    color: '#D9AA55',
    bg: 'rgba(217, 170, 85, 0.16)',
    border: 'rgba(217, 170, 85, 0.4)'
  },
  {
    cat: 'Emotions',
    tag: 'emotions',
    title: 'Notice emotional triggers before reacting in high-stakes moments',
    desc: 'Spot somatic tension patterns in the body and cultivate the vital 3-second pause.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=600&q=80',
    color: '#E06D53',
    bg: 'rgba(224, 109, 83, 0.16)',
    border: 'rgba(224, 109, 83, 0.4)'
  },
  {
    cat: 'Mindfulness',
    tag: 'emotions',
    title: 'Five-minute mindfulness practices for busy work days',
    desc: 'Micro-meditations and breath anchors you can execute between meetings without a cushion.',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=600&q=80',
    color: '#10B981',
    bg: 'rgba(16, 185, 129, 0.16)',
    border: 'rgba(16, 185, 129, 0.4)'
  },
  {
    cat: 'Relationships',
    tag: 'mind',
    title: 'How to express a boundary clearly and respectfully',
    desc: 'A non-defensive communication framework to state limits without guilt or resentment.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80',
    color: '#9B72CF',
    bg: 'rgba(155, 114, 207, 0.16)',
    border: 'rgba(155, 114, 207, 0.4)'
  },
  {
    cat: 'Parenting',
    tag: 'emotions',
    title: 'How parents can pause before responding to big emotions',
    desc: 'Regulating your own nervous system first before co-regulating with your child.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=600&q=80',
    color: '#F59E0B',
    bg: 'rgba(245, 158, 11, 0.16)',
    border: 'rgba(245, 158, 11, 0.4)'
  },
  {
    cat: 'Intentional Living',
    tag: 'mind',
    title: 'A weekly values-based planning practice for focus',
    desc: 'Align your calendar with inner priorities instead of reacting to external urgency.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80',
    color: '#EC4899',
    bg: 'rgba(236, 72, 153, 0.16)',
    border: 'rgba(236, 72, 153, 0.4)'
  },
  {
    cat: 'Coaching Scope',
    tag: 'coaching',
    title: 'Coaching, consulting and therapy: understand the scope',
    desc: 'Clarify boundaries between healing the past, diagnosis, and creating future agency.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80',
    color: '#3B82F6',
    bg: 'rgba(59, 130, 246, 0.16)',
    border: 'rgba(59, 130, 246, 0.4)'
  },
  {
    cat: 'Niche Strategy',
    tag: 'coaching',
    title: 'Choose a coaching niche based on evidence, not assumptions',
    desc: 'Validate client urgency, purchasing capability, and proven market demand.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    color: '#059669',
    bg: 'rgba(5, 150, 105, 0.16)',
    border: 'rgba(5, 150, 105, 0.4)'
  },
  {
    cat: 'Programme Design',
    tag: 'coaching',
    title: 'Structure a coaching programme around client outcomes',
    desc: 'How to sequence milestones, accountability, and exercises for lasting habit changes.',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80',
    color: '#6366F1',
    bg: 'rgba(99, 102, 241, 0.16)',
    border: 'rgba(99, 102, 241, 0.4)'
  },
  {
    cat: 'Course Creation',
    tag: 'coaching',
    title: 'Turn your lived expertise into a structured curriculum',
    desc: 'Break down complex wisdom into digestible modules, checklists, and video lessons.',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    color: '#EA580C',
    bg: 'rgba(234, 88, 12, 0.16)',
    border: 'rgba(234, 88, 12, 0.4)'
  },
  {
    cat: '1 A.M. Reset',
    tag: 'emotions',
    title: 'Calm night-time mental loops and wake with clarity',
    desc: 'Break the midnight ruminating loop and transition effortlessly into restorative rest.',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80',
    color: '#EAB308',
    bg: 'rgba(234, 179, 8, 0.16)',
    border: 'rgba(234, 179, 8, 0.4)'
  },
  {
    cat: 'Energy & Reiki',
    tag: 'mind',
    title: 'The grounding frequency: somatic calm for conscious leaders',
    desc: 'Harness breath alignment and Narayan Reiki principles to stabilize your energy field.',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
    color: '#0D9488',
    bg: 'rgba(13, 148, 136, 0.16)',
    border: 'rgba(13, 148, 136, 0.4)'
  }
]

const filteredArticles = computed(() => {
  if (activeFilter.value === 'all') return articles
  return articles.filter(a => a.tag === activeFilter.value)
})

const onImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/logo.png'
  }
}

const onAvatarError = (e: Event) => {
  const target = e.target as HTMLImageElement
  if (target) {
    target.src = '/logo.png'
  }
}

useHead({
  title: 'Journal & Insights Library · The Narayan Presence',
  meta: [
    { name: 'description', content: 'Explore 12 practical guides on self-awareness, emotional agility, boundaries, mindfulness, and conscious coaching business by Ranu Patel.' },
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
        'itemListElement': articles.map((art, index) => ({
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
  color: #171848;
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
