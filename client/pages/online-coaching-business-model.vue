<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Digital Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Modern Online Coaching Business Model: Zero Office, Infinite Reach
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How remote digital coaches leverage asynchronous frameworks, digital assets, and high-converting online pipelines to run lean, 80%+ profit margin knowledge businesses.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Shift from In-Person to 100% Online Coaching</h2>
            <p>
              In-person coaching restricts your total addressable market to your local geographic radius and incurs heavy commercial real estate overheads. An <strong>online coaching business model</strong> expands your reach to global English-speaking markets while reducing your fixed overheads to virtually zero.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Components of an Online Coaching Stack</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Lead Engine:</strong> Diagnostic landing pages, YouTube/LinkedIn essays, and targeted social campaigns.</li>
              <li><strong>Qualification Layer:</strong> Automated application forms filtering for budget, timeline, and urgency.</li>
              <li><strong>Diagnostic Enrollment:</strong> 45-minute structured video discovery calls or WhatsApp voice consultations.</li>
              <li><strong>Asynchronous Delivery:</strong> Centralized client portal with interactive video modules, action sheets, and community channels.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Ready to Build Your Online Model?</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Diagnose your current digital systems with our free Growth Scorecard.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Take Free Scorecard &rarr;</UiButton>
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
  title: 'The Modern Online Coaching Business Model — Digital Coach',
  description: 'Learn how to build a high-profit online coaching business model with zero overhead, automated acquisition, and global scale.',
  keywords: 'online coaching business model, remote coaching practice, digital coach business, online coaching systems'
})
</script>
