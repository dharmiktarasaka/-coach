<template>
  <span
    :class="[
      'inline-flex items-center font-bold tracking-wide uppercase transition-colors',
      variantStyles[variant],
      sizeStyles[size],
      customClass
    ]"
  >
    <span v-if="dot" class="w-1.5 h-1.5 rounded-full mr-1.5 animate-pulse" :class="dotColorClass"></span>
    <slot />
  </span>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'emerald' | 'indigo' | 'amber' | 'slate' | 'outline' | 'gold' | 'purple'
    size?: 'sm' | 'md' | 'lg'
    dot?: boolean
    customClass?: string
  }>(),
  {
    tagVariant: 'amber',
    variant: 'amber',
    size: 'sm',
    dot: true,
    customClass: ''
  }
)

const variantStyles = {
  purple: 'bg-[#FFF8F2] text-[#FF7F11] border border-[#FF7F11]/30 shadow-sm',
  indigo: 'bg-[#FFF8F2] text-[#FF7F11] border border-[#FF7F11]/30 shadow-sm',
  gold: 'bg-[#FFF8F2] text-[#FF7F11] border border-[#FF7F11]/40 shadow-sm',
  amber: 'bg-[#FFF8F2] text-[#FF7F11] border border-[#FF7F11]/40 shadow-sm',
  emerald: 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-sm',
  slate: 'bg-white text-[#524F4E] border border-[#EAE4E4] shadow-sm',
  outline: 'bg-transparent text-[#FF7F11] border border-[#FF7F11]/40'
}

const sizeStyles = {
  sm: 'text-[11px] px-3 py-1 rounded-full font-bold',
  md: 'text-xs px-3.5 py-1.5 rounded-full font-bold',
  lg: 'text-sm px-4 py-2 rounded-full font-bold'
}

const dotColorClass = computed(() => {
  switch (props.variant) {
    case 'emerald':
      return 'bg-emerald-500'
    case 'slate':
      return 'bg-[#8C8685]'
    case 'gold':
    case 'amber':
    case 'indigo':
    case 'purple':
    default:
      return 'bg-[#FF7F11]'
  }
})
</script>
