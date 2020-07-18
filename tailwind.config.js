module.exports = {
  purge: {
    content: ["./src/**/*.js", "./content/**/*.md"],
    options: {
      whitelist: [
        'border-gray-900',
        'border-l-4',
        'bg-gray-100',
        'hover:bg-transparent',
        'hover:text-black',
        'hover:underline',
        'italic',
        'mx-8',
        'my-6',
        'pl-4',
      ]
    },
  },
  theme: {
    fontFamily: {
      header: ["Source Sans Pro", "sans-serif"],
      text: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        yellow: 'var(--color-yellow)',
        blue: 'var(--color-blue)',
      },
    },
  },
  variants: {},
  plugins: [],
}
