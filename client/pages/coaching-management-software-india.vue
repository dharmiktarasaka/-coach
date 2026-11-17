<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">India Tech Stack</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Coaching Management Software in India: UPI, GST & WhatsApp Workflows
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Managing coaching operations in India requires specific localized software integrations: automated GST invoicing, UPI AutoPay, WhatsApp notification APIs, and multi-currency checkout.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">India-Specific Software Requirements</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>GST Compliance & Invoicing:</strong> Automated generation of B2B and B2C tax invoices with GSTIN validation.</li>
              <li><strong>UPI & No-Cost EMI Integration:</strong> Support for Razorpay/Cashfree with instant checkout links and recurring mandate support.</li>
              <li><strong>Official WhatsApp API:</strong> Automated trigger notifications for class reminders, milestone submissions, and invoice receipts.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Indian Tech Stack</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your software stack is optimized for the Indian market.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Indian Tech Stack &rarr;</UiButton>
            </div>
          </div>
        </div>

        <footer class="border-t border-[#EAE4E4] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NuxtLink to="/resources" class="text-xs font-semibold text-[#FF7F11] hover:text-[#E66800]">&larr; Back to Resource Hub</NuxtLink>
          <div class="flex items-center gap-3">
            <UiButton to="/workshop" variant="secondary" size="sm">Attend Live Workshop</UiButton>
            <UiButton to="/apply" variant="primary" size="sm">Apply for Advisory</UiButton>
          </div>
        </footer>
      </article>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Coaching Management Software India — Digital Coach',
  description: 'Learn how to select and configure coaching management software in India with GST invoicing, UPI payments, and WhatsApp automations.',
  keywords: 'coaching management software India, coach software India, coaching LMS India, coaching CRM India'
})
</script>
