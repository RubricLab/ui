import type { ReactElement, SVGProps } from 'react'

type Hex = `#${string}`

interface ColorPalette {
	bg: {
		light: Hex
		dark: Hex
	}
	text: {
		light: Hex
		dark: Hex
	}
}

interface Size {
	space: `${number}rem`
	text: `${number}px`
	rounding: `${number}rem`
}

interface Asset {
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
