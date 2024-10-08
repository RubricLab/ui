import { forwardRef } from 'react'

import { cn } from '../utils/cn'

const Card = forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement> & {
		shadow?: boolean
		hoverable?: boolean
	}
>(({ className, shadow = true, hoverable = true, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'group w-[300px] rounded-lg border border-rubricui-contrast/10 bg-rubricui-primary text-rubricui-contrast transition-all duration-rubricui-duration dark:shadow-white/10',
			shadow && 'shadow',
			hoverable && 'hover:border-rubricui-contrast/20',
			shadow && hoverable && 'hover:shadow-lg',
			className
		)}
		{...props}
	/>
))
Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
	)
)
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
	({ className, ...props }, ref) => (
		<h3 ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
	)
)
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p ref={ref} className={cn('text-rubricui-contrast/70 text-sm', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
	)
)
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				'flex items-center border-t border-t-rubricui-contrast/10 px-6 py-3 transition-colors duration-rubricui-duration group-hover:border-t-rubricui-contrast/20',
				className
			)}
			{...props}
		/>
	)
)
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
