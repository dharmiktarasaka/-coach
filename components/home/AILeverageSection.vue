<template>
  <section class="py-20 md:py-32 relative overflow-hidden bg-[#FBF6F6] border-t border-[#EAE4E4]">
    <UiContainer size="xl">
      <!-- Section Heading: 11. AI LEVERAGE -->
      <UiSectionHeading
        tag="Smart, Not Gimmicky"
        tag-variant="amber"
        title="AI SHOULD GIVE YOUR EXPERTISE LEVERAGE — NOT REPLACE IT."
        subtitle="We don’t bolt on a novelty chatbot. We use AI as a quiet engine behind the scenes — amplifying your thinking, killing admin work, and helping you deliver to more clients without lowering your standards."
        size="lg"
        align="center"
        custom-class="mb-16"
      />

      <!-- The Leverage Equation -->
      <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 mb-16 shadow-xl">
        <div class="text-center font-mono text-xs uppercase tracking-wider text-[#FF7F11] font-bold mb-8">
          The Leverage Equation
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center text-center">
          <!-- Step 1 -->
          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="text-xs font-mono text-[#8C8685] uppercase font-bold">Element 01</div>
            <div class="font-display text-xl font-black text-[#1A1A1A]">Your Expertise</div>
            <p class="text-xs text-[#524F4E]">Authentic insights & years of tacit judgment.</p>
          </div>

          <div class="hidden md:flex justify-center text-2xl font-black text-[#FF7F11]">+</div>

          <!-- Step 2 -->
          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="text-xs font-mono text-[#8C8685] uppercase font-bold">Element 02</div>
            <div class="font-display text-xl font-black text-[#1A1A1A]">Our Method</div>
            <p class="text-xs text-[#524F4E]">The proven 9-layer framework and playbooks.</p>
          </div>

          <div class="hidden md:flex justify-center text-2xl font-black text-[#FF7F11]">+</div>

          <!-- Step 3 -->
          <div class="p-6 rounded-2xl bg-[#FBF6F6] border border-[#EAE4E4] space-y-2 shadow-sm">
            <div class="text-xs font-mono text-[#8C8685] uppercase font-bold">Element 03</div>
            <div class="font-display text-xl font-black text-[#FF7F11]">AI Operating Layer</div>
            <p class="text-xs text-[#524F4E]">Smart assistance for research, prep, and follow-up.</p>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[#EAE4E4] text-center">
          <div class="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/40 text-[#1A1A1A] font-display text-base sm:text-lg font-black shadow-md">
            <span>=</span>
            <span class="text-[#FF7F11]">Growth that isn’t capped by your hours.</span>
          </div>
        </div>
      </div>

      <!-- WHERE AI DOES THE WORK FOR YOU -->
      <div class="text-center max-w-2xl mx-auto mb-10">
        <div class="text-xs font-mono uppercase tracking-widest text-[#FF7F11] font-bold">Practical Workflows</div>
        <h3 class="font-display font-black text-2xl text-[#1A1A1A] mt-1">Where AI Does The Work For You</h3>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="item in aiUseCases"
          :key="item.title"
          class="p-6 rounded-2xl bg-white border border-[#EAE4E4] hover:border-[#FF7F11]/60 transition-all duration-200 group shadow-md"
        >
          <div class="flex items-center gap-3 mb-3">
            <span class="w-8 h-8 rounded-lg bg-[#FF7F11]/15 border border-[#FF7F11]/40 text-[#FF7F11] flex items-center justify-center font-mono text-xs font-bold">
              {{ item.code }}
            </span>
            <h4 class="font-display text-base font-bold text-[#1A1A1A] group-hover:text-[#FF7F11] transition-colors">
              {{ item.title }}
            </h4>
          </div>
          <p class="text-xs text-[#524F4E] leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const aiUseCases = [
  {
    code: '01',
    title: 'Intake Bottleneck Flags',
    description: 'Reads your intake forms and flags each new client’s real bottleneck in seconds.'
  },
  {
    code: '02',
    title: 'Deep Market Research',
    description: 'Does the market research — trends, gaps, and buyer pain — without you losing 40 hours to forums.'
  },
  {
    code: '03',
    title: 'Content & IP Structuring',
    description: 'Structures your ideas into authority content, frameworks, and newsletters.'
  },
  {
    code: '04',
    title: 'Outcome-Tied Offer Modeling',
    description: 'Models your offer — milestones, pricing, and scope tied to real outcomes.'
  },
  {
    code: '05',
    title: 'Pre-Call Lead Qualification',
    description: 'Qualifies leads against your criteria before you ever get on a call.'
  },
  {
    code: '06',
    title: 'Consultation Briefing Prep',
    description: 'Preps your consultations with a briefing and the right questions for each prospect.'
  },
  {
    code: '07',
    title: 'Action Steps & Call Summaries',
    description: 'Turns call recordings into clean action steps and client summaries.'
  },
  {
    code: '08',
    title: 'Automated SOP Generation',
    description: 'Writes your SOPs by documenting how you already work.'
  },
  {
    code: '09',
    title: 'Pipeline Health & Metrics',
    description: 'Reads your numbers — pipeline health, conversion, retention — and tells you what’s moving.'
  }
]
</script>
