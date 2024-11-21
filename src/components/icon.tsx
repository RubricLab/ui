import { z } from 'zod'
import type { ColorsConfig, IconsConfig, SizesConfig } from '../types'
import { getTupleFromObjectKeys } from '../utils'
import { DarkSwitch } from '../utils/darkSwitch'
import { Styled } from '../utils/styled'

export function createIcon<
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: { icons: Icons; colors: Colors; sizes: Sizes }) {
	const { icons, colors, sizes } = ds

	const schema = z.object({
		icon: z.enum([...getTupleFromObjectKeys(icons), 'logo']),
		size: z.enum(getTupleFromObjectKeys(sizes)),
		fill: z.enum(getTupleFromObjectKeys(colors)).optional()
	})

	const component = ({ icon, size, fill }: z.infer<typeof schema>) => {
		const sizeValue = size && sizes[size]
		const iconAsset = icon && icons[icon]
		const fillValue = fill && colors[fill]

		return (
			<div
				style={{
					width: `calc(${sizeValue?.text} * 1.2)`,
					height: `calc(${sizeValue?.text} * 1.2)`
				}}
			>
				<div
					style={{
						display: 'flex',
						height: '100%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					{fill ? (
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
