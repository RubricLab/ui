/**
 * rubric.theme.ts
 */

import type { DesignSystem } from '../../types/DesignSystem'
import kong from './fonts/kong'
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
				base: '#000000',
				focus: '#333333',
				active: '#666666',
				subtle: '#F5F5F5',
				text: '#000000'
			},
			surface: {
				base: '#F5F5F5',
				subtle: '#FFFFFF',
				text: '#000000'
			},
			destructive: {
				base: '#FF3B30',
				focus: '#FF6961',
				active: '#CC2F26',
				subtle: '#FFE5E5',
				text: '#800000'
			},
			success: {
				base: '#34C759',
				focus: '#5CD97B',
				active: '#2A9F47',
				subtle: '#E5F7E8',
				text: '#1F7A34'
			},
			warning: {
				base: '#FFBD2E',
				focus: '#FFCC66',
				active: '#CC9725',
				subtle: '#FFF7E5',
				text: '#805C1D'
			}
		},
		dark: {
			brand: {
				base: '#FFFFFF',
				focus: '#E6E6E6',
				active: '#CCCCCC',
				subtle: '#333333',
				text: '#FFFFFF'
			},
			surface: {
				base: '#1A1A1A',
				subtle: '#000000',
				text: '#FFFFFF'
			},
			destructive: {
				base: '#FF3B30',
				focus: '#FF6961',
				active: '#CC2F26',
				subtle: '#331A1A',
				text: '#FF8080'
			},
			success: {
				base: '#34C759',
				focus: '#5CD97B',
				active: '#2A9F47',
				subtle: '#1A331E',
				text: '#80CC94'
			},
			warning: {
				base: '#FFBD2E',
				focus: '#FFCC66',
				active: '#CC9725',
				subtle: '#332B1A',
				text: '#FFD480'
			}
		}
	},

	typography: {
		fonts: {
			body: matter,
			heading: kong,
			monospace: kong
		},
		scale: {
			headline: { fontSize: '56px', lineHeight: '64px', fontWeight: 700 },
			subHeadline: { fontSize: '32px', lineHeight: '40px', fontWeight: 600 },
			body: { fontSize: '18px', lineHeight: '28px', fontWeight: 400 }
		},
		settings: {
			headingLineHeight: 1.1,
			bodyLineHeight: 1.5,
			headingLetterSpacing: '-0.5px',
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
		xl: '40px',
		xxl: '64px'
	},

	rounding: {
		subtle: '2px',
		rounded: '6px',
		pill: '9999px'
	},

	shadows: {
		sm: {
			offsetX: '0px',
			offsetY: '2px',
			blurRadius: '4px',
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
			color: 'rgba(0,0,0,0.15)'
		}
	},

	extendedShadows: {
		sm: 'rgba(0,0,0,0.05)',
		md: 'rgba(0,0,0,0.15)',
		lg: 'rgba(0,0,0,0.25)'
	},

	animations: {
		quick: {
			duration: '150ms',
			timing: 'ease-out'
		},
		normal: {
			duration: '300ms',
			timing: 'ease-out'
		},
		slow: {
			duration: '500ms',
			timing: 'ease-out'
		}
	},

	transitions: {
		fast: '150ms',
		normal: '300ms',
		slow: '500ms'
	},

	borders: {
		thin: {
			width: '1px',
			style: 'solid'
		},
		thick: {
			width: '2px',
			style: 'solid'
		}
	},

	breakpoints: {
		xs: '0px',
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1440px',
		xxl: '1440px'
	}
} satisfies DesignSystem
