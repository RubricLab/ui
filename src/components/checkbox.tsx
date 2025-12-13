import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import * as React from 'react'
import type { CheckboxProps } from '../types'
import { cn } from '../utils'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
	({ id, label, description, required, value = false, onChange = () => {}, className }, ref) => {
		return (
			// TODO: remove className
			<Container
				arrangement="row"
				gap="sm"
				align={description ? 'start' : 'center'}
				width="fit"
				className={cn('relative', className)}
			>
				<CheckboxPrimitive.Root
					ref={ref}
					id={id}
					checked={value}
					onCheckedChange={onChange}
					className="h-5 w-5 shrink-0 rounded-default border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=checked]:text-accent-foreground"
				>
					<CheckboxPrimitive.Indicator className="flex items-center justify-center">
						<CheckIcon className="size-3.5" />
					</CheckboxPrimitive.Indicator>
				</CheckboxPrimitive.Root>
				{required && <RequiredIndicator className="-left-2 -top-2 absolute" />}
				<Container gap="xs">
					{/* TODO: remove className */}
					<Label htmlFor={id} className={description && 'mt-[2px]'}>
						{label}
					</Label>
					{description && (
						<Text size="xs" variant="tertiary">
							{description}
						</Text>
					)}
				</Container>
			</Container>
		)
	}
)

Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
