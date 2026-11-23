<template>
  <div class="narayan-subpage founder-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/about">About</NuxtLink> / Founder Profile</p>
        <p class="eyebrow">Founder Profile · Ranu Patel</p>
        <h1 style="margin-top:22px">Where a systems mind meets <em>a healer’s stillness.</em></h1>
        <p class="lead hero-in">
          Ranu Patel combines 16+ years of systems architecture and digital growth with mindfulness, NLP, and Narayan Reiki to guide individuals and coaches into grounded clarity.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'About', to: '/about' },
        { label: 'Founder Profile' }
      ]"
      :prev="{ label: 'About Presence', to: '/about' }"
      :next="{ label: 'Our Methodology', to: '/methodology' }"
    />

    <!-- Founder Bio Section -->
    <section class="sec fsec">
      <div class="wrap fgrid">
        <div class="portrait">
          <picture>
            <source srcset="/ranu.webp" type="image/webp" />
            <img
              src="/ranu.jpg"
              alt="Ranu Patel, Co-Founder of The Narayan Presence"
              width="500"
              height="500"
              loading="eager"
            />
          </picture>
          <div class="pbadge"><b>16+</b><span>years in IT and digital strategy</span></div>
        </div>
        <div>
          <p class="eyebrow">Co-Founder</p>
          <h2 class="h2" style="font-size:clamp(34px,4.4vw,54px)">Ranu Patel</h2>
          <p class="rtitle" style="font-size:18px;color:#D9AA55;font-weight:600;margin-top:6px">Life Transformation Coach &amp; Healer</p>
          <p class="small" style="color:#6B6C86;margin-top:4px">Mindfulness · NLP · Narayan Reiki &nbsp;|&nbsp; Ahmedabad, India · Online worldwide</p>

          <div class="fcards" style="margin-top:32px">
            <div class="fc">
              <i>01</i>
              <h4>Structure first</h4>
              <p>16+ years in IT, digital growth, SEO and business systems, with Indian and international clients, taught her to break any tangle into clear steps.</p>
            </div>
            <div class="fc">
              <i>02</i>
              <h4>Awareness next</h4>
              <p>Mindfulness, self-reflection, NLP and Narayan Reiki, used as practices for understanding yourself. Not as promises, and not as a shortcut.</p>
            </div>
            <div class="fc">
              <i>03</i>
              <h4>Coaching, not therapy</h4>
              <p>Her work is guided clarity and daily practice. It is not medical or psychological treatment, and it never promises a cure or a result.</p>
            </div>
          </div>

          <p class="pull" style="margin-top:34px;font-family:'Fraunces',serif;font-size:clamp(20px,2.4vw,28px);color:var(--fg);font-style:italic">
            Organised thinking and inner awareness, together.
          </p>

          <div class="btns" style="margin-top:30px">
            <NuxtLink class="btn btn-gold" to="/coaching">Work 1-to-1 with Ranu <span>→</span></NuxtLink>
            <NuxtLink class="btn btn-line" to="/methodology">See how she teaches</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Verified Google Reviews -->
    <section class="sec alt">
      <div class="wrap">
        <p class="eyebrow">Participant Experiences</p>
        <h2 class="h2">Real feedback from <em>Google Reviews</em></h2>
        <div class="cards" style="margin-top:30px">
          <div class="card rv">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p style="margin-top:12px">“I was dealing with constant overthinking and mental stress, and the session helped me slow down and understand…”</p>
            <span class="meta" style="margin-top:16px;display:flex;gap:8px;align-items:center">
              <b style="color:var(--fg)">Dhruvil Patel</b>
              <span style="color:#8C6D57;font-size:12px">Google review</span>
            </span>
          </div>

          <div class="card rv">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p style="margin-top:12px">“Reading The Overthinking Cure after learning from Ranu Ma’am helped me look at my thoughts differently.”</p>
            <span class="meta" style="margin-top:16px;display:flex;gap:8px;align-items:center">
              <b style="color:var(--fg)">Masum Rajput</b>
              <span style="color:#8C6D57;font-size:12px">Google review</span>
            </span>
          </div>

          <div class="card rv">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p style="margin-top:12px">“I was struggling with overthinking, anxiety, stress, and financial challenges for a long time.”</p>
            <span class="meta" style="margin-top:16px;display:flex;gap:8px;align-items:center">
              <b style="color:var(--fg)">Sangeeta Pandey</b>
              <span style="color:#8C6D57;font-size:12px">Google review</span>
            </span>
          </div>

          <div class="card rv">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p style="margin-top:12px">“I was going through a phase of confusion and constant decision-making stress in Delhi…”</p>
            <span class="meta" style="margin-top:16px;display:flex;gap:8px;align-items:center">
              <b style="color:var(--fg)">Geetanshi Bharti, Delhi</b>
              <span style="color:#8C6D57;font-size:12px">Google review</span>
            </span>
          </div>

          <div class="card rv">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p style="margin-top:12px">“Ranu Ma’am is warm, caring, and supportive.”</p>
            <span class="meta" style="margin-top:16px;display:flex;gap:8px;align-items:center">
              <b style="color:var(--fg)">Richa Sharma</b>
              <span style="color:#8C6D57;font-size:12px">Google review</span>
            </span>
          </div>

          <div class="card rv">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p style="margin-top:12px">“The session was peaceful, insightful, and easy to follow.”</p>
            <span class="meta" style="margin-top:16px;display:flex;gap:8px;align-items:center">
              <b style="color:var(--fg)">Robert Walker</b>
              <span style="color:#8C6D57;font-size:12px">Google review</span>
            </span>
          </div>
        </div>

        <p class="small" style="margin-top:34px;max-width:760px;color:#6B6C86">
          These are real Google reviews about Ranu’s sessions and her earlier book <i>The Overthinking Cure</i>, shown as short excerpts. Experience differs for every person and no result is guaranteed.
        </p>
      </div>
    </section>

    <!-- Moments & Experiences Gallery Section featuring BounceCards (Positioned directly under Testimonials) -->
    <section class="sec gallery-sec">
      <div class="wrap">
        <div class="gallery-head text-center max-w-3xl mx-auto">
          <p class="eyebrow" style="color:#D9AA55">Moments of Presence</p>
          <h2 class="h2" style="font-size:clamp(32px,4vw,50px);margin-top:8px">
            Glimpses into the <em>Journey &amp; Gatherings</em>
          </h2>
          <p class="lead hero-in" style="margin-top:14px;color:var(--muted);font-size:clamp(15px,1.8vw,18px);max-width:680px;margin-left:auto;margin-right:auto">
            Sacred retreats, live mindfulness workshops, meditation circles, and transformational satsangs with Ranu Patel.
          </p>
        </div>

        <!-- Interactive BounceCards Showcase Deck -->
        <div class="bounce-showcase" style="margin-top:38px">
          <!-- Filter Tabs & Interaction Hint -->
          <div class="deck-controls flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div class="deck-tabs flex items-center flex-wrap gap-2">
              <button
                type="button"
                v-for="tab in filterTabs"
                :key="tab.id"
                :class="['d-tab cursor-pointer', activeFilter === tab.id ? 'active' : '']"
                @click="activeFilter = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
            <div class="deck-hint text-xs font-medium flex items-center gap-1.5" style="color:#D9AA55">
              <span class="sparkle text-sm">✦</span>
              <span>Hover cards to spread · Click to enlarge</span>
            </div>
          </div>

          <!-- Bouncy Interactive Fan Cards Container -->
          <div class="bounce-stage flex items-center justify-center py-6 overflow-hidden rounded-3xl border border-[#D9AA55]/25" :class="isDark ? 'bg-[#141845]/50' : 'bg-white/60 shadow-sm'">
            <UiBounceCards
              :images="bounceDeck"
              :container-width="580"
              :container-height="350"
              :card-size="210"
              :spread="82"
              :rotation="12"
              :arc="12"
              :push-distance="150"
              :hover-scale="1.08"
              :bounciness="0.65"
              :border-width="4"
              border-color="#D9AA55"
              :radius="20"
              :shadow="true"
              @card-click="onBounceCardClick"
            />
          </div>
        </div>

        <!-- Full 17-Photo Archive Grid -->
        <div class="gallery-full-archive" style="margin-top:64px">
          <div class="archive-header flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-[#D9AA55]/20">
            <div>
              <p class="text-xs uppercase tracking-widest font-bold" style="color:#D9AA55">All Photographs</p>
              <h3 style="font-size:24px;color:var(--fg);font-family:'Fraunces',Georgia,serif;margin-top:4px">
                Full Moments Collection <span style="font-size:15px;color:var(--muted);font-family:'DM Sans',sans-serif">({{ galleryImages.length }} moments)</span>
              </h3>
            </div>
            <span class="text-xs font-semibold" style="color:var(--muted)">Tap or click any image to view in high resolution</span>
          </div>

          <div class="gallery-grid" style="margin-top:24px">
            <div
              v-for="(img, idx) in galleryImages"
              :key="idx"
              class="gallery-tile group cursor-pointer"
              role="button"
              :tabindex="0"
              :aria-label="img.title"
              @click="openLightbox(idx)"
              @keydown.enter="openLightbox(idx)"
            >
              <div class="tile-img-box">
                <img
                  :src="img.src"
                  :alt="img.title"
                  loading="lazy"
                  class="tile-img"
                />
                <div class="tile-overlay">
                  <div class="tile-badge">
                    <svg class="w-4 h-4 text-[#0f1233]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                  <div class="tile-info">
                    <div class="tile-title">{{ img.title }}</div>
                    <div class="tile-cat">{{ img.categoryLabel }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Begin with <em>guided clarity.</em></h2>
        <p class="lead">Book a 1-to-1 session or explore our structured methodology.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/coaching">Explore 1-to-1 Coaching <span>→</span></NuxtLink>
          <NuxtLink class="btn btn-line" style="color:#F8F5EF" to="/methodology">Our Methodology</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Fullscreen High-Resolution Lightbox Modal -->
    <ClientOnly>
      <Teleport to="body">
        <Transition name="fade">
          <div
            v-if="lightboxIndex !== null"
            class="lightbox-overlay"
            role="dialog"
            aria-modal="true"
            @click="closeLightbox"
          >
            <div class="lightbox-backdrop"></div>

            <div class="lightbox-dialog" @click.stop>
              <!-- Close Button -->
              <button
                type="button"
                class="lightbox-btn lightbox-close"
                aria-label="Close photo"
                @click="closeLightbox"
              >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Previous Button -->
              <button
                type="button"
                class="lightbox-btn lightbox-prev"
                aria-label="Previous photo"
                @click.stop="prevLightbox"
              >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <!-- Image & Meta Container -->
              <div class="lightbox-main">
                <img
                  :src="galleryImages[lightboxIndex].src"
                  :alt="galleryImages[lightboxIndex].title"
                  class="lightbox-img"
                />
                <div class="lightbox-meta">
                  <div class="lightbox-title">{{ galleryImages[lightboxIndex].title }}</div>
                  <div class="lightbox-sub">
                    <span class="lightbox-badge">{{ galleryImages[lightboxIndex].categoryLabel }}</span>
                    <span class="lightbox-counter">{{ lightboxIndex + 1 }} of {{ galleryImages.length }}</span>
                  </div>
                </div>
              </div>

              <!-- Next Button -->
              <button
                type="button"
                class="lightbox-btn lightbox-next"
                aria-label="Next photo"
                @click.stop="nextLightbox"
              >
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()

export interface GalleryPhoto {
  src: string
  title: string
  category: 'retreats' | 'workshops' | 'featured'
  categoryLabel: string
}

// Complete archive of 17 photographs from narayan images
const galleryImages: GalleryPhoto[] = [
  { src: '/images/founder/gallery-01.jpeg', title: 'Presence & Grounding Workshop', category: 'workshops', categoryLabel: 'Workshop' },
  { src: '/images/founder/gallery-02.jpeg', title: 'Guided Contemplation Circle', category: 'retreats', categoryLabel: 'Sacred Circle' },
  { src: '/images/founder/gallery-03.jpeg', title: 'Transformative Satsang Session', category: 'workshops', categoryLabel: 'Satsang' },
  { src: '/images/founder/gallery-04.jpeg', title: 'Inner Awakening Retreat', category: 'retreats', categoryLabel: 'Retreat' },
  { src: '/images/founder/gallery-05.jpeg', title: 'Mindfulness & Sound Stillness', category: 'featured', categoryLabel: 'Mindfulness' },
  { src: '/images/founder/gallery-06.jpeg', title: 'Collective Meditation Hall', category: 'workshops', categoryLabel: 'Meditation' },
  { src: '/images/founder/gallery-07.jpeg', title: 'Sacred Reflection & Dialogue', category: 'retreats', categoryLabel: 'Reflection' },
  { src: '/images/founder/gallery-08.jpeg', title: 'Quiet Alignment Moment', category: 'featured', categoryLabel: 'Alignment' },
  { src: '/images/founder/gallery-09.jpeg', title: 'Community Presence Gathering', category: 'workshops', categoryLabel: 'Community' },
  { src: '/images/founder/gallery-10.jpeg', title: 'Somatic Healing Practice', category: 'retreats', categoryLabel: 'Healing' },
  { src: '/images/founder/gallery-11.jpeg', title: 'The Narayan Path Discourses', category: 'featured', categoryLabel: 'Discourse' },
  { src: '/images/founder/gallery-12.jpeg', title: 'Heart-Centered Dialogue', category: 'workshops', categoryLabel: 'Workshop' },
  { src: '/images/founder/gallery-13.jpeg', title: 'Sacred Ritual & Lamp Offering', category: 'featured', categoryLabel: 'Sacred Ritual' },
  { src: '/images/founder/gallery-14.jpeg', title: 'Mind-Clearing Group Circle', category: 'workshops', categoryLabel: 'Group Practice' },
  { src: '/images/founder/gallery-15.jpeg', title: 'Serene Spiritual Retreat', category: 'retreats', categoryLabel: 'Retreat' },
  { src: '/images/founder/gallery-16.jpeg', title: 'Grounded Wisdom Exchange', category: 'featured', categoryLabel: 'Wisdom Circle' },
  { src: '/images/founder/gallery-17.jpeg', title: 'Inner Stillness & Breath', category: 'retreats', categoryLabel: 'Pranayama & Stillness' }
]

type FilterId = 'all' | 'featured' | 'workshops' | 'retreats'

const activeFilter = ref<FilterId>('all')

const filterTabs = [
  { id: 'all' as FilterId, label: 'All Highlights' },
  { id: 'featured' as FilterId, label: 'Signature Moments' },
  { id: 'workshops' as FilterId, label: 'Workshops & Circles' },
  { id: 'retreats' as FilterId, label: 'Sacred Retreats' }
]

// Curated 5-card fan deck tailored for the BounceCards physics animation
const bounceDeck = computed(() => {
  if (activeFilter.value === 'all') {
    return [
      galleryImages[0],
      galleryImages[4],
      galleryImages[12],
      galleryImages[10],
      galleryImages[2]
    ]
  }
  const filtered = galleryImages.filter(img => img.category === activeFilter.value)
  return filtered.slice(0, 5)
})

// Lightbox state
const lightboxIndex = ref<number | null>(null)

const openLightbox = (index: number) => {
  lightboxIndex.value = index
}

const closeLightbox = () => {
  lightboxIndex.value = null
}

const prevLightbox = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value - 1 + galleryImages.length) % galleryImages.length
  }
}

