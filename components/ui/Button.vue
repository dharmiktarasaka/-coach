<template>
  <component
    :is="to ? 'NuxtLink' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="to || href ? undefined : type"
    :class="[
      'inline-flex items-center justify-center font-medium transition-all duration-200 select-none group cursor-pointer',
      'focus:outline-none focus:ring-2 focus:ring-[#FF7F11]/50 focus:ring-offset-2 focus:ring-offset-[#FBF6F6]',
      'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      block ? 'w-full' : '',
      customClass
    ]"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <svg
      v-if="loading"
      class="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    <slot name="leading" />
    <slot />
    <slot name="trailing" />
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    type?: 'button' | 'submit' | 'reset'
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'dark'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    disabled?: boolean
    loading?: boolean
    block?: boolean
    customClass?: string
  }>(),
  {
    type: 'button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    block: false,
    customClass: ''
  }
)

defineEmits(['click'])

const variantStyles = {
  primary: 'bg-[#FF7F11] hover:bg-[#FF9334] text-white font-bold shadow-md shadow-[#FF7F11]/25 hover:shadow-lg hover:shadow-[#FF7F11]/35 active:scale-[0.98]',
  secondary: 'bg-white hover:bg-[#F5EFEF] text-[#1A1A1A] border border-[#EAE4E4] hover:border-[#FF7F11]/50 active:scale-[0.98] shadow-sm',
  outline: 'bg-transparent text-[#1A1A1A] border border-[#FF7F11] hover:bg-[#FFF8F2] active:scale-[0.98]',
  ghost: 'bg-transparent text-[#524F4E] hover:text-[#FF7F11] hover:bg-[#F5EFEF]',
  white: 'bg-white hover:bg-[#F5EFEF] text-[#1A1A1A] border border-[#EAE4E4] shadow-sm active:scale-[0.98]',
  dark: 'bg-[#1A1A1A] text-white hover:bg-[#262626] shadow-sm active:scale-[0.98]'
}

const sizeStyles = {
  sm: 'text-xs px-3.5 py-1.5 rounded-lg gap-1.5',
  md: 'text-sm px-5 py-2.5 rounded-lg gap-2',
  lg: 'text-base px-6 py-3.5 rounded-xl gap-2.5 font-bold',
  xl: 'text-lg px-8 py-4 rounded-xl gap-3 font-bold'
}
</script>
