export const useHeroParallax = (targetRef: Ref<HTMLElement | null>) => {
  const mouseX = ref(0)
  const mouseY = ref(0)
  const targetX = ref(0)
  const targetY = ref(0)
  let animationFrameId: number | null = null

  const onMouseMove = (e: MouseEvent) => {
    if (!targetRef.value) return
    const rect = targetRef.value.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    targetX.value = x
    targetY.value = y
  }

  const updateParallax = () => {
    // Smooth lerp easing
    mouseX.value += (targetX.value - mouseX.value) * 0.08
    mouseY.value += (targetY.value - mouseY.value) * 0.08

    animationFrameId = requestAnimationFrame(updateParallax)
  }

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
      animationFrameId = requestAnimationFrame(updateParallax)
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('mousemove', onMouseMove)
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  })

  return {
    mouseX,
    mouseY
  }
}
