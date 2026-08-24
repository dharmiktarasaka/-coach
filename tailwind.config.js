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
        // Brand Palette: #FF7F11 (Amber Copper), #262626 (Architectural Charcoal), Soft Light Ivory (#FDFCF7)
        brand: {
          50: '#FFF8F2',
          100: '#FFEEDB',
          200: '#FFDCB8',
          300: '#FFC285',
          400: '#FFA047',
          500: '#FF7F11', // Primary Amber Copper
          600: '#E66800',
          700: '#BA4F00',
          800: '#8F3B00',
          900: '#662800',
          accent: '#FF7F11'
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#404040',
          600: '#333333',
          700: '#262626', // Architectural Charcoal
          800: '#1C1C1C',
          850: '#161616',
          900: '#121212',
          950: '#0A0A0A'
        },
        gold: {
          50: '#FFFDF5',
          100: '#FEF9C3',
          200: '#FEF08A',
          300: '#F5D28E',
          400: '#F0C06B',
          500: '#FF7F11', // Mapped to Warm Amber Accent
          600: '#E66800',
          700: '#BA4F00',
          800: '#8F3B00',
          900: '#662800'
        },
        amber: {
          50: '#FFF8F2',
          100: '#FFEEDB',
          200: '#FFDCB8',
          300: '#FFC285',
          400: '#FFA047',
          500: '#FF7F11',
          600: '#E66800',
          700: '#BA4F00',
          800: '#8F3B00',
          900: '#662800'
        },
        purple: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#FF7F11',
          600: '#E66800',
          700: '#404040',
          800: '#262626',
          850: '#1C1C1C',
          900: '#121212',
          950: '#0A0A0A'
        },
        ivory: {
          50: '#FFFFFF',
          100: '#FDFCF7', // Soft Light Ivory
          200: '#F7F5EC',
          300: '#EBE8DC',
          400: '#D5D1C2',
          500: '#A8A495',
          600: '#737063',
          700: '#47453C',
          800: '#262626',
          900: '#121212'
        },
        navy: {
          950: '#0A0A0A',
          900: '#121212',
          850: '#161616',
          800: '#1C1C1C',
          750: '#262626',
          700: '#333333',
          600: '#525252',
          border: 'rgba(255, 127, 17, 0.15)',
          'border-subtle': 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(255, 127, 17, 0.6)'
        },
        emerald: {
          300: '#FFC285',
          400: '#FFA047',
          500: '#FF7F11',
          600: '#E66800',
          700: '#BA4F00'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(230, 173, 74, 0.35)',
        'glow-gold': '0 0 35px -5px rgba(230, 173, 74, 0.35)',
        'glow-purple': '0 0 35px -5px rgba(44, 1, 75, 0.15)',
        'premium-card': '0 10px 30px -10px rgba(44, 1, 75, 0.08), 0 0 1px 1px rgba(44, 1, 75, 0.06)',
        'subtle-card': '0 4px 20px -2px rgba(44, 1, 75, 0.05)'
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(44, 1, 75, 0.06) 1px, transparent 1px)",
        'hero-gradient': "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(230, 173, 74, 0.15), transparent 70%)",
        'indigo-gradient': "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(44, 1, 75, 0.08), transparent 70%)"
      }
    }
  },
  plugins: []
}
