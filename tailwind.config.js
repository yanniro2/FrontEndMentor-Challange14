/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" },

    },
    colors: {
      // ### Primary

      "Red": "hsl(0, 100%, 74%)",
      "Green": "hsl(154, 59%, 51%)",

      // ### Accent

      "Blue": "hsl(248, 32%, 49%)",

      // ### Neutral

      "Dark-Blue": "hsl(249, 10%, 26%)",
      "Grayish-Blue": "hsl(246, 25%, 77%)",
    },
    fontSize: {
      "ms": "16px",
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"]
    },
    fontWeight: {
      "ms": 400,
      "lg": 500,
      "xl": 600,
      "2xl": 700,
    },
    extend: {},
  },
  plugins: [],
}
