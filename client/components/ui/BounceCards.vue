<template>
  <div
    ref="rootRef"
    :class="['bounce-cards', className]"
    :style="containerStyle"
  >
    <div
      v-for="(card, i) in cards"
      :key="i"
      :ref="(el) => { if (el) cardRefs[i] = el as HTMLElement }"
      :class="['bounce-cards__card', 'bounce-cards__card--clickable']"
      :style="{ zIndex: i + 1 }"
      role="button"
      :tabindex="0"
      :aria-label="card.alt || `Card ${i + 1}`"
    >
      <img
        v-if="card.src"
        :src="card.src"
        :alt="card.alt || ''"
        draggable="false"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'

export interface CardItem {
  src: string
  alt?: string
}

const PATTERN = [1, 0.5, -0.3, -1, 0.2, 0.75, -0.6, 0.35, -0.85, 0.1]

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

const parseTransform = (value?: string) => {
  if (typeof value !== 'string') return null
  const rotate = value.match(/rotate\(\s*(-?[\d.]+)deg\s*\)/)
  const translate = value.match(/translate\(\s*(-?[\d.]+)px(?:\s*,\s*(-?[\d.]+)px)?\s*\)/)
  return {
    x: translate ? Number(translate[1]) : 0,
    y: translate && translate[2] ? Number(translate[2]) : 0,
    rotate: rotate ? Number(rotate[1]) : 0
  }
}

const toCard = (item: string | CardItem): CardItem =>
  typeof item === 'string' ? { src: item, alt: '' } : { src: item?.src, alt: item?.alt ?? '' }

interface Props {
  images?: Array<string | CardItem>
  className?: string
  containerWidth?: number
  containerHeight?: number
  cardSize?: number
  spread?: number
  rotation?: number
  arc?: number
  animationDelay?: number
  animationStagger?: number
  bounciness?: number
  enableHover?: boolean
  pushDistance?: number
  hoverScale?: number
  borderWidth?: number
  borderColor?: string
  radius?: number
  shadow?: boolean
  transformStyles?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  images: () => [],
  className: '',
  containerWidth: 500,
  containerHeight: 340,
  cardSize: 200,
  spread: 85,
  rotation: 10,
  arc: 0,
  animationDelay: 0.3,
  animationStagger: 0.06,
  bounciness: 0.6,
  enableHover: true,
  pushDistance: 150,
  hoverScale: 1.08,
  borderWidth: 4,
  borderColor: '#ffffff',
  radius: 20,
  shadow: true
})

const emit = defineEmits<{
  (e: 'cardClick', index: number): void
}>()

const rootRef = ref<HTMLElement | null>(null)
const cardRefs = ref<HTMLElement[]>([])
const windowWidth = ref(1200)

const isMobile = computed(() => windowWidth.value < 640)
const responsiveCardSize = computed(() => isMobile.value ? Math.min(props.cardSize, 145) : props.cardSize)
const responsiveSpread = computed(() => isMobile.value ? Math.min(props.spread, 46) : props.spread)
const responsivePush = computed(() => isMobile.value ? Math.min(props.pushDistance, 85) : props.pushDistance)
const responsiveWidth = computed(() => isMobile.value ? Math.min(props.containerWidth, windowWidth.value - 32) : props.containerWidth)
const responsiveHeight = computed(() => isMobile.value ? Math.min(props.containerHeight, 260) : props.containerHeight)

const cards = computed(() => props.images.map(toCard))

const slots = computed(() => {
  const count = cards.value.length
  const middle = (count - 1) / 2
  const reach = Math.max(1, middle)
  return cards.value.map((_, i) => {
    const custom = props.transformStyles ? parseTransform(props.transformStyles[i]) : null
    if (custom) return custom
    const offset = i - middle
    return {
      x: offset * responsiveSpread.value,
      y: props.arc * (offset / reach) ** 2,
      rotate: props.rotation * PATTERN[i % PATTERN.length]
    }
  })
})

const containerStyle = computed(() => ({
  width: `${responsiveWidth.value}px`,
  height: `${responsiveHeight.value}px`,
  '--bounce-cards-size': `${Math.max(10, responsiveCardSize.value)}px`,
  '--bounce-cards-border': `${Math.max(0, props.borderWidth)}px`,
  '--bounce-cards-border-color': props.borderColor,
  '--bounce-cards-radius': `${Math.max(0, props.radius)}px`,
  '--bounce-cards-shadow': props.shadow
    ? '0 1px 2px rgba(0, 0, 0, 0.12), 0 10px 28px -6px rgba(0, 0, 0, 0.32)'
    : 'none',
  '--bounce-cards-shadow-active': props.shadow
    ? '0 2px 4px rgba(0, 0, 0, 0.14), 0 22px 44px -10px rgba(0, 0, 0, 0.42)'
    : 'none'
}))

