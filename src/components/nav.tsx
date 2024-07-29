import { cn } from "../utils/cn";
import { Link } from "./link";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Button } from "./button";

type RouteProps = {
  label: string;
  icon?: React.ReactNode;
  href: string;
  isExternal?: boolean;
  showArrow?: boolean;
  underline?: boolean;
  active?: boolean;
};

const Nav = ({
  className,
  routes,
  title,
  ...props
}: React.ComponentPropsWithoutRef<"nav"> & {
  routes: RouteProps[];
  title?: string;
}) => {
  return (
    <nav
      className={cn(
        "flex items-center justify-between border-b border-rubricui-contrast/10 w-full pb-2 pt-2 sm:pt-0 relative z-10 bg-rubricui-contrast/5 px-5",
        className
      )}
      {...props}
    >
      {title && (
        <h1 className="text-rubricui-contrast text-lg font-bold sm:-mb-2.5">
          {title}
        </h1>
      )}
      <div className="items-center gap-3 sm:flex hidden">
        {routes.map((route) => (
          <div key={route.label} className="group -bottom-[9px] relative">
            <Link
              className={cn(
                "mb-1 px-4 py-1.5 text-sm font-medium rounded-sm transition-all duration-rubricui-duration hover:bg-rubricui-contrast/10",
                route.icon && "px-1.5"
              )}
              href={route.href}
              isExternal={route.isExternal}
              showArrow={route.showArrow}
              underline={route.underline}
              active={route.active}
              aria-label={route.label}
            >
              {route.icon ? <>{route.icon}</> : route.label}
            </Link>
            <div
              className={cn(
                "border-rubricui-contrast w-full border-b transition-opacity",
                route.active ? "opacity-100" : "opacity-0"
              )}
            />
          </div>
        ))}
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="sm:hidden size-15 min-w-0 bg-rubricui-contrast/10 border-0 sm:-mb-2.5">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                className="fill-rubricui-contrast"
              ></path>
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex flex-col w-fit px-5 bg-rubricui-primary divide-y divide-rubricui-contrast/10"
          side="bottom"
        >
          {routes.map((route) => (
            <Link
              key={route.label}
              href={route.href}
              isExternal={route.isExternal}
              underline={route.underline}
              active={route.active}
              aria-label={route.label}
              className="text-right w-full justify-end py-1.5"
            >
              {route.label}
            </Link>
          ))}
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export { Nav };
