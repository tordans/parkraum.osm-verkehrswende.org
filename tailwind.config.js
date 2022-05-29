module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/*.html",
    "./posts/*.{md,html}",
    "./javascript/**/*.js",
    "./posts/**/*.{md,html}",
    "./project-prototype-neukoelln/**/*.{md,html}",
    "./project-vector-tiles/**/*.{md,html}",
    "./*.{md,html}",
  ],
  theme: {
    extend: {
      zIndex: {
        1000: "1000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};