<template>
  <section id="assessment" class="py-20 md:py-32 bg-[#FBF6F6] border-t border-[#EAE4E4] relative overflow-hidden">
    <!-- Ambient glowing backdrop -->
    <div class="absolute -top-24 right-1/3 w-[500px] h-[500px] rounded-full bg-[#FF7F11]/5 blur-[140px] pointer-events-none"></div>
    <div class="absolute -bottom-24 left-1/3 w-[500px] h-[500px] rounded-full bg-[#FF7F11]/5 blur-[140px] pointer-events-none"></div>

    <UiContainer size="xl">
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
        <!-- Accent Top Bar -->
        <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7F11] via-[#FF9334] to-[#E66800]"></div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (6 cols): Headline, Narrative & Conversion CTA -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F2] border border-[#FF7F11]/25 text-[#FF7F11] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-ping"></span>
              <span>Not Sure Where To Start?</span>
            </div>

            <h2 class="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] tracking-tight leading-[1.08] uppercase">
              Take the free <br />
              <span class="bg-gradient-to-r from-[#FF7F11] via-[#FF9334] to-[#E66800] bg-clip-text text-transparent">
                Narayan Growth Assessment
              </span>
            </h2>

            <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed font-normal">
              Tell us where you are today, what you’re experiencing, and what you want to change. In under two minutes, receive a tailored growth diagnosis and your exact next step.
            </p>

            <!-- 3 Core Steps Process -->
            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3.5 p-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <div class="w-7 h-7 rounded-lg bg-[#FF7F11] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  1
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-bold text-[#1A1A1A]">Where You Are Today</div>
                  <div class="text-xs text-[#524F4E]">Establish your current baseline, habits, and career or personal state.</div>
                </div>
              </div>

              <div class="flex items-start gap-3.5 p-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <div class="w-7 h-7 rounded-lg bg-[#FF7F11] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  2
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-bold text-[#1A1A1A]">What You’re Experiencing</div>
                  <div class="text-xs text-[#524F4E]">Pinpoint burnout, bottlenecks, friction, or transition challenges.</div>
                </div>
              </div>

              <div class="flex items-start gap-3.5 p-3 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <div class="w-7 h-7 rounded-lg bg-[#FF7F11] text-white flex items-center justify-center font-mono font-bold text-xs shrink-0">
                  3
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-bold text-[#1A1A1A]">What You Want To Change</div>
                  <div class="text-xs text-[#524F4E]">Define your desired transformation, metrics, and dream outcome.</div>
                </div>
              </div>
            </div>

            <!-- Main Conversion Button -->
            <div class="pt-4">
              <NuxtLink
                to="/scorecard"
                class="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-lg shadow-[#FF7F11]/25 hover:shadow-xl hover:shadow-[#FF7F11]/35 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>FIND MY PATH</span>
                <svg
                  class="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </NuxtLink>
              <div class="flex items-center gap-4 text-[11px] font-mono text-[#8C8685] mt-3">
                <span>&bull; Takes under 2 mins</span>
                <span>&bull; 100% Free</span>
                <span>&bull; Instant Personalized Report</span>
              </div>
            </div>
          </div>

          <!-- Right Column (6 cols): Interactive Assessment Preview Card -->
          <div class="lg:col-span-6 bg-[#FBF6F6] border border-[#EAE4E4] rounded-2xl p-6 sm:p-8 shadow-md space-y-6 relative">
            <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4]">
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#8C8685] font-bold">Interactive Diagnostic Preview</div>
                <div class="text-base sm:text-lg font-bold text-[#1A1A1A] font-display">Personalized Growth Blueprint</div>
              </div>
              <div class="text-right">
                <div class="text-2xl sm:text-3xl font-bold font-display text-[#1A1A1A]">94<span class="text-sm font-normal text-[#8C8685]">/100</span></div>
                <div class="text-[10px] font-mono text-[#FF7F11] font-bold">Readiness Score</div>
              </div>
            </div>

            <!-- Metric Progress Bars -->
            <div class="space-y-3.5">
              <div class="space-y-1">
                <div class="flex items-center justify-between text-xs font-semibold">
                  <span class="text-[#1A1A1A]">Mind & Wellbeing Balance</span>
                  <span class="font-mono text-[#FF7F11] font-bold">88%</span>
                </div>
                <div class="w-full h-2 bg-white rounded-full overflow-hidden border border-[#EAE4E4]">
                  <div class="h-full rounded-full bg-[#FF7F11]" style="width: 88%"></div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="flex items-center justify-between text-xs font-semibold">
                  <span class="text-[#1A1A1A]">Career & Leadership Acceleration</span>
                  <span class="font-mono text-[#FF7F11] font-bold">76%</span>
                </div>
                <div class="w-full h-2 bg-white rounded-full overflow-hidden border border-[#EAE4E4]">
                  <div class="h-full rounded-full bg-[#FF7F11]" style="width: 76%"></div>
                </div>
              </div>

              <div class="space-y-1">
                <div class="flex items-center justify-between text-xs font-semibold">
                  <span class="text-[#1A1A1A]">Business & Execution Systems</span>
                  <span class="font-mono text-[#FF7F11] font-bold">92%</span>
                </div>
                <div class="w-full h-2 bg-white rounded-full overflow-hidden border border-[#EAE4E4]">
                  <div class="h-full rounded-full bg-[#FF7F11]" style="width: 92%"></div>
                </div>
              </div>
            </div>

            <!-- Instant Path Recommendation Card -->
            <div class="p-4 rounded-xl bg-white border border-[#FF7F11]/40 shadow-sm space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-mono font-bold uppercase text-[#FF7F11] bg-[#FFF8F2] px-2 py-0.5 rounded">
                  Recommended Next Step
                </span>
                <span class="text-[11px] font-mono text-[#8C8685]">Instant Match</span>
              </div>
              <div class="text-sm font-bold text-[#1A1A1A]">
                Mindful Performance & Executive Sprint
              </div>
              <p class="text-xs text-[#524F4E] leading-relaxed">
                Based on your inputs, this 4-week structured sprint provides the exact tools and 1:1 guidance to overcome your current bottleneck.
              </p>
            </div>

            <div class="text-[11px] text-[#8C8685] text-center font-mono border-t border-[#EAE4E4] pt-3">
              ⚡ Complete the 2-minute diagnostic to receive your instant report
            </div>
          </div>

        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
// Section 3: Narayan Growth Assessment
</script>
