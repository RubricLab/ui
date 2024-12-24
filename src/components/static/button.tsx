import type { MouseEvent } from 'react'
import { z } from 'zod'
import { Styled } from '../../style'
import type { DesignSystem } from '../../types'
import { createStaticComponent, createZodEnumOfKeysFromObject } from '../../utils'

export function createButton(ds: DesignSystem) {
	return createStaticComponent({
		createSchema: ({ designSystem: { icons } }) =>
			z.object({
				label: z.string(),
				icon: createZodEnumOfKeysFromObject(icons),
				onClick: z.function().returns(z.void()),
				disabled: z.boolean().optional(),
				variant: z.enum(['primary', 'secondary', 'destructive']).default('primary')
			}),
		render: ({ props: { label, icon, onClick, disabled = false, variant } }) => {
			const handleClick = (e: MouseEvent) => {
				e.preventDefault()
				onClick()
			}

			const key = `${label.toLowerCase().replace(/\s+/g, '-')}-button`

			return (
				<Styled.Button
					ds={ds}
					variant={variant}
					disabled={disabled}
					attributes={{
						type: 'button',
						onClick: handleClick,
						children: [icon && <Styled.Icon key={`${key}-icon`} ds={ds} icon={icon} />, label]
					}}
				/>
			)
		}
	})(ds)
}