interface Body {
  x: number
  y: number
  rotate: number
  scale: number
  vx: number
  vy: number
  vr: number
  vs: number
  born: number
}

let bodies: Body[] = []
const state = { hovered: -1, time: 0, layer: -1 }
let raf = 0
let last = 0
let alive = false
let wakeFn: (() => void) | null = null

const step = (value: number, velocity: number, target: number, stiffness: number, damping: number, dt: number) => {
  const next = velocity + ((target - value) * stiffness - velocity * damping) * dt
  return [value + next * dt, next] as const
}

const body = (i: number, reduce: boolean) => {
  if (!bodies[i]) {
    const slot = slots.value[i] ?? { x: 0, y: 0, rotate: 0 }
    bodies[i] = {
      x: slot.x,
      y: slot.y,
      rotate: slot.rotate,
      scale: reduce ? 1 : 0,
      vx: 0,
      vy: 0,
      vr: 0,
      vs: 0,
      born: state.time
    }
  }
  return bodies[i]
}

onMounted(() => {
  const root = rootRef.value
  if (!root) return

  if (typeof window !== 'undefined') {
    windowWidth.value = window.innerWidth
    const onResize = () => {
      windowWidth.value = window.innerWidth
      bodies = []
      wake()
    }
    window.addEventListener('resize', onResize)
  }

  alive = true
  last = performance.now()
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  const frame = (now: number) => {
    raf = 0
    if (!alive) return
    const dt = Math.min(1 / 30, Math.max(1 / 240, (now - last) / 1000))
    last = now
    state.time += dt

    const hovered = props.enableHover ? state.hovered : -1
    const popStiffness = 170
    const popDamping = 2 * (1 - 0.85 * clamp(props.bounciness, 0, 1)) * Math.sqrt(popStiffness)
    const moveStiffness = 210
    const moveDamping = 2 * (reduce ? 1 : 0.72) * Math.sqrt(moveStiffness)
    const substeps = Math.ceil(dt / (1 / 240))
    const h = dt / substeps
    let moving = 0

    const currentSlots = slots.value
    for (let i = 0; i < currentSlots.length; i++) {
      const el = cardRefs.value[i]
      if (!el) continue
      const card = body(i, reduce)
      const slot = currentSlots[i]
      const appeared = reduce || state.time - card.born >= Math.max(0, props.animationDelay) + i * Math.max(0, props.animationStagger)
      let targetX = slot.x
      let targetY = slot.y
      let targetRotate = slot.rotate
      let targetScale = appeared ? 1 : 0
      if (hovered >= 0 && appeared) {
        if (i === hovered) {
          targetY = slot.y - Math.max(10, responsiveCardSize.value) * 0.04
          targetRotate = 0
          targetScale = clamp(props.hoverScale, 0.5, 2)
        } else {
          targetX = slot.x + Math.sign(i - hovered) * responsivePush.value
        }
      }
      for (let k = 0; k < substeps; k++) {
        const [nx, nvx] = step(card.x, card.vx, targetX, moveStiffness, moveDamping, h)
        card.x = nx; card.vx = nvx
        const [ny, nvy] = step(card.y, card.vy, targetY, moveStiffness, moveDamping, h)
        card.y = ny; card.vy = nvy
        const [nr, nvr] = step(card.rotate, card.vr, targetRotate, moveStiffness, moveDamping, h)
        card.rotate = nr; card.vr = nvr
        if (reduce) {
          card.scale = targetScale
          card.vs = 0
        } else {
          const [ns, nvs] = step(card.scale, card.vs, targetScale, popStiffness, popDamping, h)
          card.scale = ns; card.vs = nvs
        }
      }
      moving +=
        Math.abs(card.vx) +
        Math.abs(card.vy) +
        Math.abs(card.vr) +
        Math.abs(card.vs) * 100 +
        Math.abs(targetX - card.x) +
        Math.abs(targetY - card.y) +
        Math.abs(targetRotate - card.rotate) +
        Math.abs(targetScale - card.scale) * 100 +
        (appeared ? 0 : 1)
      el.style.transform = `translate(-50%, -50%) translate3d(${card.x.toFixed(2)}px, ${card.y.toFixed(2)}px, 0) rotate(${card.rotate.toFixed(3)}deg) scale(${Math.max(0, card.scale).toFixed(4)})`
    }

    if (state.layer !== hovered) {
      state.layer = hovered
      cardRefs.value.forEach((el, i) => {
        if (!el) return
        el.style.zIndex = i === hovered ? String(currentSlots.length + 1) : String(i + 1)
        el.toggleAttribute('data-active', i === hovered)
      })
    }

    if (moving > 0.02) raf = requestAnimationFrame(frame)
  }

  const wake = () => {
    if (raf || !alive) return
    last = performance.now()
    raf = requestAnimationFrame(frame)
  }
  wakeFn = wake

  const pick = (event: PointerEvent | MouseEvent) => {
    if (!root) return -1
    const rect = root.getBoundingClientRect()
    const px = event.clientX - rect.left - rect.width / 2
    const py = event.clientY - rect.top - rect.height / 2
    let best = -1
    let distance = Infinity
    slots.value.forEach((slot, i) => {
      const gap = Math.abs(px - slot.x)
      if (gap < distance) {
        distance = gap
        best = i
      }
    })
    if (best < 0) return -1
    const slot = slots.value[best]
    const half = Math.max(10, responsiveCardSize.value) / 2
    if (Math.abs(py - slot.y) > half + 12 || distance > half + 12) return -1
    if (state.hovered >= 0 && state.hovered !== best) {
      const current = slots.value[state.hovered]
      if (current && Math.abs(px - current.x) - distance < 6) return state.hovered
    }
    return best
  }

  const onMove = (event: PointerEvent) => {
    const next = pick(event)
    if (next !== state.hovered) {
      state.hovered = next
      wake()
    }
  }

  const onLeave = () => {
    if (state.hovered !== -1) {
      state.hovered = -1
      wake()
    }
  }

  const onClick = (event: MouseEvent) => {
    const index = pick(event)
    if (index < 0) return
    const card = bodies[index]
    if (card && !reduce) card.vs -= 2.2
    wake()
    emit('cardClick', index)
  }

  const onFocus = (event: FocusEvent) => {
    const index = cardRefs.value.indexOf(event.target as HTMLElement)
    if (index >= 0) {
      state.hovered = index
      wake()
    }
  }

  const onKey = (event: KeyboardEvent) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    const index = cardRefs.value.indexOf(event.target as HTMLElement)
    if (index < 0) return
    event.preventDefault()
    if (bodies[index] && !reduce) bodies[index].vs -= 2.2
    wake()
    emit('cardClick', index)
  }

  root.addEventListener('pointermove', onMove)
  root.addEventListener('pointerdown', onMove)
  root.addEventListener('pointerleave', onLeave)
  root.addEventListener('click', onClick)
  root.addEventListener('focusin', onFocus)
  root.addEventListener('focusout', onLeave)
  root.addEventListener('keydown', onKey)
  wake()

  onBeforeUnmount(() => {
    alive = false
    if (raf) cancelAnimationFrame(raf)
    wakeFn = null
    root.removeEventListener('pointermove', onMove)
    root.removeEventListener('pointerdown', onMove)
    root.removeEventListener('pointerleave', onLeave)
    root.removeEventListener('click', onClick)
    root.removeEventListener('focusin', onFocus)
    root.removeEventListener('focusout', onLeave)
    root.removeEventListener('keydown', onKey)
  })
})

watch(
  () => [props.images, props.spread, props.cardSize],
  () => {
    bodies = []
    state.hovered = -1
    state.time = 0
    wakeFn?.()
  },
  { deep: true }
)
</script>

<style scoped>
.bounce-cards {
  position: relative;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.bounce-cards__card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: var(--bounce-cards-size);
  aspect-ratio: 1;
  overflow: hidden;
  border: var(--bounce-cards-border) solid var(--bounce-cards-border-color);
  border-radius: var(--bounce-cards-radius);
  background: var(--bounce-cards-border-color);
  box-shadow: var(--bounce-cards-shadow);
  transform: translate(-50%, -50%) scale(0);
  transition: box-shadow 0.3s ease;
  will-change: transform;
}

.bounce-cards__card[data-active] {
  box-shadow: var(--bounce-cards-shadow-active);
}

.bounce-cards__card--clickable {
  cursor: pointer;
}

.bounce-cards__card--clickable:focus-visible {
  outline: 2px solid var(--bounce-cards-border-color);
  outline-offset: 3px;
}

.bounce-cards__card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}
</style>
