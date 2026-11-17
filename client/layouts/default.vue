<template>
  <div class="min-h-screen flex flex-col bg-[#FAFAFA] text-[#0D1431]">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Master layout with clean Header and Footer in brand theme
</script>
