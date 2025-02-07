/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'cta': '#E2FFC8',
				'neutral-app': '#0B0F12',
				'primary': '#153F45',
				'secondary' : '#F5F7F9'
			}
		},
	},
	plugins: [],
}
