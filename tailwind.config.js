/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./content/blog/**/*.md"],
  safelist: [
    'border-gray-900',
    'border-l-4',
    'bg-gray-100',
    'hover:no-underline',
    'italic',
    'list-decimal',
    'list-disc',
    'mx-8',
    'mb-6',
    'my-6',
    'pl-4',
    'pl-8',
    'text-blue',
    'underline',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--color-blue)',
      },
    },
  },
  plugins: [],
}
