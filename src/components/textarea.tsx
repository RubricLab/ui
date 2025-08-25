import type { z } from 'zod/v4'
import type { TextareaProps, TextareaVariantEnum } from '../types'
import { cn } from '../utils'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const textareaVariantClasses: Record<z.infer<typeof TextareaVariantEnum>, string> = {
	ghost: 'p-0',
	primary: 'border bg-background px-3 py-2'
}

const Textarea: React.FC<TextareaProps> = ({
	id,
	label,
	description,
	variant = 'primary',
	required,
	placeholder,
	rows = 3,
	value,
	onChange,
	defaultValue,
	disabled,
	maxLength
}) => {
	return (
		<Container gap="sm">
			{label && <Label htmlFor={id}>{label}</Label>}
			{/* TODO: remove className */}
			<Container className="relative">
				<textarea
					id={id}
					className={cn(
						'flex w-full resize-none text-sm transition-colors placeholder:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50',
						textareaVariantClasses[variant]
					)}
					required={required}
					placeholder={placeholder}
					rows={rows}
					value={value}
					onChange={onChange}
					defaultValue={defaultValue}
					disabled={disabled}
					maxLength={maxLength}
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

Textarea.displayName = 'Textarea'

export { Textarea }
