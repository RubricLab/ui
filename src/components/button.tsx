import { z } from 'zod'
import type { DesignSystem } from '../types'
import { createComponent } from '../utils'
import { Styled } from '../utils/styled'
import Icon from './icon'

function arrayToTuple<T extends string>(arr: T[]): readonly [T, ...T[]] {
	if (!arr[0]) throw ''
	return [arr[0], ...arr.slice(1, undefined)]
}

function createButtonSchema<UI extends DesignSystem>(ui: UI) {
	return z.object({
		onClick: z.function().returns(z.void()),
		content: z.string(),
		type: z.enum(arrayToTuple(Object.keys(ui.components.Button))),
		icon: z.string().optional()
	})
}

export default createComponent<DesignSystem>(ui => ({
	schema: createButtonSchema(ui),
	render: ({ onClick, content, type, icon }) => {
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
}))
