import { type Dispatch, type ReactElement, type SetStateAction, useState } from 'react'
import type { AnyZodObject, ZodType, z } from 'zod'
import type { DesignSystem } from './types'

export function createTheme(ds: DesignSystem) {
	return ds
}

export function createStatefulComponent<State extends ZodType, Schema extends AnyZodObject>({
	createSchema,
	render
}: {
	createSchema: (stateSchema: State) => Schema
	render: (params: {
		designSystem: DesignSystem
		props: z.infer<Schema>
		state: z.infer<State>
		setState: Dispatch<SetStateAction<z.infer<State>>>
	}) => ReactElement
	_state: State
}) {
	return (designSystem: DesignSystem) => (stateSchema: State) => (props: z.infer<Schema>) => {
		const [state, setState] = useState<z.infer<State>>()
		const element = render({
			designSystem,
			props,
			state,
			setState
		})

		const schema = createSchema(stateSchema)
		const Component: React.FC & { schema: Schema } = () => element
		Component.schema = schema

		return [state, Component] as const
	}
}
