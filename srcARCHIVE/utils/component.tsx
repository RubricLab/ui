import { type ReactElement, type ReactNode, useState } from 'react'
import type {
	ColorsConfig,
	DesignSystem,
	FontsConfig,
	IconsConfig,
	LogosConfig,
	SizesConfig
} from '../types'
import { useComponentStyles } from '../utils'
import type { StyleProps } from './styled'
import { Styled } from './styled'

// Base types for all components
export interface BaseProps {
	label?: string
	disabled?: boolean
	error?: string
	children?: ReactNode
}

// Helper for design system types
export type DS<
	Fonts extends FontsConfig = FontsConfig,
	Logos extends LogosConfig = LogosConfig,
	Colors extends ColorsConfig = ColorsConfig,
	Sizes extends SizesConfig = SizesConfig,
	Icons extends IconsConfig = IconsConfig
> = DesignSystem<Fonts, Logos, Colors, Sizes, Icons>

// Helper for creating static components
export function createStaticComponent<
	Props extends BaseProps,
	Element extends ReactElement = ReactElement
>(render: (props: Props & { ds: DS; styles: ReturnType<typeof useComponentStyles> }) => Element) {
	return function create<
		Fonts extends FontsConfig,
		Logos extends LogosConfig,
		Colors extends ColorsConfig,
		Sizes extends SizesConfig,
		Icons extends IconsConfig
	>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
		return function useComponent(props: Props) {
			const styles = useComponentStyles(ds, 'content')
			return render({ ...props, ds, styles })
		}
	}
}

// Helper for creating stateful components
export function createStatefulComponent<
	Props extends BaseProps,
	Value,
	Element extends ReactElement
>(
	render: (
		props: Props & {
			ds: DS
			styles: ReturnType<typeof useComponentStyles>
			value: Value | undefined
			onChange: (value: Value | undefined) => void
		}
	) => Element
) {
	return function create<
		Fonts extends FontsConfig,
		Logos extends LogosConfig,
		Colors extends ColorsConfig,
		Sizes extends SizesConfig,
		Icons extends IconsConfig
	>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
		return function useComponent(
			props: Props & {
				value?: Value
				onChange?: (value: Value | undefined) => void
			}
		) {
			const styles = useComponentStyles(ds, 'content')
			const [internalValue, setInternalValue] = useState<Value | undefined>(props.value)

			const value = props.value ?? internalValue
			const onChange = props.onChange ?? setInternalValue

			const element = render({
				...props,
				ds,
				styles,
				value,
				onChange
			})

			return [value, element] as const
		}
	}
}

// Helper for creating styled components
export function createStyledComponent<Props extends BaseProps>(
	render: (props: Props & { id: string }) => ReactElement
) {
	return function useComponent(
		props: Props & { styles: StyleProps; darkStyles?: Partial<StyleProps> }
	) {
		return (
			<Styled
				styles={props.styles}
				darkStyles={props.darkStyles ?? {}}
				component={id => render({ ...props, id })}
			/>
		)
	}
}

// Helper for creating UI components
export interface ComponentStyles {
	container: StyleProps
	label?: StyleProps
	input: StyleProps
	labelDark?: StyleProps
	inputDark: StyleProps
	error?: StyleProps
}

export type RenderProps<Props extends BaseProps, Value> = Props & {
	styles: ReturnType<typeof useComponentStyles>
	value: Value | undefined
	onChange: (value: Value | undefined) => void
}

export function createUIComponent<Props extends BaseProps, Value = never>(config: {
	name: string
	defaultStyles: (styles: ReturnType<typeof useComponentStyles>) => ComponentStyles
	render: (props: RenderProps<Props, Value>) => ReactElement
}) {
	return function create<
		Fonts extends FontsConfig,
		Logos extends LogosConfig,
		Colors extends ColorsConfig,
		Sizes extends SizesConfig,
		Icons extends IconsConfig
	>(ds: DesignSystem<Fonts, Logos, Colors, Sizes, Icons>) {
		return function useComponent(
			props: Props & {
				value?: Value
				onChange?: (value: Value | undefined) => void
			}
		) {
			const styles = useComponentStyles(ds, 'content')
			const [internalValue, setInternalValue] = useState<Value | undefined>(props.value)

			const value = props.value ?? internalValue
			const onChange = props.onChange ?? setInternalValue

			const componentStyles = config.defaultStyles(styles)

			const element = (
				<Styled
					styles={componentStyles.container}
					component={id => (
						<div id={id}>
							{props.label && componentStyles.label && (
								<Styled
									styles={componentStyles.label}
									darkStyles={componentStyles.labelDark ?? {}}
									component={labelId => (
										<label id={labelId} htmlFor={`${config.name}-${id}`}>
											{props.label}
										</label>
									)}
								/>
							)}
							<Styled
								styles={componentStyles.input}
								darkStyles={componentStyles.inputDark}
								component={inputId =>
									config.render({
										...props,
										styles,
										value,
										onChange
									})
								}
							/>
							{props.error && componentStyles.error && (
								<Styled
									styles={componentStyles.error}
									component={errorId => <div id={errorId}>{props.error}</div>}
								/>
							)}
						</div>
					)}
				/>
			)

			return [value, element] as const
		}
	}
}
