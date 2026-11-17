<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Offer Inspiration</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            25 High-Ticket Coaching Program Ideas That Command $3K to $10K Fees
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            A curated list of high-converting coaching program ideas across business, executive career, health, relationships, and specialized technical domains.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">High-Demand Coaching Categories</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">B2B & Business Growth</h3>
                <p class="text-xs text-[#524F4E] mt-1">Founder exit readiness, agency productization, B2B sales pipeline engineering, high-ticket offer architecture.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Executive & Career</h3>
                <p class="text-xs text-[#524F4E] mt-1">VP-to-C-suite acceleration, boardroom personal branding, compensation negotiation, tech leadership transition.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Health & Vitality</h3>
                <p class="text-xs text-[#524F4E] mt-1">Metabolic reset for busy executives, postpartum hormonal health, insomnia & sleep architecture, longevity protocols.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">Life & Conscious Leadership</h3>
                <p class="text-xs text-[#524F4E] mt-1">Post-burnout nervous system recovery, midlife career pivot design, high-performance emotional mastery.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Validate Your Coaching Program Idea</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to test the market demand and pricing power of your coaching concept.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Validate Your Program Idea &rarr;</UiButton>
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
  title: '25 High-Ticket Coaching Program Ideas — Digital Coach',
  description: 'Explore profitable coaching program ideas across business, career, executive health, and mindset that command premium fees.',
  keywords: 'coaching program ideas, profitable coaching niches, high ticket coaching program ideas, coaching offer ideas'
})
</script>
