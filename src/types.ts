import type { ReactElement, SVGProps } from 'react'
import type { createButton } from './components/button'
import type { createForm } from './components/form'
import type { createIcon } from './components/icon'
import type { createLayout } from './components/layout'

export type Font = {
	format: 'truetype'
	base64: `data:font/truetype;charset=utf-8;base64,${string}`
}

export type FontsConfig = {
	display: Font
	text: Font
	[key: string]: Font
}

export type Hex = `#${string}`

export interface ColorPalette {
	bg: {
		light: Hex
		dark: Hex
	}
	text: {
		light: Hex
		dark: Hex
	}
}

export interface Size {
	space: `${number}rem`
	text: `${number}px`
	rounding: `${number}rem`
}

export interface Asset {
	light: () => ReactElement<SVGProps<SVGSVGElement>>
	dark: () => ReactElement<SVGProps<SVGSVGElement>>
	mono: (fill: Hex) => ReactElement<SVGProps<SVGSVGElement>>
}

export type ColorsConfig = {
	primary: ColorPalette
	secondary: ColorPalette
	[key: string]: ColorPalette
}

export type SizesConfig = {
	small: Size
	medium: Size
	large: Size
	[key: string]: Size
}

export type IconsConfig = {
	[key: string]: Asset
}

export type LogosConfig = {
	icon: Asset
	wordMark: Asset
}

export type ButtonConfig<Colors extends ColorsConfig, Sizes extends SizesConfig> = {
	primary: {
		color: keyof Colors
		size: keyof Sizes
	}
	[key: string]: {
		color: keyof Colors
		size: keyof Sizes
	}
}

export type FormConfig<Colors extends ColorsConfig, Sizes extends SizesConfig> = {
	primary: {
		color: keyof Colors
		size: keyof Sizes
	}
	[key: string]: {
		color: keyof Colors
		size: keyof Sizes
	}
}

export type DesignSystemFunction<Returns extends 'System' | 'Components' | 'Create'> = <
	Fonts extends FontsConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Logos extends LogosConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: {
	fonts: Fonts
	colors: Colors
	sizes: Sizes
	icons: Icons
	logos: Logos
	components: {
		Button: Button
		Form: Form
	}
}) => Returns extends 'System'
	? typeof ds
	: {
			Button: ReturnType<typeof createButton<Colors, Sizes, Icons, Button>>
			Form: ReturnType<typeof createForm<Fonts, Logos, Colors, Sizes, Icons, Form, Button>>
			Layout: ReturnType<typeof createLayout<Fonts, Colors, Sizes>>
			Icon: ReturnType<typeof createIcon<Colors, Sizes, Icons>>
		}
