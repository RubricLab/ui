import { z } from 'zod/v4'
import { FontEnum, TextVariantEnum } from './general'

export const HeadingLevelEnum = z.enum(['1', '2', '3', '4'])

export const HeadingPropsSchema = z.object({
	font: FontEnum.nullable(),
	level: HeadingLevelEnum.nullable(),
	variant: TextVariantEnum.nullable()
})

export type HeadingProps = {
	children: React.ReactNode
	level?: z.infer<typeof HeadingLevelEnum>
	variant?: z.infer<typeof TextVariantEnum>
	font?: z.infer<typeof FontEnum>
}
