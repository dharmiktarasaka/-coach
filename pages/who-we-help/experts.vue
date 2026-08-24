<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help" class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-mono font-bold">&larr; All Profiles</NuxtLink>
            <span class="text-[#D5CDCD]">&bull;</span>
            <UiBadge variant="amber">For Authors, Specialists & Domain Leaders</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD A DURABLE BUSINESS <br />
            <span class="text-[#FF7F11]">AROUND WHAT YOU KNOW BEST.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            You have authored books, led major industry breakthroughs, or mastered a rare discipline. Now build an institutional enterprise engine that monetizes that intellectual property predictably.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take Free Expert Scorecard &rarr;
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
              The Monetization Void
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">The Famous but Under-Monetized Trap</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              Having profound domain recognition, published papers, or keynote invitations, but lacking a backend commercial engine. You get praised by peers but capture only a tiny fraction of the commercial value you generate.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#FF7F11]/40 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
              The Codified IP Ecosystem
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Multi-Tier Enterprise Monetization</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              We translate your tacit intellectual property into high-ticket institutional advisory, licensed diagnostic tools, cohort academies, and executive mastermind programs.
            </p>
          </div>
        </div>

        <!-- What We Build for Experts -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              What Digital Coach Builds for Domain Specialists
            </h3>
            <p class="text-sm text-[#524F4E]">
              Turning specialized intellectual property into an enduring commercial institution.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">01. Proprietary Methodology Framework</div>
              <p class="text-xs text-[#524F4E]">Transforming complex research into a branded, repeatable commercial diagnostic model.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">02. Tiered Mastermind & Advisory</div>
              <p class="text-xs text-[#524F4E]">Multi-tier program tracks enabling both group scale and high-margin 1-on-1 access.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">03. Institutional IP Licensing</div>
              <p class="text-xs text-[#524F4E]">Legal licensing packages permitting organizations to deploy your methodology internally.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">04. Automated Inbound Pipeline</div>
              <p class="text-xs text-[#524F4E]">A streamlined funnel converting book readers and keynote listeners into high-ticket clients.</p>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to build an enterprise asset around your expertise?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take the Expert Diagnostic &rarr;
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
  title: 'Business Architecture for Domain Specialists & Authors — Digital Coach',
  description: 'Learn how Digital Coach helps authors, thought leaders, and specialized experts turn tacit domain knowledge into multi-tier commercial ecosystems.'
})
</script>
