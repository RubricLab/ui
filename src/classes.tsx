import type {
	AlignEnum,
	ArrangementEnum,
	BorderEnum,
	DimensionEnum,
	HeadingLevelEnum,
	JustifyEnum,
	OverflowEnum,
	SizeEnum,
	TextSizeEnum,
	TextVariantEnum,
	WidthEnum,
	WrapEnum
} from './types'
import type { z } from 'zod/v4'

export const gapClasses: Record<z.infer<typeof SizeEnum>, string> = {
	none: 'gap-0',
	xs: 'gap-1',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
}

export const paddingClasses: Record<z.infer<typeof SizeEnum>, string> = {
	none: 'p-0',
	xs: 'p-1',
	sm: 'p-2',
	md: 'p-4',
	lg: 'p-6',
	xl: 'p-8'
}

export const roundedClasses: Record<z.infer<typeof SizeEnum>, string> = {
	none: 'rounded-none',
	xs: 'rounded-xs',
	sm: 'rounded',
	md: 'rounded-md',
	lg: 'rounded-lg',
	xl: 'rounded-xl'
}

export const arrangementClasses: Record<z.infer<typeof ArrangementEnum>, string> = {
	row: 'flex',
	column: 'flex flex-col'
}

export const justifyClasses: Record<z.infer<typeof JustifyEnum>, string> = {
	start: 'justify-start',
	end: 'justify-end',
	center: 'justify-center',
	between: 'justify-between',
	around: 'justify-around',
	evenly: 'justify-evenly'
}

export const alignClasses: Record<z.infer<typeof AlignEnum>, string> = {
	start: 'items-start',
	center: 'items-center',
	end: 'items-end',
	stretch: 'items-stretch',
	baseline: 'items-baseline'
}

export const borderClasses: Record<z.infer<typeof BorderEnum>, string> = {
	horizontal: 'border-x',
	vertical: 'border-y',
	left: 'border-l',
	right: 'border-r',
	top: 'border-t',
	bottom: 'border-b',
	all: 'border',
	none: 'border-none'
}

export const heightClasses: Record<z.infer<typeof DimensionEnum>, string> = {
	fit: 'h-fit',
	full: 'h-full',
	screen: 'h-screen'
}

export const widthClasses: Record<z.infer<typeof WidthEnum>, string> = {
	'3xs': 'w-3xs',
	'2xs': 'w-2xs',
	xs: 'w-xs',
	sm: 'w-sm',
	md: 'w-md',
	lg: 'w-lg',
	xl: 'w-xl',
	'2xl': 'w-2xl',
	'3xl': 'w-3xl',
	fit: 'w-fit',
	full: 'w-full',
	screen: 'w-screen'
}

export const overflowClasses: Record<z.infer<typeof OverflowEnum>, string> = {
	visible: 'overflow-visible',
	hidden: 'overflow-hidden',
	scroll: 'overflow-scroll',
	auto: 'overflow-auto'
}

export const wrapClasses: Record<z.infer<typeof WrapEnum>, string> = {
	wrap: 'flex-wrap',
	nowrap: 'flex-nowrap',
	'wrap-reverse': 'flex-wrap-reverse'
}

export const textVariantClasses: Record<z.infer<typeof TextVariantEnum>, string> = {
	primary: 'opacity-100',
	secondary: 'opacity-70',
	tertiary: 'opacity-50',
	muted: 'opacity-30'
}

export const textSizeClasses: Record<z.infer<typeof TextSizeEnum>, string> = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl'
}

export const headingLevelClasses: Record<z.infer<typeof HeadingLevelEnum>, string> = {
	'1': 'text-2xl',
	'2': 'text-lg font-semibold',
	'3': 'text-base font-semibold',
	'4': 'text-base font-light'
}
