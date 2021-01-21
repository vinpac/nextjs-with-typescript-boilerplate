const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      './src/components/**/*.tsx',
      './src/assets/svg/*.svg',
      './src/pages/**/*.tsx',
    ],
  },
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        gray: colors.coolGray,
        primary: colors.green,
        orange: colors.orange,
      },
    },
  },
}
