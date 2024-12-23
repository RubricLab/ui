import type { ReactElement, SVGProps } from 'react'

export type Font =
	| {
			format: 'truetype'
			base64: `data:font/truetype;charset=utf-8;base64,${string}`
	  }
	| {
			format: 'opentype'
			base64: `data:font/opentype;charset=utf-8;base64,${string}`
	  }

export type FontsConfig = {
	display: Font
	text: Font
	[key: string]: Font
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

export type ColorsConfig = ColorPalette

export type SizesConfig = SizePalatte

export type IconsConfig = {
	[key: string]: Asset
}

export type LogosConfig = {
	icon: Asset
	wordMark: Asset
}

export type HorizontalPlacement = 'left' | 'right' | 'center'

export type DesignSystem<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
> = {
	fonts: Fonts
	logos: Logos
	colors: Colors
	sizes: Sizes
	icons: Icons
}
