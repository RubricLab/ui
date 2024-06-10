import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import * as React from "react";

const buttonVariants = cva(
	"inline-flex items-center shrink-0 border-[1px] gap-[10px] justify-center hover:button-hover dark:border-[#050505] border-[#050505] leading-[130%] dark:text-[#fcfcfc] text-[#050505] dark:bg-[#050505] bg-[#fcfcfc] focus:ring-2 focus:ring-offset-2 focus:ring-zinc-800 disabled:opacity-70 disabled:pointer-events-none",
	{
		variants: {
			variant: {
				default: "",
				loading: "dark:border-[#050505] border-[#050505]",
			},
			size: {
				sm: "rounded-[2px] py-[3px] px-[6px] text-[10px] h-[20px]",
				md: "rounded-[3px] py-[4px] px-[8px] text-[16px] h-[28px]",
				lg: "rounded-[4px] py-[6px] px-[14px] text-[18px] h-[36px]",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "md",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<>
				<Comp
					className={clsx(buttonVariants({ variant, size, className }))}
					ref={ref}
					{...props}
				>
					{variant === "loading" ? (
						<div
							className={clsx("button-loading-animate", {
								"size-2 mx-4": size === "sm",
								"size-3 mx-5": size === "md",
								"size-4 mx-6": size === "lg",
							})}
						>
							<div className="grid grid-cols-2 gap-[20%] size-full">
								<span className="h-full w-full bg-gray-300 rounded-[0.5px]" />
								<span className="h-full w-full bg-gray-400 rounded-[0.5px]" />
								<span className="h-full w-full bg-gray-500 rounded-[0.5px]" />
								<span className="h-full w-full bg-gray-600 rounded-[0.5px]" />
							</div>
						</div>
					) : (
						props.children
					)}
				</Comp>
			</>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
