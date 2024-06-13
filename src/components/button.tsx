import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

const variants = { primary: "", secondary: "" };

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
    return (
      <button
        className={cn(
          "flex items-center justify-center border",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
