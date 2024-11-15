import type { DesignSystem } from '../types'
import { createComponent } from '../utils'
import { Styled } from '../utils/styled'
import Icon from './icon'

interface ButtonProps<DS extends DesignSystem> {
	onClick: () => void
	content: string
	type: keyof DS['components']['Button']
	icon?: keyof DS['icons']
}

export default createComponent<DesignSystem, ButtonProps<DesignSystem>>({
	render: ({ onClick, content, type, icon }, ui) => {
		const theme = ui.components.Button[type]

		const color = ui.colors[theme.color]

		const size = ui.sizing[theme.size]

		if (!color || !size) {
			throw ''
		}

		const IconComponent = Icon(ui)

		return (
			<Styled
				styles={{
					backgroundColor: color.bg.light,
					color: color.text.light,
					padding: size.space,
					borderRadius: size.rounding,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: size.space,
					fontSize: size.text,
					border: 'none',
					cursor: 'pointer',
					margin: ui.sizing.medium.space // consistent margin
				}}
				darkStyles={{
					backgroundColor: color.bg.dark,
					color: color.text.dark
				}}
				component={id => (
					<button type="button" id={id} onClick={onClick}>
						{icon && <IconComponent icon={icon} fill={color.text} size="sm" />}
						{content}
					</button>
				)}
			/>
		)
	}
})
