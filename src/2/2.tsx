import { type EnumValues, type ZodEnum, z } from 'zod'

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

type Asset = string

function getTupleFromObjectKeys<Obj extends { [key in keyof Obj]: unknown }>(obj: Obj) {
	type Keys = keyof Obj extends string ? keyof Obj : never
	return Object.keys(obj) as [Keys, ...Keys[]]
}

function createButton<Icons extends { [key: string]: Asset }>({ icons }: { icons: Icons }) {
	const schema = z.object({
		icon: z.enum(getTupleFromObjectKeys(icons))
	})

	const component = ({ icon }: z.infer<typeof schema>) => (
		<button type="button">{icon ? icons[icon] : ''}</button>
	)

	component.schema = schema

	return component
}

function createUI<
	Colors extends { [key: string]: Color; primary: Color; secondary: Color },
	Sizes extends { [key: string]: Size; small: Size; medium: Size; large: Size },
	Icons extends { [key: string]: Asset }
>(ds: {
	colors: Colors
	sizing: Sizes
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
		Button: createButton<Icons>(ds)
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
		cowboy: '🤠'
	},
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
				color: 'bad',
				size: 'small'
			}
		}
	}
})

const test = () => {
	return <Button icon="bad" />
}

const parsed = Button.schema.parse({ icon: 'good' })
