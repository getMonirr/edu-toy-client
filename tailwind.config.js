/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "edu-font": "Baloo Da 2",
        "edu-pop": "Poppins"
      }
    },
  },
  plugins: [require("daisyui")],
}

