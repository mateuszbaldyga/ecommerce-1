const { withTV } = require('tailwind-variants/transformer')

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  theme: {
    extend: {
      colors: {
        'ar-primary': '#003844',
        'ar-black': '#000',
      },
    },
  },
  plugins: [],
})
