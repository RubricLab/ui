'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef } from 'react'

import { cn } from '../utils/cn'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(
			'group flex h-10 w-full items-center justify-between rounded-md border border-rubricui-contrast/10 bg-rubricui-contrast/5 px-3 py-2 text-rubricui-contrast text-sm outline-none transition-all duration-rubricui-duration placeholder:text-rubricui-contrast/40 hover:outline-none hover:ring-2 hover:ring-rubricui-contrast/20 focus:outline-none focus:ring-2 focus:ring-rubricui-contrast/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
			className
		)}
		{...props}
	>
		{children}
		<div className="flex size-6 items-center justify-center rounded-md transition-colors duration-rubricui-duration group-hover:bg-rubricui-contrast/10">
			<SelectPrimitive.Icon asChild>
				<svg
					width="16"
					height="16"
					viewBox="0 0 15 15"
					className="fill-rubricui-contrast"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Select Icon</title>
					<path d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z" />
				</svg>
			</SelectPrimitive.Icon>
		</div>
	</SelectPrimitive.Trigger>
))
SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(
				'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-rubricui-contrast/10 bg-rubricui-primary text-rubricui-contrast shadow-md data-[state=closed]:animate-out data-[state=open]:animate-in',
				position === 'popper' &&
					'data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1',
				className
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.Viewport
				className={cn(
					'p-1',
					position === 'popper' &&
						'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
))
SelectContent.displayName = 'SelectContent'

const SelectLabel = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label
		ref={ref}
		className={cn('py-1.5 pr-2 pl-2 text-rubricui-contrast/40 text-xs', className)}
		{...props}
	/>
))
SelectLabel.displayName = 'SelectLabel'

const SelectItem = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(
			'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none focus:bg-rubricui-contrast/10 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
			className
		)}
		{...props}
	>
		<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
			<SelectPrimitive.ItemIndicator>
				<svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 15 15" fill="none">
					<title>Checkbox</title>
					<path
						d="M11.6705 3L11.2727 3.39775L4.67804 9.99242C4.16548 10.505 3.33445 10.505 2.82189 9.99242L0.727215 7.89775L0.329468 7.5L1.12496 6.70451L1.52271 7.10225L3.61738 9.19692C3.6906 9.27015 3.80932 9.27015 3.88255 9.19692L10.4772 2.60225L10.875 2.20451L11.6705 3Z"
						className="fill-rubricui-contrast"
					/>
				</svg>
			</SelectPrimitive.ItemIndicator>
		</span>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))
SelectItem.displayName = 'SelectItem'

const SelectSeparator = forwardRef<
	React.ElementRef<typeof SelectPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Separator
		ref={ref}
		className={cn('-mx-1 my-1 h-px bg-rubricui-contrast/10', className)}
		{...props}
	/>
))
SelectSeparator.displayName = 'SelectSeparator'

export {
	Select,
	SelectGroup,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectLabel,
	SelectItem,
	SelectSeparator
}
