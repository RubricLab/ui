import type { HTMLAttributeAnchorTarget } from 'react'
import { z } from 'zod/v4'

export const LinkVariantEnum = z.enum(['primary', 'ghost'])

export const LinkPropsSchema = z.object({
	href: z.string(),
	target: z.enum(['_self', '_blank', '_parent', '_top']).nullable(),
	variant: LinkVariantEnum.default('primary')
})

export type LinkProps = {
	href: string
	target?: HTMLAttributeAnchorTarget
	variant?: z.infer<typeof LinkVariantEnum>
	children: React.ReactNode
}
