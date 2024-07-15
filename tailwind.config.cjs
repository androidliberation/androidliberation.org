module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        "alf-dark": "#0f0004",
        "alf-light": "#fef2f3",
        "alf-accent": "#d5294d",
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
  daisyui: {
    themes: [
      {
        alf: {
          950: "#fef2f3",
          900: "#fde6e7",
          800: "#fbd0d5",
          700: "#f7aab2",
          600: "#f27a8a",
          500: "#ea546c",
          400: "#d5294d",
          300: "#b31d3f",
          200: "#961b3c",
          100: "#811a39",
          50: "#48091a",
        },
      },
    ],
  },
};
