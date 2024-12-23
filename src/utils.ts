import { type Dispatch, type ReactElement, type SetStateAction, useMemo, useState } from 'react'
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

		// biome-ignore lint/correctness/useExhaustiveDependencies: required to avoid re-rendering on state change
		const Component = useMemo(() => {
			const Component: ComponentWithSchema<Schema> = props => {
				return render({
					designSystem,
					props,
					state,
					setState
				})
			}
			Component.schema = createSchema({ stateSchema, designSystem })
			return Component
		}, [stateSchema, designSystem])

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

export function createLayoutComponent<Schema extends AnyZodObject>({
	createSchema,
	render
}: {
	createSchema: ({ designSystem }: { designSystem: DesignSystem }) => Schema
	render: (params: {
		designSystem: DesignSystem
		props: z.infer<Schema> & { children: ReactElement | ReactElement[] }
	}) => ReactElement
}) {
	return (designSystem: DesignSystem) => {
		const Component = ((props: z.infer<Schema> & { children: ReactElement | ReactElement[] }) => {
			return render({ designSystem, props })
		}) as ComponentWithSchema<Schema>

		const childrenSchema = z.object({
			children: z.union([z.custom<ReactElement>(), z.array(z.custom<ReactElement>())])
		})

		Component.schema = createSchema({ designSystem }).extend(childrenSchema.shape) as Schema

		return Component
	}
}
