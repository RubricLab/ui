'use client'

import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import clsx from 'clsx'
import { forwardRef } from 'react'

const Checkbox = forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={clsx(
			'peer flex size-4 shrink-0 rounded-sm border-[1px] border-rubricui-contrast/20 shadow transition-all duration-rubricui-duration focus:ring-2 focus:ring-rubricui-contrast/10 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-opacity-60 data-[state=checked]:bg-rubricui-contrast data-[state=unchecked]:bg-rubricui-primary',
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={clsx('flex h-full w-full items-center justify-center text-current')}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
				<title>Checkbox</title>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M11.6705 3L11.2727 3.39775L4.67804 9.99242C4.16548 10.505 3.33445 10.505 2.82189 9.99242L0.727215 7.89775L0.329468 7.5L1.12496 6.70451L1.52271 7.10225L3.61738 9.19692C3.6906 9.27015 3.80932 9.27015 3.88255 9.19692L10.4772 2.60225L10.875 2.20451L11.6705 3Z"
					className="fill-rubricui-primary"
				/>
			</svg>
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = 'Checkbox'

export { Checkbox }
