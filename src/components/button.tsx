import React from 'react'
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
import { getTupleFromObjectKeys } from '../utils'
import { Styled } from '../utils/styled'
import { createIcon } from './icon'

export function createButton<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Button extends ButtonConfig<Colors, Sizes>,
	Form extends FormConfig<Colors, Sizes>
>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons, Button, Form>) {
	const {
		// fonts,
		// logos,
		colors,
		sizes,
		icons,
		components: {
			button
			// form
		}
	} = ds

	const schema = z.object({
		icon: z.enum(getTupleFromObjectKeys(icons)).optional(),
		onClick: z.function(),
		content: z.string(),
		type: z.enum(getTupleFromObjectKeys(button))
	})

	const component = ({
		icon,
		onClick,
		content,
		type
	}: {
		icon?: z.infer<typeof schema.shape.icon>
		onClick: z.infer<typeof schema.shape.onClick>
		content: z.infer<typeof schema.shape.content>
		type: z.infer<typeof schema.shape.type>
	}) => {
		if (!type) {
			throw ''
		} // problematic - why do we need this

		const sizeKey = button[type].size
		const size = sizes[sizeKey]

		const colorKey = button[type].color
		const color = colors[colorKey]

		if (!size || !color) {
			throw ''
		} // problematic - why do we need this

		return (
			<Styled
				styles={{
					backgroundColor: color.bg.light,
					color: color.text.light,
					padding: size.space,
					margin: sizes.medium.space,
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
					backgroundColor: color.bg.dark,
					color: color.text.dark
				}}
				component={id => (
					<button id={id} type="button" onClick={onClick}>
						{icon &&
							createIcon(ds)({
								icon,
								// biome-ignore lint/suspicious/noExplicitAny: tech debt
								fill: colorKey as any,
								// biome-ignore lint/suspicious/noExplicitAny: tech debt
								size: sizeKey as any
							})}
						{content}
					</button>
				)}
			/>
		)
	}

	component.schema = schema

	return component
}
