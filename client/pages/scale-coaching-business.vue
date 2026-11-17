<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Enterprise Scaling</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">10 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Scale a Coaching Business from 6 to 7 Figures Without Working More Hours
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Crossing the multi-six and seven-figure threshold requires shifting from an individual practitioner to an executive operating a systematic coaching institution. Here is the operational playbook.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Growth Plateaus of Coaching Businesses</h2>
            <p>
              Every coaching enterprise encounters predictable inflection points where the exact strategies that got them to their current level will break if used for the next:
            </p>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>$0 to $10k/month:</strong> The Validation Phase — relies on manual hustle, personal networks, and 1-on-1 problem solving.</li>
              <li><strong>$10k to $30k/month:</strong> The Capacity Ceiling — founder calendar is overloaded, client delivery suffers, and marketing becomes sporadic.</li>
              <li><strong>$30k to $100k+/month:</strong> The Systems & Scale Phase — requires multi-tiered offers, delegable delivery protocols, automated pipelines, and operational telemetry.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Scaling Axiom:</div>
            <p class="text-[#1A1A1A] font-medium">
              "You cannot scale what you have not codified. If your client results depend entirely on your spontaneous intuition during live calls, your business has no enterprise value."
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Pillars of 7-Figure Coaching Scale</h2>

            <div class="space-y-6">
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">1. One Flagship Transformation (No Offer Proliferation)</h3>
                <p>
                  Scaling coaches resist the temptation to launch multiple courses, memberships, and sub-products. They scale a single signature flagship program to $1M+ ARR before introducing backend masterminds or enterprise licensing.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">2. Codified Intellectual Property & Teaching Frameworks</h3>
                <p>
                  Turn your intuitive knowledge into named frameworks, diagnostic matrices, and step-by-step implementation templates. This allows junior coaches or cohort mentors to deliver identical transformational results on your behalf.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">3. Multi-Channel Evergreen Acquisition</h3>
                <p>
                  Transition away from reliance on sporadic referrals to a blended acquisition engine combining organic authority publishing, strategic referral loops, and paid diagnostic scorecards.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">4. Centralized CRM & Automated Workflow Ops</h3>
                <p>
                  Implement centralized lead routing, automated onboarding flows, dynamic milestone trackers, and automated recurring payment collection so zero operational details fall through the cracks.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Discover Your Next Scaling Frontier</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take our Growth Scorecard to diagnose which operational pillar is restricting your business from breaking into 7 figures.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take the 7-Figure Scale Diagnostic &rarr;
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
  title: 'How to Scale a Coaching Business to 7 Figures — Digital Coach',
  description: 'The proven strategic roadmap for ambitious coaches to break through capacity ceilings and scale to 7-figure revenue with automated systems.',
  ogTitle: 'How to Scale a Coaching Business to 7 Figures',
  ogDescription: 'Scale your coaching enterprise without multiplying working hours.',
  keywords: 'scale coaching business, 7 figure coaching business, how to grow coaching practice, coaching business operations, coaching business systems'
})
</script>
