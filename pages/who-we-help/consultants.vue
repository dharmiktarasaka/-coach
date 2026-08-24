<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help" class="text-xs text-[#8C8685] hover:text-[#FF7F11] font-mono font-bold">&larr; All Profiles</NuxtLink>
            <span class="text-[#D5CDCD]">&bull;</span>
            <UiBadge variant="amber">For Independent & Boutique Consultants</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            TURN BESPOKE ADVISORY INTO A <br />
            <span class="text-[#FF7F11]">REPEATABLE TRANSFORMATION ASSET.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            Eliminate 20-page customized proposals that get ghosted. Productize your domain expertise into proprietary diagnostic IP, structured transformation sprints, and premium retainers.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Take Free Consultant Diagnostic &rarr;
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
              The Custom Proposal Fatigue
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">The Bespoke Consulting Trap</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              Spending 15 hours crafting detailed technical proposals for corporate buyers who shop your ideas to cheaper vendors. Severe scope creep during project execution, zero recurring revenue, and total dependence on past employer connections.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#FF7F11]/40 shadow-md space-y-4">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#FF7F11] animate-pulse"></span>
              The Productized Advisory Engine
            </div>
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">Standardized Diagnostic Sprints</h3>
            <p class="text-sm text-[#524F4E] leading-relaxed">
              We help you package your consulting process into a paid diagnostic assessment phase followed by phased execution sprints. Clients buy proven outcome certainty with locked boundaries and premium margins.
            </p>
          </div>
        </div>

        <!-- What We Build for Consultants -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
              What Digital Coach Builds for Consultants
            </h3>
            <p class="text-sm text-[#524F4E]">
              Specific operational assets engineered to replace unpredictable RFP bidding with authoritative inbound advisory demand.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">01. Paid Diagnostic IP Asset</div>
              <p class="text-xs text-[#524F4E]">A standardized assessment audit that gets you paid to scope prospective client projects.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">02. Tiered Implementation Sprints</div>
              <p class="text-xs text-[#524F4E]">Fixed outcome milestone packages with non-negotiable scope guardrails.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">03. Executive Advisory Retainers</div>
              <p class="text-xs text-[#524F4E]">High-altitude monthly advisory contracts commanding predictable monthly recurring cash flow.</p>
            </div>
            <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1">
              <div class="font-bold text-[#1A1A1A] text-sm">04. Inbound Authority Distribution</div>
              <p class="text-xs text-[#524F4E]">Category-defining whitepapers and case breakdowns that attract enterprise decision-makers.</p>
            </div>
          </div>

          <!-- Bottom CTA -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to productize your consulting practice?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Diagnose Your Practice in 5 Minutes &rarr;
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
  title: 'Consulting Business Architecture — Digital Coach',
  description: 'Learn how Digital Coach helps boutique and independent consultants productize their advisory and command premium retainers.'
})
</script>
