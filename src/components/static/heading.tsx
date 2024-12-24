import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent } from '../../utils'

export function createHeading(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: () =>
			z.object({
				content: z.union([z.string(), z.number()]),
				level: z.union([
					z.literal(1),
					z.literal(2),
					z.literal(3),
					z.literal(4),
					z.literal(5),
					z.literal(6)
				])
			}),
		render: ({ props: { content, level } }) => {
			return (
				<Styled.Heading
					ds={ds}
					level={level}
					attributes={{
						children: content
					}}
				/>
			)
		}
	})(ds)
}
