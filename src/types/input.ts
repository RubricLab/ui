import { z } from 'zod/v4'

export const InputTypeEnum = z.enum([
	'text',
	'email',
	'password',
	'number',
	'tel',
	'url',
	'search',
	'date',
	'time',
	'datetime-local',
	'month',
	'week'
])

export const InputVariantEnum = z.enum(['primary', 'ghost'])

export const InputPropsSchema = z.object({
	variant: InputVariantEnum.default('primary'),
	defaultValue: z.string().nullable(),
	label: z.string().nullable(),
	description: z.string().nullable(),
	placeholder: z.string(),
	required: z.boolean().default(false),
	type: InputTypeEnum.default('text'),
	disabled: z.boolean().nullable()
})

export type InputProps = {
	id?: string
	variant?: z.infer<typeof InputVariantEnum>
	defaultValue?: string
	label?: string
	description?: string
	placeholder?: string
	required?: boolean
	type?: z.infer<typeof InputTypeEnum>
	disabled?: boolean
	value?: string | number // additional
	maxLength?: number // additional
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // additional
}
