import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createLayoutComponent } from '../../utils'

export function createPage(ds: DesignSystem) {
	return createLayoutComponent({
		createSchema: () =>
			z.object({
				top: z.union([z.custom<React.ReactNode>(), z.array(z.custom<React.ReactNode>())]),
				middle: z.union([z.custom<React.ReactNode>(), z.array(z.custom<React.ReactNode>())]),
				bottom: z.union([z.custom<React.ReactNode>(), z.array(z.custom<React.ReactNode>())]).optional()
			}),
		render: ({ props: { top, middle, bottom, children } }) => {
			return (
				<Styled.Flex
					ds={ds}
					direction="column"
					attributes={{
						style: { minHeight: '100vh' },
						children: [
							<Styled.Section
								key="top"
								ds={ds}
								overrides={{
									base: {
										position: 'sticky',
										top: 0,
										zIndex: 1,
										backgroundColor: ds.colors.bg.light,
										padding: 0
									}
								}}
								attributes={{
									children: top
								}}
							/>,
							<Styled.Section
								key="middle"
								ds={ds}
								attributes={{
									style: { flex: '1 0 auto' },
									children: (
										<Styled.Stack
											ds={ds}
											direction="vertical"
											spacing="content"
											attributes={{
												style: { alignItems: 'flex-start' },
												children: Array.isArray(middle) ? middle : [middle]
											}}
										/>
									)
								}}
							/>,
							bottom && (
								<Styled.Section
									key="bottom"
									ds={ds}
									overrides={{
										base: {
											backgroundColor: ds.colors.bg.light
										}
									}}
									attributes={{ children: bottom }}
								/>
							),
							children
						].filter(Boolean)
					}}
				/>
			)
		}
	})(ds)
}
