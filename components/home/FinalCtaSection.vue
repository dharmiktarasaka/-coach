<template>
  <section class="py-24 md:py-36 relative overflow-hidden bg-[#FBF6F6] border-t border-[#EAE4E4]">
    <UiContainer size="lg">
      <div class="relative z-10 text-center space-y-8 bg-white border-2 border-[#FF7F11]/40 rounded-3xl p-10 sm:p-16 lg:p-20 shadow-2xl text-[#1A1A1A]">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF8F2] border border-[#FF7F11]/40 text-[#FF7F11] text-xs font-bold uppercase tracking-wider">
          <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-ping"></span>
          Start Today
        </div>

        <!-- Master Closer Headline -->
        <div class="space-y-3">
          <h2 class="font-display text-sm sm:text-base md:text-lg font-bold text-[#8C8685] tracking-widest uppercase">
            YOU ALREADY HAVE THE EXPERTISE.
          </h2>
          <div class="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            NOW BUILD THE BUSINESS <br class="hidden sm:inline" />
            <span class="text-[#FF7F11]">BEHIND IT.</span>
          </div>
        </div>

        <p class="text-[#524F4E] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Stop depending on word-of-mouth and manual hustle. Find your single biggest bottleneck, and start building a business that runs on systems — not on your nerves.
        </p>

        <!-- CTA Action Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <UiButton
            to="/scorecard"
            variant="primary"
            size="xl"
            custom-class="w-full sm:w-auto shadow-lg shadow-[#FF7F11]/25"
          >
            Take the free Growth Scorecard &rarr;
          </UiButton>

          <UiButton
            to="/apply"
            variant="secondary"
            size="xl"
            custom-class="w-full sm:w-auto"
          >
            Apply to work with us
          </UiButton>
        </div>

        <div class="pt-6 border-t border-[#EAE4E4] text-xs text-[#8C8685] font-mono">
          Free 5-minute diagnostic &bull; Instant report &bull; No spam
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
// Final CTA section in #FBF6F6 & #FF7F11
</script>
