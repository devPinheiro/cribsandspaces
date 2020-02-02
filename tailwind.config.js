const {
  colors,
  boxShadow,
  borderRadius,
  margin,
  maxWidth,
  fontSize,
  inset,
  height,
} = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      raleway: ['Raleway'],
    },
  },
  extend: {
    height: {
      'h-100': '100vh',
    },
  },

  variants: {},
  plugins: [],
};
