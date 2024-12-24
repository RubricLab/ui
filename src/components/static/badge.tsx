import { z } from 'zod'
import { styled } from '../../styled'
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
			const BadgeComponent = styled[`${variant}-badge`]
			const iconColor = variant === 'default' ? ds.colors.text.light : ds.colors.bg.light

			return (
				<BadgeComponent ds={ds}>
					{icon && <styled.icon ds={ds}>{ds.icons[icon].mono(iconColor)}</styled.icon>}
					{content}
				</BadgeComponent>
			)
		}
	})(ds)
}
