import { z } from 'zod/v4'

export const CheckboxPropsSchema = z.object({
	description: z.string().nullable(),
	label: z.string(),
	required: z.boolean().nullable(),
	value: z.boolean().default(false)
})

export type CheckboxProps = {
	id?: string // additional
	label?: string
	description?: string
	required?: boolean
	value?: boolean
	onChange?: (val: boolean) => void // additional
	className?: string // additional
}
