"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import clsx from "clsx";

const toggleVariants = cva(
	"inline-flex items-center shrink justify-center rounded-sm text-sm font-medium transition-colors dark:hover:bg-[#050505]/20 hover:bg-[#050505]/10 data-[state=on]:dark:bg-black data-[state=on]:dark:text-white data-[state=on]:bg-[#050505]/20",
	{
		variants: {
			variant: {
				default: "bg-transparent",
			},
			size: {
				sm: "size-5 text-xs",
				md: "size-7 text-sm",
				lg: "size-9 text-base",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={clsx(toggleVariants({ variant, size, className }))}
		{...props}
	/>
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
