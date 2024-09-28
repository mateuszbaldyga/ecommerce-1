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
      padding: 'clamp(24px,6lvw,64px)',
      screens: {
        sm: 'none',
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
      riga2: [
        '1.125rem',
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
