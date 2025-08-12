'use client'

import type React from 'react'
import type { InputProps } from './types'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const Input: React.FC<InputProps> = ({
	id,
	defaultValue,
	label,
	description,
	placeholder,
	required,
	type = 'text',
	value,
	onChange,
	maxLength,
	disabled
}) => {
	return (
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
			<div className="relative w-full">
				<input
					id={id}
					type={type}
					className="flex h-8 w-full border bg-background px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50"
					required={required}
					placeholder={placeholder}
					defaultValue={defaultValue}
					value={value}
					onChange={onChange}
					disabled={disabled}
					maxLength={maxLength}
				/>
				{required && <RequiredIndicator />}
			</div>
		</Container>
	)
}

Input.displayName = 'Input'

export { Input }
