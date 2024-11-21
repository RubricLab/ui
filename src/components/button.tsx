import { z } from 'zod'
import type { ButtonConfig, ColorsConfig, IconsConfig, SizesConfig } from '../types'
import { getTupleFromObjectKeys } from '../utils'
import { Styled } from '../utils/styled'

export function createButton<
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>
>({
	colors,
	sizes,
	icons,
	components: { Button }
}: { icons: Icons; colors: Colors; sizes: Sizes; components: { Button: Button } }) {
	const schema = z.object({
		icon: z.enum(getTupleFromObjectKeys(icons)),
		onClick: z.function(),
		content: z.string(),
		type: z.enum(getTupleFromObjectKeys(Button))
	})

	const component = ({ icon, onClick, content, type }: z.infer<typeof schema>) => {
		if (!type) {
			throw ''
		}

		const { size, color } = Button[type]

		return (
			<Styled
				styles={{
					backgroundColor: colors[color]?.bg.light,
					color: colors[color]?.text.light,
					padding: sizes[size]?.space,
					margin: sizes[size]?.space,
					borderRadius: sizes[size]?.rounding,
					fontSize: sizes[size]?.text
				}}
				darkStyles={{
					backgroundColor: colors[color]?.bg.dark,
					color: colors[color]?.text.dark
				}}
				component={id => (
					<button id={id} type="button" onClick={onClick}>
						{icon ? icons[icon].light() : ''} {content}
					</button>
				)}
			/>
		)
	}

	component.schema = schema

	return component
}
