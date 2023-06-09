/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sintony: "Sintony, sans-serif",
        Gloock: "Gloock, serif"
    },
  },
  plugins: [],

}}