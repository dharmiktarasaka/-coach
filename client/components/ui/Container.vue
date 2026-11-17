<template>
  <div :class="['w-full mx-auto px-4 sm:px-6 lg:px-8', maxWidthClass, customClass]">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    customClass?: string
  }>(),
  {
    size: 'lg',
    customClass: ''
  }
)

const maxWidthClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'max-w-4xl'
    case 'md':
      return 'max-w-5xl'
    case 'lg':
      return 'max-w-7xl'
    case 'xl':
      return 'max-w-[1400px]'
    case 'full':
      return 'max-w-full'
    default:
      return 'max-w-7xl'
  }
})
</script>
