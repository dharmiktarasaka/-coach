<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">AI Intelligence</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            AI Leverage for Modern Coaches: The Intelligent Operating Layer
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How forward-thinking coaches deploy custom AI intelligence across market research, offer modeling, intake synthesis, and SOP generation without losing their human voice.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">AI as an Operating Multiplier, Not a Chatbot Toy</h2>
            <p>
              Most coaches make the mistake of using AI purely for writing generic social media posts. This creates bland, commoditized content that repels high-value clients.
            </p>
            <p>
              True leverage occurs when AI is deployed as an internal operating layer: synthesizing long client call recordings into structured action briefs, generating tailored diagnostic questions, and converting tacit workflows into standard operating procedures.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">5 High-Impact AI Use Cases for Experts</h2>
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">1. Intake Questionnaire Synthesis</div>
                <p class="text-xs text-[#524F4E]">Extracting core bottlenecks and preparing custom diagnostic call outlines in 30 seconds.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">2. Call Recording Transcripts to Milestone Briefs</div>
                <p class="text-xs text-[#524F4E]">Turning 60-minute coaching calls into executive summary action sheets and checklist items.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">3. Custom Framework Prompt Libraries</div>
                <p class="text-xs text-[#524F4E]">Training prompt architectures on your proprietary IP to assist clients asynchronously.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">4. Standard Operating Procedure (SOP) Generation</div>
                <p class="text-xs text-[#524F4E]">Documenting internal onboarding and operational steps automatically for team members.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1">
                <div class="font-bold text-[#FF7F11] text-sm">5. Authority Content Repurposing</div>
                <p class="text-xs text-[#524F4E]">Translating deep client case breakthroughs into structured essays and newsletters.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Measure Your AI Operational Readiness</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to diagnose how AI can multiply your coaching leverage.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Free Growth Scorecard &rarr;
              </UiButton>
            </div>
          </div>
        </div>

        <footer class="border-t border-[#EAE4E4] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <NuxtLink to="/resources" class="text-xs font-semibold text-[#FF7F11] hover:text-[#E66800]">&larr; Back to Resource Hub</NuxtLink>
          <div class="flex items-center gap-3">
            <UiButton to="/workshop" variant="secondary" size="sm">Attend Live Workshop</UiButton>
            <UiButton to="/apply" variant="primary" size="sm">Apply for Advisory</UiButton>
          </div>
        </footer>
      </article>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'AI Leverage & Intelligence for Coaches — Digital Coach',
  description: 'Learn how coaches use AI as an operational layer to synthesize client intake, automate delivery briefs, and scale business operations.'
})
</script>
