import { z } from 'zod'
import type { ButtonConfig, ColorsConfig, IconsConfig, SizesConfig } from '../types'
import { getTupleFromObjectKeys } from '../utils'
import { Styled } from '../utils/styled'
import { createIcon } from './icon'

export function createButton<
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>
>(ds: { icons: Icons; colors: Colors; sizes: Sizes; components: { Button: Button } }) {
	const {
		colors,
		sizes,
		icons,
		components: { Button }
	} = ds

	const schema = z.object({
		icon: z.enum(getTupleFromObjectKeys(icons)).optional(),
		onClick: z.function(),
		content: z.string(),
		type: z.enum(getTupleFromObjectKeys(Button))
	})

	const component = ({ icon, onClick, content, type }: z.infer<typeof schema>) => {
		if (!type) {
			throw ''
		}

		const { size, color } = Button[type]

		const IconComponent = createIcon(ds)

		return (
			<Styled
				styles={{
					backgroundColor: colors[color]?.bg.light,
					color: colors[color]?.text.light,
					padding: sizes[size]?.space,
					margin: `calc(${sizes.medium.space})`,
					borderRadius: sizes[size]?.rounding,
					fontSize: sizes[size]?.text,
					fontFamily: 'text',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					cursor: 'pointer',
					gap: `calc(${sizes[size]?.space} / 2)`,
					border: 'none'
				}}
				darkStyles={{
					backgroundColor: colors[color]?.bg.dark,
					color: colors[color]?.text.dark
				}}
				component={id => (
					<button id={id} type="button" onClick={onClick}>
						{icon && <IconComponent icon={icon} fill={color} size={size} />} {content}
					</button>
				)}
			/>
		)
	}

	component.schema = schema

	return component
}
