/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#495956",
        text: "#FEFFFF",
        accent: "#7FB6AC"
      }
    },
  },
  plugins: [],
}
