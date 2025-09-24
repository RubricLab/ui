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
	defaultValue: z.string().nullable(),
	description: z.string().nullable(),
	disabled: z.boolean().nullable(),
	label: z.string().nullable(),
	placeholder: z.string(),
	required: z.boolean().default(false),
	step: z.number().nullable(),
	type: InputTypeEnum.default('text'),
	variant: InputVariantEnum.default('primary')
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
	step?: number
	min?: number // additional
	max?: number // additional
	value?: string | number // additional
	maxLength?: number // additional
	autoFocus?: boolean // additional
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void // additional
	onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> // additional
}
