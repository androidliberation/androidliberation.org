module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      colors: {
        "alf-dark": "#0a0a0a",
        "alf-light": "#1f1f1f",
        "alf-green": "#00ff66",
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
        alf: {
          primary: "#00ff66",
          secondary: "#1f1f1f",
          accent: "#4d4d4d",
          neutral: "#331800",
          "base-100": "#0a0a0a",
          info: "#2b6cb0",
          success: "#48bb78",
          warning: "#ed8936",
          error: "#e53e3e",
        },
      },
    ],
  },
};
