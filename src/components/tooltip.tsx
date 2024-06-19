"use client"

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef } from "react";

import clsx from "clsx";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => {
	const { side = "top", children } = props;

	return (
		<TooltipPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={clsx(
				"zoom-in-95 z-50 text-xs text-rubricui-primary overflow-hidden",
				className,
			)}
			{...props}
		>
			<div
				className={clsx("flex items-center", {
					"flex-col -space-y-0.5": side === "top",
					"-space-y-0.5 space-y-reverse flex-col-reverse": side === "bottom",
					"-space-x-1.5 space-x-reverse flex-row-reverse": side === "right",
					"-space-x-1.5 flex-row": side === "left",
				})}
			>
				<span className="bg-rubricui-contrast rounded-sm py-0.5 px-1">
					{children}
				</span>
				<svg
					className={clsx(
						"fill-rubricui-contrast",
						{
							"rotate-270": side === "top",
							"rotate-180": side === "bottom",
						},
						{ "rotate-90": side === "right" },
						{ "-rotate-90": side === "left" },
					)}
					xmlns="http://www.w3.org/2000/svg"
					width="13"
					height="6"
					viewBox="0 0 13 6"
				>
					<title>Tooltip Triangle</title>
					<path
						d="M6.5 6L0.5 0H12.5L6.5 6Z"
						className="fill-rubricui-contrast"
					/>
				</svg>
			</div>
		</TooltipPrimitive.Content>
	);
});

TooltipContent.displayName = "TooltipContent";

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
