<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Strategy & Planning</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The 1-Page Coaching Business Plan: An Executive Operating Blueprint
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Ditch traditional 50-page business plans. Use this lean, 1-page coaching business plan template to define your unit economics, acquisition strategy, and operational goals.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 6 Sections of the 1-Page Plan</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong>Target Category & Ideal Client Profile (ICP):</strong> Specific description of who you serve and their primary high-cost symptom.</li>
              <li><strong>Flagship Transformation & Mechanism:</strong> The unique named methodology that bridges current to desired states.</li>
              <li><strong>Unit Economics & Pricing:</strong> Target program price ($3k–$10k), gross margin targets (&gt;85%), and monthly client capacity.</li>
              <li><strong>Primary Inbound Acquisition Channel:</strong> The single main channel (e.g. LinkedIn Authority, Paid Scorecards, or Live Workshops).</li>
              <li><strong>Conversion Protocol:</strong> The diagnostic enrollment mechanism closing qualified applications.</li>
              <li><strong>Delivery & Operational Tech:</strong> The software tools and asynchronous assets facilitating client transformation.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Strategic Business Plan</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your business plan has gaps in acquisition or delivery.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Your Business Plan &rarr;</UiButton>
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
  title: '1-Page Coaching Business Plan Template — Digital Coach',
  description: 'Download and implement the 1-page coaching business plan template. Strategic blueprint for scaling high-ticket coaching practices.',
  keywords: 'coaching business plan, business plan for coaching practice, how to write a coaching business plan, coach business template'
})
</script>
