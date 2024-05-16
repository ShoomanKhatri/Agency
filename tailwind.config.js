/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],

  theme: {
    extend: {
      colors: {
        ...colors,
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGrey: "#717171",
        gray900: "#18191f",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
