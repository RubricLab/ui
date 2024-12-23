import { z } from 'zod'
import type {
	Asset,
	Color,
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	Size,
	SizesConfig
} from '../../types'
import { getTupleFromObjectKeys } from '../../utils'
import { Styled } from '../../utils/styled'
import { rawIcon } from './icon'

export function createButtonSchema<Icons extends IconsConfig>({
	icons
}: {
	icons: Icons
}) {
	return z.object({
		icon: z.enum(getTupleFromObjectKeys(icons)).optional(),
		onClick: z.function(),
		content: z.string()
	})
}

export function rawButton({
	backgroundColor,
	textColor,
	size,
	icon,
	monochromeIcons,
	content,
	onClick
}: {
	backgroundColor: Color
	textColor: Color
	size: Size
	icon: Asset | undefined
	monochromeIcons: boolean | undefined
	content: string
	onClick: () => void
}) {
	return (
		<Styled
			styles={{
				backgroundColor: backgroundColor.light,
				color: textColor.light,
				padding: size.space,
				margin: size.space,
				borderRadius: size.rounding,
				fontSize: size.text,
				fontFamily: 'text',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				cursor: 'pointer',
				gap: size.space,
				border: 'none'
			}}
			darkStyles={{
				backgroundColor: backgroundColor.dark,
				color: textColor.dark
			}}
			component={id => (
				<button id={id} type="button" onClick={onClick}>
					{icon &&
						rawIcon({
							size: size,
							icon: icon,
							fill: monochromeIcons ? textColor : undefined
						})}
					{content}
				</button>
			)}
		/>
	)
}

export function createButton<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors, icons } = ds

	const schema = createButtonSchema(ds)

	function component({ icon, onClick, content }: z.infer<typeof schema>) {
		const iconAsset = icon ? icons[icon] : undefined

		return rawButton({
			backgroundColor: colors.bg,
			textColor: colors.text,
			size: sizes.information,
			icon: iconAsset,
			monochromeIcons: false,
			content,
			onClick
		})
	}

	component.schema = schema

	return component
}
