import { createButton } from '~/components/button'
import type { ColorsConfig, IconsConfig, SizesConfig } from '~/types'

export function createUI<
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: {
	colors: Colors
	sizes: Sizes
	icons: Icons
	components: {
		Button: {
			primary: {
				color: keyof Colors
				size: keyof Sizes
			}
		}
	}
}) {
	return {
		Button: createButton(ds)
	}
}

export * from './types'

const { Button } = createUI({
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
				light: '#FFFFFF',
				dark: '#000000'
			},
			text: {
				light: '#000000',
				dark: '#FFFFFF'
			}
		},
		bad: {
			bg: {
				light: '#FFFFFF',
				dark: '#000000'
			},
			text: {
				light: '#000000',
				dark: '#FFFFFF'
			}
		}
	},
	icons: {
		cowboy: {
			light: () => <></>,
			dark: () => <></>,
			mono: () => <></>
		}
	},
	sizes: {
		small: {
			space: '0.5rem',
			text: '14px',
			rounding: '0.5rem'
		},
		medium: {
			space: '0.5rem',
			text: '14px',
			rounding: '0.5rem'
		},
		large: {
			space: '0.5rem',
			text: '14px',
			rounding: '0.5rem'
		}
	},
	components: {
		Button: {
			primary: {
				color: 'bad',
				size: 'small'
			}
		}
	}
})

const thing = <Button icon="cowboy" />
