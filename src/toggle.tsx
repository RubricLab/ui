'use client'

import { cn } from '@/utils/cn'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const toggleVariants = cva(
	'inline-flex text-nowrap overflow-hidden items-center justify-center text-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline: 'border bg-transparent'
			},
			size: {
				sm: 'h-6 px-2 min-w-6',
				default: 'h-8 px-4 min-w-8',
				lg: 'h-10 px-6 min-w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({ variant, size, className }))}
		{...props}
	/>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
