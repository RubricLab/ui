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
} from '../styles/classes'
import type { ContainerProps, ContainerVariantEnum } from '../types'
import { cn } from '../utils'

const containerVariantClasses: Record<z.infer<typeof ContainerVariantEnum>, string> = {
	ghost: '',
	primary: 'bg-primary text-white',
	secondary: 'bg-accent'
}

export const Container: React.FC<ContainerProps> = ({
	id,
	children,
	arrangement = 'column',
	variant = 'ghost',
	gap = 'none',
	padding = 'none',
	border = 'none',
	justify = 'start',
	align = 'start',
	rounded = 'default',
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
