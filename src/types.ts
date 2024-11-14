// types.ts

import type { ReactElement, SVGProps } from 'react'

export type Color = {
	light: `#${string}`
	dark: `#${string}`
}

export type Asset = {
	light: () => ReactElement<SVGProps<SVGSVGElement>, 'svg'>
	dark: () => ReactElement<SVGProps<SVGSVGElement>, 'svg'>
}

export type Font = string

export type BorderRadius = 'none' | 'small' | 'medium' | 'large'
export type Padding = 'none' | 'small' | 'medium' | 'large'
export type FontSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'subtle'

export type ButtonStyle<ColorKey> = {
	borderRadius: BorderRadius
	padding: Padding
	backgroundColor: ColorKey
	textColor: ColorKey
	fontSize: FontSize
}

export type DesignSystem<
	Colors extends { [K in keyof Colors]: Color } = { [key in string]: Color },
	Icons extends { [K in keyof Icons]: Asset } = { [key in string]: Asset },
	Fonts extends { [K in keyof Fonts]: Font } = { [key in string]: Font },
	ButtonComponents extends { [K in keyof ButtonComponents]: ButtonStyle<keyof Colors> } = {
		[key in ButtonVariant]: ButtonStyle<keyof Colors>
	}
> = {
	colors: {
		primary: Color
		secondary: Color
	} & Colors
	icons: Icons
	logo: {
		icon: Asset
		wordMark: Asset
	}
	fonts: Fonts
	components: {
		Button: ButtonComponents
	}
}
