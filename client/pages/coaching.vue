<template>
  <div class="narayan-subpage coaching-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / <NuxtLink to="/courses">Offerings</NuxtLink> / Coaching</p>
        <p class="eyebrow">1-to-1 Mentorship</p>
        <h1 style="margin-top:22px">A guided space to explore <em>your next step.</em></h1>
        <p class="lead hero-in">
          Coaching can support reflection, clarity and purposeful action. Sessions are collaborative and focused on your goals, context and next steps. Coaching is not a substitute for therapy or medical care.
        </p>
        <div class="btns hero-in" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/contact">Request a conversation <span>→</span></NuxtLink>
        </div>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Offerings', to: '/courses' },
        { label: '1-to-1 Coaching' }
      ]"
      :prev="{ label: 'Workshops & Events', to: '/workshops' }"
      :next="{ label: 'Membership & Circle', to: '/membership' }"
    />

    <!-- Process -->
    <section class="sec">
      <div class="wrap">
        <p class="eyebrow">How it works</p>
        <h2 class="h2">Four steps, <em>no surprises.</em></h2>
        <div class="steps" style="margin-top:36px">
          <div class="step">
            <span class="n">01</span>
            <h3>Request a conversation</h3>
            <p>Tell us what you want to work on through our structured intake note.</p>
          </div>
          <div class="step">
            <span class="n">02</span>
            <h3>We reply</h3>
            <p>We suggest an aligned next step, which may be a specific academy programme instead.</p>
          </div>
          <div class="step">
            <span class="n">03</span>
            <h3>Agree the scope</h3>
            <p>Goals, session cadence, and commitments are confirmed in writing.</p>
          </div>
          <div class="step">
            <span class="n">04</span>
            <h3>Begin</h3>
            <p>Direct collaborative sessions focused on concrete clarity and practical action.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Suitability Box -->
    <section class="sec alt">
      <div class="wrap">
        <div class="two" style="margin-top:0">
          <div class="box suitability-box">
            <h3 class="suitability-title">Coaching may suit you if</h3>
            <ul class="ticks suitability-list" style="margin-top:16px;line-height:1.7">
              <li>You know what you want to work on and want a rigorous thinking partner.</li>
              <li>You prefer dedicated one-to-one attention to a group cohort.</li>
              <li>You are ready to implement and test practices between sessions.</li>
            </ul>
          </div>
          <div class="box suitability-box warning">
            <h3 class="suitability-title">Coaching is not the right tool if</h3>
            <ul class="ticks no suitability-list" style="margin-top:16px;line-height:1.7">
              <li>You need clinical treatment for a psychiatric or medical condition.</li>
              <li>You seek binding legal, investment, or medical advice.</li>
              <li>You want someone else to make your life decisions for you.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="sec dark grain cta">
      <i class="aurora" aria-hidden="true"><b></b><b></b><b></b></i>
      <span class="mandala" aria-hidden="true"></span>
      <div class="wrap">
        <h2>Tell us what you want to <em>work on.</em></h2>
        <p class="lead">A short note is enough to begin.</p>
        <div class="btns" style="margin-top:24px">
          <NuxtLink class="btn btn-gold" to="/contact">Request a conversation <span>→</span></NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: '1-to-1 Clarity Coaching & Mentorship · Ranu Patel',
  meta: [
    { name: 'description', content: 'Private collaborative coaching with Ranu Patel. A confidential space to explore mental clarity, decision-making, and purposeful action.' },
    { property: 'og:title', content: '1-to-1 Clarity Coaching | The Narayan Presence' },
    { property: 'og:description', content: 'Tailored thinking partnership for leaders, executives, and individuals navigating critical transitions.' },
    { property: 'og:image', content: 'https://narayanpresence.com/ranu.webp' }
  ],
  link: [{ rel: 'stylesheet', href: '/style.css' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': '1-to-1 Clarity Coaching',
        'provider': {
          '@type': 'Person',
          'name': 'Ranu Patel',
          'worksFor': {
            '@type': 'EducationalOrganization',
            'name': 'The Narayan Presence'
          }
        },
        'serviceType': 'Life & Clarity Coaching',
        'areaServed': 'Worldwide (Online)',
        'description': 'One-to-one collaborative coaching focused on goals, cognitive pattern recognition, and decisive action.'
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
.narayan-subpage h1, .narayan-subpage h2, .narayan-subpage h3 {
  font-family: 'Fraunces', Georgia, serif;
}

.suitability-box {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 32px;
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .suitability-box {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
}
:root[data-theme="light"] .suitability-box {
  background: #ffffff;
  border-color: #EAE2D4;
}

.suitability-box.warning {
  border-color: rgba(217, 170, 85, 0.4);
}
:root[data-theme="dark"] .suitability-box.warning {
  background: #191c4d;
}
:root[data-theme="light"] .suitability-box.warning {
  background: #fdf8ed;
}

.suitability-title {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 22px;
  color: var(--fg);
}
:root[data-theme="dark"] .suitability-title {
  color: #F8F5EF !important;
}
:root[data-theme="light"] .suitability-title {
  color: #171848 !important;
}

.suitability-list {
  color: var(--body);
}
:root[data-theme="dark"] .suitability-list {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .suitability-list {
  color: #4A4B68 !important;
}
</style>