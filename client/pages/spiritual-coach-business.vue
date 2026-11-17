<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Conscious Leadership</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">7 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Build an Ethical, High-Income Spiritual & Mindset Coaching Business
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Bridge the gap between sacred wisdom and structured business operations. Learn how spiritual, intuitive, and mindfulness mentors create high-impact, sustainable coaching enterprises without compromising their values.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Spiritual Practitioner's Business Paradox</h2>
            <p>
              Many deeply gifted intuitive, meditation, and spiritual teachers struggle with a subconscious guilt around money, charging premium prices, and marketing their work. This leads to undercharging, over-giving, and eventual emotional exhaustion.
            </p>
            <p>
              In truth, charging sustainable fees and implementing structured business systems does not dilute spiritual integrity—it creates the energetic space, consistency, and stability required to deliver deep transformation.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Conscious Commerce Rule:</div>
            <p class="text-[#1A1A1A] font-medium">
              "When you build clear operational boundaries and structured programs, your clients take their own inner commitment far more seriously than when sessions are cheap and unstructured."
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Codifying Intuitive Work into Tangible Transformation</h2>
            <p>
              To help clients understand the profound value of your work, ground abstract concepts in tangible developmental stages:
            </p>
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-display font-bold text-sm text-[#1A1A1A]">Stage 1: Clearing Energetic & Subconscious Conditioning</h3>
                <p class="text-xs text-[#524F4E] mt-1">Identifying and unwinding generational trauma, self-worth blockages, and subconscious patterns.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-display font-bold text-sm text-[#1A1A1A]">Stage 2: Intuitive Realignment & Somatic Integration</h3>
                <p class="text-xs text-[#524F4E] mt-1">Developing grounded nervous system regulation, daily meditation routines, and inner guidance listening.</p>
              </div>
              <div class="p-4 rounded-xl bg-[#FBF6F6] border border-[#EAE4E4]">
                <h3 class="font-display font-bold text-sm text-[#1A1A1A]">Stage 3: Purpose-Driven Conscious Leadership</h3>
                <p class="text-xs text-[#524F4E] mt-1">Expressing authentic purpose through conscious career choices, harmonious relationships, and aligned leadership.</p>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Sustainable Delivery Architecture</h2>
            <p>
              Instead of draining your energy on back-to-back 1-on-1 sessions:
            </p>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li>Host intimate bi-weekly group energy/breathwork integration circles.</li>
              <li>Provide an on-demand audio vault of guided meditations and somatic exercises.</li>
              <li>Offer structured voice-note check-ins for real-time integration support.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Diagnose Your Spiritual Coaching Business</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take our Growth Scorecard to identify where operational systems can protect your energy and multiply your impact.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take the Conscious Business Scorecard &rarr;
              </UiButton>
            </div>
          </div>
        </div>

        <!-- Article Footer Share / Navigation -->
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
  title: 'How to Build a Spiritual Coaching Business — Digital Coach',
  description: 'Learn how spiritual, mindset, and intuitive coaches can create structured, ethical, and high-income flagship programs.',
  ogTitle: 'How to Build a High-Income Spiritual Coaching Business',
  ogDescription: 'Ethical, structured business systems for spiritual and mindset coaches.',
  keywords: 'spiritual coach business, how to start a spiritual coaching business, conscious business model, high ticket spiritual coaching, spiritual mentor packages'
})
</script>
