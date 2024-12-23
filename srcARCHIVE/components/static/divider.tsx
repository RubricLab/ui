import { z } from 'zod'
import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../../types'
import { Styled } from '../../utils/styled'

export function createDividerSchema() {
	return z.object({
		orientation: z.enum(['horizontal', 'vertical']).optional(),
		thickness: z.enum(['thin', 'medium', 'thick']).optional()
	})
}

export function rawDivider({
	borderColor,
	size,
	orientation = 'horizontal',
	thickness = 'thin'
}: {
	borderColor: { light: string; dark: string }
	size: { space: string }
	orientation?: 'horizontal' | 'vertical'
	thickness?: 'thin' | 'medium' | 'thick'
}) {
	const thicknessMap = {
		thin: '1px',
		medium: '2px',
		thick: '4px'
	}

	const isHorizontal = orientation === 'horizontal'

	return (
		<Styled
			styles={{
				backgroundColor: 'transparent',
				borderStyle: 'solid',
				borderColor: borderColor.light,
				margin: size.space,
				...(isHorizontal
					? {
							borderWidth: `${thicknessMap[thickness]} 0 0 0`,
							width: '100%',
							height: 0
						}
					: {
							borderWidth: `0 0 0 ${thicknessMap[thickness]}`,
							height: '100%',
							width: 0
						})
			}}
			darkStyles={{
				borderColor: borderColor.dark
			}}
			component={dividerId => <div id={dividerId} />}
		/>
	)
}

export function createDivider<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createDividerSchema()
	function component({ orientation, thickness }: z.infer<typeof schema>) {
		return rawDivider({
			borderColor: colors.border,
			size: sizes.information,
			orientation: orientation as 'horizontal' | 'vertical',
			thickness: thickness ?? 'thin'
		})
	}

	component.schema = schema

	return component
}
