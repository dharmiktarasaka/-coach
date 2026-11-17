<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help/coaches" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Coaches Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="amber" :dot="true">Niche Solution: Spiritual Coaches</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD AN ETHICAL SPIRITUAL <br />
            <span class="text-[#FF7F11]">COACHING PRACTICE.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Ground your wisdom and consciousness advisory into structured, dignified transformation journeys without resorting to pseudo-guarantees, manufactured scarcity, or gimmicks.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Start Coaching Scorecard &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Register for Workshop
            </UiButton>
          </div>
        </div>

        <!-- Problem / Transformation Breakdown -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6 rounded-2xl bg-red-50/70 border border-red-100 space-y-3">
              <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                The Integrity Dilemma
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Hype Marketing &amp; Undercharging</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Many genuine spiritual practitioners feel disgusted by predatory online marketing tactics, leading them to severely undercharge, accept donations, or remain financially constrained.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                Grounded Consciousness
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Dignified Container Architecture</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                We help you articulate purpose, existential alignment, and inner governance into a transparent, deeply respectful coaching architecture that honors both client sovereignty and practitioner value.
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Spiritual Coaches</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Grounded Life Alignment Diagnostic</div>
                <p class="text-xs text-[#524F4E]">Self-reflection diagnostic that articulates personal integrity, shadow integration, and life purpose clarity.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Ethical Pricing &amp; High-Trust Containers</div>
                <p class="text-xs text-[#524F4E]">Fair, transparent multi-month agreements ($2,500–$6,000) that respect client autonomy and boundaries.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. High-Integrity Educational Inbound</div>
                <p class="text-xs text-[#524F4E]">Calm, authoritative long-form writing and audio essays that naturally draw aligned seekers.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Sustainable Practice Systems</div>
                <p class="text-xs text-[#524F4E]">Client management and booking systems that protect your energetic capacity and prevent burnout.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to build an ethical spiritual advisory practice?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Start Coaching Scorecard &rarr;
              </UiButton>
              <UiButton to="/apply" variant="secondary" size="md">
                Apply for Advisory
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Build an Ethical Spiritual Coaching Practice — Digital Coach',
  description: 'Grounded consciousness and purpose advisory without pseudo-guarantees. Build a sustainable and ethical spiritual coaching business.'
})
</script>
