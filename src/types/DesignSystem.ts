export interface ColorMode {
	background: string
	text: string
	primary: string
	secondary: string
	success: string
	danger: string
}

export interface DesignSystemColors {
	light: ColorMode
	dark: ColorMode
}

export interface TypographyScale {
	headline: { fontSize: string; lineHeight: string; fontWeight?: number }
	subHeadline: { fontSize: string; lineHeight: string; fontWeight?: number }
	body: { fontSize: string; lineHeight: string; fontWeight?: number }
}

export interface SpacingScale {
	none: string
	xs: string
	sm: string
	md: string
	lg: string
	xl: string
}

export interface RoundingScale {
	none: string
	subtle: string
	rounded: string
	pill: string
}

export interface ShadowScale {
	none: string
	sm: string
	md: string
	lg: string
}

export interface TransitionScale {
	fast: string
	normal: string
	slow: string
}

export interface Breakpoints {
	xs: string
	sm: string
	md: string
	lg: string
	xl: string
}

export interface ZIndexScale {
	base: number
	dropdown: number
	modal: number
	tooltip: number
}

export interface IconRegistry {
	[iconName: string]: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface DesignSystem {
	colors: DesignSystemColors
	typography: TypographyScale
	spacing: SpacingScale
	rounding: RoundingScale
	shadows: ShadowScale
	transitions: TransitionScale
	breakpoints: Breakpoints
	zIndex: ZIndexScale
	icons?: IconRegistry
}
