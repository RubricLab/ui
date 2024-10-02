import { cn } from "../utils/cn";
import { Button } from "./button";
import { Link } from "./link";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

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
				"relative z-10 flex w-full items-center justify-between border-rubricui-contrast/10 border-b bg-rubricui-contrast/5 px-5 pt-2 pb-2 sm:pt-0",
				className,
			)}
			{...props}
		>
			{title && (
				<h1 className="sm:-mb-2.5 font-bold text-lg text-rubricui-contrast">
					{title}
				</h1>
			)}
			<div className="hidden items-center gap-2 sm:flex">
				{routes.map((route) => (
					<div key={route.label} className="group -bottom-[9px] relative">
						<Link
							className={cn(
								"mb-1 rounded-sm px-2.5 py-1.5 font-medium text-sm transition-all duration-rubricui-duration hover:bg-rubricui-contrast/10",
								route.icon && "px-1.5 text-rubricui-contrast",
							)}
							href={route.href}
							isExternal={!!route.isExternal}
							showArrow={!!route.showArrow}
							underline={!!route.underline}
							active={!!route.active}
							aria-label={route.label}
						>
							{route.icon ? <>{route.icon}</> : route.label}
						</Link>
						<div
							className={cn(
								"w-full border-rubricui-contrast border-b transition-opacity",
								route.active && !route.icon ? "opacity-100" : "opacity-0",
							)}
						/>
					</div>
				))}
			</div>
			<Popover>
				<PopoverTrigger asChild>
					<Button className="sm:-mb-2.5 size-15 min-w-0 border-0 bg-rubricui-contrast/10 sm:hidden">
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu Icon</title>
							<path
								d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
								className="fill-rubricui-contrast"
							/>
						</svg>
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="flex w-fit flex-col divide-y divide-rubricui-contrast/10 bg-rubricui-primary px-5"
					side="bottom"
				>
					{routes.map((route) => (
						<Link
							key={route.label}
							href={route.href}
							isExternal={!!route.isExternal}
							underline={!!route.underline}
							active={!!route.active}
							aria-label={route.label}
							className="w-full justify-end py-1.5 text-right"
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
