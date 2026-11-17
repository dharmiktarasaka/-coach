<template>
  <div class="py-28 md:py-36 bg-[#FAFAFA] min-h-screen text-[#0D1431]">
    <UiContainer size="lg">
      <div class="space-y-16">
        <!-- Header -->
        <div class="space-y-4 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#171844] text-[#F8D78B] text-xs font-semibold uppercase tracking-wider border border-[#F8D78B]/30">
            Real Impact
          </div>
          <h1 class="font-display font-extrabold text-4xl sm:text-5xl text-[#171844] tracking-tight">
            Client Testimonials & Stories
          </h1>
          <p class="text-base sm:text-lg text-[#352D47] leading-relaxed">
            Read firsthand accounts from founders, leaders, and creative professionals who transformed their inner life and professional trajectory.
          </p>
        </div>

        <!-- Testimonials Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="t in testimonials"
            :key="t.author"
            class="p-8 rounded-3xl bg-white border border-[#EAE2D4] shadow-sm flex flex-col justify-between space-y-6"
          >
            <div class="space-y-3">
              <div class="flex text-[#F8D78B]">
                ★★★★★
              </div>
              <p class="text-sm text-[#352D47] leading-relaxed italic">
                "{{ t.quote }}"
              </p>
            </div>
            <div class="pt-4 border-t border-[#EAE2D4]/70">
              <div class="font-bold text-[#171844] text-sm">{{ t.author }}</div>
              <div class="text-xs text-[#8C6D57]">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Testimonials — Narayan Presence',
  description: 'Reviews and transformation stories from coaching and course clients.'
})

const testimonials = [
  {
    quote: 'Working with Narayan completely shifted how I make high-stakes executive decisions. The mental clarity I gained saved my startup and restored my peace of mind.',
    author: 'Aarav Mehta',
    role: 'Founder & CEO, TechVentures'
  },
  {
    quote: 'The Presence Circle membership is the single best investment I make into my emotional wellbeing every month. The depth of insight is incomparable.',
    author: 'Priya Sundaram',
    role: 'Product Lead, Global Design Co'
  },
  {
    quote: 'The retreat in Rishikesh was a watershed moment in my life. I learned how to stand firmly in my own center without reacting to external chaos.',
    author: 'David Chen',
    role: 'Managing Director, Horizon Capital'
  }
]
</script>
