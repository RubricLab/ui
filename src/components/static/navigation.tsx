import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent, createZodEnumOfKeysFromObject } from '../../utils'

export function createNavigation(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: ({ designSystem: { icons } }) =>
			z.object({
				items: z.array(
					z.object({
						label: z.string(),
						icon: createZodEnumOfKeysFromObject(icons),
						href: z.string(),
						active: z.boolean().optional(),
						disabled: z.boolean().optional()
					})
				)
			}),
		render: ({ props: { items } }) => {
			const key = 'navigation'

			return (
				<Styled.Box
					ds={ds}
					overrides={{
						base: {
							width: '100%',
							maxWidth: '240px',
							borderRight: `1px solid ${ds.colors.border.light}`
						},
						dark: {
							borderRight: `1px solid ${ds.colors.border.dark}`
						}
					}}
					attributes={{
						children: items.map((item, index) => (
							<Styled.Box
								key={`${key}-item-${index}`}
								ds={ds}
								overrides={{
									base: {
										padding: ds.sizes.content.space,
										cursor: item.disabled ? 'not-allowed' : 'pointer',
										backgroundColor: item.active ? ds.colors.focus.light : 'transparent',
										opacity: item.disabled ? 0.5 : 1,
										...(item.disabled
											? {}
											: {
													':hover': {
														backgroundColor: ds.colors.focus.light
													}
												})
									},
									dark: {
										backgroundColor: item.active ? ds.colors.focus.dark : 'transparent',
										...(item.disabled
											? {}
											: {
													':hover': {
														backgroundColor: ds.colors.focus.dark
													}
												})
									}
								}}
								attributes={{
									onClick: (e: React.MouseEvent) => {
										if (item.disabled) {
											e.preventDefault()
											return
										}
										window.location.href = item.href
									},
									children: (
										<Styled.Flex
											ds={ds}
											align="center"
											gap="content"
											attributes={{
												children: [
													<Styled.Icon key={`${key}-item-${index}-icon`} ds={ds} icon={item.icon} />,
													item.label
												]
											}}
										/>
									)
								}}
							/>
						))
					}}
				/>
			)
		}
	})(ds)
}
