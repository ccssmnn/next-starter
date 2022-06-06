const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{css,tsx,ts}"],
  theme: {
    screens: {
      tablet: "480px",
      laptop: "976px",
      desktop: "1440px",
    },
    colors: {
      white: colors.white,
      black: colors.black,
      primary: colors.fuchsia,
      gray: colors.gray,
      success: colors.green,
      warning: colors.yellow,
      danger: colors.red,
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
