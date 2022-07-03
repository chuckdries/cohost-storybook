/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        notblack: "rgb(25, 25, 25)",
        foreground: "rgb(131, 37, 79)",
        text: "rgb(255, 249, 242)",
      },
      fontFamily: {
        sans: [
          "Atkinson Hyperlegible",
          "ui-sans-serif,system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "segoe ui",
          "Roboto",
          "helvetica neue",
          "Arial",
          "noto sans",
          "sans-serif",
          "apple color emoji",
          "segoe ui emoji",
          "segoe ui symbol",
          "noto color emoji",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
