import { z } from 'zod/v4'
import {
	AlignEnum,
	ArrangementEnum,
	BorderEnum,
	HeightEnum,
	JustifyEnum,
	OverflowEnum,
	RoundedEnum,
	SizeEnum,
	WidthEnum,
	WrapEnum
} from './general'

export const ContainerVariantEnum = z.enum(['primary', 'secondary', 'ghost'])

// Does not container children as that is extended in the root type
export const ContainerPropsSchema = z.object({
	align: AlignEnum.default('start'),
	arrangement: ArrangementEnum.default('column'),
	border: BorderEnum.default('none'),
	gap: SizeEnum.default('xs'),
	height: HeightEnum.default('fit'),
	justify: JustifyEnum.default('start'),
	overflow: OverflowEnum.default('hidden'),
	padding: SizeEnum.default('none'),
	rounded: RoundedEnum.default('default'),
	variant: ContainerVariantEnum.default('ghost'),
	width: WidthEnum.default('full'),
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
	rounded?: z.infer<typeof RoundedEnum>
	height?: z.infer<typeof HeightEnum>
	width?: z.infer<typeof WidthEnum>
	overflow?: z.infer<typeof OverflowEnum>
	wrap?: z.infer<typeof WrapEnum>
	className?: string // additional
}
