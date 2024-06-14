"use client";

import {
  forwardRef,
  useState,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { Loading } from "./loading";

const variants = {
  primary: "bg-brand-contrast text-brand-primary",
  secondary: "bg-brand-primary text-brand-contrast",
};

const sizes = {
  small: "rounded-[2px] h-[20px] px-[6px] py-[3px] text-xs",
  medium: "rounded-[3px] h-[28px] px-[10px] py-[4px] text-md",
  large: "rounded-[4px] h-[36px] px-[16px] py-[6px] text-lg",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "medium", ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(false);
    return (
      <button
        onLoadStart={() => setIsLoading(true)}
        onLoad={() => setIsLoading(false)}
        className={cn(
          "flex relative items-center justify-center border-[2px] outline-none border-brand-contrast hover:ring ring-brand-contrast/5 focus:ring focus:ring-offset-2 focus:ring-gray-500 transition-all duration-brand-duration disabled:opacity-70",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <Loading className="absolute left-[50%] -translate-x-[50%] -translate-y-[50%] top-[50%]" />
        )}
        <div
          className={`flex gap-1 w-full items-center ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <span>{props.icon}</span>
          <>{props.children}</>
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
