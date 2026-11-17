<template>
  <div :class="['space-y-4', alignClass, customClass]">
    <div v-if="tag || $slots.tag" :class="tagWrapperClass">
      <slot name="tag">
        <UiBadge v-if="tag" :variant="tagVariant" :dot="tagDot">
          {{ tag }}
        </UiBadge>
      </slot>
    </div>

    <component
      :is="as"
      :class="[
        'font-display font-black tracking-tight text-[#1A1A1A]',
        titleSizeClass
      ]"
    >
      <slot name="title">{{ title }}</slot>
    </component>

    <p
      v-if="subtitle || $slots.subtitle"
      :class="[
        'text-[#524F4E] font-normal leading-relaxed',
        subtitleSizeClass,
        maxWidthClass
      ]"
    >
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    tag?: string
    tagVariant?: 'emerald' | 'indigo' | 'amber' | 'slate' | 'outline' | 'gold' | 'purple'
    tagDot?: boolean
    title?: string
    subtitle?: string
    align?: 'left' | 'center' | 'right'
    as?: 'h1' | 'h2' | 'h3' | 'h4'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    customClass?: string
  }>(),
  {
    tagVariant: 'amber',
    tagDot: true,
    align: 'center',
    as: 'h2',
    size: 'lg',
    customClass: ''
  }
)

const alignClass = computed(() => {
  switch (props.align) {
    case 'left': return 'text-left items-start'
    case 'right': return 'text-right items-end'
    case 'center':
    default:
      return 'text-center mx-auto items-center flex flex-col'
  }
})

const tagWrapperClass = computed(() => {
  if (props.align === 'left') return 'flex justify-start'
  if (props.align === 'right') return 'flex justify-end'
  return 'flex justify-center'
})

const titleSizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-xl sm:text-2xl lg:text-3xl'
    case 'md': return 'text-2xl sm:text-3xl lg:text-4xl'
    case 'lg': return 'text-3xl sm:text-4xl lg:text-5xl tracking-tight'
    case 'xl': return 'text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]'
    default: return 'text-3xl sm:text-4xl lg:text-5xl'
  }
})

const subtitleSizeClass = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-sm sm:text-base'
    case 'md': return 'text-base sm:text-lg'
    case 'lg': return 'text-base sm:text-lg'
    case 'xl': return 'text-base sm:text-lg md:text-xl'
    default: return 'text-base sm:text-lg'
  }
})

const maxWidthClass = computed(() => {
  if (props.align === 'center') return 'max-w-3xl mx-auto'
  return 'max-w-2xl'
})
</script>
