<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <div class="space-y-12">
        <header class="space-y-4 text-center">
          <UiBadge variant="brand">Legal Governance</UiBadge>
          <h1 class="font-display text-3xl sm:text-4xl font-bold text-[#1A1A1A]">Privacy Policy</h1>
          <p class="text-xs font-mono text-[#524F4E]">Last Updated: {{ new Date().toLocaleDateString() }}</p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-6 text-xs sm:text-sm text-[#524F4E] leading-relaxed shadow-sm">
          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">1. Information We Collect</h2>
            <p>
              When you use the Digital Coach website, submit diagnostic scorecards, register for live workshops, or submit client applications, we collect relevant information such as your name, email address, WhatsApp number, professional role, and business background.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">2. How We Use Your Information</h2>
            <p>
              We use collected information solely to:
            </p>
            <ul class="list-disc pl-5 space-y-1 text-[#524F4E]">
              <li>Compile and deliver your personalized Business Growth Scorecard report.</li>
              <li>Provide access links and calendar invites for live workshops.</li>
              <li>Evaluate partnership readiness for our advisory and accelerator tracks.</li>
              <li>Improve the performance, security, and usability of our website.</li>
            </ul>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">3. Data Confidentiality & Sharing</h2>
            <p>
              We maintain strict confidentiality. We do not sell, rent, or trade your personal contact details or proprietary business metrics to any third-party marketing companies.
            </p>
          </section>

          <section class="space-y-2">
            <h2 class="font-display text-lg font-bold text-[#1A1A1A]">4. Cookies & Analytics</h2>
            <p>
              We use lightweight, privacy-focused analytics cookies to understand site performance and visitor flow. You may disable cookies in your browser settings at any time.
            </p>
          </section>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy — Digital Coach',
  description: 'Digital Coach privacy policy and data governance practices.'
})
</script>
