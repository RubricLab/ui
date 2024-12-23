import type { JSX, ReactElement, SVGProps } from 'react'

import type { AnyZodObject, z } from 'zod'

export type Font =
	| {
			format: 'truetype'
			base64: `data:font/truetype;charset=utf-8;base64,${string}`
	  }
	| {
			format: 'opentype'
			base64: `data:font/opentype;charset=utf-8;base64,${string}`
	  }

export type Hex = `#${string}`

export type RGBA = `rgba(${number},${number},${number},${number})`

export type Color = {
	light: Hex
	dark: Hex
}

export type Shadow = {
	light: RGBA
	dark: RGBA
}

export type ColorPalette = {
	active: Color
	focus: Color
	neutral: Color
	disabled: Color
	bg: Color
	text: Color
	border: Color
	shadow: Shadow
	error: Color
	success: Color
	warning: Color
}

export type Size = {
	space: `${number}rem`
	text: `${number}px`
	rounding: `${number}rem`
}

export type SizePalatte = {
	title: Size
	subtitle: Size
	content: Size
	information: Size
}

export type Asset = {
	light: () => ReactElement<SVGProps<SVGSVGElement>>
	dark: () => ReactElement<SVGProps<SVGSVGElement>>
	mono: (fill: Hex) => ReactElement<SVGProps<SVGSVGElement>>
}

type FontsConfig = {
	body: Font
	heading: Font
	monospace: Font
}

type LogosConfig = {
	icon: Asset
	wordMark: Asset
}

type ColorsConfig = {
	active: Color
	focus: Color
	neutral: Color
	disabled: Color
	bg: Color
	text: Color
	border: Color
	shadow: Shadow
	error: Color
	success: Color
	warning: Color
}

type SizesConfig = {
	title: Size
	subtitle: Size
	content: Size
	information: Size
}

type IconsConfig = {
	github: Asset
	google: Asset
}

export type DesignSystem = {
	fonts: FontsConfig
	logos: LogosConfig
	colors: ColorsConfig
	sizes: SizesConfig
	icons: IconsConfig
}

export type ComponentWithSchema<Schema extends AnyZodObject> = ((
	props: z.infer<Schema>
) => JSX.Element) & {
	schema: Schema
}
