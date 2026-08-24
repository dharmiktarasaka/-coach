<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] min-h-screen text-[#1A1A1A]">
    <UiContainer size="xl">
      <!-- Header -->
      <UiSectionHeading
        tag="Engineering Methodology"
        tag-variant="amber"
        title="A BUSINESS-BUILDING PROCESS, NOT ANOTHER COURSE."
        subtitle="We build real operational infrastructure through an evidence-led sprint process. Here is the step-by-step methodology we use to architect, operationalize, and scale your expert business."
        size="xl"
        align="center"
        custom-class="mb-20"
      />

      <!-- 6-Stage Process Detailed Timeline -->
      <div class="space-y-12 max-w-4xl mx-auto mb-24">
        <div
          v-for="(step, idx) in processSteps"
          :key="step.title"
          class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden"
        >
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE4E4] mb-6">
            <div class="flex items-center gap-3">
              <span class="w-10 h-10 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 text-[#FF7F11] flex items-center justify-center font-mono text-sm font-bold">
                0{{ idx + 1 }}
              </span>
              <h2 class="font-display font-black text-2xl text-[#1A1A1A]">{{ step.title }}</h2>
            </div>
            <span class="text-xs font-mono text-[#8C8685] uppercase bg-[#FBF6F6] px-3 py-1 rounded-full border border-[#EAE4E4] shadow-sm font-bold">
              {{ step.phase }}
            </span>
          </div>

          <div class="space-y-4">
            <p class="text-sm sm:text-base text-[#524F4E] leading-relaxed">
              {{ step.description }}
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-1 shadow-sm">
                <div class="text-[11px] font-mono uppercase text-[#FF7F11] font-bold">Tactical Action:</div>
                <p class="text-xs text-[#524F4E] leading-relaxed font-medium">{{ step.action }}</p>
              </div>
              <div class="p-4 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-1 shadow-sm">
                <div class="text-[11px] font-mono uppercase text-[#1A1A1A] font-bold">Primary Asset Delivered:</div>
                <p class="text-xs text-[#1A1A1A] leading-relaxed font-bold">{{ step.deliverable }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- The 4-Element Multiplier Architecture -->
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-14 shadow-xl max-w-5xl mx-auto space-y-10">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <UiBadge variant="amber">System Synthesis</UiBadge>
          <h3 class="font-display font-black text-3xl text-[#1A1A1A]">How the Four Core Layers Work Together</h3>
          <p class="text-sm text-[#524F4E] leading-relaxed">
            A real expert business cannot function on any single pillar alone. We orchestrate human intelligence, proven frameworks, software pipelines, and AI leverage into one cohesive engine.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="flex items-center gap-2 text-[#1A1A1A] font-bold text-base font-display">
              <span class="text-[#FF7F11]">01.</span> Human Expertise
            </div>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              Your lived experience, clinical case work, domain insights, and unique intuitive judgment that cannot be synthesized by machines.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="flex items-center gap-2 text-[#1A1A1A] font-bold text-base font-display">
              <span class="text-[#FF7F11]">02.</span> Digital Coach Methodology
            </div>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              Our vetted 9-layer business blueprint, diagnostic enrollment scripts, and sprint playbooks refined across hundreds of client iterations.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="flex items-center gap-2 text-[#1A1A1A] font-bold text-base font-display">
              <span class="text-[#FF7F11]">03.</span> Software Infrastructure
            </div>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              Integrated CRM pipelines, automated client intake calendars, milestone delivery portals, and structured payment gateways.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="flex items-center gap-2 text-[#1A1A1A] font-bold text-base font-display">
              <span class="text-[#FF7F11]">04.</span> AI Operational Leverage
            </div>
            <p class="text-xs sm:text-sm text-[#524F4E] leading-relaxed">
              Proprietary intelligence prompt workflows for rapid intake synthesis, authority asset drafting, and client progress summaries.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Closer -->
      <div class="mt-20 text-center space-y-6">
        <h3 class="font-display font-black text-2xl sm:text-3xl text-[#1A1A1A]">
          Begin with Step 01: The Growth Diagnostic
        </h3>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <UiButton to="/scorecard" variant="primary" size="lg" custom-class="shadow-lg shadow-[#FF7F11]/25">
            Take Free Scorecard Now &rarr;
          </UiButton>
          <UiButton to="/workshop" variant="secondary" size="lg">
            Join Live Growth Workshop
          </UiButton>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
const processSteps = [
  {
    phase: 'Phase 1: Discovery',
    title: 'DIAGNOSE: Uncover Current Bottlenecks',
    description: 'We run your business through our rigorous 9-pillar diagnostic framework to assess current positioning clarity, offer leverage, pipeline predictability, and operational drag.',
    action: 'Complete the comprehensive diagnostic intake audit with our advisory team.',
    deliverable: 'Personalized Diagnostic Gap Report & Benchmark Analysis'
  },
  {
    phase: 'Phase 2: Strategy',
    title: 'DECIDE: Identify High-Impact Focus',
    description: 'Rather than trying to fix 10 things at once, we isolate the single core constraint that will generate 80% of your business growth over the next 90 days.',
    action: 'Align on priority roadmap and eliminate non-essential activities.',
    deliverable: '90-Day Priority Architecture Blueprint'
  },
  {
    phase: 'Phase 3: Construction',
    title: 'BUILD: Engineer Core Commercial Assets',
    description: 'We construct your flagship transformation program, consultative diagnostic enrollment scripts, and high-trust authority assets.',
    action: 'Codify intellectual property into structured milestone curricula and pricing tiers.',
    deliverable: 'High-Ticket Offer & Authority Assets'
  },
  {
    phase: 'Phase 4: Operations',
    title: 'OPERATIONALIZE: Install Systems & AI',
    description: 'We wire up automated qualification scorecards, CRM pipelines, client onboarding portals, and intelligent prompt agents.',
    action: 'Deploy centralized tech stack eliminating manual administrative hustle.',
    deliverable: 'Turnkey Software & AI Operating Engine'
  },
  {
    phase: 'Phase 5: Validation',
    title: 'TEST & ITERATE: Calibrate Market Conversion',
    description: 'We run focused validation campaigns with your ideal target clients, pressure-testing diagnostic conversion scripts and messaging.',
    action: 'Conduct structured client acquisition sprints and optimize funnel conversion metrics.',
    deliverable: 'Validated Client Acquisition Loop'
  },
  {
    phase: 'Phase 6: Scale',
    title: 'SCALE & LEVERAGE: Unlock Enterprise Value',
    description: 'We install team delegation playbooks, multi-tier continuity programs, and enterprise advisory licensing models.',
    action: 'Transition founder from delivery practitioner into high-altitude executive oversight.',
    deliverable: 'Durable Scalable Business Asset'
  }
]

useSeoMeta({
  title: 'How It Works — The Digital Coach Sprint Methodology',
  description: 'Learn the 6-stage engineering process we use to diagnose, build, operationalize, and scale your expert coaching or consulting business.'
})
</script>
