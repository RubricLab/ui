import type React from 'react'
import type z4 from 'zod/v4'
import type { InputProps, InputVariantEnum } from '../types'
import { cn } from '../utils'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const inputVariantClasses: Record<z4.infer<typeof InputVariantEnum>, string> = {
	ghost: '',
	primary: 'border focus-visible:ring-2 focus-visible:ring-accent'
}

const Input: React.FC<InputProps> = ({
	id,
	variant = 'primary',
	defaultValue,
	label,
	description,
	placeholder,
	required,
	type = 'text',
	value,
	onChange,
	maxLength,
	disabled,
	autoFocus = false,
	onKeyDown,
	step,
	max,
	min
}) => {
	return (
		<Container gap="sm" overflow="visible">
			{label && <Label htmlFor={id}>{label}</Label>}
			{/* TODO: remove className in container */}
			<Container className="relative" width="full">
				<input
					id={id}
					type={type}
					className={cn(
						'flex h-9 w-full rounded-default bg-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:opacity-60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
						inputVariantClasses[variant]
					)}
					required={required}
					placeholder={placeholder}
					defaultValue={defaultValue}
					value={value}
					onChange={onChange}
					disabled={disabled}
					maxLength={maxLength}
					// biome-ignore lint/a11y/noAutofocus: autoFocus is intentionally allowed here to support chat and form UX where immediate input focus is desired.
					autoFocus={autoFocus}
					onKeyDown={onKeyDown}
					step={step}
					min={min}
					max={max}
				/>
				{required && <RequiredIndicator />}
			</Container>
			{description && (
				<Text size="xs" variant="tertiary">
					{description}
				</Text>
			)}
		</Container>
	)
}

Input.displayName = 'Input'

export { Input }
