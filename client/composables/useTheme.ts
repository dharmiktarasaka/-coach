import { ref, computed } from 'vue'

export type ThemeMode = 'light' | 'dark'

const currentTheme = ref<ThemeMode>('dark')
const isMounted = ref(false)

export const useTheme = () => {
  const applyTheme = (theme: ThemeMode) => {
    currentTheme.value = theme
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      root.setAttribute('data-theme', theme)
      if (theme === 'dark') {
        root.classList.add('dark')
        root.classList.remove('light')
        if (document.body) {
          document.body.classList.add('dark')
          document.body.classList.remove('light')
          document.body.setAttribute('data-theme', 'dark')
        }
      } else {
        root.classList.remove('dark')
        root.classList.add('light')
        if (document.body) {
          document.body.classList.remove('dark')
          document.body.classList.add('light')
          document.body.setAttribute('data-theme', 'light')
        }
      }
      try {
        localStorage.setItem('np-theme', theme)
      } catch (e) {
        // Safe fallback if local storage is restricted
      }
    }
  }

  const toggleTheme = () => {
    const next = currentTheme.value === 'dark' ? 'light' : 'dark'
    applyTheme(next)
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    isMounted.value = true

    let saved: ThemeMode | null = null
    try {
      saved = localStorage.getItem('np-theme') as ThemeMode | null
    } catch (e) {}

    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved)
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      applyTheme(prefersDark ? 'dark' : 'dark')
    }
  }

  return {
    currentTheme,
    isDark: computed(() => currentTheme.value === 'dark'),
    isMounted,
    toggleTheme,
    applyTheme,
    initTheme
  }
}
