"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import clsx from "clsx";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<TooltipPrimitive.Content
		ref={ref}
		sideOffset={sideOffset}
		className={clsx("zoom-in-95 z-50 text-xs overflow-hidden", className)}
		{...props}
	>
		<div
			className={clsx("flex items-center", {
				"flex-col -space-y-0.5": props.side === "top",
				"-space-y-0.5 space-y-reverse flex-col-reverse":
					props.side === "bottom",
				"-space-x-1.5 space-x-reverse flex-row-reverse": props.side === "right",
				"-space-x-1.5 flex-row": props.side === "left",
			})}
		>
			<span className="bg-black rounded-sm text-white py-0.5 px-1">
				{props.children}
			</span>
			<svg
				className={clsx(
					{
						"rotate-270": props.side === "top",
						"rotate-180": props.side === "bottom",
					},
					{ "rotate-90": props.side === "right" },
					{ "-rotate-90": props.side === "left" },
				)}
				xmlns="http://www.w3.org/2000/svg"
				width="13"
				height="6"
				viewBox="0 0 13 6"
				fill="none"
			>
				<title>Tooltip Triangle</title>
				<path d="M6.5 6L0.5 0H12.5L6.5 6Z" fill="#050505" />
			</svg>
		</div>
	</TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
