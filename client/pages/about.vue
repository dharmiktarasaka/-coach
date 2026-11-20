<template>
  <div class="narayan-subpage about-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / About</p>
        <p class="eyebrow">About The Narayan Presence</p>
        <h1 style="margin-top:22px">Clarity begins with <em>awareness.</em></h1>
        <p class="lead hero-in">
          Clarity is not the absence of problems. It is the ability to see your situation more clearly. Awareness creates space between what happens and how you respond.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'About', to: '/about' },
        { label: 'About Narayan Presence' }
      ]"
      :next="{ label: 'Founder Profile', to: '/founder' }"
    />

    <!-- Our Approach -->
    <section class="sec">
      <div class="wrap split">
        <div>
          <p class="eyebrow">Our approach</p>
          <h2 class="h2">Reflection that ends in <em>an action.</em></h2>
        </div>
        <div>
          <p class="lead" style="margin-top:0">
            The Narayan Presence connects reflection with practical action. We run programmes for people who want more clarity in their own lives, and for coaches and experts who want to turn what they know into a structured business.
          </p>
          <p style="margin-top:20px;max-width:640px;color:var(--muted)">
            We do not promise instant transformation. We give you a method, a place to practise it and people to practise with.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Principles -->
    <section class="sec alt">
      <div class="wrap">
        <p class="eyebrow">Principles</p>
        <h2 class="h2">What we <em>hold to</em></h2>
        <div class="cards">
          <div class="card theme-about-card">
            <h3 class="theme-about-title">Awareness before action</h3>
            <p class="theme-about-desc">Seeing a situation clearly comes first. Most bad decisions are made while the picture is blurred.</p>
          </div>
          <div class="card theme-about-card">
            <h3 class="theme-about-title">Practice over inspiration</h3>
            <p class="theme-about-desc">A good idea helps for a day. A worksheet, a routine and a live session help for a month.</p>
          </div>
          <div class="card theme-about-card">
            <h3 class="theme-about-title">Honest claims</h3>
            <p class="theme-about-desc">We say what a programme covers and what it cannot do. Coaching and education, not medical therapy.</p>
          </div>
          <div class="card theme-about-card">
            <h3 class="theme-about-title">One discipline, two audiences</h3>
            <p class="theme-about-desc">Individuals and coaches both need to see clearly before they act.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Pathways -->
    <section class="sec">
      <div class="wrap">
        <p class="eyebrow">Two pathways</p>
        <h2 class="h2">Built for individuals <em>and practitioners.</em></h2>
        <div class="doors" style="margin-top:36px">
          <NuxtLink class="door d1" to="/#academy">
            <span class="no">01</span>
            <h3>Presence Academy</h3>
            <p>Self-awareness, emotional patterns, relationships, parenting and daily practice, for individuals and working professionals.</p>
            <span class="go">Explore Academy <span>→</span></span>
          </NuxtLink>
          <NuxtLink class="door d2" to="/#business">
            <span class="no">02</span>
            <h3>Presence Business</h3>
            <p>Niche, offer, course, client acquisition and automation, for coaches, consultants and trainers who want to build properly.</p>
            <span class="go">Explore Business <span>→</span></span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Founder Spotlight Section -->
    <section class="sec">
      <div class="wrap fgrid" style="align-items: center">
        <div class="portrait">
          <picture>
            <source srcset="/ranu.webp" type="image/webp" />
            <img
              src="/ranu.jpg"
              alt="Ranu Patel, Co-Founder of The Narayan Presence"
              width="500"
              height="500"
              loading="lazy"
            />
          </picture>
          <div class="pbadge"><b>16+</b><span>years in IT and digital strategy</span></div>
        </div>
        <div>
          <p class="eyebrow">The Leadership</p>
          <h2 class="h2">Grounding clarity in <em>real systems.</em></h2>
          <p class="lead" style="margin-top: 14px">
            Co-founded by <strong>Ranu Patel</strong>, The Narayan Presence brings together 16+ years of systems architecture, digital consulting, and mindfulness practices into actionable, step-by-step methodologies.
          </p>
          <p style="margin-top: 16px; color: #4A4B68; line-height: 1.6">
            Ranu's background bridging technology leadership with NLP, contemplative inquiry, and Narayan Reiki offers an authentic space where inner awareness transforms directly into practical execution.
          </p>
          <div class="btns" style="margin-top: 28px">
            <NuxtLink class="btn btn-gold" to="/founder">View Founder Profile <span>→</span></NuxtLink>
            <NuxtLink class="btn btn-line" to="/methodology">Our Methodology</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Experience these frameworks <em>in action.</em></h2>
        <p class="lead">Explore our complete range of Academy and Business programmes.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/courses">Explore Programmes <span>→</span></NuxtLink>
          <NuxtLink class="btn btn-line" style="color:#F8F5EF" to="/founder">Founder Profile</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About The Narayan Presence · Sarva Kalyan Global',
  meta: [
    { name: 'description', content: 'Learn about The Narayan Presence and Sarva Kalyan Global, founded by Ranu Patel in Ahmedabad. Discover our mission for conscious living and structured life transformation.' },
    { property: 'og:title', content: 'About The Narayan Presence | Sarva Kalyan Global' },
    { property: 'og:description', content: 'Connecting inner reflection with practical, disciplined action through Presence Academy and Presence Business.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' },
    { property: 'og:type', content: 'website' }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'About The Narayan Presence',
        'description': 'The mission, vision, and operational philosophy of The Narayan Presence under Sarva Kalyan Global.',
        'mainEntity': {
          '@type': 'EducationalOrganization',
          'name': 'The Narayan Presence',
          'founder': {
            '@type': 'Person',
            'name': 'Ranu Patel'
          },
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Ahmedabad',
            'addressRegion': 'Gujarat',
            'addressCountry': 'IN'
          }
        }
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

.theme-about-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px;
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .theme-about-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
}
:root[data-theme="light"] .theme-about-card {
  background: #ffffff;
  border-color: #EAE2D4;
}

.theme-about-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 22px;
  color: var(--fg);
}
:root[data-theme="dark"] .theme-about-title {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .theme-about-title {
  color: #171848 !important;
}

.theme-about-desc {
  margin-top: 10px;
  line-height: 1.6;
  color: var(--body);
}
:root[data-theme="dark"] .theme-about-desc {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .theme-about-desc {
  color: #4A4B68 !important;
}

@media (max-width: 900px) {
  .fgrid {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
  }
  .portrait {
    margin: 0 auto 36px auto !important;
  }
}
@media (max-width: 480px) {
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
