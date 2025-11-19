import { z } from 'zod/v4'
import { FontEnum, TextVariantEnum } from './general'

export const TextSizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])

export const TextPropsSchema = z.object({
	bold: z.boolean().nullable(),
	font: FontEnum.nullable(),
	italic: z.boolean().nullable(),
	size: TextSizeEnum.nullable(),
	underline: z.boolean().nullable(),
	variant: TextVariantEnum.nullable()
})

export type TextProps = {
	children: React.ReactNode
	bold?: boolean
	italic?: boolean
	underline?: boolean
	variant?: z.infer<typeof TextVariantEnum>
	size?: z.infer<typeof TextSizeEnum>
	font?: z.infer<typeof FontEnum>
	className?: string // additional
}
