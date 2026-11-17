<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Niche Playbook</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Build a High-Ticket Life Coaching Business That Commands Premium Fees
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Move beyond generic "mindset & motivation" coaching. Learn how successful life coaches position their offers around tangible life milestones and build predictable, scalable client acquisition systems.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Positioning Crisis in the Life Coaching Industry</h2>
            <p>
              Thousands of certified life coaches struggle to sign clients because their positioning is too abstract. Phrases like <em>"I help you find your purpose,"</em> <em>"unlock your potential,"</em> or <em>"live your best life"</em> do not trigger urgent purchasing decisions.
            </p>
            <p>
              To charge premium fees ($3,000 to $10,000+), you must anchor your life coaching to a <strong>concrete life transition</strong> or <strong>high-stakes emotional inflection point</strong>.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Key Principle:</div>
            <p class="text-[#1A1A1A] font-medium">
              "General life coaches compete on price. Specialized transformation architects compete on certainty and outcome specificity."
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">High-Converting Life Coaching Positioning Angles</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                <h3 class="font-display text-base font-bold text-[#1A1A1A]">Executive Life Balance</h3>
                <p class="text-xs text-[#524F4E]">Helping burned-out founders and corporate leaders reclaim 15 hours a week without sacrificing business growth.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                <h3 class="font-display text-base font-bold text-[#1A1A1A]">Post-Divorce Re-Invention</h3>
                <p class="text-xs text-[#524F4E]">Guiding high-net-worth professionals through rebuilding identity, confidence, and financial independence.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                <h3 class="font-display text-base font-bold text-[#1A1A1A]">High-Performance Clarity</h3>
                <p class="text-xs text-[#524F4E]">Eliminating chronic self-sabotage, imposter syndrome, and decision paralysis for ambitious entrepreneurs.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                <h3 class="font-display text-base font-bold text-[#1A1A1A]">Quarter-Life Career & Life Design</h3>
                <p class="text-xs text-[#524F4E]">Helping young executives navigate major career pivots and architect a fulfilling lifestyle.</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Systems Every Life Coach Needs</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Diagnostic Self-Assessment Funnel:</strong> A 10-question life audit that highlights where prospects are out of alignment and positions your program as the customized solution.</li>
              <li><strong class="text-[#1A1A1A]">Signature Transformation Protocol:</strong> A 12-week structured curriculum with weekly habits, reflection prompts, and milestone reviews.</li>
              <li><strong class="text-[#1A1A1A]">Asynchronous Voice & Text Accountability:</strong> Giving clients high-frequency touchpoints without tying you to endless 60-minute Zoom calls.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Grade Your Life Coaching Business Model</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take our Growth Scorecard to analyze your positioning, pricing structure, and acquisition efficiency.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Life Coach Business Scorecard &rarr;
              </UiButton>
            </div>
          </div>
        </div>

        <!-- Article Footer Share / Navigation -->
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
  title: 'How to Build a High-Ticket Life Coaching Business — Digital Coach',
  description: 'Learn how to transition from generic hourly life coaching to a high-ticket, outcome-driven business model with predictable client acquisition.',
  ogTitle: 'How to Build a High-Ticket Life Coaching Business',
  ogDescription: 'Strategic guide for life coaches to command premium fees and build scalable operating systems.',
  keywords: 'life coach business, how to start a life coaching business, high ticket life coach, life coaching packages, life coach client acquisition'
})
</script>
