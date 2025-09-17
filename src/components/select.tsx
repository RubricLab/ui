import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDownIcon, ChevronsUpDownIcon, ChevronUpIcon } from 'lucide-react'
import type * as React from 'react'
import type {
	SelectContentProps,
	SelectGroupProps,
	SelectItemProps,
	SelectLabelProps,
	SelectProps,
	SelectSeparatorProps,
	SelectTriggerProps,
	SelectValueProps
} from '../types'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const Select: React.FC<SelectProps> = ({
	id,
	defaultValue = '',
	label,
	description,
	required = false,
	disabled = false,
	children,
	onValueChange = () => {}
}) => (
	<Container gap="sm" overflow="visible">
		{(label || description) && (
			<Container gap="xs">
				{label && <Label htmlFor={id}>{label}</Label>}
				{description && (
					<Text size="xs" variant="tertiary">
						{description}
					</Text>
				)}
			</Container>
		)}
		{/* TODO: remove className */}
		<Container className="relative">
			<SelectPrimitive.Root
				disabled={disabled}
				required={required}
				defaultValue={defaultValue}
				onValueChange={onValueChange}
			>
				{children}
			</SelectPrimitive.Root>
			{required && <RequiredIndicator />}
		</Container>
	</Container>
)

const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => (
	<SelectPrimitive.Value placeholder={placeholder} />
)

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, id }) => (
	<SelectPrimitive.Trigger
		id={id}
		className="flex h-9 w-full cursor-pointer items-center justify-between rounded-default border bg-background px-3 py-2 text-sm shadow-sm transition-colors hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:opacity-60 [&>span]:line-clamp-1"
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ChevronsUpDownIcon className="size-4 opacity-50" />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
)

const SelectContent: React.FC<SelectContentProps> = ({ children }) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] origin-[--radix-select-content-transform-origin] overflow-y-auto overflow-x-hidden rounded-default border bg-background shadow-md data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1 data-[state=closed]:animate-out data-[state=open]:animate-in">
			<SelectScrollUpButton />
			<SelectPrimitive.Viewport className="h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] p-1">
				{children}
			</SelectPrimitive.Viewport>
			<SelectScrollDownButton />
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
)

const SelectItem: React.FC<SelectItemProps> = ({ children, value }) => (
	<SelectPrimitive.Item
		value={value}
		className="relative flex h-9 w-full cursor-pointer select-none items-center py-1.5 pr-2 pl-2 text-sm outline-none transition-colors focus:bg-accent/60 data-[disabled]:pointer-events-none data-[state=checked]:bg-accent data-[disabled]:opacity-50"
	>
		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
)

const SelectLabel: React.FC<SelectLabelProps> = ({ children }) => (
	<SelectPrimitive.Label className="px-2 py-1.5 font-semibold text-sm">
		{children}
	</SelectPrimitive.Label>
)

const SelectGroup: React.FC<SelectGroupProps> = ({ children }) => (
	<SelectPrimitive.Group>{children}</SelectPrimitive.Group>
)

const SelectSeparator: React.FC<SelectSeparatorProps> = () => (
	<SelectPrimitive.Separator className="-mx-1 my-1 h-px bg-muted" />
)

const SelectScrollUpButton = () => (
	<SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center py-1">
		<ChevronUpIcon className="size-4" />
	</SelectPrimitive.ScrollUpButton>
)

const SelectScrollDownButton = () => (
	<SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center py-1">
		<ChevronDownIcon className="h-4 w-4" />
	</SelectPrimitive.ScrollDownButton>
)

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue
}
