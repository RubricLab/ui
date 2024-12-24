import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent } from '../../utils'

export function createPage(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: () =>
			z.object({
				top: z.any(),
				middle: z.any(),
				bottom: z.any().optional()
			}),
		render: ({ props: { top, middle, bottom } }) => {
			return (
				<Styled.Flex
					ds={ds}
					direction="column"
					overrides={{
						base: {
							minHeight: '100vh',
							width: '100%'
						}
					}}
					attributes={{
						children: [
							<Styled.Box
								key="top"
								ds={ds}
								overrides={{
									base: {
										width: '100%',
										borderBottom: `1px solid ${ds.colors.border.light}`
									},
									dark: {
										borderBottom: `1px solid ${ds.colors.border.dark}`
									}
								}}
								attributes={{ children: top }}
							/>,
							<Styled.Box
								key="middle"
								ds={ds}
								overrides={{
									base: {
										flex: 1,
										width: '100%',
										overflowY: 'auto'
									}
								}}
								attributes={{ children: middle }}
							/>,
							bottom && (
								<Styled.Box
									key="bottom"
									ds={ds}
									overrides={{
										base: {
											width: '100%',
											borderTop: `1px solid ${ds.colors.border.light}`,
											position: 'sticky',
											bottom: 0,
											backgroundColor: ds.colors.bg.light
										},
										dark: {
											borderTop: `1px solid ${ds.colors.border.dark}`,
											backgroundColor: ds.colors.bg.dark
										}
									}}
									attributes={{ children: bottom }}
								/>
							)
						].filter(Boolean)
					}}
				/>
			)
		}
	})(ds)
}
