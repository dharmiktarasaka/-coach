<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <!-- Article Header -->
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Business Architecture</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            The Expert Business Operating System: Why Knowledge Alone Never Scales
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Many talented coaches believe their primary growth obstacle is marketing. In reality, the true bottleneck is almost always the lack of an underlying business operating system.
          </p>
        </header>

        <!-- Article Content -->
        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Self-Employed Trap in Expert Services</h2>
            <p>
              When a practitioner transitions from corporate leadership into coaching or consulting, they usually carry over their technical or domain competence. What they rarely carry over is organizational infrastructure.
            </p>
            <p>
              Without systems, every single client interaction requires the founder's physical calendar time. Invoices are dispatched manually, proposals are drafted from scratch for every conversation, and client progress notes live in scattered notebooks or WhatsApp threads.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-2">
            <div class="text-xs font-mono uppercase text-[#FF7F11] font-bold">Key Insight:</div>
            <p class="text-[#1A1A1A] font-medium">
              "A coaching practice is not an enterprise until it possesses standardized offer architecture, documented delivery SOPs, and predictable acquisition pipelines that function autonomously."
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 9 Foundational Layers of an Expert OS</h2>
            <p>
              At Digital Coach, we structure every expert business across nine integrated operational layers:
            </p>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Positioning:</strong> Declaring a distinct category-of-one market stance.</li>
              <li><strong class="text-[#1A1A1A]">Offer Architecture:</strong> Transforming hourly coaching into outcome-based milestone packages.</li>
              <li><strong class="text-[#1A1A1A]">Authority & IP:</strong> Publishing codified frameworks and diagnostic tools that pre-sell trust.</li>
              <li><strong class="text-[#1A1A1A]">Acquisition Engine:</strong> Multi-channel inbound and outbound pipelines that generate qualified leads.</li>
              <li><strong class="text-[#1A1A1A]">Diagnostic Conversion:</strong> Consultative triage enrollment scripts closing at 35%+.</li>
              <li><strong class="text-[#1A1A1A]">Leveraged Delivery:</strong> Asynchronous curriculum vaults and milestone tracking portals.</li>
              <li><strong class="text-[#1A1A1A]">Business Systems:</strong> Centralized CRM pipelines, automated payment flows, and SOPs.</li>
              <li><strong class="text-[#1A1A1A]">AI Leverage:</strong> Intelligence prompts that accelerate research and client synthesis.</li>
              <li><strong class="text-[#1A1A1A]">Sustainable Scale:</strong> Multi-tier program ecosystems and institutional licensing.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Action Matrix: Diagnostic Next Step</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Before investing time or money in generic social media campaigns, identify your primary operational bottleneck by taking our free diagnostic scorecard.
            </p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">
                Take Free Growth Scorecard &rarr;
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
  title: 'The Expert Business Operating System — Digital Coach',
  description: 'Learn why knowledge alone does not build a scalable business and how the 9-layer operating system transforms coaches into durable enterprises.'
})
</script>
