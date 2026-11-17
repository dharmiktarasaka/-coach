<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">Original Industry Data &bull; Annual Study</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            DIGITAL COACH <br />
            <span class="text-[#FF7F11]">BUSINESS RESEARCH.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Empirical benchmarks, pricing analysis, and structural failure modes across 1,200+ coaching and consulting practices. Evidence-based intelligence for building sustainable expertise businesses.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Benchmark Your Practice &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Attend Research Masterclass
            </UiButton>
          </div>
        </div>

        <!-- Research Findings Grid -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-12">
          <!-- 3 Benchmark Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2 text-center">
              <div class="font-mono text-4xl sm:text-5xl font-black text-[#FF7F11]">78%</div>
              <h3 class="font-display font-bold text-lg text-[#1A1A1A]">Hourly Trapped</h3>
              <p class="text-xs text-[#524F4E]">Of certified coaches still bill by the hour or single session, capping annual revenue under $60k.</p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2 text-center">
              <div class="font-mono text-4xl sm:text-5xl font-black text-[#FF7F11]">4.2x</div>
              <h3 class="font-display font-bold text-lg text-[#1A1A1A]">Retention Multiple</h3>
              <p class="text-xs text-[#524F4E]">Achieved when transitioning from unstructured advice to proprietary diagnostic audit frameworks.</p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2 text-center">
              <div class="font-mono text-4xl sm:text-5xl font-black text-[#FF7F11]">91%</div>
              <h3 class="font-display font-bold text-lg text-[#1A1A1A]">Proposal Ghosting</h3>
              <p class="text-xs text-[#524F4E]">Rate for customized consultant proposals without an upfront paid diagnostic phase.</p>
            </div>
          </div>

          <!-- Research Papers / Briefings -->
          <div class="space-y-6 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Core Industry Briefings</h3>

            <div class="space-y-4">
              <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono text-[#FF7F11] font-bold">Research Report 01</span>
                  <span class="text-xs font-mono text-[#8C8685]">PDF &bull; 24 Pages</span>
                </div>
                <h4 class="font-display font-bold text-xl text-[#1A1A1A]">The 2026 High-Ticket Advisory Pricing Index</h4>
                <p class="text-xs sm:text-sm text-[#524F4E]">Comprehensive pricing analysis across Life, Business, Career, Wellness, and Leadership coaching practices in India, US, and UK markets.</p>
              </div>

              <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-mono text-[#FF7F11] font-bold">Research Report 02</span>
                  <span class="text-xs font-mono text-[#8C8685]">PDF &bull; 18 Pages</span>
                </div>
                <h4 class="font-display font-bold text-xl text-[#1A1A1A]">Structural Failure Modes in Expert-Led Practices</h4>
                <p class="text-xs sm:text-sm text-[#524F4E]">Why 8 out of 10 transitioning corporate leaders stall at the $100k barrier and how institutional operating systems solve the bottleneck.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Where does your practice benchmark against the industry data?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Start Free Practice Scorecard &rarr;
              </UiButton>
              <UiButton to="/workshop" variant="secondary" size="md">
                Register for Workshop
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
  title: 'Digital Coach Business Research — Empirical Industry Benchmarks',
  description: 'Evidence-based benchmarks on coaching pricing, client acquisition funnels, and retention models across 1,200+ expert practices.'
})
</script>
