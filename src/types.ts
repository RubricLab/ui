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

export type FontsConfig = {
	body: Font
	heading: Font
	monospace: Font
}

export type LogosConfig = {
	icon: Asset
	wordMark: Asset
}

export type ColorsConfig = {
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
export type SizesConfig = {
	title: Size
	subtitle: Size
	content: Size
	information: Size
}

export type IconsConfig = {
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

type FILE_TYPE =
	// Wildcards
	| '*/*'
	// Images
	| 'image/*'
	| 'image/jpeg'
	| 'image/png'
	| 'image/gif'
	| 'image/webp'
	| 'image/svg+xml'
	| 'image/bmp'
	| 'image/x-icon'
	// Audio
	| 'audio/*'
	| 'audio/mpeg'
	| 'audio/wav'
	| 'audio/ogg'
	| 'audio/midi'
	| 'audio/aac'
	| 'audio/webm'
	// Video
	| 'video/*'
	| 'video/mp4'
	| 'video/webm'
	| 'video/ogg'
	| 'video/quicktime'
	| 'video/x-msvideo'
	// Documents
	| 'application/pdf'
	| 'application/msword'
	| 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	| 'application/vnd.ms-excel'
	| 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
	| 'application/vnd.ms-powerpoint'
	| 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
	// Archives
	| 'application/zip'
	| 'application/x-rar-compressed'
	| 'application/x-7z-compressed'
	| 'application/x-tar'
	| 'application/gzip'
	// Text & Code
	| 'text/*'
	| 'text/plain'
	| 'text/html'
	| 'text/css'
	| 'text/javascript'
	| 'text/csv'
	| 'text/markdown'
	| 'application/json'
	| 'application/xml'
	| 'application/javascript'
	| 'application/typescript'

export type ZodFile = z.ZodObject<{
	type: z.ZodLiteral<FILE_TYPE>
	file: z.ZodType<File>
	size: z.ZodNumber
	name: z.ZodString
}>[]
