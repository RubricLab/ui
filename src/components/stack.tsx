import { type HTMLProps } from "react";
import { cn } from "../utils/cn";

interface StackProps extends HTMLProps<HTMLDivElement> {
  direction?: "vertical" | "horizontal";
  gap?: number;
  children: React.ReactNode;
}

const Stack = ({
  direction = "vertical",
  gap = 1,
  children,
  className,
  ...divProps
}: StackProps) => {
  return (
    <div
      className={cn(
        className,
        "flex gap-2 ",
        direction === "vertical" ? `flex-col ` : `flex-row`
      )}
      style={{
        gap: `${gap * 0.25}rem`,
      }}
      {...divProps}
    >
      {children}
    </div>
  );
};

export { Stack };
