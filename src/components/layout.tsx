import type { ReactElement } from 'react'
import { z } from 'zod'
import type { ColorsConfig, FontsConfig, SizesConfig } from '../types'
import { FontFaces } from '../utils/fonts'
import { Styled } from '../utils/styled'

export function createLayout<
	Fonts extends FontsConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig
>({ fonts, colors, sizes }: { fonts: Fonts; colors: Colors; sizes: Sizes }) {
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
