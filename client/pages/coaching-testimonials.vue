<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Social Proof</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">7 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Collect Compelling Coaching Testimonials & Video Reviews
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop waiting for clients to randomly send vague praise. Learn the systematic prompt questionnaire that elicits specific, story-driven testimonials and video reviews.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Testimonial Prompts That Extract Gold</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><em>"What was your biggest hesitation or fear before investing in the program?"</em></li>
              <li><em>"What specific milestone or metric changed most dramatically as a result of our work together?"</em></li>
              <li><em>"How has this transformation impacted your day-to-day lifestyle, stress levels, or confidence?"</em></li>
              <li><em>"What would you say to someone on the fence about applying?"</em></li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Social Proof Stack</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether you have sufficient proof assets to support premium pricing.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Proof Stack &rarr;</UiButton>
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
  title: 'How to Get Coaching Testimonials — Digital Coach',
  description: 'Learn how to collect high-converting video reviews and written testimonials from your coaching clients.',
  keywords: 'how to get coaching testimonials, coaching video reviews, coaching testimonials questionnaire, social proof for coaches'
})
</script>
