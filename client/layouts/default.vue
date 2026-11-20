<template>
  <div
    class="min-h-screen flex flex-col transition-colors duration-300"
    :class="isDark ? 'bg-[#0f1233] text-[#F8F5EF]' : 'bg-[#FAFAFA] text-[#0D1431]'"
  >
    <LayoutHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark } = useTheme()
</script>
