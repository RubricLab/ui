import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent } from '../../utils'

export function createText(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: () =>
			z.object({
				content: z.union([z.string(), z.number()])
			}),
		render: ({ props: { content } }) => {
			return (
				<Styled.Text
					ds={ds}
					block={false}
					attributes={{
						children: content
					}}
				/>
			)
		}
	})(ds)
}
