import { type Dispatch, type ReactElement, type SetStateAction, useState } from 'react'
import { type AnyZodObject, type ZodType, z } from 'zod'
import type { ComponentWithSchema, DesignSystem } from './types'

export const createZodEnumOfKeysFromObject = <Obj extends Record<string, unknown>>(obj: Obj) => {
	type Keys = keyof Obj extends string ? keyof typeof obj : never
	return z.enum(Object.keys(obj) as [Keys, ...Array<Keys>])
}

export function createTheme(ds: DesignSystem) {
	return ds
}

export function createStatefulComponent<State extends ZodType, Schema extends AnyZodObject>({
	createSchema,
	render
}: {
	createSchema: ({
		stateSchema,
		designSystem
	}: { stateSchema: State; designSystem: DesignSystem }) => Schema
	render: (params: {
		designSystem: DesignSystem
		props: z.infer<Schema>
		state: z.infer<State>
		setState: Dispatch<SetStateAction<z.infer<State>>>
	}) => ReactElement
	_state: State
}) {
	return (designSystem: DesignSystem) => (stateSchema: State) => {
		const [state, setState] = useState<z.infer<State>>()
		const Component: ComponentWithSchema<Schema> = props => {
			return render({
				designSystem,
				props,
				state,
				setState
			})
		}

		Component.schema = createSchema({ stateSchema, designSystem })

		return [state, Component] as const
	}
}

export function createStaticComponent<Schema extends AnyZodObject>({
	createSchema,
	render
}: {
	createSchema: ({ designSystem }: { designSystem: DesignSystem }) => Schema
	render: (params: { designSystem: DesignSystem; props: z.infer<Schema> }) => ReactElement
}) {
	return (designSystem: DesignSystem) => {
		const Component: ComponentWithSchema<Schema> = props => {
			return render({ designSystem, props })
		}

		Component.schema = createSchema({ designSystem })

		return Component
	}
}
