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

export function createAvatarSchema() {
	return z.object({
		src: z.string().optional(),
		alt: z.string(),
		size: z.enum(['small', 'medium', 'large']).optional()
	})
}

function getInitials(name: string) {
	return name
		.split(' ')
		.map(part => part[0])
		.join('')
		.toUpperCase()
		.slice(0, 2)
}

export function rawAvatar({
	backgroundColor,
	textColor,
	size,
	src,
	alt,
	avatarSize = 'medium'
}: {
	backgroundColor: { light: string; dark: string }
	textColor: { light: string; dark: string }
	size: { text: string; space: string; rounding: string }
	src?: string
	alt: string
	avatarSize?: 'small' | 'medium' | 'large'
}) {
	const sizeMap = {
		small: `calc(${size.space} * 2)`,
		medium: `calc(${size.space} * 3)`,
		large: `calc(${size.space} * 4)`
	}

	const fontSize = {
		small: `calc(${size.text} * 0.75)`,
		medium: size.text,
		large: `calc(${size.text} * 1.25)`
	}

	return (
		<Styled
			styles={{
				backgroundColor: backgroundColor.light,
				color: textColor.light,
				width: sizeMap[avatarSize],
				height: sizeMap[avatarSize],
				borderRadius: '50%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: fontSize[avatarSize],
				fontFamily: 'text',
				overflow: 'hidden'
			}}
			darkStyles={{
				backgroundColor: backgroundColor.dark,
				color: textColor.dark
			}}
			component={avatarId => (
				<div id={avatarId}>
					{src ? (
						<img
							src={src}
							alt={alt}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover'
							}}
						/>
					) : (
						getInitials(alt)
					)}
				</div>
			)}
		/>
	)
}

export function createAvatar<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors } = ds
	const schema = createAvatarSchema()
	function component({ src, alt, size: avatarSize }: z.infer<typeof schema>) {
		return rawAvatar({
			backgroundColor: colors.bg,
			textColor: colors.text,
			size: sizes.information,
			src: src || '',
			alt,
			avatarSize: avatarSize || 'medium'
		})
	}

	component.schema = schema

	return component
}
