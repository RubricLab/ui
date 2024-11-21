import { z } from 'zod'
import type {
	ButtonConfig,
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	FormConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../types'
import { getTupleFromObjectKeys } from '../utils'
import { DarkSwitch } from '../utils/darkSwitch'

export function createIcon<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons, Button, Form>) {
	const {
		// fonts,
		// logos,
		colors,
		sizes,
		icons
		// components: { button, form }
	} = ds

	const schema = z.object({
		icon: z.enum([...getTupleFromObjectKeys(icons), 'logo']),
		size: z.enum(getTupleFromObjectKeys(sizes)),
		fill: z.enum(getTupleFromObjectKeys(colors)).optional()
	})

	const component = ({
		icon,
		size,
		fill
	}: {
		icon: z.infer<typeof schema.shape.icon>
		size: z.infer<typeof schema.shape.size>
		fill?: z.infer<typeof schema.shape.fill>
	}) => {
		const sizeValue = sizes[size]
		const iconAsset = icons[icon]
		const fillValue = fill ? colors[fill] : undefined

		return (
			<div
				style={{
					width: `calc(${sizeValue.text})`,
					height: `calc(${sizeValue.text})`
				}}
			>
				<div
					style={{
						display: 'flex',
						height: '100%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
    					lineHeight: 0
					}}
				>
					{fillValue ? (
						<DarkSwitch
							component={id => <div id={id}>{iconAsset.mono(fillValue.text.light)}</div>}
							darkComponent={id => <div id={id}>{iconAsset.mono(fillValue.text.dark)}</div>}
						/>
					) : (
						<DarkSwitch
							component={id => <div id={id}>{iconAsset.light()}</div>}
							darkComponent={id => <div id={id}>{iconAsset.dark()}</div>}
						/>
					)}
				</div>
			</div>
		)
	}

	component.schema = schema

	return component
}
