<template>
  <div class="py-32 md:py-40 bg-[#FBF6F6] text-[#1A1A1A]">
    <UiContainer size="md">
      <article class="space-y-12">
        <header class="space-y-6 text-center">
          <div class="flex items-center justify-center gap-2">
            <NuxtLink to="/resources" class="text-xs text-[#524F4E] hover:text-[#FF7F11] font-mono">&larr; Resource Hub</NuxtLink>
            <span class="text-[#8C8685]">&bull;</span>
            <UiBadge variant="brand">Getting Started</UiBadge>
            <span class="text-[#8C8685]">&bull;</span>
            <span class="text-xs font-mono text-[#524F4E]">8 min read</span>
          </div>

          <h1 class="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-[1.15]">
            How to Start a Highly Profitable Coaching Business From Home
          </h1>

          <p class="text-base sm:text-lg text-[#524F4E] max-w-2xl mx-auto leading-relaxed">
            The beginner-to-scale roadmap for professionals, executives, and experts looking to launch a 6-figure home-based coaching practice with a laptop and wifi.
          </p>
        </header>

        <div class="bg-white border border-[#EAE4E4] rounded-3xl p-8 sm:p-12 space-y-8 text-[#524F4E] leading-relaxed text-sm sm:text-base shadow-sm">
          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">Why Home-Based Coaching is the Ultimate Lifestyle Business</h2>
            <p>
              Starting a coaching business from home requires zero inventory, zero physical real estate, and virtually zero upfront capital. By packaging your existing professional knowledge into a structured digital framework, you can begin serving high-paying clients worldwide immediately.
            </p>
          </div>

          <div class="space-y-4">
            <h2 class="font-display text-2xl font-bold text-[#1A1A1A]">The 6-Step Launch Checklist</h2>
            <ol class="list-decimal pl-5 space-y-3 text-[#524F4E]">
              <li><strong class="text-[#1A1A1A]">Select Your Niche:</strong> Choose an urgent, high-value problem you have previously solved in your career.</li>
              <li><strong class="text-[#1A1A1A]">Design Your Flagship Offer:</strong> Package the solution into a 90-day transformation priced between $1,500 and $5,000.</li>
              <li><strong class="text-[#1A1A1A]">Set Up Minimalist Tech:</strong> Laptop, clean microphone, Zoom/Google Meet, and Stripe/Razorpay for payment collection.</li>
              <li><strong class="text-[#1A1A1A]">Publish Authority Breakdowns:</strong> Post 3 high-value case studies or tactical essays per week on LinkedIn or YouTube.</li>
              <li><strong class="text-[#1A1A1A]">Conduct 10 Discovery Calls:</strong> Practice consultative diagnostic enrollment to sign your first 3 beta clients.</li>
              <li><strong class="text-[#1A1A1A]">Codify Your Delivery:</strong> Document your process into worksheets and recorded modules as you deliver.</li>
            </ol>
          </div>

          <div class="p-6 rounded-2xl bg-[#F5EFEF] border border-[#EAE4E4] space-y-3">
            <h3 class="font-display text-lg font-bold text-[#1A1A1A]">Check Your Home Coaching Readiness</h3>
            <p class="text-xs sm:text-sm text-[#524F4E]">Take our free Growth Scorecard to diagnose which foundational layer to focus on first.</p>
            <div class="pt-2">
              <UiButton to="/scorecard" variant="primary" size="md">Take Free Readiness Scorecard &rarr;</UiButton>
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
  title: 'How to Start a Coaching Business from Home — Digital Coach',
  description: 'Complete step-by-step beginner guide to launching a profitable high-ticket coaching business from home with zero overhead.',
  keywords: 'start coaching business from home, how to start a coaching business from home, home based coaching practice, online coach from home'
})
</script>
