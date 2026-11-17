<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Health & Vitality</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Build a Scalable Wellness & Health Coaching Business
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Transition from low-cost meal plans and hourly fitness advice to high-value lifestyle transformation protocols. Discover how top health and wellness practitioners build 6-figure coaching systems.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Commoditization of Generic Fitness & Nutrition Advice</h2>
            <p>
              In an era where AI can generate infinite personalized calorie targets and generic workout routines in seconds, selling simple diet sheets or fitness tips is no longer a viable business model.
            </p>
            <p>
              High-earning wellness coaches do not sell information; they sell <strong>biometric protocol compliance, behavior design, and holistic energy restoration</strong> for affluent clients who have tried and failed conventional routines.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">The High-Ticket Wellness Law:</div>
            <p class="text-[#1A1A1A] font-medium">
              "Position your wellness offer around the primary symptom that directly threatens your client's executive performance, longevity, or personal confidence: chronic fatigue, metabolic dysfunction, or burnout."
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Systems of a 6-Figure Wellness Practice</h2>

            <div class="space-y-6">
              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">1. Diagnostic Biometric & Lifestyle Audit</h3>
                <p>
                  Incorporate structured initial assessments analyzing bloodwork markers, sleep quality data, stress biomarkers, and daily energetic rhythms.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">2. 12-Week Metabolic & Habit Architecture</h3>
                <p>
                  Structure your program with clear progressive phases: Phase 1 (Gut & Sleep Reset), Phase 2 (Metabolic Optimization), and Phase 3 (Sustainable Executive Habits).
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">3. Daily Asynchronous Micro-Accountability</h3>
                <p>
                  Use modern habit tracking dashboards and quick voice notes to hold clients accountable daily, preventing backsliding without scheduling endless weekly meetings.
                </p>
              </div>

              <div class="border-l-2 border-[#FF7F11] pl-4 space-y-2">
                <h3 class="font-display text-lg font-bold text-[#1A1A1A]">4. Premium Outcome Pricing ($2,500 - $8,000)</h3>
                <p>
                  Package the complete protocol into 90-day to 6-month commitments instead of per-session or monthly gym-style subscriptions.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Evaluate Your Wellness Coaching Systems</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take our Growth Scorecard to diagnose how to package your wellness expertise into a scalable, high-retention flagship program.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Diagnose Your Wellness Business &rarr;
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
  title: 'How to Build a Scalable Wellness Coaching Business — Digital Coach',
  description: 'Learn how health and wellness coaches can package high-ticket lifestyle protocols, automate client accountability, and scale predictable revenue.',
  ogTitle: 'How to Build a Scalable Wellness Coaching Business',
  ogDescription: 'Scale your wellness coaching practice with high-ticket protocols and systems.',
  keywords: 'wellness coach business, health coaching business model, how to start wellness coaching, high ticket health coach, wellness coaching packages'
})
</script>
