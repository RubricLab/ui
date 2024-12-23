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

export function createSpinnerSchema() {
	return z.object({
		size: z.enum(['small', 'medium', 'large']).optional()
	})
}

export function rawSpinner({
	color,
	size,
	spinnerSize = 'medium'
}: {
	color: { light: string; dark: string }
	size: { space: string }
	spinnerSize?: 'small' | 'medium' | 'large'
}) {
	const sizeMap = {
		small: `calc(${size.space} * 1.5)`,
		medium: `calc(${size.space} * 2)`,
		large: `calc(${size.space} * 3)`
	}

	const borderWidth = {
		small: '2px',
		medium: '3px',
		large: '4px'
	}

	return (
		<Styled
			styles={{
				width: sizeMap[spinnerSize],
				height: sizeMap[spinnerSize],
				border: `${borderWidth[spinnerSize]} solid ${color.light}`,
				borderTopColor: 'transparent',
				borderRadius: '50%',
				display: 'inline-block',
				animation: 'spin 1s linear infinite',
				'@keyframes spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			}}
			darkStyles={{
				borderColor: color.dark,
				borderTopColor: 'transparent'
			}}
			component={spinnerId => <div id={spinnerId} />}
		/>
	)
}

export function createSpinner<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createSpinnerSchema()
	function component({ size: spinnerSize }: z.infer<typeof schema>) {
		return rawSpinner({
			color: colors.border,
			size: sizes.information,
			spinnerSize: spinnerSize as 'small' | 'medium' | 'large'
		})
	}

	component.schema = schema

	return component
}
