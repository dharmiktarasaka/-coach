/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#171844',
        secondary: '#242658',
        midnight: '#1D1E4F',
        purple: '#352D47',
        gold: '#F8D78B',
        ivory: '#EAE2D4',
        bronze: '#8C6D57',
        mint: '#35D9B0',
        white: '#FFFFFF',
        'off-white': '#FAFAFA',
        dark: '#0D1431'
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #171844, #242658, #352D47)',
        'gradient-gold': 'linear-gradient(135deg, #F8D78B, #EAB95E)'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
