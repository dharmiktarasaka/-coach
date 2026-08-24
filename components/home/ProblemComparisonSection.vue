<template>
  <section id="problem-matrix" class="py-24 md:py-36 bg-[#FBF6F6] border-t border-[#EAE4E4] relative">
    <UiContainer size="xl">
      <!-- Section Heading: 2. THE CORE REALIZATION -->
      <UiSectionHeading
        tag="The Honest Truth"
        tag-variant="amber"
        title="BEING AN EXPERT DOESN’T BUILD YOU A BUSINESS."
        subtitle="Knowing how to change someone’s life is where it starts — not where it ends. A real business needs a clear offer people instantly understand, positioning that makes you the obvious choice, a steady flow of the right clients, and systems that run without you in every seat. That’s the part most experts were never taught. It’s the part we build with you."
        size="xl"
        align="center"
        custom-class="mb-14"
      />

      <!-- Section Intro: 3. THE TWO PATHS -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-base sm:text-lg text-[#524F4E] font-medium leading-relaxed">
          Most experts are quietly stuck on the left. The whole point of Digital Coach is to move you to the right.
        </p>
      </div>

      <!-- Visual Transformation Matrix: Before (Effort) vs After (Systems) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
        <!-- Left: Card A - Your Situation Today -->
        <div class="bg-white border border-red-200 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl">
          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-red-100">
              <div class="flex items-center gap-2 text-red-600 font-mono text-xs uppercase font-bold tracking-wider">
                <span class="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                Your Situation Today — Running on Effort
              </div>
              <span class="text-xs text-[#8C8685] font-mono">Effort-Bound</span>
            </div>

            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              The Self-Employed Expert Trap
            </h3>

            <p class="text-sm sm:text-base text-[#524F4E] leading-relaxed">
              When there’s no real business structure underneath you, your income is chained to your calendar. If you don’t show up, nothing comes in. Referrals are unpredictable. And every sales conversation feels like an awkward audition.
            </p>

            <!-- Problem list items -->
            <div class="space-y-3 pt-2">
              <div
                v-for="item in problemItems"
                :key="item"
                class="flex items-start gap-3 text-xs sm:text-sm text-[#1A1A1A] bg-red-50/70 p-3.5 rounded-xl border border-red-100 font-medium"
              >
                <svg class="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-red-100 text-xs text-red-600 font-mono flex items-center justify-between font-bold">
            <span>Result: Unpredictable Income & Constant Hustle</span>
            <span>&times; Low Equity Value</span>
          </div>
        </div>

        <!-- Right: Card B - Where You're Headed -->
        <div class="bg-white border border-[#FF7F11]/40 rounded-3xl p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between shadow-xl shadow-[#FF7F11]/5">
          <!-- Top highlight -->
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#FF7F11] to-transparent"></div>

          <div class="space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4]">
              <div class="flex items-center gap-2 text-[#FF7F11] font-mono text-xs uppercase font-bold tracking-wider">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF7F11] animate-pulse"></span>
                Where You’re Headed — Running on Systems
              </div>
              <span class="text-xs text-[#FF7F11] font-mono font-bold bg-[#FF7F11]/15 px-2.5 py-0.5 rounded border border-[#FF7F11]/40">System-Driven</span>
            </div>

            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              The Expert With a Real Business
            </h3>

            <p class="text-sm sm:text-base text-[#524F4E] leading-relaxed">
              Your expertise is packaged into a signature program people actually want. The right clients come to you already interested. Enrolling them feels like a natural conversation, not a pitch. And the day-to-day runs on systems, not on your nerves.
            </p>

            <!-- Solution list items -->
            <div class="space-y-3 pt-2">
              <div
                v-for="item in solutionItems"
                :key="item"
                class="flex items-start gap-3 text-xs sm:text-sm text-[#1A1A1A] bg-[#FFF8F2] p-3.5 rounded-xl border border-[#FF7F11]/25 font-semibold"
              >
                <svg class="w-4 h-4 text-[#FF7F11] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <div class="mt-8 pt-4 border-t border-[#EAE4E4] text-xs text-[#1A1A1A] font-mono flex items-center justify-between font-bold">
            <span>Result: Predictable Growth & Real Freedom</span>
            <span class="text-[#FF7F11]">&check; Genuine Enterprise Value</span>
          </div>
        </div>
      </div>

      <!-- Bridge line & Callout Banner -->
      <div class="mt-14 text-center max-w-3xl mx-auto">
        <p class="text-base text-[#1A1A1A] font-medium mb-6 leading-relaxed">
          You don’t need another marketing course or a dozen disconnected apps to get here. You need one clear system built around your expertise.
        </p>
        <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
          See Where You Stand Today &rarr;
        </UiButton>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const problemItems = [
  'Blurry positioning — you’re one of many “generalists,” competing on price against cheaper options.',
  'No clear offer — you charge by the hour, or rebuild a custom proposal from scratch every time.',
  'Unreliable leads — you depend on referrals and the occasional social post that happens to land.',
  'Soft sales — you give away your best advice on calls, and few of them turn into clients.',
  'Scattered tools — clients live across WhatsApp threads, notes, and half-finished spreadsheets.'
]

const solutionItems = [
  'A clear, ownable position — you’re the obvious choice in your space, so price stops being the conversation.',
  'A signature offer — one flagship program with a clear promise, delivered the same reliable way every time.',
  'A steady client pipeline — a scorecard and content that attract serious buyers while you sleep.',
  'Confident enrolment — a simple, honest consultation that qualifies fit and converts well.',
  'One connected system — your pipeline, delivery, and follow-ups run in one place, with AI doing the heavy lifting.'
]
</script>
