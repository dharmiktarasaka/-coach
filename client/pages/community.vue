<template>
  <div class="narayan-subpage community-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Connect / Community</p>
        <p class="eyebrow">Presence Circle</p>
        <h1 style="margin-top:22px">A place to <em>keep going</em> together.</h1>
        <p class="lead hero-in">
          Presence Circle is the community and ongoing space for participants who finish a programme and want to maintain their practice with others.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Connect & Learn', to: '/community' },
        { label: 'Presence Circle' }
      ]"
      :prev="{ label: '1-to-1 Coaching', to: '/coaching' }"
      :next="{ label: 'Books & Digital Products', to: '/products' }"
    />

    <section class="sec">
      <div class="wrap">
        <p class="eyebrow">Circle Ecosystem</p>
        <h2 class="h2">What membership <em>includes</em></h2>
        <div class="cards" style="margin-top:36px">
          <div class="card theme-card">
            <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Monthly Practice</span>
            <h3 class="theme-card-title">Live Renewal Sessions</h3>
            <p class="theme-card-text">A recurring live session to review, recalibrate, and renew your daily practice routine.</p>
          </div>
          <div class="card theme-card">
            <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Member Area</span>
            <h3 class="theme-card-title">Permanent Resource Portal</h3>
            <p class="theme-card-text">All lessons, worksheets, audio toolkits, and habit trackers remain in your private portal.</p>
          </div>
          <div class="card theme-card">
            <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Clear Boundaries</span>
            <h3 class="theme-card-title">Community Guidelines</h3>
            <p class="theme-card-text">Strict community rules on privacy, mutual respect, and the limits of peer encouragement.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Member Portal Login Card -->
    <section class="sec alt">
      <div class="wrap flex items-center justify-between flex-wrap gap-6 portal-banner p-8 sm:p-12 rounded-3xl border">
        <div>
          <p class="eyebrow">Already enrolled?</p>
          <h2 class="portal-heading" style="font-size:clamp(26px,3.5vw,40px);margin-top:12px">Access your member portal</h2>
          <p class="portal-desc" style="margin-top:8px">Log in to view your active programmes, toolkits, and scheduled sessions.</p>
        </div>
        <div>
          <a class="btn portal-btn" href="https://r6e8zx.flexi-funnels.com/membership/nry1m94r/login" target="_blank" rel="noopener">
            Student / Member Login &rarr;
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Community & Presence Circle — Narayan Presence',
  meta: [{ name: 'description', content: 'Presence Circle: ongoing support, monthly practice sessions, and peer accountability.' }],
  link: [{ rel: 'stylesheet', href: '/style.css' }]
})
</script>

<style scoped>
.narayan-subpage {
  font-family: 'DM Sans', -apple-system, sans-serif;
  color: var(--body);
}
.narayan-subpage h1, .narayan-subpage h2, .narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}

/* Theme-Aware Cards */
.theme-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 28px;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
:root[data-theme="dark"] .theme-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
}
:root[data-theme="light"] .theme-card {
  background: #ffffff;
  border-color: #EAE2D4;
  box-shadow: 0 10px 30px -10px rgba(23, 27, 72, 0.05);
}

.theme-card-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 22px;
  margin-top: 8px;
  color: var(--fg);
}
:root[data-theme="dark"] .theme-card-title {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .theme-card-title {
  color: #171848 !important;
}

.theme-card-text {
  margin-top: 8px;
  line-height: 1.6;
  color: var(--body);
}
:root[data-theme="dark"] .theme-card-text {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .theme-card-text {
  color: #4A4B68 !important;
}

/* Member Portal Banner */
.portal-banner {
  background: var(--card);
  border-color: var(--line);
  box-shadow: 0 20px 45px -20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .portal-banner {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.35);
  box-shadow: 0 25px 50px -20px rgba(0, 0, 0, 0.6);
}
:root[data-theme="light"] .portal-banner {
  background: #ffffff;
  border-color: #EAE2D4;
  box-shadow: 0 20px 45px -20px rgba(23, 27, 72, 0.08);
}

.portal-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 300;
  line-height: 1.15;
  color: var(--fg);
}
:root[data-theme="dark"] .portal-heading {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .portal-heading {
  color: #171848 !important;
}

.portal-desc {
  color: var(--body);
}
:root[data-theme="dark"] .portal-desc {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .portal-desc {
  color: #4A4B68 !important;
}

.portal-btn {
  font-weight: 700;
  border-radius: 999px;
  padding: 14px 28px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.25s ease;
}
:root[data-theme="dark"] .portal-btn {
  background: #D9AA55;
  color: #0f1233;
  border: 1.5px solid #F8D78B;
}
:root[data-theme="dark"] .portal-btn:hover {
  background: #f0c36d;
  box-shadow: 0 12px 30px -8px rgba(217, 170, 85, 0.5);
  transform: translateY(-2px);
}
:root[data-theme="light"] .portal-btn {
  background: #171844;
  color: #F8D78B;
  border: 1.5px solid #171844;
}
:root[data-theme="light"] .portal-btn:hover {
  background: #242658;
  box-shadow: 0 12px 30px -8px rgba(23, 24, 68, 0.35);
  transform: translateY(-2px);
}
</style>
