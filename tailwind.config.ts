import config from '@rubriclab/tailwind-config'
import {Config} from 'tailwindcss'

export default {
	content: ['./src/**/*.tsx'],
	presets: [config],
	theme: {
		colors: {
			...config.theme.colors
		},
		extend: {}
	}
} satisfies Config
