const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        ironplus: {
          primary: "#E57373",
          secondary: "#262626",
          accent: "#E57373",
          neutral: "#e0e0e0",
          "base-100": "#ffffff",
        },
      },
    ],
  },
}
