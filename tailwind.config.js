/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/BirthdayParties.jpg')"
      },
      fontFamily: {
        'Playfair': "'Playfair Display', serif"
      }
    },
  },
  plugins: [],
}