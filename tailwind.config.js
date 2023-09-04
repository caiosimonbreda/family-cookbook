/** @type {import('tailwindcss').config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        stinger: ['Stinger Trial', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

