/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Space Grotesk','sans-serif'],
        secondary: ['Quanta Grotesk Pro','sans-serif']
      }
    },
  },
  plugins: [],
}