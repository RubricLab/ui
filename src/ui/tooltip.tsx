import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import * as React from 'react'

const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({className, sideOffset = 6, ...props}, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={
			'zoom-in-95 z-50 overflow-hidden text-xs'
		}
		{...props}
	/>
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger}
