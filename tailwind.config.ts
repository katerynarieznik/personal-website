import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme')

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '200%': '200% 100%',
    },
    colors: {
      transparent: 'transparent',
      gray: {
        20: 'var(--gray-2)',
        60: 'var(--gray-6)',
        120: 'var(--gray-12)',
      },
      sage: {
        40: 'var(--sage-4)',
        120: 'var(--sage-12)',
      },
      jade: {
        40: 'var(--jade-4)',
        90: 'var(--jade-9)',
        110: 'var(--jade-11)',
        120: 'var(--jade-12)',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
      backgroundImage: {
        colorful: `linear-gradient(to right, var(--pink-9), var(--yellow-10), var(--lime-10), var(--jade-9), var(--blue-9), var(--purple-9), var(--pink-9))`,
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'move-bg': {
          to: {
            'background-position': '200% 0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'move-bg': 'move-bg 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
