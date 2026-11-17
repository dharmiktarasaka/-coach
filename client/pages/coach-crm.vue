<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Systems Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            The Coach CRM: How to Manage High-Ticket Pipelines and Client Milestones
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Stop losing leads in messy spreadsheets and forgotten WhatsApp threads. Discover how a centralized Coach CRM manages application intake, call triage, and client milestones.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 4 Stages of a Coaching CRM Pipeline</h2>
            <div class="space-y-3">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">1. Inbound Leads / Applications</h3>
                <p class="text-xs text-[#524F4E] mt-1">Automatic lead scoring based on revenue tier, timeline urgency, and questionnaire answers.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">2. Diagnostic Call Scheduled</h3>
                <p class="text-xs text-[#524F4E] mt-1">Automated calendar syncing, prep homework delivery, and multi-channel reminder alerts.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">3. Proposal / Deposit Dispatched</h3>
                <p class="text-xs text-[#524F4E] mt-1">Tracks contract signatures, invoice views, and automated payment follow-up reminders.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-bold text-sm text-[#1A1A1A]">4. Active Client Onboarding & Milestones</h3>
                <p class="text-xs text-[#524F4E] mt-1">Instantly triggers portal account creation, welcome packet dispatch, and sprint tracker setup.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your CRM Pipeline Architecture</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose whether your pipeline infrastructure can support 50+ active clients.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Your Coach CRM &rarr;</UiButton>
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
  title: 'The Modern Coach CRM Blueprint — Digital Coach',
  description: 'How to build and organize a CRM for coaches. Manage pipelines, diagnostic calls, contracts, and student milestones systematically.',
  keywords: 'coach CRM, CRM for coaches, coaching client management software, best CRM for coaching business'
})
</script>
