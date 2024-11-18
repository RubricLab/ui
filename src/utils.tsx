import type { ReactElement, ReactNode } from 'react'
import type { AnyZodObject, ZodSchema } from 'zod'
import { z } from 'zod'
import Icon from './components/icon'
import type { DesignSystem } from './types'
import { Styled } from './utils/styled'

// export function createComponent<UI>((ui) => ({})) {
// 	return (ui: UI) =>
// 		({
// 			schema,
// 			render
// 		}: {
// 			schema: ZodSchema
// 			render: (props: z.infer<typeof schema>) => ReactElement
// 		}) => {
// 			const main = (userProps: z.infer<typeof schema>) => {
// 				return render(userProps)
// 			}

// 			main.schema = schema
// 			main.exampleProps = schema.parse({})

// 			return main
// 		}
// }

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function arrayToTuple<T extends { [K in string]: any }>(arr: T): [keyof T, ...(keyof T)[]] {
	return Object.keys(arr) as [keyof T, ...(keyof T)[]]
}

// you can only pass an array of at least one string. Then we return it as a tuple type with the same keys

export function create2<UI extends DesignSystem, Schema extends ZodSchema>({
	render,
	schema,
	ui
}: {
	render: (props: z.infer<Schema>, ui: UI) => ReactNode
	schema: Schema
	ui: UI
}) {
	return () => <></>

	const main = (props: z.infer<Schema>) => {
		return render(props, ui)
	}

	main.schema = schema

	return main
}

function Button<DS extends DesignSystem>(ui: DS) {
	const schema = z.object({
		onClick: z.function().returns(z.void()),
		content: z.string(),
		type: z.enum(arrayToTuple(ui.components.Button)),
		icon: z.string().optional()
	})

	return create2<DS, typeof schema>({
		schema,
		render: ({ onClick, content, type, icon }, ui) => {
			const theme = ui.components.Button[type]

			const color = ui.colors[theme.color]

			const size = ui.sizing[theme.size]

			if (!color || !size) {
				throw ''
			}

			const IconComponent = Icon(ui)
			return <></>

			return (
				<Styled
					styles={{
						backgroundColor: color.bg.light,
						color: color.text.light,
						padding: size.space,
						borderRadius: size.rounding,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: size.space,
						fontSize: size.text,
						border: 'none',
						cursor: 'pointer',
						margin: ui.sizing.medium.space // consistent margin
					}}
					darkStyles={{
						backgroundColor: color.bg.dark,
						color: color.text.dark
					}}
					component={id => (
						<button type="button" id={id} onClick={onClick}>
							{icon && <IconComponent icon={icon} fill={color.text} size="sm" />}
							{content}
						</button>
					)}
				/>
			)
		},
		ui
	})
}

export function createUI<DS extends DesignSystem>(designSystem: DS) {
	return {
		Button: Button(designSystem)
	}
}
