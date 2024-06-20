"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Loading } from "./loading";

const variants = {
	primary: "bg-rubricui-contrast text-rubricui-primary",
	secondary: "bg-rubricui-primary text-rubricui-contrast",
};

const sizes = {
	small: "rounded-[2px] min-h-[20px] px-[6px] py-[3px] text-xs min-w-[66px]",
	medium: "rounded-[3px] min-h-[28px] px-[8px] py-[4px] text-sm min-w-[80px]",
	large: "rounded-[4px] min-h-[36px] px-[14px] py-[6px] text-base min-w-[115px]",
};

const states = {
	default: "cursor-pointer",
	loading: "cursor-wait",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: keyof typeof variants;
	size?: keyof typeof sizes;
	state?: keyof typeof states;
	prefix_icon?: ReactNode;
	suffix_icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "primary",
			size = "medium",
			state = "default",
			prefix_icon,
			suffix_icon,
			...props
		},
		ref,
	) => {
		return (
			<button
				className={cn(
					"inline-flex gap-[8px] hover:bg-opacity-90 hover:ring-opacity-90 hover:border-opacity-90 relative items-center justify-center outline-none border border-rubricui-primary hover:ring ring-rubricui-contrast/5 focus:ring focus:ring-offset-2 focus:ring-rubricui-contrast/20 transition-all duration-rubricui-duration disabled:opacity-70 disabled:pointer-events-none",
					variants[variant],
					sizes[size],
					className,
					states[state],
				)}
				ref={ref}
				{...props}
			>
				{state === "loading" ? (
					<Loading size={size} />
				) : (
					<>
						{prefix_icon && <span>{prefix_icon}</span>}
						{props.children}
						{suffix_icon && <span>{suffix_icon}</span>}
					</>
				)}
			</button>
		);
	},
);

Button.displayName = "Button";

export { Button };
