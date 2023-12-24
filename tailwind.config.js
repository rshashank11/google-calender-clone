/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      borderColor: "#dadce0",
      white: "white",
      blueBg: "hsl(200, 80%, 50%)"
    }
  },
  plugins: [],
}