import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createLayoutComponent } from '../../utils'

export function createNavigation(ds: DesignSystem) {
	return createLayoutComponent({
		createSchema: () =>
			z.object({
				left: z.custom<React.ReactNode>().optional(),
				center: z.custom<React.ReactNode>().optional(),
				right: z.custom<React.ReactNode>().optional()
			}),
		render: ({ props: { left, center, right, children } }) => {
			return (
				<Styled.Section
					ds={ds}
					attributes={{
						children: (
							<Styled.Flex
								ds={ds}
								align="center"
								justify="space-between"
								attributes={{
									children: [
										left && <Styled.Box key="left" ds={ds} attributes={{ children: left }} />,
										center && <Styled.Box key="center" ds={ds} attributes={{ children: center }} />,
										right && <Styled.Box key="right" ds={ds} attributes={{ children: right }} />,
										children
									].filter(Boolean)
								}}
							/>
						)
					}}
				/>
			)
		}
	})(ds)
}
