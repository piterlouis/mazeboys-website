
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'mzdark': '#1e3640',
				'mzteal': '#68a694',
				'mzgreen': '#a0bf80',
				'mzyellow': '#f2b749',
				'mzorange': '#f2762e',
			},
			fontFamily: {
				sans: ['Montserrat Variable', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
