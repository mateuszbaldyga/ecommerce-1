import tailwind from 'eslint-plugin-tailwindcss'
import antfu from '@antfu/eslint-config'

const ERROR = 2
const WARN = 1
const OFF = 0

export default antfu(
  /**
   *
   *  Base Config
   *
   */
  {
    react: true,
    typescript: true,
    rules: {
      '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
      'no-console': WARN,
    },
  },
  /**
   *
   * Tailwind Config
   *
   */
  ...tailwind.configs['flat/recommended'],

  {
    files: ['packages/**/*.{js,ts,jsx,tsx}', 'apps/**/*.{js,ts,jsx,tsx}'],
    settings: {
      tailwindcss: {
        config: './config/tailwind-config/base.js',
      },
    },
    rules: {
      'tailwindcss/no-custom-classname': [OFF],
    },
  },
)
