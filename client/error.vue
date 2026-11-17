<template>
  <div class="min-h-screen flex flex-col justify-between bg-navy-950 text-slate-100 selection:bg-emerald-500 selection:text-navy-950">
    <LayoutHeader />

    <main class="flex-grow flex items-center justify-center py-32 px-4">
      <UiContainer size="sm">
        <div class="bg-navy-900 border border-white/[0.1] rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <!-- Background ambient glow -->
          <div class="absolute inset-0 bg-hero-gradient opacity-30 pointer-events-none"></div>

          <div class="space-y-3 relative z-10">
            <span class="font-mono text-4xl sm:text-5xl font-bold text-emerald-400">404</span>
            <h1 class="font-display text-2xl sm:text-3xl font-bold text-white">
              Page Not Found
            </h1>
            <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              The strategic resource or page you requested could not be located. Let's guide you back to the core business engine.
            </p>
          </div>

          <!-- Helpful Navigation Links -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto pt-4 relative z-10">
            <UiButton to="/" variant="secondary" size="md" block>
              Return to Homepage
            </UiButton>
            <UiButton to="/scorecard" variant="primary" size="md" block custom-class="shadow-glow-emerald">
              Take Free Scorecard
            </UiButton>
            <UiButton to="/resources" variant="outline" size="md" block>
              Explore Resources
            </UiButton>
            <UiButton to="/apply" variant="dark" size="md" block>
              Apply for Advisory
            </UiButton>
          </div>
        </div>
      </UiContainer>
    </main>

    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object
})

useSeoMeta({
  title: 'Page Not Found — Digital Coach',
  description: 'The requested page could not be found on Digital Coach.'
})
</script>
