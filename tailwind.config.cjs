module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      colors: {
        red: {
          50: "#fef2f3",
          100: "#fde6e7",
          200: "#fbd0d5",
          300: "#f8a9b2",
          400: "#f3798a",
          500: "#e94a63",
          600: "#d5294d",
          700: "#b31d3f",
          800: "#961b3c",
          900: "#811a39",
          950: "#48091a",
        },
      },
      fontFamily: {
        alf: ['"Roboto Mono"', "monospace"],
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      mono: ['"Roboto Mono"', "monospace"],
    },
  },
};
