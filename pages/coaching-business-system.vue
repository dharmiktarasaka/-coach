<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Systems & Scale</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">7 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            The Architecture of a Scalable Coaching Business System
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            How to decouple revenue from personal hours by constructing a centralized CRM pipeline, automated client tracking, and documented SOPs.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Why Solopreneurs Hit an Invisible Revenue Wall</h2>
            <p>
              Every solo practitioner encounters a mathematical ceiling: there are only 168 hours in a week. If acquiring, onboarding, delivering, billing, and supporting clients all require direct founder touch, your practice tops out at ₹3–₹8 Lakh per month while leaving you exhausted.
            </p>
            <p>
              Breaking through this ceiling does not mean working more hours; it means installing systems that handle repetitive operations autonomously.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Core Systems Stack</h2>
            <ul class="space-y-3 pl-2">
              <li class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4]">
                <strong class="text-[#FF7F11]">1. Centralized CRM Pipeline:</strong> Capturing every lead from scorecard, workshop, and referral into unified tracking stages.
              </li>
              <li class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4]">
                <strong class="text-[#FF7F11]">2. Automated Onboarding Sequence:</strong> Contract e-signing, invoice generation, LMS portal provisioning, and welcome checklist triggers.
              </li>
              <li class="p-4 rounded-xl bg-[#F5EFEF] border border-[#EAE4E4]">
                <strong class="text-[#FF7F11]">3. Milestone Delivery Portals:</strong> Allowing clients to submit assignments, view resources, and track progress asynchronously.
              </li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Systems Maturity</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to diagnose the systems layer of your practice.
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
  title: 'Coaching Business Systems Architecture — Digital Coach',
  description: 'Learn how to build scalable CRM pipelines, automated onboarding, and asynchronous delivery portals that decouple revenue from founder hours.'
})
</script>
