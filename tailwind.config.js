/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        notblack: "rgb(25, 25, 25)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
