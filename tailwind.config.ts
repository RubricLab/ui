import config from '@rubriclab/tailwind-config'
import { Config } from 'tailwindcss'

export default {
	darkMode: ["class"],
	content: ['./src/**/*.tsx'],
	presets: [config],
	theme: {
		extend: {
			fontFamily: {
				geist: ['GeistSans', 'sans-serif'],
			},
		},
		colors: {
			...config.theme.colors,
		},
	},
} satisfies Config
