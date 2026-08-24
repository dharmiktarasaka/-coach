<template>
  <div class="min-h-screen flex flex-col bg-[#FBF6F6] text-[#1A1A1A] selection:bg-[#FF7F11] selection:text-[#FFFFFF]">
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
// Default master layout in #FBF6F6 & #FF7F11 luxury light theme
</script>
