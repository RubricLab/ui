import type { HTMLAttributes } from 'react'
import { cn } from '../utils/cn'

const variants = {
	primary: 'bg-rubricui-contrast text-rubricui-primary',
	secondary: 'bg-rubricui-primary text-rubricui-contrast',
	destructive: 'bg-red-500 text-white border-red-600',
	outline: 'border-rubricui-primary text-rubricui-primary'
}

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
	variant?: keyof typeof variants
}

function Badge({ className, variant = 'primary', ...props }: BadgeProps) {
	return (
		<div
			className={cn(
				'inline-flex items-center rounded-md border border-rubricui-primary/10 px-2.5 py-0.5 font-medium text-xs outline-none transition-all duration-rubricui-duration hover:ring-2 hover:ring-rubricui-contrast/10',
				variants[variant],
				className
			)}
			{...props}
		/>
	)
}

export { Badge }
