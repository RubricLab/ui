import { forwardRef } from "react";

import { cn } from "../utils/cn";

const sizes = {
	small: "h-[20px] px-[3px] rounded-[2px] text-xs w-[180px]",
	medium: "h-[28px] px-[4px] rounded-[3px] text-sm w-[220px]",
	large: "h-[36px] px-[6px] rounded-[4px] text-base w-[260px]",
};

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
	size?: keyof typeof sizes;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, size = "small", type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"flex items-center self-stretch placeholder:text-rubricui-contrast/50 border bg-rubricui-contrast/5 border-rubricui-contrast/10 focus:outline-rubricui-contrast/20",
					sizes[size],
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Input.displayName = "Input";

export { Input };
