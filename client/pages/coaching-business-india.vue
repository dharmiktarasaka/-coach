<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Indian Market Strategy</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">10 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12]">
            Building a High-Ticket Coaching Business in India for the World
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            Why direct application of Western marketing funnels fails in India, and how forward-thinking Indian experts engineer systems for domestic trust and global export.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The Nuance of the Indian Expert Economy</h2>
            <p>
              The Indian knowledge market is experiencing explosive growth, but operating dynamics differ substantially from North American or European environments. In India, trust is highly relational, email open rates are notoriously low compared to WhatsApp engagement, and price anchoring requires strategic justification.
            </p>
            <p>
              Coaches who blindly import generic American sales funnels often find themselves with high opt-in costs, non-responsive leads, and immense price resistance during enrollment calls.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Three Crucial Strategic Adaptations</h2>
            <div class="space-y-4">
              <div class="p-5 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1.5">
                <h3 class="font-display text-base font-bold text-[#FF7F11]">1. WhatsApp-Led Diagnostic Qualification</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">Rather than relying on 7-day email sequences, deploy automated WhatsApp triage bots that verify applicant budget and schedule strategy calls seamlessly.</p>
              </div>

              <div class="p-5 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1.5">
                <h3 class="font-display text-base font-bold text-[#FF7F11]">2. Outcome-Anchored INR Pricing</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">Frame fees around high-impact ROI milestones (e.g. career promotion, revenue expansion) rather than arbitrary retainer numbers.</p>
              </div>

              <div class="p-5 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-1.5">
                <h3 class="font-display text-base font-bold text-[#FF7F11]">3. Cross-Border International Export Architecture</h3>
                <p class="text-xs sm:text-sm text-[#524F4E]">Structure your diagnostic IP and payment gateways (Stripe, Razorpay International) to seamlessly charge $3,000–$10,000 to clients in Dubai, Singapore, the US, and UK.</p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl bg-[#FFF8F2] border border-[#FF7F11]/30 space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Benchmark Your Practice in India</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">
              Take the free 5-minute Business Growth Scorecard to diagnose how well your practice is positioned for domestic scale and international expansion.
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
  title: 'Building a High-Ticket Coaching Business in India — Digital Coach',
  description: 'Learn how coaches and consultants in India navigate INR economics, WhatsApp sales triage, and build global export systems in USD and AED.'
})
</script>
