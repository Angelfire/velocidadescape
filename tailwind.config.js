module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      text: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        yellow: 'var(--color-yellow)',
      },
    },
  },
  variants: {},
  plugins: [],
}
