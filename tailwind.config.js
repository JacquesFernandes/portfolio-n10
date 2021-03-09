module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {},
      animation: {}
    },
  },
  variants: {
    extend: {
      width: ['group-hover']
    },
  },
  plugins: [],
}
