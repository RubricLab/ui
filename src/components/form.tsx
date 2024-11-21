import { useState } from 'react'
import { z } from 'zod'
import { createUI } from '..'
import type {
	ButtonConfig,
	ColorsConfig,
	FontsConfig,
	FormConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../types'
import { Styled } from '../utils/styled'

const fieldMap = {
	text: z.string(),
	number: z.number(),
	password: z.string(),
	email: z.string().email(),
	tel: z.string(),
	url: z.string().url(),
	date: z.date(),
	time: z.date(),
	checkbox: z.boolean(),
	radio: z.boolean(),
	textarea: z.string()
}

type Field = {
	label: string
	name: string
	placeholder: string
	type: keyof typeof fieldMap
}

export function createForm<
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Form extends FormConfig<Colors, Sizes>,
	Button extends ButtonConfig<Colors, Sizes>
>(ds: {
	logos: Logos
	fonts: Fonts
	icons: Icons
	colors: Colors
	sizes: Sizes
	components: { Form: Form; Button: Button }
}) {
	const {
		colors,
		sizes,
		icons,
		components: { Form }
	} = ds

	const schema = z.object({
		title: z.string(),
		fields: z.array(
			z.object({
				label: z.string(),
				name: z.string(),
				placeholder: z.string().optional(),
				type: z.enum([
					'text',
					'number',
					'password',
					'email',
					'tel',
					'url',
					'date',
					'time',
					'checkbox',
					'radio',
					'textarea'
				])
			})
		),
		onsubmit: z.function() // problematic - should be generic to the fields
	})

	function component<
		Fields extends Field[],
		Args = {
			[K in Fields[number]['name']]: z.infer<
				(typeof fieldMap)[Extract<Fields[number], { name: K }>['type']]
			>
		}
	>(
		{
			title,
			fields,
			onsubmit
		}: {
			title: string
			fields: Fields
			onsubmit: (args: Args) => void
		} // problematic - should be z.infer<typeof schema>
	) {
		const [values, setValues] = useState<Args>({} as Args)

		const { Button } = createUI(ds)
		return (
			<Styled
				styles={{
					backgroundColor: colors.primary.bg.light,
					color: colors.primary.text.light,
					borderRadius: sizes.medium.rounding,
					fontSize: sizes.medium.text,
					display: 'flex',
					margin: `calc(${sizes.medium.space} / 2)`,
					fontFamily: 'display',
					flexDirection: 'column'
				}}
				darkStyles={{
					backgroundColor: colors.primary.bg.dark,
					color: colors.primary.text.dark
				}}
				component={id => (
					<form id={id}>
						<p style={{ margin: `calc(${sizes.medium.space} / 2)` }}>{title}</p>
						{fields.map(({ name, type, placeholder }) => (
							<Styled
								key={name}
								styles={{
									margin: `calc(${sizes.medium.space} / 2)`,
									padding: sizes.medium.space,
									fontFamily: 'text',
									fontSize: sizes.medium.text,
									color: colors.secondary.text.light,
									backgroundColor: colors.secondary.bg.light,
									border: 'none'
								}}
								darkStyles={{
									color: colors.secondary.text.dark,
									backgroundColor: colors.secondary.bg.dark
								}}
								component={id => (
									<input
										id={id}
										name={name}
										type={type}
										placeholder={placeholder}
										onChange={e => {
											const value = (() => {
												switch (type) {
													case 'number':
														return Number(e.target.value)

													case 'checkbox':
													case 'radio':
														return e.target.checked

													case 'date':
													case 'time':
														return new Date(e.target.value)
													default:
														return e.target.value
												}
											})()

											setValues(v => ({
												...v,
												[name]: value
											}))
										}}
									/>
								)}
							/>
						))}
						<div style={{ margin: `calc(-${sizes.medium.space} / 2)` }}>
							<Button
								onClick={() => {
									onsubmit(values)
								}}
								content={'Submit Form'}
								type={'primary'}
							/>
						</div>
					</form>
				)}
			/>
		)
	}

	component.schema = schema

	return component
}
