<template>
  <div class="narayan-subpage refund-page">
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Legal / Refund Policy</p>
        <p class="eyebrow">Trust &amp; Compliance</p>
        <h1 style="margin-top:22px">Refund <em>Policy</em></h1>
        <p class="lead hero-in">Clear guidelines regarding enrolment fees, transfers, and make-up sessions.</p>
      </div>
    </section>

    <UiPageBreadcrumb
      :items="[
        { label: 'Legal & Safety', to: '/privacy-policy' },
        { label: 'Refund Policy' }
      ]"
      :prev="{ label: 'Terms', to: '/terms' }"
      :next="{ label: 'Disclaimer', to: '/disclaimer' }"
    />

    <section class="sec policy-section">
      <div class="wrap" style="max-width:880px">
        <div class="space-y-6">
          <div class="policy-card p-6 shadow-sm">
            <h2 class="text-xl font-bold policy-heading mb-2">Our Standard Intake Commitments</h2>
            <p class="text-sm policy-text leading-relaxed">
              This policy defines our standard fee terms and session guarantee procedures. Updated in accordance with digital education practices.
            </p>
          </div>

          <div class="space-y-4">
            <div class="policy-card p-5">
              <strong class="policy-heading text-base block mb-1">Digital Course &amp; Intake Policy</strong>
              <p class="text-sm policy-text leading-relaxed">As digital toolkits, recordings, and intellectual frameworks are accessible immediately upon registration, enrolment payments are non-refundable.</p>
            </div>

            <div class="policy-card p-5 border-[#D9AA55]/40 bg-white/[0.03]">
              <strong class="text-[#D9AA55] text-base block mb-1">Live Cohort Make-Up Guarantee</strong>
              <p class="text-sm policy-text leading-relaxed">If you miss a scheduled live session (such as in The 1 AM Reset Blueprint), you are provided one free make-up session in a future cohort date.</p>
            </div>

            <div class="policy-card p-5">
              <strong class="policy-heading text-base block mb-1">Cancellations Prior to Start</strong>
              <p class="text-sm policy-text leading-relaxed">Written requests received 7+ days before an intensive commences may be transferred to a future cohort date at our discretion.</p>
            </div>

            <div class="policy-card p-5">
              <strong class="policy-heading text-base block mb-1">1-to-1 Mentorship Rescheduling</strong>
              <p class="text-sm policy-text leading-relaxed">Private sessions must be rescheduled with at least 24 hours advance notice to accommodate calendar logistics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Refund Policy — The Narayan Presence',
  meta: [{ name: 'description', content: 'Enrolment Refund & Cancellation Policy' }],
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
