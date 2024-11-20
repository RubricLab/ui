import { z } from 'zod'

type Color = {
	bg: {
		light: string
		dark: string
	}
	text: {
		light: string
		dark: string
	}
}

type Size = {
	space: string
	text: string
	rounding: string
}

type Asset = { [key: string]: string }

function createButton<DS extends { icons: Icons }, Icons extends { [key in keyof Icons]: string }>(
	ds: DS
) {
	const safeIcons = ds.icons

	const iconKeys = Object.keys(safeIcons) as ReadonlyArray<keyof typeof safeIcons>

	const icons = ['cowboy', 'john'] as const

	const badSchema = z.object({ icon: z.enum([ds.icons[0], ...ds.icons.slice(1)]) })

	const goodSchema = z.object({ icon: z.enum(['cowboy']) })

	const component = ({ icon }: z.infer<typeof goodObject>) => (
		<button type="button">{icon ? ds.icons[icon] : ''}</button>
	)

	component.schema = goodSchema

	return component
}

function createUI<
	Colors extends { [key: string]: Color; primary: Color; secondary: Color },
	Sizes extends { [key: string]: Size; small: Size; medium: Size; large: Size }
>(ds: {
	colors: Colors
	sizing: Sizes
	icons: Asset
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
		random: {
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
		cowboy: '🤠'
	} as const,
	sizing: {
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
				color: 'primary',
				size: 'small'
			}
		}
	}
} as const)

const test = () => {
	return <Button icon="cowboy" />
}
