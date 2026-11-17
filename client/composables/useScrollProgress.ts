export const useScrollProgress = (containerRef: Ref<HTMLElement | null>) => {
  const scrollProgress = ref(0)
  const isPastHero = ref(false)

  const handleScroll = () => {
    if (!containerRef.value || !import.meta.client) return
    const rect = containerRef.value.getBoundingClientRect()
    const height = rect.height
    const top = rect.top

    if (top <= 0) {
      const progress = Math.min(1, Math.max(0, Math.abs(top) / height))
      scrollProgress.value = progress
      isPastHero.value = progress >= 0.95
    } else {
      scrollProgress.value = 0
      isPastHero.value = false
    }
  }

  onMounted(() => {
    if (import.meta.client) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
    }
  })

  onUnmounted(() => {
    if (import.meta.client) {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return {
    scrollProgress,
    isPastHero
  }
}
