import { z } from 'zod/v4'

export const TextareaVariantEnum = z.enum(['primary', 'ghost'])

export const TextareaPropsSchema = z.object({
	defaultValue: z.string().nullable(),
	description: z.string().nullable(),
	disabled: z.boolean().nullable(),
	label: z.string().nullable(),
	placeholder: z.string(),
	required: z.boolean().default(false),
	rows: z.number().default(3),
	variant: TextareaVariantEnum.nullable()
})

export type TextareaProps = {
	id?: string // additional
	defaultValue?: string
	variant?: z.infer<typeof TextareaVariantEnum>
	label?: string
	description?: string
	required?: boolean
	placeholder?: string
	rows?: number
	value?: string // additional
	disabled?: boolean
	maxLength?: number // additional
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void // additional
	autoFocus?: boolean // additional
}
