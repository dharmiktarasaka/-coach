<template>
  <div class="narayan-subpage testimonials-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Insights / Testimonials</p>
        <p class="eyebrow">Participant Feedback</p>
        <h1 style="margin-top:22px">What those who walked this path <em>say.</em></h1>
        <p class="lead hero-in">
          Real reviews and reactions from session participants and readers of Ranu Patel's earlier book, The Overthinking Cure.
        </p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Insights & Stories', to: '/resources' },
        { label: 'Testimonials' }
      ]"
      :prev="{ label: 'Journal & Resources', to: '/resources' }"
      :next="{ label: 'FAQs', to: '/faqs' }"
    />

    <section class="sec">
      <div class="wrap">
        <div class="cards">
          <div v-for="(rev, idx) in reviews" :key="idx" class="card rv testimonial-card">
            <span class="stars" style="color:#D9AA55">★★★★★</span>
            <p class="testimonial-quote">“{{ rev.quote }}”</p>
            <span class="meta testimonial-meta">
              <b class="testimonial-name">{{ rev.name }}</b>
              <span class="testimonial-source">{{ rev.source }}</span>
            </span>
          </div>
        </div>

        <p class="small" style="margin-top:36px;color:var(--muted);max-width:760px">
          These are real Google reviews about Ranu’s sessions and her earlier book <i>The Overthinking Cure</i>, shown as excerpts. Experiences vary by individual; no specific medical or financial result is guaranteed.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const reviews = [
  { name: 'Dhruvil Patel', source: 'Google review', quote: 'I was dealing with constant overthinking and mental stress, and the session helped me slow down and understand…' },
  { name: 'Masum Rajput', source: 'Google review', quote: 'Reading The Overthinking Cure after learning from Ranu Ma’am helped me look at my thoughts differently.' },
  { name: 'Sangeeta Pandey', source: 'Google review', quote: 'I was struggling with overthinking, anxiety, stress, and financial challenges for a long time.' },
  { name: 'Geetanshi Bharti, Delhi', source: 'Google review', quote: 'I was going through a phase of confusion and constant decision-making stress in Delhi…' },
  { name: 'Richa Sharma', source: 'Google review', quote: 'Ranu Ma’am is warm, caring, and supportive.' },
  { name: 'Robert Walker', source: 'Google review', quote: 'The session was peaceful, insightful, and easy to follow.' }
]

useHead({
  title: 'Testimonials & Reviews — Narayan Presence',
  meta: [{ name: 'description', content: 'Real feedback and Google reviews from participants and readers with Ranu Patel.' }],
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

.testimonial-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px;
  transition: all 0.3s ease;
}
:root[data-theme="dark"] .testimonial-card {
  background: #141845;
  border-color: rgba(217, 170, 85, 0.25);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.4);
}
:root[data-theme="light"] .testimonial-card {
  background: #ffffff;
  border-color: #EAE2D4;
}

.testimonial-quote {
  margin-top: 14px;
  line-height: 1.6;
  font-size: 15px;
  color: var(--body);
}
:root[data-theme="dark"] .testimonial-quote {
  color: #d6d6ea !important;
}
:root[data-theme="light"] .testimonial-quote {
  color: #352D47 !important;
}

.testimonial-meta {
  margin-top: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  border-top: 1px solid var(--line);
  padding-top: 12px;
}

.testimonial-name {
  color: var(--fg);
}
:root[data-theme="dark"] .testimonial-name {
  color: #F8D78B !important;
}
:root[data-theme="light"] .testimonial-name {
  color: #171848 !important;
}

.testimonial-source {
  font-size: 12px;
  color: var(--muted);
}
:root[data-theme="dark"] .testimonial-source {
  color: #c4c4e2 !important;
}
:root[data-theme="light"] .testimonial-source {
  color: #8C6D57 !important;
}
</style>