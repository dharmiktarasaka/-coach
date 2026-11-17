<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <UiBadge variant="amber" :dot="true">Proprietary Software Engine &bull; Private Beta</UiBadge>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            YOUR BUSINESS GROWTH <br />
            <span class="text-[#FF7F11]">OPERATING SYSTEM.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            The all-in-one platform built specifically for high-ticket coaches, consultants, and experts. Manage your client diagnostics, pipeline qualification, milestone delivery, and IP distribution in one sovereign command center.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/apply" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Join the Platform Waitlist &rarr;
            </UiButton>
            <UiButton to="/apply" variant="secondary" size="lg">
              Client Login / Access
            </UiButton>
          </div>
        </div>

        <!-- Platform Mockup / Capabilities Grid -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-12">
          <!-- 3 Core Engines -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] font-mono font-bold">
                01
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Diagnostic Engine</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Automated multi-step client audits that benchmark prospect friction across the 9 business layers and produce instant visual bottleneck reports.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] font-mono font-bold">
                02
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Milestone Portal</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Asynchronous curriculum and asset delivery with locked progressive milestones, client accountability check-ins, and direct feedback loops.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-3">
              <div class="w-10 h-10 rounded-xl bg-[#FFF8F2] border border-[#FF7F11]/40 flex items-center justify-center text-[#FF7F11] font-mono font-bold">
                03
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">AI Synthesis Layer</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Semantic search across your entire intellectual property library, auto-generating bespoke sprint plans and executive summaries for each client.
              </p>
            </div>
          </div>

          <!-- Feature Highlights -->
          <div class="p-8 rounded-2xl bg-[#140024] text-white space-y-6">
            <div class="space-y-2">
              <span class="text-xs font-mono uppercase tracking-widest text-[#FF7F11] font-bold">Architecture Preview</span>
              <h3 class="font-display font-black text-2xl sm:text-3xl">Engineered for Sovereign Advisory Ownership</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-neutral-300">
              <div class="flex items-start gap-2">
                <span class="text-[#FF7F11] font-bold">&check;</span>
                <span>White-labeled client portal with customized domain and branding.</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-[#FF7F11] font-bold">&check;</span>
                <span>Real-time lead qualification and automated Cal.com booking sync.</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-[#FF7F11] font-bold">&check;</span>
                <span>Automated weekly executive digest tracking pipeline health and client status.</span>
              </div>
              <div class="flex items-start gap-2">
                <span class="text-[#FF7F11] font-bold">&check;</span>
                <span>Enterprise GDPR and DPDP compliance with client data isolation.</span>
              </div>
            </div>
          </div>

          <!-- Bottom Waitlist Trigger -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to centralize your practice onto one intelligent operating system?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/apply" variant="primary" size="md">
                Join Platform Waitlist &rarr;
              </UiButton>
              <UiButton to="/scorecard" variant="secondary" size="md">
                Take Business Scorecard
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
  title: 'AI Platform — Your Business Growth Operating System',
  description: 'The all-in-one software platform for high-ticket coaches, consultants, and experts. Manage diagnostics, milestone delivery, and client pipelines.'
})
</script>
