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

export function createTextSchema() {
	return z.object({
		variant: z.enum(['heading', 'body', 'caption']),
		content: z.string(),
		align: z.enum(['left', 'center', 'right']).optional(),
		weight: z.enum(['normal', 'bold']).optional()
	})
}

export function rawText({
	textColor,
	size,
	content,
	variant,
	align = 'left',
	weight = 'normal'
}: {
	textColor: { light: string; dark: string }
	size: { text: string; space: string }
	content: string
	variant: 'heading' | 'body' | 'caption'
	align?: 'left' | 'center' | 'right'
	weight?: 'normal' | 'bold'
}) {
	const variantStyles = {
		heading: {
			fontSize: `calc(${size.text} * 1.5)`,
			fontFamily: 'heading'
		},
		body: {
			fontSize: size.text,
			fontFamily: 'text'
		},
		caption: {
			fontSize: `calc(${size.text} * 0.875)`,
			fontFamily: 'text'
		}
	}[variant]

	return (
		<Styled
			styles={{
				color: textColor.light,
				textAlign: align,
				fontWeight: weight,
				margin: `${size.space} 0`,
				...variantStyles
			}}
			darkStyles={{
				color: textColor.dark
			}}
			component={textId => <div id={textId}>{content}</div>}
		/>
	)
}

export function createText<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createTextSchema()
	function component({ variant, content, align, weight }: z.infer<typeof schema>) {
		return rawText({
			textColor: colors.text,
			size: sizes.information,
			variant,
			content,
			align: align ?? 'left',
			weight: weight ?? 'normal'
		})
	}

	component.schema = schema

	return component
}
