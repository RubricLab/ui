import { z } from 'zod/v4'

export const CheckboxPropsSchema = z.object({
	label: z.string(),
	description: z.string().nullable(),
	value: z.boolean().default(false),
	required: z.boolean().nullable()
})

export type CheckboxProps = {
	id?: string // additional
	label?: string
	description?: string
	required?: boolean
	value?: boolean
	onChange?: (val: boolean) => void // additional
}
