import type { MouseEvent } from 'react'
import { z } from 'zod'
import { styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent, createZodEnumOfKeysFromObject } from '../../utils'

export function createButton(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: ({ designSystem: { icons } }) =>
			z.object({
				label: z.string(),
				icon: createZodEnumOfKeysFromObject(icons),
				onClick: z.function().returns(z.void()),
				disabled: z.boolean().optional()
			}),
		render: ({ props: { label, icon, onClick, disabled } }) => {
			const handleClick = (e: MouseEvent) => {
				e.preventDefault()
				onClick()
			}

			return (
				<styled.button ds={ds} type="button" onClick={handleClick} disabled={disabled}>
					<styled.icon ds={ds}>
						{ds.icons[icon].mono(disabled ? ds.colors.disabled.light : ds.colors.text.light)}
					</styled.icon>
					{label}
				</styled.button>
			)
		}
	})(ds)
}
