/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'principal-bg': '#0B0B0B',
				'primary': '#ADFF00',
				'dark-green': '#052915',
				'light-green': '#17BD5E',
				'dark-red': '#2F0412',
				'light-red': '#C93469',
			},
		},
	},
	plugins: [],
}
