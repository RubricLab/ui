import type { ReactElement, SVGProps } from 'react'

/* ----------------------------------------
   Basic Unit Types
---------------------------------------- */

export type HexColor = `#${string}`
export type RGBAColor = `rgba(${number},${number},${number},${number})`
export type DSColor = HexColor | RGBAColor

export type Pixels = `${number}px`
export type Rems = `${number}rem`
export type Unit = Pixels | Rems

export type Ms = `${number}ms`

/* ----------------------------------------
   Fonts
---------------------------------------- */

export type Font =
	| {
			format: 'opentype'
			base64: `data:font/opentype;charset=utf-8;base64,${string}`
	  }
	| {
			format: 'truetype'
			base64: `data:font/truetype;charset=utf-8;base64,${string}`
	  }

/* ----------------------------------------
   Color States & Theme Palette
---------------------------------------- */

export interface ColorStates {
	base: DSColor
	focus: DSColor
	active: DSColor
	subtle: DSColor
	text: DSColor
	contrast: DSColor
}

export interface ThemePalette {
	brand: ColorStates
	surface: Pick<ColorStates, 'base' | 'subtle' | 'text'>
	destructive: ColorStates
	success: ColorStates
	warning: ColorStates
}

export interface ColorModes {
	light: ThemePalette
	dark: ThemePalette
}

/* ----------------------------------------
   Typography
---------------------------------------- */

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export interface FontsConfig {
	body: Font
	heading: Font
	monospace: Font
}

export interface TypographyScale {
	headline: { fontSize: Unit; lineHeight: Unit; fontWeight?: FontWeight }
	subHeadline: { fontSize: Unit; lineHeight: Unit; fontWeight?: FontWeight }
	body: { fontSize: Unit; lineHeight: Unit; fontWeight?: FontWeight }
	[key: string]: { fontSize: Unit; lineHeight: Unit; fontWeight?: FontWeight }
}

export interface TypographyConfig {
	fonts: FontsConfig
	scale: TypographyScale
	settings: {
		headingLineHeight: number
		headingLetterSpacing?: string
		bodyLineHeight: number
		bodyLetterSpacing?: string
	}
}

/* ----------------------------------------
   Icons & Logos
---------------------------------------- */

export interface Asset {
	light: () => ReactElement<SVGProps<SVGSVGElement>>
	dark: () => ReactElement<SVGProps<SVGSVGElement>>
	mono: (fill: HexColor) => ReactElement<SVGProps<SVGSVGElement>>
}

export interface LogosConfig {
	icon: Asset
	wordmark: Asset
}

export interface IconsConfig {
	arrowLeft: Asset
	arrowRight: Asset
	arrowUp: Asset
	arrowDown: Asset
	cross: Asset
	plus: Asset
	minus: Asset
	edit: Asset
	trash: Asset
	search: Asset
	settings: Asset
	menu: Asset
	[iconName: string]: Asset
}

/* ----------------------------------------
   Spacing & Rounding
---------------------------------------- */

export interface SpacingScale {
	xs: Unit
	sm: Unit
	md: Unit
	lg: Unit
	xl: Unit
	xxl: Unit
}

export interface RoundingScale {
	subtle: Unit
	rounded: Unit
	pill: Unit
}

/* ----------------------------------------
   Shadows
---------------------------------------- */

export interface Shadow {
	offsetX: Pixels
	offsetY: Pixels
	blurRadius: Pixels
	color: DSColor
}

export interface ShadowScale {
	sm: Shadow
	md: Shadow
	lg: Shadow
}

export interface ExtendedShadowsConfig {
	sm: RGBAColor
	md: RGBAColor
	lg: RGBAColor
}

/* ----------------------------------------
   Animations & Transitions
---------------------------------------- */

export type CubicBezier = `cubic-bezier(${number},${number},${number},${number})`

export type AnimationTiming = 'ease-in-out' | 'ease-in' | 'ease-out' | 'linear' | CubicBezier

export interface AnimationsConfig {
	quick: {
		timing: AnimationTiming
	}
	normal: {
		timing: AnimationTiming
	}
	slow: {
		timing: AnimationTiming
	}
}

export interface TransitionScale {
	fast: Ms
	normal: Ms
	slow: Ms
}

/* ----------------------------------------
   Borders
---------------------------------------- */

export type BorderStyle =
	| 'solid'
	| 'dashed'
	| 'dotted'
	| 'double'
	| 'groove'
	| 'ridge'
	| 'inset'
	| 'outset'

export interface BordersConfig {
	thin: {
		width: Pixels
		style: BorderStyle
	}
	thick: {
		width: Pixels
		style: BorderStyle
	}
}

/* ----------------------------------------
   Breakpoints
---------------------------------------- */

export type BreakpointValue = `${number}px`

export interface BreakpointsConfig {
	xs: BreakpointValue
	sm: BreakpointValue
	md: BreakpointValue
	lg: BreakpointValue
	xl: BreakpointValue
	xxl: BreakpointValue
}

/* ----------------------------------------
   Final DesignSystem Interface
---------------------------------------- */

export interface DesignSystem {
	colors: ColorModes
	typography: TypographyConfig
	icons: IconsConfig
	logos: LogosConfig
	spacing: SpacingScale
	rounding: RoundingScale
	shadows: ShadowScale
	extendedShadows?: ExtendedShadowsConfig
	animations: AnimationsConfig
	transitions: TransitionScale
	borders: BordersConfig
	breakpoints: BreakpointsConfig
}
