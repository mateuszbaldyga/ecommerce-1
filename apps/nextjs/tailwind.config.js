const tailwindBase = require('@repo/tailwind-config/base')

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindBase],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '1440px',
      },
    },
    fontSize: {
      oslo: '0.8125rem',
      base: '1rem',
      riga: [
        '1.125rem',
        {
          letterSpacing: '0.04em',
        },
      ],
    },
    zIndex: {
      1: 1,
      2: 2,
      header: 100,
    },
    backgroundImage: {
      'gradient-header': 'linear-gradient(0deg,transparent,rgba(0,0,0,.3))',
    },
  },
}
