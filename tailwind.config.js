/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#dadce0",
        blueBg: "hsl(200, 80%, 50%)",
        grayTwo: "#5F6368",
        tomato: "#d50000",
        flamingo: "rgb(230, 124, 115)",
        tangerine: "rgb(244, 81, 30)",
        banana: "rgb(246, 191, 38)",
        sage: "rgb(51, 182, 121)",
        basil: "rgb(11, 128, 67)",
        peacock: "rgb(3, 155, 229)",
        blueberry: "rgb(63, 81, 181)",
        lavender: "rgb(121, 134, 203)",
        grape: "rgb(142, 36, 170)",
        graphite: "rgb(97, 97, 97)",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(borderColor|blueBg|grayTwo|tomato|flamingo|tangerine|banana|sage|basil|peacock|blueberry|lavender|grape|graphite)/,
    },
  ],
};
