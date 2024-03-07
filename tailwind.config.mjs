/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				mzdark: '#1e3640',
				mzteal: '#68a694',
				mzgreen: '#a0bf80',
				mzyellow: '#f2b749',
				mzorange: '#f2762e',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
