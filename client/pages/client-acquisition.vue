<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Pipeline Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">9 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Coaching Client Acquisition: The Architecture of Predictable Inbound Demand
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Move past unpredictable referrals. Discover how modern 7-figure coaches engineer systematic acquisition engines that deliver qualified buyer applications every single week.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Three Engines of Sustainable Client Acquisition</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">1. Organic Authority</h3>
                <p class="text-xs text-[#524F4E] mt-1">Deep teardowns, frameworks, and contrarian essays on LinkedIn and YouTube that build compound trust.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">2. Paid Diagnostic Funnels</h3>
                <p class="text-xs text-[#524F4E] mt-1">Meta & Google ads driving to interactive scorecards and short Video Sales Letters that qualify intent.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">3. Systematic Referral Loops</h3>
                <p class="text-xs text-[#524F4E] mt-1">Milestone-triggered referral prompts and strategic partnership alliances with complementary service firms.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your Acquisition Pipeline</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free 5-minute Growth Scorecard to diagnose bottlenecks in your lead generation and conversion.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Diagnose Your Pipeline &rarr;</UiButton>
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
  title: 'Coaching Client Acquisition Architecture — Digital Coach',
  description: 'Learn how high-performing coaches build predictable client acquisition systems using organic authority, paid funnels, and referral loops.',
  keywords: 'coaching client acquisition, client acquisition for coaches, how to get coaching clients, coach lead generation system'
})
</script>
