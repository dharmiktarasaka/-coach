<template>
  <div class="narayan-subpage terms-page">
    <!-- Hero Header with Aurora & Mandala -->
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
        <p class="crumb"><NuxtLink to="/">Home</NuxtLink> / Legal / Terms &amp; Conditions</p>
        <div class="flex items-center flex-wrap gap-2.5 mt-2">
          <span class="px-3 py-1 rounded-full bg-[#D9AA55]/20 text-[#F8D78B] border border-[#D9AA55]/40 text-xs font-bold uppercase tracking-wider">
            Operating Covenant
          </span>
          <span class="text-xs text-[#c4c4e2]">
            Last Updated: July, 2026
          </span>
        </div>
        <h1 style="margin-top:22px">Terms &amp; <em>Conditions</em></h1>
        <p class="lead hero-in max-w-3xl">
          Welcome to The Narayan Presence. By accessing this website, booking sessions, attending workshops, or engaging with our educational content, you agree to these terms.
        </p>
      </div>
    </section>

    <!-- Breadcrumb & Linear Pagination -->
    <UiPageBreadcrumb
      :items="[
        { label: 'Legal & Safety', to: '/privacy-policy' },
        { label: 'Terms & Conditions' }
      ]"
      :prev="{ label: 'Privacy Policy', to: '/privacy-policy' }"
      :next="{ label: 'Refund Policy', to: '/refund-policy' }"
    />

    <!-- Main Content Body -->
    <section class="sec policy-section">
      <div class="wrap" style="max-width:920px">
        <!-- Agreement Notice Card -->
        <div class="policy-card p-6 sm:p-8 shadow-sm mb-12">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 rounded-2xl bg-[#171848] text-[#F8D78B] border border-[#D9AA55]/40 flex items-center justify-center shrink-0 shadow-md">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xl sm:text-2xl policy-heading font-bold">Binding Agreement</h2>
              <p class="text-sm sm:text-base policy-text mt-2.5 leading-relaxed">
                Welcome to <strong class="text-[var(--fg)]">The Narayan Presence</strong>. By accessing or using this website, participating in sessions, workshops, programs, or engaging with our content, you agree to be bound by the following Terms &amp; Conditions.
              </p>
              <p class="text-xs policy-muted mt-2 italic">
                Please read these terms carefully before registering or using any service offered by The Narayan Presence or Sarva Kalyan Global.
              </p>
            </div>
          </div>
        </div>

        <div class="space-y-12">
          <!-- Section 1: Purpose of This Website -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">01</span>
              <h2 class="text-2xl policy-heading font-bold">Purpose of This Website</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              <strong class="text-[var(--fg)]">The Narayan Presence</strong> provides educational, awareness-based, personal growth, and self-reflection content designed to support mental clarity, self-awareness, emotional well-being, mindfulness, conscious living, manifestation practices, NLP-based learning, meditation, and personal development.
            </p>
          </div>

          <!-- Section 2: Nature of Services -->
          <div class="space-y-5">
            <div class="flex items-center gap-3">
              <span class="policy-num">02</span>
              <h2 class="text-2xl policy-heading font-bold">Nature of Services</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              Our educational offerings and contemplative engagements include:
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-2">
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Mental Clarity Coaching</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Self-Awareness Coaching</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Stress Management Support</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">NLP-Based Guidance</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Manifestation Guidance</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Meditation &amp; Mindfulness Practices</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Narayan Reiki Sessions</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Relationship Clarity Sessions</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Workshops and Educational Programs</span>
              </div>
              <div class="policy-card p-4 flex items-center gap-3">
                <span class="text-[#D9AA55] font-bold">✦</span>
                <span class="text-sm font-semibold policy-text">Corporate Wellness Programs</span>
              </div>
            </div>

            <p class="text-xs sm:text-sm policy-muted italic mt-2">
              All services are intended strictly for educational, reflective, and personal development purposes.
            </p>
          </div>

          <!-- Section 3: No Medical, Psychological, Legal, or Financial Advice -->
          <div class="p-6 sm:p-8 rounded-3xl bg-[#171848] text-[#F8F5EF] space-y-4 shadow-xl border border-[#F8D78B]/20">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-full bg-[#D9AA55] text-[#171848] font-serif font-bold text-sm flex items-center justify-center shrink-0">03</span>
              <h2 class="text-xl sm:text-2xl font-serif font-bold text-[#F8D78B]">
                No Medical, Psychological, Legal, or Financial Advice
              </h2>
            </div>
            <div class="space-y-3 text-sm text-[#EAE2D4] leading-relaxed">
              <p>
                <strong>The Narayan Presence does not provide medical, psychological, psychiatric, legal, financial, or therapeutic services.</strong>
              </p>
              <p>
                Information provided through this website, coaching sessions, workshops, content, or communications should <strong>not</strong> be considered a substitute for advice from qualified, licensed professionals.
              </p>
              <p class="text-xs text-[#c4c4e2] pt-2 border-t border-white/10">
                Individuals experiencing medical, psychological, psychiatric, legal, or financial concerns should consult appropriately licensed clinicians, counsel, or advisors.
              </p>
            </div>
          </div>

          <!-- Section 4: Personal Responsibility & No Guarantees -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">04</span>
              <h2 class="text-2xl policy-heading font-bold">Personal Responsibility &amp; Disclaimers</h2>
            </div>
            <div class="policy-card p-6 shadow-sm space-y-3">
              <p class="text-sm sm:text-base policy-text leading-relaxed">
                Participants are <strong class="text-[var(--fg)]">solely responsible</strong> for their own decisions, actions, interpretations, and outcomes resulting from the use of our content, services, workshops, or programs.
              </p>
              <ul class="space-y-2 text-sm policy-text pt-2">
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">•</span>
                  <span>Results may vary from person to person depending on dedication, application, and individual context.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">•</span>
                  <span><strong class="text-[var(--fg)]">No guarantees:</strong> No specific outcome, result, income level, manifestation result, emotional outcome, or personal transformation can be guaranteed.</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Section 5: Workshops, Programs & Sessions -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">05</span>
              <h2 class="text-2xl policy-heading font-bold">Workshops, Programs &amp; Sessions</h2>
            </div>
            <div class="policy-card p-6 shadow-sm space-y-3">
              <p class="text-sm policy-text leading-relaxed">
                Participation in workshops, coaching sessions, meditation sessions, Reiki sessions, or educational programs is completely <strong class="text-[var(--fg)]">voluntary</strong>.
              </p>
              <p class="text-sm policy-text leading-relaxed">
                <strong class="text-[var(--fg)]">The Narayan Presence</strong> reserves the right to modify, reschedule, postpone, or discontinue any service, event, or program when operational necessity or scheduling conflicts arise.
              </p>
            </div>
          </div>

          <!-- Section 6: Payments, Pricing & Refund Policy -->
          <div class="space-y-5 p-6 sm:p-8 rounded-3xl policy-highlight">
            <div class="flex items-center gap-3">
              <span class="policy-num">06</span>
              <h2 class="text-2xl policy-heading font-bold">Payments, Pricing &amp; Refund Policy</h2>
            </div>
            <p class="text-sm sm:text-base policy-text leading-relaxed">
              Where a course, program, or session has a fee, the applicable price will be clearly stated at the time of registration or purchase. All payments must be made in full through the authorized payment methods provided on the website unless otherwise agreed in writing.
            </p>

            <div class="policy-card p-5 space-y-3">
              <div class="text-sm font-bold policy-heading">Non-Refundable Fee Policy</div>
              <p class="text-sm policy-text leading-relaxed">
                <strong class="text-[var(--fg)]">All fees paid to The Narayan Presence are non-refundable</strong>, except where required by applicable law. This strict policy applies to, without limitation:
              </p>
              <ul class="space-y-2 text-xs sm:text-sm policy-text pl-2">
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">✕</span>
                  <span>Change of mind after purchase or registration</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">✕</span>
                  <span>Failure to attend a live session or complete a program after registering</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-[#D9AA55] font-bold">✕</span>
                  <span>Partial attendance or early withdrawal from a workshop, program, or course</span>
                </li>
              </ul>
            </div>

            <div class="policy-note p-4 rounded-xl text-xs sm:text-sm leading-relaxed">
              <strong class="text-[var(--fg)]">Organizer Postponement or Cancellation:</strong> If a paid session, workshop, or program is cancelled, postponed, or materially not delivered by The Narayan Presence itself, participants will be offered either a <strong class="text-[var(--fg)]">rescheduled session</strong> or <strong class="text-[var(--fg)]">credit toward a future program</strong>, at our discretion.
            </div>
          </div>

          <!-- Section 7: Intellectual Property -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">07</span>
              <h2 class="text-2xl policy-heading font-bold">Intellectual Property</h2>
            </div>
            <div class="policy-card p-6 shadow-sm space-y-3">
              <p class="text-sm sm:text-base policy-text leading-relaxed">
                All content on this website, including text, graphics, logos, images, videos, frameworks (such as P.A.U.S.E. and N-A-R-A-Y-A-N), exercises, reflections, workbooks, and educational materials, is the <strong class="text-[var(--fg)]">exclusive intellectual property of The Narayan Presence</strong> unless otherwise stated.
              </p>
              <p class="text-sm font-semibold policy-heading">
                No content may be copied, reproduced, distributed, republished, modified, or used commercially without prior written permission from our executive team.
              </p>
            </div>
          </div>

          <!-- Section 8: Website Use & User Conduct -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">08</span>
              <h2 class="text-2xl policy-heading font-bold">Website Use &amp; Code of Conduct</h2>
            </div>
            <div class="policy-card p-6 shadow-sm space-y-3">
              <p class="text-sm policy-text leading-relaxed">
                You agree to use this website lawfully, ethically, and respectfully. You may not:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div class="policy-note p-3 rounded-xl text-xs flex items-center gap-2">
                  <span class="text-red-400 font-bold">✕</span>
                  <span>Attempt unauthorized access to systems or data</span>
                </div>
                <div class="policy-note p-3 rounded-xl text-xs flex items-center gap-2">
                  <span class="text-red-400 font-bold">✕</span>
                  <span>Distribute harmful software or malicious code</span>
                </div>
                <div class="policy-note p-3 rounded-xl text-xs flex items-center gap-2">
                  <span class="text-red-400 font-bold">✕</span>
                  <span>Misrepresent your identity or affiliation</span>
                </div>
                <div class="policy-note p-3 rounded-xl text-xs flex items-center gap-2">
                  <span class="text-red-400 font-bold">✕</span>
                  <span>Use materials in violation of applicable laws</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 9: Limitation of Liability -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="policy-num">09</span>
              <h2 class="text-2xl policy-heading font-bold">Limitation of Liability</h2>
            </div>
            <div class="policy-card p-6 shadow-sm text-sm policy-text leading-relaxed space-y-2">
              <p>
                <strong class="text-[var(--fg)]">The Narayan Presence</strong>, <strong class="text-[var(--fg)]">Sarva Kalyan Global</strong>, its founder, team members, facilitators, affiliates, and partners shall <strong class="text-[var(--fg)]">not be liable</strong> for any direct, indirect, incidental, consequential, personal, emotional, financial, or business losses arising from:
              </p>
              <ul class="space-y-1.5 pl-3 text-xs sm:text-sm policy-text">
                <li>• The use or inability to use this website</li>
                <li>• Participation in workshops, sessions, or community circles</li>
                <li>• Reliance upon any information, guidance, or reflection provided</li>
              </ul>
            </div>
          </div>

          <!-- Section 10 & 11: External Links & Changes to Terms -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="policy-card p-5 space-y-2">
              <h4 class="font-bold text-sm policy-heading">External Links</h4>
              <p class="text-xs policy-muted leading-relaxed">
                This website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of external web entities.
              </p>
            </div>
            <div class="policy-card p-5 space-y-2">
              <h4 class="font-bold text-sm policy-heading">Changes to Terms</h4>
              <p class="text-xs policy-muted leading-relaxed">
                We reserve the right to update or modify these Terms &amp; Conditions at any time. Continued use of the website constitutes legal acceptance of any revised terms.
              </p>
            </div>
          </div>

          <!-- Section 12: Governing Jurisdiction & Contact Card -->
          <div class="p-8 rounded-3xl bg-[#171848] text-white space-y-6 shadow-xl border border-[#F8D78B]/20">
            <div class="flex items-center justify-between flex-wrap gap-4 border-b border-white/10 pb-6">
              <div>
                <span class="text-xs font-bold uppercase tracking-wider text-[#D9AA55]">Legal Jurisdiction</span>
                <h3 class="text-2xl font-serif font-bold text-white mt-1">Ahmedabad, Gujarat, India</h3>
                <p class="text-sm text-[#c4c4e2]">Governed strictly by the applicable laws of India</p>
              </div>
              <NuxtLink to="/contact" class="btn btn-gold text-xs px-5 py-2.5">
                Contact Us Page &rarr;
              </NuxtLink>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#c4c4e2]">
              <div>
                <span class="text-[#D9AA55] font-bold block mb-1">Entity</span>
                <span>The Narayan Presence</span>
              </div>
              <div>
                <span class="text-[#D9AA55] font-bold block mb-1">Official Website</span>
                <a href="https://narayanpresence.com" target="_blank" rel="noopener" class="underline hover:text-[#F8D78B] transition-colors">
                  https://narayanpresence.com
                </a>
              </div>
              <div>
                <span class="text-[#D9AA55] font-bold block mb-1">Exclusive Courts</span>
                <span>Courts in Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Terms & Conditions — The Narayan Presence',
  meta: [
    {
      name: 'description',
      content: 'Official Terms & Conditions of The Narayan Presence. Outlining service scope, educational nature, non-refundable payment policy, and legal jurisdiction.'
    }
  ],
  link: [
    { rel: 'stylesheet', href: '/style.css' }
  ]
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

.policy-muted {
  color: var(--muted);
}

.policy-card {
  background: var(--card);
  border: 1px solid var(--line);
  color: var(--body);
  border-radius: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.policy-highlight {
  background: color-mix(in srgb, var(--card) 92%, var(--gold) 8%);
  border: 1px solid rgba(217, 170, 85, 0.35);
  border-radius: 24px;
}

.policy-note {
  background: color-mix(in srgb, var(--card) 85%, var(--gold) 15%);
  border: 1px solid rgba(217, 170, 85, 0.25);
  color: var(--body);
}

.policy-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(217, 170, 85, 0.2);
  color: var(--gold);
  border: 1.5px solid var(--gold);
  font-family: var(--serif);
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  shrink: 0;
}
</style>
