import { z } from 'zod/v4'
import {
	AlignEnum,
	ArrangementEnum,
	BorderEnum,
	HeightEnum,
	JustifyEnum,
	OverflowEnum,
	SizeEnum,
	WidthEnum,
	WrapEnum
} from './general'

export const ContainerVariantEnum = z.enum(['primary', 'secondary', 'ghost'])

// Does not container children as that is extended in the root type
export const ContainerPropsSchema = z.object({
	arrangement: ArrangementEnum.default('column'),
	variant: ContainerVariantEnum.default('ghost'),
	gap: SizeEnum.default('xs'),
	padding: SizeEnum.default('none'),
	border: BorderEnum.default('none'),
	justify: JustifyEnum.default('start'),
	align: AlignEnum.default('start'),
	rounded: SizeEnum.default('xs'),
	height: HeightEnum.default('fit'),
	width: WidthEnum.default('full'),
	overflow: OverflowEnum.default('hidden'),
	wrap: WrapEnum.default('nowrap')
})

export type ContainerProps = {
	id?: string // additional
	'data-slot'?: string // additional (needed for dialogs)
	children: React.ReactNode
	arrangement?: z.infer<typeof ArrangementEnum>
	variant?: z.infer<typeof ContainerVariantEnum>
	gap?: z.infer<typeof SizeEnum>
	padding?: z.infer<typeof SizeEnum>
	border?: z.infer<typeof BorderEnum>
	justify?: z.infer<typeof JustifyEnum>
	align?: z.infer<typeof AlignEnum>
	rounded?: z.infer<typeof SizeEnum>
	height?: z.infer<typeof HeightEnum>
	width?: z.infer<typeof WidthEnum>
	overflow?: z.infer<typeof OverflowEnum>
	wrap?: z.infer<typeof WrapEnum>
	className?: string // Additional: className isn't available to the LLM, it is just left here for developer convenience
}
