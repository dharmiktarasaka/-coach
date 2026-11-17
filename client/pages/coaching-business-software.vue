<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Software Stack</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Minimalist Coaching Business Software Stack: Only What You Need
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Avoid software bloat and expensive $500/mo tool subscriptions. Discover the lean, integrated software stack that runs 7-figure coaching businesses smoothly.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 5 Essential Software Layers</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Front-Facing Web & Scorecard:</strong> High-speed custom web portal with interactive scorecards for lead qualification.</li>
              <li><strong>Calendar & Scheduling:</strong> Calendly / Cal.com configured with intake questions and automatic SMS/WhatsApp reminders.</li>
              <li><strong>Payments & Invoicing:</strong> Stripe / Razorpay with automated recurring subscription and No-Cost EMI logic.</li>
              <li><strong>Community & Milestone Hub:</strong> Dedicated member portal with searchable video curriculum and discussion channels.</li>
              <li><strong>AI Call Synthesis:</strong> Fathom / Otter syncing automatic action summaries into your CRM.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Software Stack</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether software tool sprawl is slowing down your business.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Software Stack &rarr;</UiButton>
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
  title: 'Coaching Business Software Stack Guide — Digital Coach',
  description: 'The minimalist software stack for scaling a coaching business. Compare CRMs, scheduling tools, LMS portals, and payment gateways.',
  keywords: 'coaching business software, software for coaches, coaching tools stack, coaching management software'
})
</script>
