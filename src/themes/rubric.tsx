import type { DesignSystem } from '../types/DesignSystem'

export default {
	colors: {
		light: {
			background: '#ffffff',
			text: '#1a1a1a',
			primary: '#0070f3',
			secondary: '#7928ca',
			success: '#0070f3',
			danger: '#ff0000'
		},
		dark: {
			background: '#1a1a1a',
			text: '#ffffff',
			primary: '#0070f3',
			secondary: '#7928ca',
			success: '#0070f3',
			danger: '#ff0000'
		}
	},
	typography: {
		headline: {
			fontSize: '2rem',
			lineHeight: '2.5rem',
			fontWeight: 700
		},
		subHeadline: {
			fontSize: '1.5rem',
			lineHeight: '2rem',
			fontWeight: 600
		},
		body: {
			fontSize: '1rem',
			lineHeight: '1.5rem',
			fontWeight: 400
		}
	},
	spacing: {
		none: '0',
		xs: '0.25rem',
		sm: '0.5rem',
		md: '1rem',
		lg: '1.5rem',
		xl: '2rem'
	},
	rounding: {
		none: '0',
		subtle: '0.25rem',
		rounded: '0.5rem',
		pill: '9999px'
	},
	shadows: {
		none: 'none',
		sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
		lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
	},
	transitions: {
		fast: '150ms ease',
		normal: '300ms ease',
		slow: '500ms ease'
	},
	breakpoints: {
		xs: '320px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px'
	},
	zIndex: {
		base: 0,
		dropdown: 1000,
		modal: 2000,
		tooltip: 3000
	},
	icons: {
		chevronDown: props => (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
				<path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
		close: props => (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
				<path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
		menu: props => (
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true" {...props}>
				<path
					d="M4 6h16M4 12h16M4 18h16"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		)
	}
} satisfies DesignSystem
