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

export function createLinkSchema<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	return z.object({
		href: z.string().url(),
		content: z.string(),
		icon: z.enum(getTupleFromObjectKeys(ds.icons)).optional(),
		external: z.boolean().optional(),
		disabled: z.boolean().optional()
	})
}

export function rawLink({
	textColor,
	size,
	icon,
	monochromeIcons,
	href,
	content,
	external,
	disabled
}: {
	textColor: Color
	size: Size
	icon: Asset | undefined
	monochromeIcons: boolean | undefined
	href: string
	content: string
	external?: boolean
	disabled?: boolean
}) {
	return (
		<Styled
			styles={{
				color: textColor.light,
				fontSize: size.text,
				fontFamily: 'text',
				display: 'inline-flex',
				alignItems: 'center',
				gap: size.space,
				textDecoration: 'none',
				cursor: disabled ? 'not-allowed' : 'pointer',
				opacity: disabled ? 0.5 : 1,
				transition: 'opacity 0.2s ease'
			}}
			darkStyles={{
				color: textColor.dark
			}}
			hoverStyles={{
				opacity: disabled ? 0.5 : 0.7,
				textDecoration: disabled ? 'none' : 'underline'
			}}
			darkHoverStyles={{
				opacity: disabled ? 0.5 : 0.7,
				textDecoration: disabled ? 'none' : 'underline'
			}}
			component={id => (
				<a
					id={id}
					href={disabled ? undefined : href}
					target={external ? '_blank' : undefined}
					rel={external ? 'noopener noreferrer' : undefined}
					onClick={e => disabled && e.preventDefault()}
				>
					{icon &&
						rawIcon({
							size: size,
							icon: icon,
							fill: monochromeIcons ? textColor : undefined
						})}
					{content}
				</a>
			)}
		/>
	)
}

export function createLink<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors, icons } = ds

	const schema = createLinkSchema(ds)

	function component({ href, content, icon, external, disabled }: z.infer<typeof schema>) {
		const iconAsset = icon ? icons[icon] : undefined

		return rawLink({
			textColor: colors.text,
			size: sizes.information,
			icon: iconAsset,
			monochromeIcons: false,
			href,
			content,
			external: external ?? false,
			disabled: disabled ?? false
		})
	}

	component.schema = schema

	return component
}
