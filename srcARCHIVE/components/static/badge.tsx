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

export function createBadgeSchema() {
	return z.object({
		content: z.string(),
		variant: z.enum(['default', 'success', 'warning', 'error']).optional(),
		rounded: z.boolean().optional()
	})
}

export function rawBadge({
	backgroundColor,
	textColor,
	size,
	content,
	rounded = false
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	content: string
	rounded?: boolean
}) {
	return (
		<Styled
			styles={{
				backgroundColor: backgroundColor.light,
				color: textColor.light,
				padding: `calc(${size.space} * 0.5) ${size.space}`,
				borderRadius: rounded ? '9999px' : size.rounding,
				fontSize: `calc(${size.text} * 0.875)`,
				fontFamily: 'text',
				display: 'inline-flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontWeight: 'bold',
				minWidth: size.space,
				height: size.space
			}}
			darkStyles={{
				backgroundColor: backgroundColor.dark,
				color: textColor.dark
			}}
			component={badgeId => <div id={badgeId}>{content}</div>}
		/>
	)
}

export function createBadge<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createBadgeSchema()

	function component({ content, variant = 'default', rounded }: z.infer<typeof schema>) {
		const variantColors = {
			default: { bg: colors.bg, text: colors.text },
			success: { bg: colors.success, text: colors.success },
			warning: { bg: colors.warning, text: colors.warning },
			error: { bg: colors.error, text: colors.error }
		}[variant]

		return rawBadge({
			backgroundColor: variantColors.bg,
			textColor: variantColors.text,
			size: sizes.information,
			content,
			rounded: rounded ?? false
		})
	}

	component.schema = schema

	return component
}
