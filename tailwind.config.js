/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        notblack: "rgb(25, 25, 25)",
        foreground: "rgb(131, 37, 79)",
        text: "rgb(255, 249, 242)"
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
