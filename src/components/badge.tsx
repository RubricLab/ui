import { type HTMLAttributes } from "react";
import { cn } from "../utils/cn";

const variants = {
  primary: "bg-rubricui-contrast text-rubricui-primary",
  secondary: "bg-rubricui-primary text-rubricui-contrast",
  destructive: "bg-red-500 text-white border-red-600",
  outline: "border-rubricui-primary text-rubricui-primary",
};

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof variants;
}

function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex border border-rubricui-primary/10 items-center rounded-md px-2.5 py-0.5 text-xs outline-none font-medium transition-all duration-rubricui-duration hover:ring-2 hover:ring-rubricui-contrast/10",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
