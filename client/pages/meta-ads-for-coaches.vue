<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Paid Acquisition</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Meta & Facebook Ads for Coaches: Scaling Client Acquisition with High ROAS
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop burning ad budget on boosted posts. Discover how high-ticket coaches run profitable Meta and Facebook ad campaigns that generate qualified booked calls with a 3x–6x Return on Ad Spend (ROAS).
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Why Most Facebook Ads for Coaches Fail</h2>
            <p>
              Most coaches fail with Meta ads because they use generic video hooks (<em>"Are you struggling to get clients?"</em>) and send cold traffic directly to an aggressive sales page or a low-value 2-page PDF. High-intent buyers scroll right past generic ads.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 High-Performing Ad Creative Angles</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>The Mechanism Breakdown:</strong> Walking through a whiteboard or visual framework diagnosing why standard industry solutions fail.</li>
              <li><strong>The Diagnostic Quiz / Scorecard Angle:</strong> Inviting the prospect to benchmark their current business or life systems in 2 minutes.</li>
              <li><strong>The Case Study Teardown:</strong> Deconstructing the exact 90-day transformation of an actual client.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Calculate Your Paid Ad Funnel Unit Economics</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your offer and funnel are ready for paid Meta ad scaling.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Paid Ads Readiness &rarr;</UiButton>
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
  title: 'Meta & Facebook Ads for Coaches — Digital Coach',
  description: 'Learn how to create, test, and scale profitable Meta and Facebook ad campaigns that generate high-ticket coaching applications.',
  keywords: 'Meta ads for coaches, Facebook ads for coaches, coaching paid ads, coach Facebook marketing, instagram ads for coaches'
})
</script>
