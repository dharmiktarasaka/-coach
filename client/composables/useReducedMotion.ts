export const useReducedMotion = () => {
  const prefersReduced = ref(false)

  onMounted(() => {
    if (import.meta.client) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      prefersReduced.value = mediaQuery.matches

      const handler = (e: MediaQueryListEvent) => {
        prefersReduced.value = e.matches
      }

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handler)
      } else {
        mediaQuery.addListener(handler)
      }
    }
  })

  return {
    prefersReduced
  }
}
