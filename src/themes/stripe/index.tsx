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
			light: '#635BFF',
			dark: '#7A73FF'
		},
		focus: {
			light: '#E6E5FF',
			dark: '#1E2340'
		},
		neutral: {
			light: '#F6F8FA',
			dark: '#1A1F36'
		},
		disabled: {
			light: '#E3E8EF',
			dark: '#2A2F45'
		},
		bg: {
			light: '#FFFFFF',
			dark: '#030519'
		},
		text: {
			light: '#1A1F36',
			dark: '#F6F8FA'
		},
		border: {
			light: '#E3E8EF',
			dark: '#2A2F45'
		},
		shadow: {
			light: 'rgba(0,0,0,0.05)',
			dark: 'rgba(0,0,0,0.2)'
		},
		error: {
			light: '#FF4242',
			dark: '#FF5C5C'
		},
		success: {
			light: '#24B47E',
			dark: '#32D49B'
		},
		warning: {
			light: '#F5B014',
			dark: '#FFB82E'
		}
	},
	sizes: {
		title: {
			text: '24px',
			space: '1.25rem',
			rounding: '0.75rem'
		},
		subtitle: {
			text: '20px',
			space: '1rem',
			rounding: '0.5rem'
		},
		content: {
			text: '16px',
			space: '0.75rem',
			rounding: '0.375rem'
		},
		information: {
			text: '14px',
			space: '0.5rem',
			rounding: '0.25rem'
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
