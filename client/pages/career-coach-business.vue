<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Executive Advisory</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Build a High-Income Career & Executive Coaching Business
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop competing with $50 resume writers. Learn how elite career coaches position themselves as high-stakes executive transition advisors and command $5k–$15k packages.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Resume Review Trap vs. Executive Career Architecture</h2>
            <p>
              Most career coaches make the critical mistake of selling transactional commodities: resume edits, LinkedIn profile touch-ups, and 30-minute mock interviews. This attracts low-budget job seekers and creates endless churn.
            </p>
            <p>
              In contrast, high-income career advisors target <strong>VP, Director, and C-Suite executives</strong> navigating $200k to $1M+ compensation transitions. When an executive stands to gain $80,000+ in base salary and equity, investing $7,500 in a career acceleration program has an extraordinary ROI.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">The Career Advisory Equation:</div>
            <p class="text-[#1A1A1A] font-medium">
              "You don't sell job searches. You sell compensation negotiation leverage, executive personal brand authority, and access to the unadvertised hidden executive job market."
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Pillars of a 6-Figure Career Coaching Practice</h2>

            <div class="space-y-6">
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">1. Executive Narrative & Positioning Architecture</h3>
                <p>
                  Codify how mid-to-senior leaders translate complex technical or operational histories into compelling boardroom leadership narratives that headhunters seek.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">2. The Hidden Market Inbound Protocol</h3>
                <p>
                  Teach candidates how to bypass HR application portals and conduct confidential peer-level outreach directly to Board members, founders, and executive recruiters.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">3. Executive Offer & Equity Negotiation Playbook</h3>
                <p>
                  Provide structured scripts, counter-offer templates, and compensation benchmarking frameworks that routinely produce $30,000–$150,000 salary uplifts for your clients.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">4. Hybrid Cohort & Private Strategy Model</h3>
                <p>
                  Package your templates and frameworks into an asynchronous career portal, complemented by weekly executive hot-seats and confidential private advisory calls.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Assess Your Career Coaching Business Architecture</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take our Growth Scorecard to diagnose how to elevate your pricing, positioning, and client acquisition engine.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Diagnose Your Career Coaching Practice &rarr;
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
  title: 'How to Build a High-Ticket Career Coaching Business — Digital Coach',
  description: 'Learn how to build a 6-to-7-figure executive career coaching practice with premium offer design, executive positioning, and predictable acquisition.',
  ogTitle: 'How to Build a High-Income Career Coaching Business',
  ogDescription: 'Step-by-step business architecture for executive and career coaches.',
  keywords: 'career coach business, executive career coaching, how to start a career coaching business, career coach packages, career coaching business model'
})
</script>
