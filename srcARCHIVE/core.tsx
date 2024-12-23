import { type ReactElement, type ReactNode, useState } from 'react'
import type { z } from 'zod'
import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from './types'

// Core types
export type StyleValue = string | number
export type StyleProps = {
	[key: string]: StyleValue | StyleProps | undefined
}

export type ComponentStyles = {
	root: StyleProps
	label?: StyleProps
	input: StyleProps
}

// Core component types
export type StatefulComponent<Props, Value> = {
	(
		props: Props & { value?: Value; onChange?: (value: Value | undefined) => void }
	): [Value | undefined, ReactElement]
	schema: z.ZodType
}

export type ComponentConfig<Props, Value> = {
	name: string
	schema: <
		Fonts extends FontsConfig,
		Logos extends LogosConfig,
		Colors extends ColorsConfig,
		Sizes extends SizesConfig,
		Icons extends IconsConfig
	>(
		ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>
	) => z.ZodType
	styles: <
		Fonts extends FontsConfig,
		Logos extends LogosConfig,
		Colors extends ColorsConfig,
		Sizes extends SizesConfig,
		Icons extends IconsConfig
	>(
		ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>
	) => ComponentStyles
	render: (
		props: Props & {
			value: Value | undefined
			onChange: (value: Value | undefined) => void
		}
	) => ReactElement
}

// Core style application
function applyStyles(styles: StyleProps): string {
	return Object.entries(styles)
		.map(([key, value]) => {
			if (typeof value === 'object') {
				return `${key} { ${applyStyles(value)} }`
			}
			return `${key.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}: ${value};`
		})
		.join('\n')
}

// Core component creation
export function createStatefulUI<Props extends { label?: string }, Value>(
	config: ComponentConfig<Props, Value>
): <
	Fonts extends FontsConfig,
	Logos extends LogosConfig,
	Colors extends ColorsConfig,
	Sizes extends SizesConfig,
	Icons extends IconsConfig
>(
	ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>
) => StatefulComponent<Props, Value> {
	return function create<
		Fonts extends FontsConfig,
		Logos extends LogosConfig,
		Colors extends ColorsConfig,
		Sizes extends SizesConfig,
		Icons extends IconsConfig
	>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
		const Component = ((
			props: Props & { value?: Value; onChange?: (value: Value | undefined) => void }
		) => {
			const [internalValue, setInternalValue] = useState<Value | undefined>(props.value)
			const styles = config.styles(ds)
			const id = `${config.name}-${Math.random().toString(36).slice(2)}`

			const value = props.value ?? internalValue
			const onChange = props.onChange ?? setInternalValue

			const element = (
				<div className={`${config.name}-root`}>
					<style>
						{`
              .${config.name}-root { ${applyStyles(styles.root)} }
              ${styles.label ? `.${config.name}-label { ${applyStyles(styles.label)} }` : ''}
              .${config.name}-input { ${applyStyles(styles.input)} }
            `}
					</style>

					{props.label && styles.label && (
						<label className={`${config.name}-label`} htmlFor={id}>
							{props.label}
						</label>
					)}

					<div className={`${config.name}-input`}>
						{config.render({
							...props,
							value,
							onChange
						})}
					</div>
				</div>
			) as ReactElement

			return [value, element] as const
		}) as StatefulComponent<Props, Value>

		Component.schema = config.schema(ds)
		return Component
	}
}
