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
export type ColorKey = keyof DesignSystem['colors']

export type ButtonStyle = {
	borderRadius: BorderRadius
	padding: Padding
	backgroundColor: ColorKey
	textColor: ColorKey
	fontSize: FontSize
}

export type DesignSystem = {
	colors: {
		primary: Color
		secondary: Color
	} & Record<string, Color>
	icons: {
		sun?: Asset
	} & Record<string, Asset>
	fonts: {
		display: Font
		paragraph: Font
		code: Font
	}
	components: {
		Button: Record<ButtonVariant, ButtonStyle>
	}
}
