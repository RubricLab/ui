"use client";

import * as SwitchPrimitives from "@radix-ui/react-switch";

import { clsx } from "clsx";
import { forwardRef } from "react";

const Switch = forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={clsx(
			"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-[1px] border-rubricui-contrast shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-rubricui-primary data-[state=unchecked]:bg-rubricui-contrast/10",
			className,
		)}
		{...props}
		ref={ref}
	>
		<SwitchPrimitives.Thumb
			className={clsx(
				"pointer-events-none block size-4 rounded-full bg-rubricui-contrast/50 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-rubricui-contrast data-[state=checked]:w-[20px] mx-[0.05rem] duration-rubricui-duration",
			)}
		/>
	</SwitchPrimitives.Root>
));
Switch.displayName = "Switch";

export { Switch };
