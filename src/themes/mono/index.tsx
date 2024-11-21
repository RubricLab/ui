'use client'

import { github } from './icons/github'
import { google } from './icons/google'
import { icon } from './logo/icon'
import { wordMark } from './logo/wordmark'

import { createTheme } from '../../utils'
import { kongtext } from './fonts/kongtext'
import { matter } from './fonts/matter'
import { neubit } from './fonts/neuebit'

export const monoTheme = createTheme({
	fonts: {
		display: kongtext,
		text: matter,
		code: neubit
	},
	colors: {
		primary: {
			bg: {
				light: '#FFFFFF',
				dark: '#000000'
			},
			text: {
				light: '#000000',
				dark: '#FFFFFF'
			}
		},
		secondary: {
			bg: {
				light: '#DFDFDF',
				dark: '#202020'
			},
			text: {
				light: '#000000',
				dark: '#FFFFFF'
			}
		},
		contrast: {
			bg: {
				light: '#000000',
				dark: '#FFFFFF'
			},
			text: {
				light: '#FFFFFF',
				dark: '#000000'
			}
		},
		danger: {
			bg: {
				light: '#FF0000',
				dark: '#8B0000'
			},
			text: {
				light: '#FFFFFF',
				dark: '#FFFFFF'
			}
		}
	},
	sizes: {
		small: {
			space: '0.5rem',
			text: '14px',
			rounding: '0.5rem'
		},
		medium: {
			space: '1rem',
			text: '14px',
			rounding: '0.5rem'
		},
		large: {
			space: '2rem',
			text: '50px',
			rounding: '0.5rem'
		}
	},
	icons: {
		github,
		google,
		logo: icon,
		wordMark
	},
	logos: {
		icon,
		wordMark
	},
	components: {
		Button: {
			primary: {
				color: 'contrast',
				size: 'medium'
			},
			subtle: {
				color: 'secondary',
				size: 'medium'
			},
			danger: {
				color: 'danger',
				size: 'medium'
			}
		},
		Form: {
			primary: {
				color: 'primary',
				size: 'small'
			}
		}
	}
})
