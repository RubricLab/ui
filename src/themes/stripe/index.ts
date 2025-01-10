import type { DesignSystem } from '../../types/DesignSystem'
import matter from './fonts/matter'
import { arrowDown } from './icons/arrowDown'
import { arrowLeft } from './icons/arrowLeft'
import { arrowRight } from './icons/arrowRight'
import { arrowUp } from './icons/arrowUp'
import { cross } from './icons/cross'
import { edit } from './icons/edit'
import { icon } from './icons/icon'
import { menu } from './icons/menu'
import { minus } from './icons/minus'
import { plus } from './icons/plus'
import { search } from './icons/search'
import { settings } from './icons/settings'
import { trash } from './icons/trash'
import { wordmark } from './icons/wordmark'

export default {
	colors: {
		light: {
			brand: {
				base: '#635BFF',
				focus: '#7A73FF',
				active: '#4B44FF',
				subtle: '#F7F6FF',
				text: '#1A1433'
			},
			surface: {
				base: '#F6F9FC',
				subtle: '#FFFFFF',
				text: '#0A2540'
			},
			destructive: {
				base: '#FF4D4F',
				focus: '#FF7875',
				active: '#FF1F1F',
				subtle: '#FFF1F0',
				text: '#820014'
			},
			success: {
				base: '#20C933',
				focus: '#4CD95E',
				active: '#17A329',
				subtle: '#F6FFF8',
				text: '#135E1F'
			},
			warning: {
				base: '#FAAD14',
				focus: '#FFC53D',
				active: '#D48806',
				subtle: '#FFF7E6',
				text: '#874D00'
			}
		},
		dark: {
			brand: {
				base: '#635BFF',
				focus: '#7A73FF',
				active: '#4B44FF',
				subtle: '#1A1433',
				text: '#F7F6FF'
			},
			surface: {
				base: '#212121',
				subtle: '#121212',
				text: '#FFFFFF'
			},
			destructive: {
				base: '#FF4D4F',
				focus: '#FF7875',
				active: '#FF1F1F',
				subtle: '#2A1215',
				text: '#FFA39E'
			},
			success: {
				base: '#20C933',
				focus: '#4CD95E',
				active: '#17A329',
				subtle: '#162312',
				text: '#95EB9C'
			},
			warning: {
				base: '#FAAD14',
				focus: '#FFC53D',
				active: '#D48806',
				subtle: '#2B2111',
				text: '#FFE58F'
			}
		}
	},

	typography: {
		fonts: {
			body: matter,
			heading: matter,
			monospace: matter
		},
		scale: {
			headline: { fontSize: '32px', lineHeight: '40px', fontWeight: 700 },
			subHeadline: { fontSize: '24px', lineHeight: '32px', fontWeight: 600 },
			body: { fontSize: '16px', lineHeight: '24px', fontWeight: 400 }
		},
		settings: {
			headingLineHeight: 1.2,
			bodyLineHeight: 1.5,
			headingLetterSpacing: '0.5px',
			bodyLetterSpacing: 'normal'
		}
	},

	icons: {
		arrowLeft,
		arrowRight,
		arrowUp,
		arrowDown,
		cross,
		plus,
		minus,
		edit,
		trash,
		search,
		settings,
		menu
	},

	logos: {
		icon,
		wordmark
	},

	spacing: {
		xs: '4px',
		sm: '8px',
		md: '16px',
		lg: '24px',
		xl: '32px',
		xxl: '40px'
	},

	rounding: {
		subtle: '2px',
		rounded: '4px',
		pill: '9999px'
	},

	shadows: {
		sm: {
			offsetX: '0px',
			offsetY: '1px',
			blurRadius: '2px',
			color: 'rgba(0,0,0,0.1)'
		},
		md: {
			offsetX: '0px',
			offsetY: '4px',
			blurRadius: '8px',
			color: 'rgba(0,0,0,0.1)'
		},
		lg: {
			offsetX: '0px',
			offsetY: '8px',
			blurRadius: '16px',
			color: 'rgba(0,0,0,0.2)'
		}
	},

	extendedShadows: {
		sm: 'rgba(0,0,0,0.05)',
		md: 'rgba(0,0,0,0.15)',
		lg: 'rgba(0,0,0,0.3)'
	},

	animations: {
		quick: {
			duration: '150ms',
			timing: 'ease-in-out'
		},
		normal: {
			duration: '300ms',
			timing: 'ease-in-out'
		},
		slow: {
			duration: '500ms',
			timing: 'ease-in-out'
		}
	},

	transitions: {
		fast: '150ms',
		normal: '300ms',
		slow: '500ms'
	},

	borders: {
		thin: { width: '1px', style: 'solid' },
		thick: { width: '2px', style: 'solid' }
	},

	breakpoints: {
		xs: '0px',
		sm: '576px',
		md: '768px',
		lg: '992px',
		xl: '1200px',
		xxl: '1400px'
	}
} satisfies DesignSystem
