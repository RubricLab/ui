import type { Config } from 'tailwindcss'

const tailwindConfig = {
	darkMode: 'class',
	content: [
		'./app/**/*.tsx',
		'./src/**/*.tsx',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/rubricui/dist/**/*.{js,jsx,ts,tsx}'
	],
	presets: [require('./rubric.preset.ts')]
} satisfies Config

export default tailwindConfig
