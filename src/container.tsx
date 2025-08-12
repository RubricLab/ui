'use client'

import type { ContainerProps, ContainerVariantEnum } from './types'
import { cn } from '@/utils'
import type { z } from 'zod/v4'
import {
	alignClasses,
	arrangementClasses,
	borderClasses,
	gapClasses,
	heightClasses,
	justifyClasses,
	overflowClasses,
	paddingClasses,
	roundedClasses,
	widthClasses,
	wrapClasses
} from './classes'

const containerVariantClasses: Record<z.infer<typeof ContainerVariantEnum>, string> = {
	primary: 'bg-primary text-white',
	secondary: 'bg-accent',
	ghost: ''
}

// Note: className isn't available to the LLM, it is just left here for developer convenience
export const Container: React.FC<ContainerProps & { className?: string }> = ({
	id,
	children,
	arrangement = 'column',
	variant = 'ghost',
	gap = 'none',
	padding = 'none',
	border = 'none',
	justify = 'start',
	align = 'start',
	rounded = 'none',
	height = 'fit',
	width = 'full',
	overflow = 'visible',
	wrap = 'nowrap',
	className
}) => {
	return (
		<div
			id={id}
			className={cn(
				arrangement && arrangementClasses[arrangement],
				variant && containerVariantClasses[variant],
				gap && gapClasses[gap],
				padding && paddingClasses[padding],
				justify && justifyClasses[justify],
				align && alignClasses[align],
				wrap && wrapClasses[wrap],
				border && borderClasses[border],
				rounded && roundedClasses[rounded],
				height && heightClasses[height],
				width && widthClasses[width],
				overflow && overflowClasses[overflow],
				className
			)}
		>
			{children}
		</div>
	)
}
