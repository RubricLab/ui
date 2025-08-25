import type { z } from 'zod/v4'
import type {
	AlignEnum,
	ArrangementEnum,
	BorderEnum,
	FontEnum,
	HeadingLevelEnum,
	HeightEnum,
	JustifyEnum,
	OverflowEnum,
	SizeEnum,
	TextSizeEnum,
	TextVariantEnum,
	WidthEnum,
	WrapEnum
} from '../types'

export const gapClasses: Record<z.infer<typeof SizeEnum>, string> = {
	lg: 'gap-6',
	md: 'gap-4',
	none: 'gap-0',
	sm: 'gap-2',
	xl: 'gap-8',
	xs: 'gap-1'
}

export const paddingClasses: Record<z.infer<typeof SizeEnum>, string> = {
	lg: 'p-6',
	md: 'p-4',
	none: 'p-0',
	sm: 'p-2',
	xl: 'p-8',
	xs: 'p-1'
}

export const roundedClasses: Record<z.infer<typeof SizeEnum>, string> = {
	lg: 'rounded-lg',
	md: 'rounded-md',
	none: 'rounded-none',
	sm: 'rounded',
	xl: 'rounded-xl',
	xs: 'rounded-xs'
}

export const arrangementClasses: Record<z.infer<typeof ArrangementEnum>, string> = {
	column: 'flex flex-col',
	row: 'flex'
}

export const justifyClasses: Record<z.infer<typeof JustifyEnum>, string> = {
	around: 'justify-around',
	between: 'justify-between',
	center: 'justify-center',
	end: 'justify-end',
	evenly: 'justify-evenly',
	start: 'justify-start'
}

export const alignClasses: Record<z.infer<typeof AlignEnum>, string> = {
	baseline: 'items-baseline',
	center: 'items-center',
	end: 'items-end',
	start: 'items-start',
	stretch: 'items-stretch'
}

export const borderClasses: Record<z.infer<typeof BorderEnum>, string> = {
	all: 'border',
	bottom: 'border-b',
	horizontal: 'border-x',
	left: 'border-l',
	none: 'border-none',
	right: 'border-r',
	top: 'border-t',
	vertical: 'border-y'
}

export const heightClasses: Record<z.infer<typeof HeightEnum>, string> = {
	'2xs': 'h-72',
	'3xs': 'h-64',
	fit: 'h-fit',
	full: 'h-full',
	lg: 'h-128',
	md: 'h-112',
	screen: 'h-screen',
	sm: 'h-80',
	xl: 'h-144',
	xs: 'h-80'
}

export const widthClasses: Record<z.infer<typeof WidthEnum>, string> = {
	'2xl': 'w-2xl',
	'2xs': 'w-2xs',
	'3xl': 'w-3xl',
	'3xs': 'w-3xs',
	fit: 'w-fit',
	full: 'w-full',
	lg: 'w-lg',
	md: 'w-md',
	screen: 'w-screen',
	sm: 'w-sm',
	xl: 'w-xl',
	xs: 'w-xs'
}

export const overflowClasses: Record<z.infer<typeof OverflowEnum>, string> = {
	auto: 'overflow-auto',
	hidden: 'overflow-hidden',
	scroll: 'overflow-scroll',
	visible: 'overflow-visible'
}

export const wrapClasses: Record<z.infer<typeof WrapEnum>, string> = {
	nowrap: 'flex-nowrap',
	wrap: 'flex-wrap',
	'wrap-reverse': 'flex-wrap-reverse'
}

export const textVariantClasses: Record<z.infer<typeof TextVariantEnum>, string> = {
	muted: 'opacity-30',
	primary: 'opacity-100',
	secondary: 'opacity-70',
	tertiary: 'opacity-50'
}

export const textSizeClasses: Record<z.infer<typeof TextSizeEnum>, string> = {
	lg: 'text-lg',
	md: 'text-base',
	sm: 'text-sm',
	xl: 'text-xl',
	xs: 'text-xs'
}

export const headingLevelClasses: Record<z.infer<typeof HeadingLevelEnum>, string> = {
	'1': 'text-2xl font-semibold',
	'2': 'text-xl',
	'3': 'text-lg',
	'4': 'text-base font-light'
}

export const fontClasses: Record<z.infer<typeof FontEnum>, string> = {
	mono: 'font-mono',
	sans: 'font-sans',
	serif: 'font-serif'
}
