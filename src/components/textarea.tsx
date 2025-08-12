import { cn } from '@/utils'
import type { z } from 'zod/v4'
import type { TextareaProps, TextareaVariantEnum } from '../types'
import { Container } from './container'
import { Label } from './label'
import { RequiredIndicator } from './required-indicator'
import { Text } from './text'

const textareaVariantClasses: Record<z.infer<typeof TextareaVariantEnum>, string> = {
	primary: 'border bg-background px-3 py-2',
	ghost: 'p-0'
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
	disabled
}) => {
	return (
		<Container gap="sm">
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
				<textarea
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
				/>
				{required && <RequiredIndicator />}
			</Container>
		</Container>
	)
}

Textarea.displayName = 'Textarea'

export { Textarea }
