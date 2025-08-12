import { z } from 'zod/v4'

export const TextareaVariantEnum = z.enum(['primary', 'ghost'])

export const TextareaPropsSchema = z.object({
	defaultValue: z.string().nullable(),
	label: z.string().nullable(),
	variant: TextareaVariantEnum.nullable(),
	description: z.string().nullable(),
	required: z.boolean().default(false),
	placeholder: z.string(),
	rows: z.number().default(3),
	disabled: z.boolean().nullable()
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
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void // additional
}
