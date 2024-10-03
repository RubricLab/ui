'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { forwardRef } from 'react'
import { cn } from '../utils/cn'

const sizes = {
	small: 'size-5 text-xs',
	medium: 'size-7 text-sm',
	large: 'size-9 text-base'
}

const Toggle = forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
		size?: keyof typeof sizes
	}
>(({ className, size = 'small', ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(
			'inline-flex shrink items-center justify-center rounded-sm font-medium text-rubricui-contrast transition-colors duration-rubricui-duration hover:bg-rubricui-contrast/20 data-[state=on]:bg-rubricui-contrast data-[state=on]:text-rubricui-primary',
			sizes[size],
			className
		)}
		{...props}
	/>
))

Toggle.displayName = 'Toggle'

export { Toggle }
