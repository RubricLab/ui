import { z } from 'zod/v4'

export const PillSizeEnum = z.enum(['sm', 'md', 'lg'])

export const PillVariantEnum = z.enum([
	'primary',
	'secondary',
	'warning',
	'loading',
	'success',
	'error',
	'muted'
])

export const PillPropsSchema = z.object({
	variant: PillVariantEnum.default('primary'),
	size: PillSizeEnum.default('md')
})

export type PillProps = {
	variant?: z.infer<typeof PillVariantEnum>
	size?: z.infer<typeof PillSizeEnum>
	children?: React.ReactNode
}
