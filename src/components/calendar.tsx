"use client";

import { type ComponentProps } from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "../utils/cn";

export type CalendarProps = ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 border border-rubricui-contrast/10", className)}
      classNames={{
        months: "relative",
        month: "space-y-4",
        caption_label: "font-semibold text-lg max-w-fit",
        nav: "flex absolute right-0 gap-1",
        button_previous: "h-7 w-7 p-0 border border-rubricui-contrast/10 opacity-50 hover:opacity-100 flex items-center justify-center",
        button_next: "h-7 w-7 p-0 border border-rubricui-contrast/10 opacity-50 hover:opacity-100 flex items-center justify-center",
        table: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-rubricui-contrast rounded-md w-9 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day_button: cn(
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-rubricui-contrast/20"
        ),
        range_end: "day-range-end",
        selected:
          "bg-rubricui-contrast text-rubricui-primary transition-colors duration-rubricui-duration",
        today: "bg-accent text-accent-foreground",
        outside:
          "day-outside text-rubricui-contrast opacity-50 aria-selected:bg-rubricui-contrast/30 aria-selected:text-rubricui-contrast aria-selected:opacity-30",
        disabled: "text-rubricui-contrast opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) => {
          if (props.orientation === "left") {
            return (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            );
          } else {
            return (
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            );
          }
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
