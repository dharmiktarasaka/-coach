<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help" class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-mono font-bold">&larr; All Profiles</NuxtLink>
            <span class="text-[#D5CDCD]">&bull;</span>
            <UiBadge variant="amber">For Senior Corporate Executives in Transition</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            TURN 15–20+ YEARS OF EXPERIENCE INTO A <br />
            <span class="text-[#FF7F11]">CREDIBLE COACHING & ADVISORY PRACTICE.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Transition smoothly from the corporate suite into a prestigious independent coaching practice without humiliating yourself with generic marketing gimmicks or dancing on social media.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take Transition Readiness Diagnostic &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Join Live Workshop
            </UiButton>
          </div>
        </div>

        <!-- Problem vs Solution Matrix -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="p-8 rounded-3xl bg-white border border-red-200 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-red-500"></span>
              The Corporate Transition Void
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Deep Competence, Zero Commercial Engine</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              Having 20 years of leadership in Fortune 500s or Tier-1 institutions, but having no idea how to package that wisdom into a commercial digital offer, structure inbound authority, or sell without an enterprise brand name on your business card.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#FF7F11]/40 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
              The Executive-to-Expert Blueprint
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Peer-Level Advisory Positioning</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              We translate your executive track record into high-credibility thought leadership, premium C-suite advisory programs, and private board counsel frameworks that preserve your institutional dignity.
            </p>
          </div>
        </div>

        <!-- What We Build for Professionals -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              What Digital Coach Builds for Transitioning Executives
            </h3>
            <p class="text-sm text-[#524F4E]">
              Creating a sophisticated commercial practice that commands boardroom respect and premium advisory fees.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">01. Boardroom Advisory Architecture</div>
              <p class="text-xs text-[#524F4E]">High-ticket executive coaching and strategic advisory frameworks designed for enterprise buyers.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">02. Executive IP Codification</div>
              <p class="text-xs text-[#524F4E]">Distilling your decades of operating knowledge into proprietary diagnostic systems and frameworks.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">03. High-Credibility Authority Narrative</div>
              <p class="text-xs text-[#524F4E]">A polished executive narrative and LinkedIn presence that attracts high-net-worth clients.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">04. Turnkey Executive CRM Stack</div>
              <p class="text-xs text-[#524F4E]">A clean, automated intake calendar and triage workflow requiring zero complex tech management.</p>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to launch your executive practice?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Transition Diagnostic &rarr;
              </UiButton>
              <UiButton to="/apply" variant="secondary" size="md">
                Apply for Advisory Track
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
  title: 'Executive Coaching Practice Architecture — Digital Coach',
  description: 'Learn how Digital Coach helps senior executives transition out of corporate roles into prestigious, high-ticket independent advisory practices.'
})
</script>
