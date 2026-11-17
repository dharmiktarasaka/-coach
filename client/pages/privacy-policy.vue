<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="md">
      <div class="space-y-12">
        <div class="space-y-4">
          <span class="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] border border-[#F8D78B]/30">
            Legal
          </span>
          <h1 class="font-display font-extrabold text-3xl sm:text-5xl text-[#171844] tracking-tight">
            Privacy Policy
          </h1>
          <p class="text-xs font-semibold text-[#8C6D57]">Last updated: October 2026</p>
        </div>

        <div class="bg-white border border-[#EAE2D4] rounded-3xl p-8 sm:p-12 shadow-sm space-y-6 text-sm text-[#352D47] leading-relaxed">
          <section class="space-y-2">
            <h2 class="text-lg font-bold text-[#171844]">1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us when filling out consultation forms, enrolling in courses, joining memberships, or contacting our team. This may include your name, email address, billing details, and any notes provided.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="text-lg font-bold text-[#171844]">2. How We Use Your Information</h2>
            <p>
              Your data is solely used to deliver course content, schedule mentorship sessions, process secure payments, and communicate service updates. We do not sell, rent, or monetize your personal information to third parties.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="text-lg font-bold text-[#171844]">3. Data Security & Storage</h2>
            <p>
              We employ strict industry-standard encryption protocols and trusted payment processors (such as Stripe) to ensure your data and confidentiality remain protected at all times.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="text-lg font-bold text-[#171844]">4. Contact Our Privacy Officer</h2>
            <p>
              For inquiries regarding data privacy or to request data deletion, contact us at privacy@narayanpresence.com.
            </p>
          </section>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Narayan Presence',
  description: 'Privacy practices and data protection commitment.'
})
</script>
