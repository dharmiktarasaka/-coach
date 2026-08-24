<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Sales & Value Strategy</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            How to Sell Coaching & Advisory at Premium Price Points
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            The psychological shift from selling information and time to selling structured certainty, risk-reversal, and business transformation.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Why Clients Say "Let Me Think About It"</h2>
            <p>
              When a prospect hesitates at your price, it is almost never because they cannot afford the fee. It is because the perceived risk of failure outweighs the promised certainty of your transformation.
            </p>
            <p>
              Selling premium coaching requires framing your program as a risk-mitigated investment rather than an expense.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Pillars of Premium Value Anchoring</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Cost of Inaction (COI):</strong> Quantifying the hidden financial and emotional cost the prospect incurs every month they remain stuck.</li>
              <li><strong class="text-[#1A1A1A]">Proprietary Framework Certainty:</strong> Showing the prospect that their transformation is guided by a tested step-by-step roadmap rather than spontaneous improvisation.</li>
              <li><strong class="text-[#1A1A1A]">Structured Milestones:</strong> Guaranteeing structural check-ins and objective deliverable reviews throughout the engagement.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Assess Your Pricing Leverage</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to evaluate your pricing power and enrollment conversion.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Free Growth Scorecard &rarr;
              </UiButton>
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
  title: 'How to Sell High-Ticket Coaching & Advisory — Digital Coach',
  description: 'Learn how coaches and consultants price and sell premium transformation packages by anchoring value and reducing perceived buyer risk.'
})
</script>
