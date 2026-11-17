<template>
  <section class="py-20 md:py-32 relative overflow-hidden bg-[#FBF6F6] border-t border-[#EAE4E4]">
    <!-- Glow background -->
    <div class="absolute inset-0 bg-[#FF7F11]/[0.02] pointer-events-none"></div>

    <UiContainer size="xl">
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <!-- Left: Copy & CTA (6 cols) -->
          <div class="lg:col-span-6 space-y-6">
            <UiBadge variant="amber" :dot="true">Free Diagnostic</UiBadge>

            <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-[1.1]">
              WHAT’S ACTUALLY HOLDING YOUR BUSINESS BACK?
            </h2>

            <p class="text-base text-[#524F4E] leading-relaxed">
              Answer a focused set of questions about your expertise, offer, positioning, clients, and systems. In five minutes, you’ll see where you’re strong, where the gaps are, and the one thing worth fixing first.
            </p>

            <!-- Diagnostic Benefits -->
            <div class="space-y-2.5 pt-2">
              <div class="flex items-center gap-3 text-xs sm:text-sm text-[#1A1A1A] font-semibold">
                <span class="w-5 h-5 rounded-full bg-[#FF7F11]/15 text-[#FF7F11] flex items-center justify-center font-bold text-xs shrink-0">&check;</span>
                Takes under 5 minutes
              </div>
              <div class="flex items-center gap-3 text-xs sm:text-sm text-[#1A1A1A] font-semibold">
                <span class="w-5 h-5 rounded-full bg-[#FF7F11]/15 text-[#FF7F11] flex items-center justify-center font-bold text-xs shrink-0">&check;</span>
                Pinpoints your single biggest revenue constraint
              </div>
              <div class="flex items-center gap-3 text-xs sm:text-sm text-[#1A1A1A] font-semibold">
                <span class="w-5 h-5 rounded-full bg-[#FF7F11]/15 text-[#FF7F11] flex items-center justify-center font-bold text-xs shrink-0">&check;</span>
                100% free — instant, personalised report
              </div>
              <div class="flex items-center gap-3 text-xs sm:text-sm text-[#1A1A1A] font-semibold">
                <span class="w-5 h-5 rounded-full bg-[#FF7F11]/15 text-[#FF7F11] flex items-center justify-center font-bold text-xs shrink-0">&check;</span>
                No spam, no pressure
              </div>
            </div>

            <div class="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <UiButton
                to="/scorecard"
                variant="primary"
                size="lg"
                custom-class="w-full sm:w-auto shadow-lg shadow-[#FF7F11]/25"
              >
                Take the free Business Growth Scorecard &rarr;
              </UiButton>
            </div>
          </div>

          <!-- Right: Visual Diagnostic Score Preview (6 cols) -->
          <div class="lg:col-span-6 bg-[#FBF6F6] border border-[#EAE4E4] rounded-2xl p-6 sm:p-8 shadow-md space-y-6 relative">
            <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4]">
              <div>
                <div class="text-[11px] font-mono uppercase tracking-wider text-[#8C8685] font-bold">Sample report</div>
                <div class="text-base font-bold text-[#1A1A1A] font-display">Business Growth Score</div>
              </div>
              <div class="text-right">
                <div class="text-3xl font-bold font-display text-[#1A1A1A]">68<span class="text-sm font-normal text-[#8C8685]">/100</span></div>
                <div class="text-[10px] font-mono text-[#FF7F11] font-bold">Stage: Growth Acceleration</div>
              </div>
            </div>

            <!-- Pillar Progress Bars -->
            <div class="space-y-3.5">
              <div v-for="bar in sampleScores" :key="bar.label" class="space-y-1">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-[#1A1A1A]">{{ bar.label }}</span>
                  <span class="font-mono font-bold" :class="bar.score < 50 ? 'text-red-600' : bar.score < 70 ? 'text-amber-600' : 'text-[#FF7F11]'">
                    {{ bar.score }}%
                  </span>
                </div>
                <div class="w-full h-2 bg-white rounded-full overflow-hidden border border-[#EAE4E4]">
                  <div
                    class="h-full rounded-full transition-all duration-500"
                    :class="bar.score < 50 ? 'bg-red-500' : bar.score < 70 ? 'bg-amber-500' : 'bg-[#FF7F11]'"
                    :style="{ width: `${bar.score}%` }"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Diagnostic Insight Callout -->
            <div class="p-3.5 rounded-xl bg-white border border-[#FF7F11]/40 text-xs text-[#1A1A1A] flex items-start gap-2.5 shadow-sm">
              <svg class="w-4 h-4 text-[#FF7F11] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Detected constraint:</strong> your systems and AI leverage are the ceiling on your growth right now.</span>
            </div>

            <div class="text-[11px] text-[#8C8685] text-center font-mono border-t border-[#EAE4E4] pt-3">
              Preview only — the live scorecard runs inside the Digital Coach app.
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const sampleScores = [
  { label: 'Clarity & Positioning', score: 82 },
  { label: 'Offer', score: 61 },
  { label: 'Authority', score: 74 },
  { label: 'Client Acquisition', score: 42 },
  { label: 'Conversion', score: 69 },
  { label: 'Systems', score: 38 },
  { label: 'AI Leverage', score: 21 }
]
</script>
