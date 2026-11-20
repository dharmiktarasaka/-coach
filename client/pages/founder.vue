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
  </div>
</template>

<script setup lang="ts">
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

/* Enhanced responsiveness & resizing */
@media (max-width: 900px) {
  .fgrid {
    grid-template-columns: 1fr !important;
    gap: 36px !important;
    text-align: left;
  }
  .portrait {
    margin: 0 auto 36px auto !important;
  }
}

@media (max-width: 640px) {
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
