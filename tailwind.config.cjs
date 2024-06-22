module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        "alf-dark": "#0a0a0a",
        "alf-light": "#1f1f1f",
        "alf-accent": "#4d4d4d",
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
        'alf': {
        '50': '#fef2f3',
        '100': '#fde6e7',
        '200': '#fbd0d5',
        '300': '#f7aab2',
        '400': '#f27a8a',
        '500': '#ea546c',
        '600': '#d5294d',
        '700': '#b31d3f',
        '800': '#961b3c',
        '900': '#811a39',
        '950': '#48091a',
    },
      },
    ],
  },
};
