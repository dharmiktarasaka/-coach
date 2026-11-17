<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help" class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-mono font-bold">&larr; All Profiles</NuxtLink>
            <span class="text-[#D5CDCD]">&bull;</span>
            <UiBadge variant="amber">For Corporate & Technical Trainers</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            MOVE BEYOND ONE-OFF WORKSHOPS <br />
            <span class="text-[#FF7F11]">INTO A SCALABLE EXPERT BUSINESS.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Stop traveling every weekend to conduct 8-hour workshops with zero recurring revenue. Transform single-day corporate training into ongoing enterprise implementation programs and executive mastery tracks.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take Free Trainer Diagnostic &rarr;
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
              The One-and-Done Workshop Trap
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Trading Physical Days for Dollars</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              Exhausting yourself delivering intense 8-hour full-day workshops. The moment you step off the stage, client contact ends, and you must scramble to find next month's corporate booking from scratch.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#FF7F11]/40 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
              The Enterprise Continuity Architecture
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Year-Round Implementation Contracts</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              We help you package workshops as the initial kick-off phase of a 6-to-12-month corporate implementation retainer featuring digital LMS toolkits, group clinics, and train-the-trainer certification tracks.
            </p>
          </div>
        </div>

        <!-- What We Build for Trainers -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              What Digital Coach Builds for Trainers
            </h3>
            <p class="text-sm text-[#524F4E]">
              Converting transient training events into durable, high-margin multi-tier enterprise curriculum architectures.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">01. Enterprise Retainer Packaging</div>
              <p class="text-xs text-[#524F4E]">Transitioning single-day workshop fees into ongoing annual skill-enablement contracts.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">02. Proprietary IP Licensing</div>
              <p class="text-xs text-[#524F4E]">Licensing your proprietary frameworks and slide decks directly to corporate L&D teams.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">03. Asynchronous LMS Portals</div>
              <p class="text-xs text-[#524F4E]">Self-paced participant modules that reinforce your workshop lessons without your physical presence.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">04. Inbound B2B Authority Engine</div>
              <p class="text-xs text-[#524F4E]">Targeted case teardowns that position you as the definitive enterprise domain expert.</p>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to build recurring corporate revenue?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take the 5-Minute Trainer Diagnostic &rarr;
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
  title: 'Training Business Architecture — Digital Coach',
  description: 'Learn how Digital Coach helps corporate and technical trainers scale beyond one-off training days into enterprise continuity contracts.'
})
</script>
