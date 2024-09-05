import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

const loadingVariants = cva("dark:invert animate-rubricui-loading-rotate", {
  variants: {
    size: {
      small: "w-[10px] h-[10px]",
      medium: "w-[12px] h-[12px]",
      large: "w-[14px] h-[14px]",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface LoadingProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof loadingVariants> {}

const Loading = React.forwardRef<SVGSVGElement, LoadingProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <svg
        className={cn(loadingVariants({ size, className }))}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 11"
        ref={ref}
        {...props}
      >
        <title>Loading Button</title>
        <rect
          x="0"
          y="0"
          width="4"
          height="4"
          rx="0.5"
          className="fill-white"
        />
        <rect
          x="0"
          y="7"
          width="4"
          height="4"
          rx="0.5"
          className="fill-zinc-700"
        />
        <rect
          x="7"
          y="0"
          width="4"
          height="4"
          rx="0.5"
          className="fill-zinc-200"
        />
        <rect
          x="7"
          y="7"
          width="4"
          height="4"
          rx="0.5"
          className="fill-zinc-400"
        />
      </svg>
    );
  }
);

Loading.displayName = "Loading";

export { Loading, loadingVariants };
