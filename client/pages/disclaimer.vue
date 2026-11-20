<template>
  <div class="narayan-subpage disclaimer-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Legal / Disclaimer &amp; Safety</p>
        <p class="eyebrow">Trust &amp; Compliance</p>
        <h1 style="margin-top:22px">Educational <em>Disclaimer</em></h1>
        <p class="lead hero-in">Understanding the scope, purpose, and professional boundaries of our work.</p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Legal & Safety', to: '/privacy-policy' },
        { label: 'Disclaimer & Safety' }
      ]"
      :prev="{ label: 'Refund Policy', to: '/refund-policy' }"
      :next="{ label: 'Home', to: '/' }"
    />

    <section class="sec policy-section">
      <div class="wrap" style="max-width:880px">
        <div class="space-y-6">
          <div class="policy-card p-6 shadow-sm">
            <h2 class="text-xl font-bold policy-heading mb-2">Scope of Educational Engagement</h2>
            <p class="text-sm policy-text leading-relaxed">
              This policy defines our standard commitments, healthcare scope, and professional boundaries. Updated in accordance with digital education best practices.
            </p>
          </div>

          <div class="space-y-4">
            <div class="policy-card p-5">
              <strong class="policy-heading text-base block mb-1">Educational &amp; Coaching Scope</strong>
              <p class="text-sm policy-text leading-relaxed">All programmes, publications, workshops, and coaching interactions are educational and contemplative in nature.</p>
            </div>

            <div class="policy-card p-5">
              <strong class="policy-heading text-base block mb-1">No Medical or Clinical Advice</strong>
              <p class="text-sm policy-text leading-relaxed">The Narayan Presence does not diagnose, treat, prevent, or cure psychological, psychiatric, or physical medical conditions. Our work does not replace therapy or clinical consultation.</p>
            </div>

            <div class="policy-card p-5">
              <strong class="policy-heading text-base block mb-1">No Guaranteed Results</strong>
              <p class="text-sm policy-text leading-relaxed">We provide structured frameworks and methodologies. Measurable outcomes depend entirely on the participant's application, context, and personal agency.</p>
            </div>

            <div class="policy-card p-5 border-[#D9AA55]/40 bg-white/[0.03]">
              <strong class="text-[#D9AA55] text-base block mb-1">Crisis Support</strong>
              <p class="text-sm policy-text leading-relaxed">If you are experiencing severe psychological distress, depression, or an acute mental health emergency, please immediately contact your physician, psychiatrist, or local mental health helpline.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Disclaimer & Safety — The Narayan Presence',
  meta: [{ name: 'description', content: 'Educational Disclaimer & Safety Guidelines' }],
  link: [{ rel: 'stylesheet', href: '/style.css' }]
})
</script>

<style scoped>
.policy-section {
  color: var(--body);
}

.policy-heading {
  color: var(--fg);
  font-family: var(--serif);
}

.policy-text {
  color: var(--body);
}

.policy-card {
  background: var(--card);
  border: 1px solid var(--line);
  color: var(--body);
  border-radius: 20px;
}
</style>
