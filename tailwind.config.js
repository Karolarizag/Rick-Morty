/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
   daisyui: {
    themes: [
      'retro', 
      {
        mytheme: {
          "primary": "#a4cbb4",
          "secondary": "#945F5C",
          "accent": "#ebdc99",
          "neutral": "#7d725a",
          "base-100": "#181818",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
}
