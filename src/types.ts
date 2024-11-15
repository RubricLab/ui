// types.ts

import type { ReactElement, SVGProps } from 'react'

export type Hex = `#${string}`

export type Color = {
	light: Hex
	dark: Hex
}

export type ColorPalate = {
	bg: {
		light: Hex
		dark: Hex
	}
	text: {
		light: Hex
		dark: Hex
	}
}

export type Rem = `${number}rem`
export type Px = `${number}px`

export type Size = {
	space: Rem
	text: Px
	rounding: Rem
}

export type Asset = {
	light: () => ReactElement<SVGProps<SVGSVGElement>, 'svg'>
	dark: () => ReactElement<SVGProps<SVGSVGElement>, 'svg'>
	mono: (fill: Hex) => ReactElement<SVGProps<SVGSVGElement>, 'svg'>
}

export type Font = string

export type BorderRadius = 'none' | 'small' | 'medium' | 'large'
export type Padding = 'none' | 'small' | 'medium' | 'large'
export type FontSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'subtle'

export type ButtonStyle<ColorKey, SizeKey> = {
	color: ColorKey
	size: SizeKey
}

export type DesignSystem<
	Sizes extends { [K in keyof Sizes]: Size } = { [key in string]: Size },
	Colors extends { [K in keyof Colors]: ColorPalate } = { [key in string]: ColorPalate },
	Icons extends { [K in keyof Icons]: Asset } = { [key in string]: Asset },
	Fonts extends { [K in keyof Fonts]: Font } = { [key in string]: Font },
	ButtonComponents extends {
		[K in keyof ButtonComponents]: ButtonStyle<keyof Colors, keyof Sizes>
	} = {
		[key in ButtonVariant]: ButtonStyle<keyof Colors, keyof Sizes>
	}
> = {
	colors: Colors
	sizing: {
		small: Size
		medium: Size
		large: Size
	} & Sizes
	icons: Icons
	logo: {
		icon: Asset
		wordmark: Asset
	}
	fonts: Fonts
	components: {
		Button: ButtonComponents
	}
}

export type Route = {
	title: string
	end?: boolean
} & ({ route: `/${string}`; action?: never } | { route?: never; action: () => void })
