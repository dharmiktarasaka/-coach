<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Hero Header -->
        <div class="space-y-6 text-center max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/who-we-help" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Who We Help Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="amber" :dot="true">Audience Solution: Women Experts &amp; Leaders</UiBadge>
          </div>

          <h1 class="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-[1.08]">
            BUILD A BUSINESS AROUND <br />
            <span class="text-[#FF7F11]">WHAT YOU KNOW.</span>
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] leading-relaxed">
            For women leaders, senior executives, and domain specialists ready to transition from corporate glass ceilings to owning an independent, high-value advisory practice.
          </p>

          <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
              Start Business Scorecard &rarr;
            </UiButton>
            <UiButton to="/workshop" variant="secondary" size="lg">
              Register for Workshop
            </UiButton>
          </div>
        </div>

        <!-- Problem / Transformation Breakdown -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 shadow-xl space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-6 rounded-2xl bg-red-50/70 border border-red-100 space-y-3">
              <div class="text-xs font-mono uppercase text-red-600 font-bold flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                The Invisible Tax
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">Corporate Exhaustion &amp; Imposter Friction</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                Despite decades of high-impact corporate results, many women struggle with underpricing, over-delivering without compensation, and hesitation to aggressively market their intellectual property.
              </p>
            </div>

            <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 space-y-3">
              <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold flex items-center gap-2">
                <svg class="w-4 h-4 text-[#FF7F11]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                The Sovereign Enterprise
              </div>
              <h3 class="font-display font-black text-xl text-[#1A1A1A]">High-Authority Executive Advisory</h3>
              <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
                We codify your hard-won corporate wisdom into an unassailable signature methodology that commands executive respect, unapologetic premium retainers, and total autonomy.
              </p>
            </div>
          </div>

          <!-- 4 Pillars We Build -->
          <div class="space-y-4 pt-4 border-t border-[#EAE4E4]">
            <h3 class="font-display font-black text-2xl text-[#1A1A1A]">What Digital Coach Builds for Women Leaders</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">01. Proprietary Signature Framework</div>
                <p class="text-xs text-[#524F4E]">Transforming institutional corporate achievements into clear, branded intellectual property.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">02. Unapologetic Premium Pricing</div>
                <p class="text-xs text-[#524F4E]">Structuring high-ticket advisory tiers ($5,000–$15,000+) that reflect genuine commercial impact.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">03. Inbound Thought Leadership Engine</div>
                <p class="text-xs text-[#524F4E]">Authoritative distribution that attracts high-caliber clients without chasing or cold outreach.</p>
              </div>
              <div class="p-5 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="font-bold text-[#1A1A1A] text-sm">04. Boundary-Protected Operating System</div>
                <p class="text-xs text-[#524F4E]">Calendar and client delivery architectures designed to prevent overwork and safeguard personal life.</p>
              </div>
            </div>
          </div>

          <!-- Bottom CTA Block -->
          <div class="pt-6 border-t border-[#EAE4E4] text-center space-y-4">
            <h4 class="font-display font-black text-xl text-[#1A1A1A]">Ready to turn your domain experience into an independent asset?</h4>
            <div class="flex items-center justify-center gap-4">
              <UiButton to="/scorecard" variant="primary" size="md">
                Start Business Scorecard &rarr;
              </UiButton>
              <UiButton to="/apply" variant="secondary" size="md">
                Apply for Advisory
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
  title: 'Build a Business Around What You Know — Digital Coach',
  description: 'Helping women leaders and senior experts turn domain knowledge into high-value advisory businesses. Build your sovereign coaching practice.'
})
</script>
