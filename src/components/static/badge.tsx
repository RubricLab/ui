import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent, createZodEnumOfKeysFromObject } from '../../utils'

export function createBadge(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: ({ designSystem: { icons } }) =>
			z.object({
				content: z.union([z.string(), z.number()]),
				variant: z.enum(['default', 'success', 'error', 'warning']).default('default'),
				icon: createZodEnumOfKeysFromObject(icons).optional()
			}),
		render: ({ props: { content, variant, icon } }) => {
			const key = `${content.toString().toLowerCase().replace(/\s+/g, '-')}-badge`
			return (
				<Styled.Badge
					ds={ds}
					variant={variant}
					attributes={{
						children: [icon && <Styled.Icon key={`${key}-icon`} ds={ds} icon={icon} />, content].filter(
							Boolean
						)
					}}
				/>
			)
		}
	})(ds)
}
