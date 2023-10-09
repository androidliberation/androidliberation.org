module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  daisyui: {
    themes: ["luxury"],
  },
	theme: {
		extend: {},
	},
  plugins: [require('daisyui')],
};