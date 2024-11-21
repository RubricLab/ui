import type {
	ButtonConfig,
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	FormConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from './types'

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
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons, Button, Form>) {
	return ds
}
