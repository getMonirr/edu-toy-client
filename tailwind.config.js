/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "edu-baloo": "'Baloo 2'",
        "edu-pop": "Poppins"
      },
      colors: {
        'edu-primary': "#B92D5E",
        "edu-secondary": "#AE2455",
        "edu-yellow": "#FDEA45",
        "edu-bg": "#FAFAFA",
        "edu-nav": "#C22F63"
      }
    },
  },
  plugins: [require("daisyui")],
}

