import type { MouseEvent } from 'react'
import { z } from 'zod'
import type { DesignSystem } from '../../types'
import { createStaticComponent, createZodEnumOfKeysFromObject } from '../../utils'

export function createButton(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: ({ designSystem: { icons } }) =>
			z.object({
				label: z.string(),
				icon: createZodEnumOfKeysFromObject(icons),
				onClick: z.function().returns(z.void())
			}),
		render: ({ props: { label, icon, onClick } }) => {
			const handleClick = (e: MouseEvent) => {
				e.preventDefault()
				onClick()
			}

			return (
				<button type="button" onClick={handleClick}>
					{label}
				</button>
			)
		}
	})(ds)
}
