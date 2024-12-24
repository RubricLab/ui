import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent } from '../../utils'

export function createLink(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: () =>
			z.object({
				content: z.union([z.string(), z.number()]),
				href: z.string(),
				onClick: z.function().returns(z.void()).optional()
			}),
		render: ({ props: { content, href, onClick } }) => {
			return (
				<Styled.Link
					ds={ds}
					href={href}
					attributes={{
						onClick,
						children: content
					}}
				/>
			)
		}
	})(ds)
}
