import { useState } from 'react'
import { z } from 'zod'
import type { ColorsConfig, FormConfig, IconsConfig, SizesConfig } from '../types'
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
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig,
	Form extends FormConfig<Colors, Sizes>
>({
	colors,
	sizes,
	icons,
	components: { Form }
}: { icons: Icons; colors: Colors; sizes: Sizes; components: { Form: Form } }) {
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
		return (
			<Styled
				styles={{
					backgroundColor: colors.primary.bg.light,
					color: colors.primary.text.light,
					padding: sizes.medium.space,
					margin: sizes.medium.space,
					borderRadius: sizes.medium.rounding,
					fontSize: sizes.medium.text
				}}
				darkStyles={{}}
				component={id => (
					<form
						id={id}
						onSubmit={() => {
							onsubmit(values)
						}}
					>
						<p>{title}</p>
						{fields.map(({ name, type, placeholder }) => (
							<input
								key={name}
								name={name}
								type={type}
								placeholder={placeholder}
								onChange={e =>
									setValues(v => ({
										...v,
										[name]: e.target.value
									}))
								}
							/>
						))}
					</form>
				)}
			/>
		)
	}

	component.schema = schema

	return component
}
