import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";
import { Loading } from "./loading";

const buttonVariants = cva(
  "inline-flex gap-[8px] items-center justify-center outline-none border hover:ring ring-rubricui-contrast/5 focus:ring focus:ring-offset-2 focus:ring-rubricui-contrast/20 transition-all duration-rubricui-duration disabled:opacity-70 disabled:pointer-events-none hover:bg-opacity-90 hover:ring-opacity-90 hover:border-opacity-90",
  {
    variants: {
      variant: {
        primary:
          "bg-rubricui-contrast text-rubricui-primary border-rubricui-primary",
        secondary:
          "bg-rubricui-primary text-rubricui-contrast border-rubricui-contrast",
      },
      size: {
        small:
          "rounded-[2px] min-h-[20px] px-[6px] py-[3px] text-xs min-w-[66px]",
        medium:
          "rounded-[3px] min-h-[28px] px-[8px] py-[4px] text-sm min-w-[80px]",
        large:
          "rounded-[4px] min-h-[36px] px-[14px] py-[6px] text-base min-w-[115px]",
      },
      state: {
        default: "cursor-pointer",
        loading: "cursor-wait",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      state: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  prefix_icon?: React.ReactNode;
  suffix_icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      state,
      asChild = false,
      prefix_icon,
      suffix_icon,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, state, className }))}
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
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
