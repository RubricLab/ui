'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { forwardRef } from 'react'

import { cn } from '../utils/cn'

const Label = forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(
			'font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
			className
		)}
		{...props}
	/>
))
Label.displayName = 'Label'

export { Label }
