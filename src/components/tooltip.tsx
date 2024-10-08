'use client'

import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { forwardRef } from 'react'
import { cn } from '../utils/cn'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
	const { side = 'top', children } = props

	return (
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn('zoom-in-95 z-50 overflow-hidden text-rubricui-primary text-xs', className)}
			{...props}
		>
			<div
				className={cn('flex items-center', {
					'-space-y-0.5 flex-col': side === 'top',
					'-space-y-0.5 flex-col-reverse space-y-reverse': side === 'bottom',
					'-space-x-1.5 flex-row-reverse space-x-reverse': side === 'right',
					'-space-x-1.5 flex-row': side === 'left'
				})}
			>
				<span className="rounded-sm bg-rubricui-contrast px-1 py-0.5">{children}</span>
				<svg
					className={cn(
						'fill-rubricui-contrast',
						{
							'rotate-270': side === 'top',
							'rotate-180': side === 'bottom'
						},
						{ 'rotate-90': side === 'right' },
						{ '-rotate-90': side === 'left' }
					)}
					xmlns="http://www.w3.org/2000/svg"
					width="13"
					height="6"
					viewBox="0 0 13 6"
				>
					<title>Tooltip Triangle</title>
					<path d="M6.5 6L0.5 0H12.5L6.5 6Z" className="fill-rubricui-contrast" />
				</svg>
			</div>
		</TooltipPrimitive.Content>
	)
})

TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
