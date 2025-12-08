import type { z } from 'zod/v4'
import type { TextareaProps, TextareaVariantEnum } from '../types'
import { cn } from '../utils'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const textareaVariantClasses: Record<z.infer<typeof TextareaVariantEnum>, string> = {
	ghost: 'p-0',
	primary:
		'border border-border rounded-default bg-background px-3 py-2 focus-visible:ring-2 focus-visible:ring-accent'
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
	onKeyDown,
	defaultValue,
	disabled,
	maxLength,
	autoFocus = false,
	className
}) => {
	return (
		<Container gap="sm" className={cn(className)}>
			{label && <Label htmlFor={id}>{label}</Label>}
			{/* TODO: remove className */}
			<Container className="relative">
				<textarea
					onKeyDown={onKeyDown}
					id={id}
					className={cn(
						'flex w-full resize-none text-sm transition-colors placeholder:opacity-60 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
					// biome-ignore lint/a11y/noAutofocus: autoFocus is intentionally allowed here to support chat and form UX where immediate input focus is desired.
					autoFocus={autoFocus}
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
