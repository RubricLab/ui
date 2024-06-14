import { cn } from "../utils/cn";

const Loading = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <rect
        x="0.393066"
        y="0.697021"
        width="4"
        height="4"
        rx="0.5"
        fill="#FCFCFC"
      />
      <rect
        opacity="0.2"
        x="0.393066"
        y="6.69702"
        width="4"
        height="4"
        rx="0.5"
        fill="#FCFCFC"
      />
      <rect
        opacity="0.8"
        x="6.39307"
        y="0.697021"
        width="4"
        height="4"
        rx="0.5"
        fill="#FCFCFC"
      />
      <rect
        opacity="0.4"
        x="6.39307"
        y="6.69702"
        width="4"
        height="4"
        rx="0.5"
        fill="#FCFCFC"
      />
    </svg>
  );
};

export { Loading };
