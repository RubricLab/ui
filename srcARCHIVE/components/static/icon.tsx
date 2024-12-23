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
import { DarkSwitch } from '../../utils/darkSwitch'

export function createIconSchema<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { icons } = ds

	return z.object({
		icon: z.enum([...getTupleFromObjectKeys(icons), 'logo'])
	})
}

export function rawIcon({
	icon,
	size,
	fill
}: { icon: Asset; size: Size; fill: Color | undefined }) {
	return (
		<div
			style={{
				width: size.text,
				height: size.text
			}}
		>
			<div
				style={{
					display: 'flex',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					lineHeight: 0
				}}
			>
				{fill ? (
					<DarkSwitch
						component={id => <div id={id}>{icon.mono(fill.light)}</div>}
						darkComponent={id => <div id={id}>{icon.mono(fill.dark)}</div>}
					/>
				) : (
					<DarkSwitch
						component={id => <div id={id}>{icon.light()}</div>}
						darkComponent={id => <div id={id}>{icon.dark()}</div>}
					/>
				)}
			</div>
		</div>
	)
}

export function createIcon<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
	const { sizes, colors, icons } = ds

	const schema = createIconSchema(ds)

	function component({ icon }: z.infer<typeof schema>) {
		const iconAsset = icons[icon ?? (undefined as never)]

		return rawIcon({
			icon: iconAsset,
			size: sizes.information,
			fill: colors.text
		})
	}

	component.schema = schema
	component.example = {
		icon: Object.keys(icons)[0] as z.infer<typeof schema>['icon']
	} satisfies z.infer<typeof schema>

	return component
}
