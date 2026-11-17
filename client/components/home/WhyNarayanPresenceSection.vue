<template>
  <section id="trust" class="py-20 md:py-32 bg-white border-t border-[#EAE4E4] relative overflow-hidden">
    <!-- Ambient background light -->
    <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#FF7F11]/5 rounded-full blur-[140px] pointer-events-none"></div>

    <UiContainer size="xl">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF8F2] border border-[#FF7F11]/25 text-[#FF7F11] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#FF7F11]"></span>
          <span>Trust & Governance</span>
        </div>

        <h2 class="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] tracking-tight uppercase leading-tight">
          Why Narayan Presence?
        </h2>

        <p class="text-base sm:text-lg text-[#524F4E] font-normal leading-relaxed">
          We operate with strict professional standards, evidence-informed frameworks, and unwavering integrity across all personal and organizational programs.
        </p>
      </div>

      <!-- 8 Trust Pillars Grid (4 cols on lg, 2 on md, 1 on sm) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(pillar, idx) in trustPillars"
          :key="pillar.title"
          class="group p-6 sm:p-7 rounded-2xl bg-[#FBF6F6] hover:bg-white border border-[#EAE4E4] hover:border-[#FF7F11] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
        >
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-white group-hover:bg-[#FFF8F2] border border-[#EAE4E4] group-hover:border-[#FF7F11]/30 flex items-center justify-center text-lg transition-all shadow-sm">
                {{ pillar.icon }}
              </div>
              <span class="font-mono text-xs font-bold text-[#8C8685] group-hover:text-[#FF7F11]">
                0{{ idx + 1 }}
              </span>
            </div>

            <h3 class="font-display font-bold text-lg text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors leading-snug">
              {{ pillar.title }}
            </h3>

            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              {{ pillar.description }}
            </p>
          </div>

          <div class="pt-4 mt-4 border-t border-[#EAE4E4] flex items-center gap-2 text-[11px] font-mono text-[#8C8685] font-semibold">
            <span class="w-1.5 h-1.5 rounded-full bg-[#FF7F11]"></span>
            <span>{{ pillar.tag }}</span>
          </div>
        </div>
      </div>

      <!-- Health & Mental Health Professional Standard Callout Banner -->
      <div class="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-[#FFF8F2] border border-[#FF7F11]/30 shadow-md max-w-4xl mx-auto space-y-3">
        <div class="flex items-center gap-2 text-[#FF7F11] font-mono text-xs uppercase font-bold tracking-wider">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Professional Boundaries & Clinical Integrity Standard
        </div>

        <h4 class="font-display font-black text-lg sm:text-xl text-[#1A1A1A]">
          Clear Claims & Verified Provider Qualifications
        </h4>

        <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed font-normal">
          For health, mindfulness, and emotional wellbeing topics, we maintain rigorous standards: claims are strictly evidence-informed, and provider qualifications are verified. Our coaching and educational tools are designed for personal empowerment and habit formation, with clear professional boundaries established for all engagements.
        </p>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
interface TrustPillar {
  icon: string
  title: string
  description: string
  tag: string
}

const trustPillars: TrustPillar[] = [
  {
    icon: '📐',
    title: 'Structured Methodology',
    description: 'Systematic frameworks and step-by-step blueprints that eliminate guesswork and build sustainable growth.',
    tag: 'Proven Process'
  },
  {
    icon: '🔍',
    title: 'Transparent Services',
    description: 'Clear scopes, upfront pricing, realistic timelines, and zero deceptive fine print or hidden fees.',
    tag: 'Total Clarity'
  },
  {
    icon: '🛡️',
    title: 'Appropriate Professional Boundaries',
    description: 'High ethical standards, client confidentiality, and clearly defined scopes of practice for every program.',
    tag: 'Ethical Practice'
  },
  {
    icon: '🎖️',
    title: 'Verified Experts Where Applicable',
    description: 'Qualified practitioners with vetted industry credentials, proven track records, and ongoing domain mastery.',
    tag: 'Vetted Quality'
  },
  {
    icon: '⚡',
    title: 'Practical Resources',
    description: 'Ready-to-implement workbooks, actionable journals, and high-utility digital tools built for immediate execution.',
    tag: 'Real Utility'
  },
  {
    icon: '🔒',
    title: 'Secure Purchasing',
    description: 'Enterprise-grade encryption, trusted payment gateways, and instant delivery of all digital assets.',
    tag: 'Encrypted & Safe'
  },
  {
    icon: '💬',
    title: 'Customer Support',
    description: 'Responsive, human customer support team ready to assist with account access, onboarding, and platform questions.',
    tag: 'Human Support'
  },
  {
    icon: '🔬',
    title: 'Evidence-Informed Content Where Appropriate',
    description: 'Grounded in validated behavioral research, cognitive science principles, and practical business realities.',
    tag: 'Research-Backed'
  }
]
</script>
