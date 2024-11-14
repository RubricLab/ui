// components/button.tsx
'use client'

import type { ButtonVariant, DesignSystem } from '~/types'
import { Styled } from '../utils/styled'
import Icon from './icon'

interface ButtonProps<DS extends DesignSystem> {
	onClick: () => void
	content: string
	type: keyof DS['components']['Button']
	icon?: keyof DS['icons']
}

export default function Button<DS extends DesignSystem>(designSystem: DS) {
	return (props: ButtonProps<DS>) => {
		const { onClick, content, type, icon } = props
		const style = designSystem.components.Button[type as ButtonVariant]

		const IconComponent = Icon(designSystem)

		return (
			<Styled
				styles={{
					backgroundColor: designSystem.colors[style.backgroundColor]?.light,
					color: designSystem.colors[style.textColor]?.light,
					padding: designSystem.sizing[designSystem.components.Button[type as ButtonVariant].padding],
					borderRadius: '8px',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '8px'
				}}
				darkStyles={{
					backgroundColor: designSystem.colors[style.backgroundColor]?.dark,
					color: designSystem.colors[style.textColor]?.dark
				}}
				component={id => (
					<button type="button" id={id} onClick={onClick}>
						{icon && <IconComponent icon={icon} size="sm" />}
						{content}
					</button>
				)}
			/>
		)
	}
}
