import { addDynamicIconSelectors } from '@iconify/tailwind'
import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#7851a9',
          50: '#faf8fc',
          100: '#f2eef9',
          200: '#e8e0f4',
          300: '#d6c7eb',
          400: '#bba3dd',
          500: '#a07ece',
          600: '#8962bb',
          700: '#7851a9',
          800: '#624386',
          900: '#50376c',
          950: '#341f4c'
        },
        secondary: {
          DEFAULT: '#28afb0',
          50: '#f1fcfa',
          100: '#d1f6f2',
          200: '#a3ece7',
          300: '#6ddbd7',
          400: '#3fc2c0',
          500: '#28afb0',
          600: '#1c8285',
          700: '#1a686b',
          800: '#195356',
          900: '#194648',
          950: '#09262a'
        },
        gray: colors.gray
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
} satisfies Config
