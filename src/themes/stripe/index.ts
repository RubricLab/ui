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
	animations: {
		normal: {
			timing: 'ease-in-out'
		},
		quick: {
			timing: 'ease-in-out'
		},
		slow: {
			timing: 'ease-in-out'
		}
	},

	borders: {
		thick: { style: 'solid', width: '2px' },
		thin: { style: 'solid', width: '1px' }
	},

	breakpoints: {
		lg: '992px',
		md: '768px',
		sm: '576px',
		xl: '1200px',
		xs: '0px',
		xxl: '1400px'
	},
	colors: {
		dark: {
			brand: {
				active: '#4B44FF',
				base: '#635BFF',
				contrast: '#FFFFFF',
				focus: '#7A73FF',
				subtle: '#1A1433',
				text: '#F7F6FF'
			},
			destructive: {
				active: '#FF1F1F',
				base: '#FF4D4F',
				contrast: '#FFFFFF',
				focus: '#FF7875',
				subtle: '#2A1215',
				text: '#FFA39E'
			},
			success: {
				active: '#17A329',
				base: '#20C933',
				contrast: '#FFFFFF',
				focus: '#4CD95E',
				subtle: '#162312',
				text: '#95EB9C'
			},
			surface: {
				base: '#212121',
				subtle: '#121212',
				text: '#FFFFFF'
			},
			warning: {
				active: '#D48806',
				base: '#FAAD14',
				contrast: '#FFFFFF',
				focus: '#FFC53D',
				subtle: '#2B2111',
				text: '#FFE58F'
			}
		},
		light: {
			brand: {
				active: '#4B44FF',
				base: '#635BFF',
				contrast: '#FFFFFF',
				focus: '#7A73FF',
				subtle: '#F7F6FF',
				text: '#1A1433'
			},
			destructive: {
				active: '#FF1F1F',
				base: '#FF4D4F',
				contrast: '#FFFFFF',
				focus: '#FF7875',
				subtle: '#FFF1F0',
				text: '#820014'
			},
			success: {
				active: '#17A329',
				base: '#20C933',
				contrast: '#FFFFFF',
				focus: '#4CD95E',
				subtle: '#F6FFF8',
				text: '#135E1F'
			},
			surface: {
				base: '#F6F9FC',
				subtle: '#FFFFFF',
				text: '#0A2540'
			},
			warning: {
				active: '#D48806',
				base: '#FAAD14',
				contrast: '#FFFFFF',
				focus: '#FFC53D',
				subtle: '#FFF7E6',
				text: '#874D00'
			}
		}
	},

	extendedShadows: {
		lg: 'rgba(0,0,0,0.3)',
		md: 'rgba(0,0,0,0.15)',
		sm: 'rgba(0,0,0,0.05)'
	},

	icons: {
		arrowDown,
		arrowLeft,
		arrowRight,
		arrowUp,
		cross,
		edit,
		menu,
		minus,
		plus,
		search,
		settings,
		trash
	},

	logos: {
		icon,
		wordmark
	},

	rounding: {
		pill: '9999px',
		rounded: '4px',
		subtle: '2px'
	},

	shadows: {
		lg: {
			blurRadius: '16px',
			color: 'rgba(0,0,0,0.2)',
			offsetX: '0px',
			offsetY: '8px'
		},
		md: {
			blurRadius: '8px',
			color: 'rgba(0,0,0,0.1)',
			offsetX: '0px',
			offsetY: '4px'
		},
		sm: {
			blurRadius: '2px',
			color: 'rgba(0,0,0,0.1)',
			offsetX: '0px',
			offsetY: '1px'
		}
	},

	spacing: {
		lg: '24px',
		md: '16px',
		sm: '8px',
		xl: '32px',
		xs: '4px',
		xxl: '40px'
	},

	transitions: {
		fast: '0ms',
		normal: '300ms',
		slow: '500ms'
	},

	typography: {
		fonts: {
			body: matter,
			heading: matter,
			monospace: matter
		},
		scale: {
			body: { fontSize: '16px', fontWeight: 400, lineHeight: '24px' },
			detail: { fontSize: '10px', fontWeight: 400, lineHeight: '16px' },
			headline: { fontSize: '32px', fontWeight: 700, lineHeight: '40px' },
			subHeadline: { fontSize: '24px', fontWeight: 600, lineHeight: '32px' }
		},
		settings: {
			bodyLetterSpacing: 'normal',
			bodyLineHeight: 1.5,
			headingLetterSpacing: '0.5px',
			headingLineHeight: 1.2
		}
	}
} satisfies DesignSystem
