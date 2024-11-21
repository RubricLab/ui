import type { ReactElement } from 'react'
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
import { FontFaces } from '../utils/fonts'
import { Styled } from '../utils/styled'

export function createLayout<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons, Button, Form>) {
	const {
		fonts,
		// logos,
		colors,
		sizes
		// icons
		// components: { button, form }
	} = ds
	const schema = z.object({ page: z.custom<ReactElement>() })

	function component({ page }: z.infer<typeof schema>) {
		return (
			<html lang="en" style={{ height: '100%' }}>
				<body style={{ margin: 0, padding: 0, height: '100%' }}>
					<FontFaces fonts={fonts} />
					<Styled
						styles={{
							display: 'flex',
							height: '100%',
							width: '100%',
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor: colors.primary.bg.light
						}}
						darkStyles={{
							backgroundColor: colors.primary.bg.dark
						}}
						component={id => (
							<div id={id}>
								<div
									style={{
										padding: sizes.medium.space,
										height: `calc(100% - ${sizes.medium.space} * 2)`,
										width: '100%'
									}}
								>
									{page}
								</div>
							</div>
						)}
					/>
				</body>
			</html>
		)
	}
	component.schema = schema

	return component
}
