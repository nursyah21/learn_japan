/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.jsx",  "./src/*.jsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
}