const nextLightbox = () => {
  if (lightboxIndex.value !== null) {
    lightboxIndex.value = (lightboxIndex.value + 1) % galleryImages.length
  }
}

const onBounceCardClick = (cardIndex: number) => {
  const currentCard = bounceDeck.value[cardIndex]
  if (currentCard) {
    const fullIndex = galleryImages.findIndex(img => img.src === currentCard.src)
    if (fullIndex !== -1) {
      openLightbox(fullIndex)
      return
    }
  }
  openLightbox(cardIndex)
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (lightboxIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevLightbox()
  if (e.key === 'ArrowRight') nextLightbox()
}

watch(lightboxIndex, (val) => {
  if (typeof document !== 'undefined') {
    if (val !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }
})

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
    window.removeEventListener('keydown', handleKeyDown)
  }
})

useHead({
  title: 'Ranu Patel · Co-Founder, Life Transformation Coach & Healer',
  meta: [
    { name: 'description', content: 'Meet Ranu Patel, Co-Founder of The Narayan Presence in Ahmedabad. Blending 16+ years in IT and digital strategy with Mindfulness, NLP, and Narayan Reiki.' },
    { property: 'og:title', content: 'Ranu Patel — Life Transformation Coach & Healer | The Narayan Presence' },
    { property: 'og:description', content: 'Explore Ranu Patel\'s journey bridging systems architecture with conscious stillness, NLP, and energy healing.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' },
    { property: 'og:type', content: 'profile' }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Ranu Patel',
        'jobTitle': 'Co-Founder, Life Transformation Coach & Healer',
        'worksFor': {
          '@type': 'EducationalOrganization',
          'name': 'The Narayan Presence',
          'url': 'https://narayanpresence.com'
        },
        'image': 'https://narayanpresence.com/ranu.webp',
        'url': 'https://narayanpresence.com/founder',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Ahmedabad',
          'addressRegion': 'Gujarat',
          'addressCountry': 'IN'
        },
        'knowsAbout': [
          'Life Transformation Coaching',
          'Mindfulness and Meditation',
          'Neuro-Linguistic Programming (NLP)',
          'Narayan Reiki Energy Healing',
          'Nervous System Somatic Regulation',
          '1 AM Reset Blueprint'
        ],
        'sameAs': [
          'https://instagram.com/narayanpresence',
          'https://linkedin.com/company/narayanpresence'
        ]
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

/* Gallery Section Styling */
.gallery-sec {
  position: relative;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.deck-tabs {
  background: rgba(217, 170, 85, 0.08);
  border: 1px solid rgba(217, 170, 85, 0.2);
  padding: 4px;
  border-radius: 9999px;
}

.d-tab {
  padding: 7px 18px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 9999px;
  color: var(--fg);
  background: transparent;
  border: none;
  transition: all 0.25s ease;
}

.d-tab:hover {
  color: #D9AA55;
}

.d-tab.active {
  background: #D9AA55;
  color: #0f1233;
  box-shadow: 0 2px 10px rgba(217, 170, 85, 0.35);
}

.bounce-stage {
  min-height: 400px;
  backdrop-filter: blur(8px);
}

/* Full Gallery Grid */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.gallery-tile {
  outline: none;
}

.tile-img-box {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(217, 170, 85, 0.25);
  background: rgba(20, 24, 69, 0.3);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover .tile-img-box,
.gallery-tile:focus-visible .tile-img-box {
  transform: translateY(-4px) scale(1.02);
  border-color: #D9AA55;
  box-shadow: 0 16px 32px -8px rgba(0, 0, 0, 0.35), 0 0 0 1px #D9AA55;
}

.tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover .tile-img {
  transform: scale(1.06);
}

.tile-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 18, 51, 0.92) 0%, rgba(15, 18, 51, 0.3) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.group:hover .tile-overlay {
  opacity: 1;
}

.tile-badge {
  align-self: flex-end;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #D9AA55;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-6px);
  opacity: 0;
  transition: all 0.3s ease;
}

.group:hover .tile-badge {
  transform: translateY(0);
  opacity: 1;
}

.tile-info {
  transform: translateY(4px);
  transition: transform 0.3s ease;
}

.group:hover .tile-info {
  transform: translateY(0);
}

.tile-title {
  color: #F8F5EF;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  font-family: 'DM Sans', sans-serif;
}

.tile-cat {
  color: #D9AA55;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 3px;
}

/* Lightbox Modal */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.lightbox-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(10, 13, 36, 0.94);
  backdrop-filter: blur(12px);
}

.lightbox-dialog {
  position: relative;
  z-index: 10;
  max-width: 90vw;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.lightbox-main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 86vw;
  max-height: 85vh;
}

.lightbox-img {
  max-width: 100%;
  max-height: 76vh;
  object-fit: contain;
  border-radius: 16px;
  border: 2px solid rgba(217, 170, 85, 0.4);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
}

.lightbox-meta {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 6px 0 6px;
  color: #F8F5EF;
}

.lightbox-title {
  font-size: 16px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
}

.lightbox-sub {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lightbox-badge {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f1233;
  background: #D9AA55;
  padding: 3px 10px;
  border-radius: 9999px;
}

.lightbox-counter {
  font-size: 13px;
  color: rgba(248, 245, 239, 0.7);
}

.lightbox-btn {
  position: absolute;
  background: rgba(20, 24, 69, 0.75);
  border: 1px solid rgba(217, 170, 85, 0.35);
  color: #F8F5EF;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(8px);
}

.lightbox-btn:hover {
  background: #D9AA55;
  color: #0f1233;
  border-color: #D9AA55;
  transform: scale(1.08);
}

.lightbox-close {
  top: -24px;
  right: -24px;
  width: 40px;
  height: 40px;
}

.lightbox-prev {
  left: -64px;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-prev:hover {
  transform: translateY(-50%) scale(1.08);
}

.lightbox-next {
  right: -64px;
  top: 50%;
  transform: translateY(-50%);
}

.lightbox-next:hover {
  transform: translateY(-50%) scale(1.08);
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Enhanced responsiveness & resizing */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
}

@media (max-width: 900px) {
  .fgrid {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
    text-align: left;
  }
  .portrait {
    margin: 0 auto 36px auto !important;
  }
  .lightbox-prev {
    left: 8px;
    bottom: 20px;
    top: auto;
    transform: none;
  }
  .lightbox-next {
    right: 8px;
    bottom: 20px;
    top: auto;
    transform: none;
  }
  .lightbox-close {
    top: 10px;
    right: 10px;
  }
}

@media (max-width: 640px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
  .bounce-stage {
    min-height: 300px;
  }
  .fcards {
    gap: 14px !important;
  }
  .fc {
    padding: 16px 16px 16px 58px !important;
  }
  .fc i {
    left: 14px !important;
    top: 14px !important;
  }
}

@media (max-width: 480px) {
  .fc {
    padding: 14px 14px 14px 50px !important;
  }
  .fc i {
    left: 10px !important;
    top: 12px !important;
    width: 30px !important;
    height: 30px !important;
    font-size: 11px !important;
  }
  .btns {
    flex-direction: column !important;
    width: 100% !important;
  }
  .btns .btn {
    width: 100% !important;
    justify-content: center !important;
    text-align: center !important;
  }
}
</style>
