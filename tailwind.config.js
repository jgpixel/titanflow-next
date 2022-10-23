const percentageWidth = require('tailwindcss-percentage-width');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      '-2xl': { 'min': '1535px' },
      // => @media (min-width: 1535px) { ... }

      '-xl': { 'min': '1279px' },
      // => @media (min-width: 1279px) { ... }

      '-lg': { 'min': '1023px' },
      // => @media (min-width: 1023px) { ... }

      '-md': { 'min': '768px' },
      // => @media (min-width: 768px) { ... }

      '-sm': { 'min': '639px' },
      // => @media (min-width: 639px) { ... }
    }
  },
  plugins: [
    percentageWidth
  ],
}
