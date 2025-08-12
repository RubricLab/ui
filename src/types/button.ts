import { z } from 'zod/v4'
import { DimensionEnum, IconEnum, VariantEnum } from './general'

const ButtonTypeEnum = z.enum(['button', 'submit', 'reset'])

const ButtonArrangementEnum = z.enum(['hiddenLabel', 'leadingIcon', 'leadingLabel'])

const ButtonSizeEnum = z.enum(['sm', 'md', 'lg'])

export const ButtonPropsSchema = z.object({
	label: z.string(),
	type: ButtonTypeEnum.default('button'),
	href: z.string().nullable(),
	icon: IconEnum.nullable(),
	arrangement: ButtonArrangementEnum.default('leadingLabel'),
	disabled: z.boolean().default(false),
	variant: VariantEnum.default('secondary'),
	size: ButtonSizeEnum.default('md'),
	width: DimensionEnum.default('fit')
})

export type ButtonProps = {
	label: string
	type?: z.infer<typeof ButtonTypeEnum>
	href?: string
	icon?: z.infer<typeof IconEnum> | null
	arrangement?: z.infer<typeof ButtonArrangementEnum>
	disabled?: boolean
	variant?: z.infer<typeof VariantEnum>
	size?: z.infer<typeof ButtonSizeEnum>
	width?: z.infer<typeof DimensionEnum>
	onClick?: () => void // additional
	onMouseEnter?: () => void // additional
	onMouseLeave?: () => void // additional
}
