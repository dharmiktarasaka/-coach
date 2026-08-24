<template>
  <div
    :class="[
      'rounded-2xl transition-all duration-300 relative overflow-hidden',
      variantStyles[variant],
      paddingStyles[padding],
      interactive ? 'hover:-translate-y-1 hover:border-[#FF7F11]/60 hover:shadow-xl cursor-pointer' : '',
      customClass
    ]"
  >
    <!-- Subtle top highlight line -->
    <div
      v-if="highlight"
      class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7F11] to-transparent"
    ></div>
    
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'glass' | 'solid' | 'raised' | 'bordered' | 'ghost'
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
    interactive?: boolean
    highlight?: boolean
    customClass?: string
  }>(),
  {
    variant: 'glass',
    padding: 'lg',
    interactive: false,
    highlight: false,
    customClass: ''
  }
)

const variantStyles = {
  glass: 'bg-white/95 backdrop-blur-md border border-[#EAE4E4] shadow-md text-[#1A1A1A]',
  solid: 'bg-white border border-[#EAE4E4] shadow-xl text-[#1A1A1A]',
  raised: 'bg-[#FBF6F6] border border-[#EAE4E4] shadow-sm text-[#1A1A1A]',
  bordered: 'bg-transparent border border-[#EAE4E4] hover:border-[#FF7F11]/60 text-[#1A1A1A]',
  ghost: 'bg-transparent border border-transparent text-[#1A1A1A]'
}

const paddingStyles = {
  none: 'p-0',
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-7',
  lg: 'p-8 sm:p-9',
  xl: 'p-10 sm:p-12'
}
</script>
