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
	animations: {
		normal: {
			timing: 'ease-out'
		},
		quick: {
			timing: 'ease-out'
		},
		slow: {
			timing: 'ease-out'
		}
	},

	borders: {
		thick: {
			style: 'solid',
			width: '2px'
		},
		thin: {
			style: 'solid',
			width: '1px'
		}
	},

	breakpoints: {
		lg: '1024px',
		md: '768px',
		sm: '640px',
		xl: '1440px',
		xs: '0px',
		xxl: '1440px'
	},
	colors: {
		dark: {
			brand: {
				active: '#CCCCCC',
				base: '#FFFFFF',
				contrast: '#000000',
				focus: '#E6E6E6',
				subtle: '#333333',
				text: '#FFFFFF'
			},
			destructive: {
				active: '#CC2F26',
				base: '#FF3B30',
				contrast: '#FFFFFF',
				focus: '#FF6961',
				subtle: '#331A1A',
				text: '#FF8080'
			},
			success: {
				active: '#2A9F47',
				base: '#34C759',
				contrast: '#FFFFFF',
				focus: '#5CD97B',
				subtle: '#1A331E',
				text: '#80CC94'
			},
			surface: {
				base: '#1A1A1A',
				subtle: '#000000',
				text: '#FFFFFF'
			},
			warning: {
				active: '#CC9725',
				base: '#FFBD2E',
				contrast: '#FFFFFF',
				focus: '#FFCC66',
				subtle: '#332B1A',
				text: '#FFD480'
			}
		},
		light: {
			brand: {
				active: '#666666',
				base: '#000000',
				contrast: '#FFFFFF',
				focus: '#333333',
				subtle: '#F5F5F5',
				text: '#000000'
			},
			destructive: {
				active: '#CC2F26',
				base: '#FF3B30',
				contrast: '#FFFFFF',
				focus: '#FF6961',
				subtle: '#FFE5E5',
				text: '#800000'
			},
			success: {
				active: '#2A9F47',
				base: '#34C759',
				contrast: '#FFFFFF',
				focus: '#5CD97B',
				subtle: '#E5F7E8',
				text: '#1F7A34'
			},
			surface: {
				base: '#F5F5F5',
				subtle: '#FFFFFF',
				text: '#000000'
			},
			warning: {
				active: '#CC9725',
				base: '#FFBD2E',
				contrast: '#FFFFFF',
				focus: '#FFCC66',
				subtle: '#FFF7E5',
				text: '#805C1D'
			}
		}
	},

	extendedShadows: {
		lg: 'rgba(0,0,0,0.25)',
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
		rounded: '6px',
		subtle: '2px'
	},

	shadows: {
		lg: {
			blurRadius: '16px',
			color: 'rgba(0,0,0,0.15)',
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
			blurRadius: '4px',
			color: 'rgba(0,0,0,0.1)',
			offsetX: '0px',
			offsetY: '2px'
		}
	},

	spacing: {
		lg: '24px',
		md: '16px',
		sm: '8px',
		xl: '40px',
		xs: '4px',
		xxl: '64px'
	},

	transitions: {
		fast: '0ms',
		normal: '300ms',
		slow: '500ms'
	},

	typography: {
		fonts: {
			body: matter,
			heading: kong,
			monospace: kong
		},
		scale: {
			body: { fontSize: '18px', fontWeight: 400, lineHeight: '28px' },
			headline: { fontSize: '56px', fontWeight: 700, lineHeight: '64px' },
			subHeadline: { fontSize: '32px', fontWeight: 600, lineHeight: '40px' }
		},
		settings: {
			bodyLetterSpacing: 'normal',
			bodyLineHeight: 1.5,
			headingLetterSpacing: '-0.5px',
			headingLineHeight: 1.1
		}
	}
} satisfies DesignSystem
