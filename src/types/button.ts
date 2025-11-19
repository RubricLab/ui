import { z } from 'zod/v4'
import { DimensionEnum, IconEnum, VariantEnum } from './general'

const ButtonTypeEnum = z.enum(['button', 'submit', 'reset'])

const ButtonArrangementEnum = z.enum(['hiddenLabel', 'leadingIcon', 'leadingLabel'])

const ButtonSizeEnum = z.enum(['sm', 'md', 'lg'])

export const ButtonPropsSchema = z.object({
	arrangement: ButtonArrangementEnum.default('leadingLabel'),
	disabled: z.boolean().default(false),
	href: z.string().nullable(),
	icon: IconEnum.nullable(),
	label: z.string(),
	size: ButtonSizeEnum.default('md'),
	type: ButtonTypeEnum.default('button'),
	variant: VariantEnum.default('secondary'),
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
	className?: string // additional
}
