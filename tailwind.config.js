/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf6f7',
          100: '#f9e8eb',
          200: '#f2cdd3',
          300: '#e7a5b0',
          400: '#d87586',
          500: '#c94d62',
          600: '#6B2737',
          700: '#5a2130',
          800: '#4a1c28',
          900: '#3d1821',
        },
        ivory: {
          50: '#FDFCFB',
          100: '#FAF8F5',
          200: '#F5F1EC',
          300: '#EDE7DF',
          400: '#E3D9CE',
        },
        sage: {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#cdd8c9',
          300: '#adbea6',
          400: '#8B9A7D',
          500: '#6d7f5f',
          600: '#56664a',
          700: '#45523c',
          800: '#3a4434',
          900: '#31392d',
        },
        gold: {
          50: '#fbf8f0',
          100: '#f5edd9',
          200: '#ead9b0',
          300: '#ddc080',
          400: '#C9A962',
          500: '#b8923d',
          600: '#a37932',
          700: '#885e2b',
          800: '#704c29',
          900: '#5d4026',
        },
        blush: {
          50: '#fdf8f7',
          100: '#faf0ed',
          200: '#F5E1DC',
          300: '#E8D5D1',
          400: '#d9c0ba',
          500: '#c9a69e',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
