'use client'

import { github } from './icons/github'
import { google } from './icons/google'
import { icon } from './logo/icon'
import { wordMark } from './logo/wordmark'

import { createTheme } from '../../utils'
import { kongtext } from './fonts/kongtext'
import { matter } from './fonts/matter'
import { neubit } from './fonts/neuebit'

export const stripeTheme = createTheme({
	fonts: {
		heading: kongtext,
		body: matter,
		monospace: neubit
	},
	colors: {
		active: {
			light: '#0570DE',
			dark: '#0570DE'
		},
		focus: {
			light: '#A2D7F7',
			dark: '#A2D7F7'
		},
		neutral: {
			light: '#D5DBE1',
			dark: '#D5DBE1'
		},
		disabled: {
			light: '#BDC4CD',
			dark: '#BDC4CD'
		},
		bg: {
			light: '#FFFFFF',
			dark: '#000000'
		},
		text: {
			light: '#000000',
			dark: '#FFFFFF'
		},
		border: {
			light: '#000000',
			dark: '#FFFFFF'
		},
		shadow: {
			light: 'rgba(0,0,0,0.2)',
			dark: 'rgba(0,0,0,0.5)'
		},
		error: {
			light: '#DF1B41',
			dark: '#DF1B41'
		},
		success: {
			light: '#008000',
			dark: '#008000'
		},
		warning: {
			light: '#FFA500',
			dark: '#FFA500'
		}
	},
	sizes: {
		title: {
			text: '25px',
			space: '2rem',
			rounding: '2rem'
		},
		subtitle: {
			text: '25px',
			space: '2rem',
			rounding: '2rem'
		},
		content: {
			text: '25px',
			space: '2rem',
			rounding: '2rem'
		},
		information: {
			text: '25px',
			space: '2rem',
			rounding: '2rem'
		}
	},
	icons: {
		github,
		google
	},
	logos: {
		icon,
		wordMark
	}
} as const)
