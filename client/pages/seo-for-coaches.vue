<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Organic Search</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            SEO for Coaches: Dominating High-Intent Search Queries
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How coaches capture warm, commercial search traffic from Google by building topical authority clusters, schema markup, and high-value strategic landing pages.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Principles of High-Intent Coaching SEO</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Target Commercial Intent Keywords:</strong> Focus on queries with high commercial and transactional intent (e.g. <em>how to start a coaching business, coaching pricing India</em>).</li>
              <li><strong>Build Comprehensive Topic Clusters:</strong> Create interlinked editorial hubs that establish topical authority in your domain.</li>
              <li><strong>Convert Search Visitors with Interactive Tools:</strong> Embed free diagnostic scorecards and assessments directly within articles.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Website's SEO Authority</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your website is optimized for inbound search demand.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Coaching SEO &rarr;</UiButton>
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
  title: 'SEO for Coaches Blueprint — Digital Coach',
  description: 'Learn how coaches rank on Google and attract high-ticket clients with programmatic SEO, keyword clustering, and authority content.',
  keywords: 'SEO for coaches, coaching SEO strategy, how to rank coaching website, organic client acquisition'
})
</script>
