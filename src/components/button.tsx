import { forwardRef, type ReactNode } from "react";
import { cn } from "../utils/cn";

const variants = { primary: "", secondary: "" };

const sizes = { small: "", medium: "", large: "" };

interface ButtonProps {
  className: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "medium", ...props }, ref) => {
    return (
      <button
        className={cn("", variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
