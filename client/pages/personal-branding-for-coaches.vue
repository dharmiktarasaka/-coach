<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Authority Building</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            Personal Branding for Coaches: Turning Expertise into Category Authority
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Personal branding for coaches is not about posting motivational selfies. It is about publishing codified frameworks and proprietary insights that command respect and pre-sell your high-ticket offers.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 3 Pillars of Executive Authority</h2>
            <ul class="list-disc pl-5 space-y-2 text-[#524F4E]">
              <li><strong>Named Proprietary Models:</strong> Give distinct intellectual property names to your core methodologies (e.g. <em>The 9-Layer Expert OS</em>).</li>
              <li><strong>Contrarian Industry Stances:</strong> Clearly articulate what the mainstream industry gets completely wrong about your domain.</li>
              <li><strong>Teardown Case Studies:</strong> Show the messy before, strategic middle, and triumphant after of real client engagements.</li>
            </ul>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Audit Your Authority Score</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to evaluate how your personal brand authority ranks.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Audit Authority &rarr;</UiButton>
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
  title: 'Personal Branding for Coaches — Digital Coach',
  description: 'Learn how to build a high-ticket personal brand for coaching. Frameworks, LinkedIn positioning, and authority publishing.',
  keywords: 'personal branding for coaches, coach personal brand, executive branding for coaches, authority marketing for coaches'
})
</script>
