<template>
  <section class="py-20 md:py-32 bg-[#FBF6F6] border-y border-[#EAE4E4] relative overflow-hidden">
    <UiContainer size="xl">
      <!-- Section Heading: 10. THE PLATFORM PREVIEW -->
      <UiSectionHeading
        tag="What You’ll Work Inside"
        tag-variant="amber"
        title="YOUR STRATEGY SHOULDN’T LIVE IN A NOTEBOOK."
        subtitle="A first look at the Digital Coach workspace — your strategy, milestones, systems, and AI advisor in one place, instead of scattered across ten tabs and a diary."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- Premium Dashboard Mockup -->
      <div class="max-w-5xl mx-auto bg-white border border-[#EAE4E4] rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <!-- Mockup Window Bar -->
        <div class="flex items-center justify-between pb-4 border-b border-[#EAE4E4] mb-6">
          <div class="flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-red-400"></span>
            <span class="w-3 h-3 rounded-full bg-amber-400"></span>
            <span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 font-mono text-xs text-[#8C8685]">app.digitalcoach.com &bull; Business Workspace</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono text-white bg-[#FF7F11] px-2.5 py-0.5 rounded font-bold">
              Dashboard Highlights
            </span>
          </div>
        </div>

        <!-- Dashboard Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- Col 1: Business Score & Current Focus -->
          <div class="space-y-6">
            <!-- Business Score Card -->
            <div class="bg-[#FBF6F6] border border-[#EAE4E4] rounded-2xl p-5 space-y-3 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#8C8685] font-bold">Business Health Score</div>
              <div class="flex items-baseline gap-2">
                <span class="text-4xl font-black font-display text-[#1A1A1A]">68</span>
                <span class="text-[#8C8685] text-sm">/ 100</span>
              </div>
              <div class="w-full bg-white h-2 rounded-full overflow-hidden border border-[#EAE4E4]">
                <div class="bg-[#FF7F11] h-full w-[82%] rounded-full shadow-[0_0_8px_#FF7F11]"></div>
              </div>
              <div class="text-xs text-[#524F4E] font-medium">Strongest in positioning (82%)</div>
            </div>

            <!-- Current Focus Card -->
            <div class="bg-[#FFF8F2] border border-[#FF7F11]/40 rounded-2xl p-5 space-y-2 shadow-sm">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">This Sprint</div>
              <div class="text-lg font-bold text-[#1A1A1A] font-display">Signature Program</div>
              <p class="text-xs text-[#524F4E]">Turning hourly advising into a 3-tier signature program.</p>
              <div class="text-xs text-[#FF7F11] font-bold pt-1">&rarr; In Progress</div>
            </div>
          </div>

          <!-- Col 2: Strategic Roadmap & Tasks -->
          <div class="bg-[#FBF6F6] border border-[#EAE4E4] rounded-2xl p-5 space-y-4 shadow-sm">
            <div class="flex items-center justify-between border-b border-[#EAE4E4] pb-3">
              <div class="text-xs font-mono uppercase text-[#8C8685] font-bold">Roadmap</div>
              <span class="text-xs font-bold text-[#FF7F11] font-mono">42% Complete</span>
            </div>

            <!-- Roadmap Milestones -->
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs p-2.5 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 text-[#FF7F11] font-bold">
                <span>01. Positioning Done</span>
                <span>&check; Complete</span>
              </div>
              <div class="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white border border-[#EAE4E4] text-[#1A1A1A] font-semibold">
                <span>02. Offer Pricing</span>
                <span class="text-[#FF7F11] font-bold">In Progress</span>
              </div>
              <div class="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white border border-[#EAE4E4] text-[#8C8685]">
                <span>03. Client Pipeline</span>
                <span>Queued</span>
              </div>
              <div class="flex items-center justify-between text-xs p-2.5 rounded-xl bg-white border border-[#EAE4E4] text-[#8C8685]">
                <span>04. System Delivery</span>
                <span>Queued</span>
              </div>
            </div>

            <div class="pt-2 border-t border-[#EAE4E4] flex items-center justify-between text-xs text-[#8C8685]">
              <span>Next sprint:</span>
              <span class="text-[#1A1A1A] font-bold truncate">Packaging Offer Milestones</span>
            </div>
          </div>

          <!-- Col 3: AI Advisor -->
          <div class="bg-[#FBF6F6] border border-[#EAE4E4] rounded-2xl p-5 space-y-4 flex flex-col justify-between text-[#1A1A1A] shadow-sm">
            <div class="space-y-3">
              <div class="flex items-center gap-2 border-b border-[#EAE4E4] pb-3">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF7F11] animate-pulse"></span>
                <span class="text-xs font-mono uppercase text-[#FF7F11] font-bold">AI Advisor</span>
              </div>

              <!-- Chat bubble preview -->
              <div class="space-y-2.5 text-xs">
                <div class="p-3 rounded-xl bg-white border border-[#EAE4E4] text-[#524F4E] leading-relaxed shadow-sm font-medium">
                  "Based on your intake data, you can raise your price ~30% once you separate self-paced modules from your 1-on-1 time."
                </div>
                <div class="p-2.5 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/25 text-[#6B6665] italic">
                  "Ask me about your offer packaging, lead conversion, or SOP automation..."
                </div>
              </div>
            </div>

            <div class="pt-3 border-t border-[#EAE4E4] text-[11px] text-[#FF7F11] font-mono flex items-center justify-between font-bold">
              <span>Model: Tuned on Digital Coach Method</span>
            </div>
          </div>
        </div>

        <!-- Note footer -->
        <div class="mt-6 pt-4 border-t border-[#EAE4E4] text-center text-xs text-[#8C8685] font-mono">
          Illustration only. The full workspace is available to enrolled members.
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
// Platform visual mockup in #FBF6F6 palette
</script>
