/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(70 95 255)',
          soft: 'rgb(70 95 255 / 0.10)',
          hover: 'rgb(55 80 240)',
          ring: 'rgb(70 95 255 / 0.25)',
        },
        success: {
          DEFAULT: 'rgb(16 185 129)',
          soft: 'rgb(16 185 129 / 0.10)',
        },
        warning: {
          DEFAULT: 'rgb(245 158 11)',
          soft: 'rgb(245 158 11 / 0.10)',
        },
        critical: {
          DEFAULT: 'rgb(239 68 68)',
          soft: 'rgb(239 68 68 / 0.10)',
        },
        surface: {
          bg: 'rgb(246 247 251)',
          card: 'rgb(255 255 255 / 0.72)',
          panel: 'rgb(255 255 255 / 0.58)',
        },
        txt: {
          primary: 'rgb(23 25 35)',
          secondary: 'rgb(100 105 125)',
          muted: 'rgb(156 160 180)',
        },
      },
      boxShadow: {
        'neu-raised': '6px 6px 14px rgb(0 0 0 / 0.07), -6px -6px 14px rgb(255 255 255 / 0.70)',
        'neu-pressed': 'inset 2px 2px 5px rgb(0 0 0 / 0.06), inset -2px -2px 5px rgb(255 255 255 / 0.50)',
        'neu-subtle': '3px 3px 8px rgb(0 0 0 / 0.05), -3px -3px 8px rgb(255 255 255 / 0.60)',
        'card-hover': '0 8px 30px rgb(70 95 255 / 0.10), 0 2px 8px rgb(0 0 0 / 0.04)',
        'glass': '0 4px 24px rgb(0 0 0 / 0.06), 0 1px 2px rgb(0 0 0 / 0.04)',
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-in-right': 'slide-in-right 0.35s ease-out both',
        'progress-fill': 'progress-fill 1s ease-out both',
        'count-up-pulse': 'count-up-pulse 0.6s ease-out both',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'progress-fill': {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width, 100%)' },
        },
        'count-up-pulse': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '60%': { opacity: '1', transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'ui': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'data': '600ms',
      },
      backdropBlur: {
        'glass': '18px',
      },
      screens: {
        'tablet': { max: '1023px' },
        'laptop': { min: '1024px', max: '1439px' },
        'desktop': { min: '1440px' },
      },
    },
  },
  plugins: [],
};
