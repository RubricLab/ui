import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from './types'
import type { StyleProps } from './utils/styled'

export function getTupleFromObjectKeys<Obj extends { [key in keyof Obj]: unknown }>(obj: Obj) {
	return Object.keys(obj) as [
		keyof Obj extends string ? keyof Obj : never,
		...(keyof Obj extends string ? keyof Obj : never)[]
	]
}

export function createTheme<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	return ds
}

// Design system utilities
export function useComponentStyles<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>, hierarchy: keyof SizesConfig) {
	const { colors, sizes } = ds
	const size = sizes[hierarchy]

	return {
		text: {
			color: colors.text.light,
			fontSize: size.text,
			fontFamily: 'text'
		} as StyleProps,

		textDark: {
			color: colors.text.dark
		} as StyleProps,

		container: {
			display: 'flex',
			flexDirection: 'column',
			gap: size.space
		} as StyleProps,

		input: {
			backgroundColor: colors.bg.light,
			color: colors.text.light,
			padding: size.space,
			borderRadius: size.rounding,
			fontSize: size.text,
			fontFamily: 'text',
			border: `1px solid ${colors.border.light}`,
			width: '100%',
			cursor: 'pointer',
			'&:hover': {
				borderColor: colors.active.light
			},
			'&:focus': {
				outline: 'none',
				borderColor: colors.focus.light,
				boxShadow: `0 0 0 2px ${colors.focus.light}20`
			}
		} as StyleProps,

		inputDark: {
			backgroundColor: colors.bg.dark,
			color: colors.text.dark,
			borderColor: colors.border.dark,
			'&:hover': {
				borderColor: colors.active.dark
			},
			'&:focus': {
				borderColor: colors.focus.dark,
				boxShadow: `0 0 0 2px ${colors.focus.dark}20`
			}
		} as StyleProps
	}
}

// Form context utilities
export interface FormContextValue<T> {
	value: T
	onChange: (value: T) => void
	error?: string
	disabled?: boolean
}

export function createFormContext<T>() {
	return {
		Provider: ({ children, value }: { children: React.ReactNode; value: FormContextValue<T> }) =>
			children,
		useFormContext: () => ({}) as FormContextValue<T>
	}
}
