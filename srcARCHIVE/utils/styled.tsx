import { type CSSProperties, type ReactElement, useId } from 'react'

// Base style system
export type StyleValue = string | number

export interface BaseStyles {
	[key: string]: StyleValue | undefined | Partial<BaseStyles>
	flexDirection?: 'row' | 'column'
	borderColor?: string
	'&:hover'?: Partial<BaseStyles>
	'&:focus'?: Partial<BaseStyles>
}

export type StyleProps = BaseStyles

function kebabCase(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function deconstructPseudoStyles(styles: Partial<StyleProps> = {}): {
	base: CSSProperties
	hover?: CSSProperties | undefined
	focus?: CSSProperties | undefined
} {
	const { '&:hover': hover, '&:focus': focus, ...base } = styles
	return { base, hover, focus }
}

function deconstructStyles(styles: CSSProperties, selector = '') {
	const styleEntries = Object.entries(styles)
		.map(([key, value]) => `\n\t${kebabCase(key)}: ${value};`)
		.join('')

	return `${selector} {${styleEntries}}`
}

export function Styled({
	styles,
	darkStyles = {},
	component
}: {
	styles: StyleProps
	darkStyles?: Partial<StyleProps>
	component: (id: string) => ReactElement
}) {
	const id = useId()
	const cssId = id.replace(/([^\w-])/g, '\\$1')

	const { base, hover, focus } = deconstructPseudoStyles(styles)
	const { base: darkBase, hover: darkHover, focus: darkFocus } = deconstructPseudoStyles(darkStyles)

	const css = `
		${deconstructStyles(base, `#${cssId}`)}
		${hover ? deconstructStyles(hover, `#${cssId}:hover`) : ''}
		${focus ? deconstructStyles(focus, `#${cssId}:focus`) : ''}

		@media (prefers-color-scheme: dark) {
			${darkBase ? deconstructStyles(darkBase, `#${cssId}`) : ''}
			${darkHover ? deconstructStyles(darkHover, `#${cssId}:hover`) : ''}
			${darkFocus ? deconstructStyles(darkFocus, `#${cssId}:focus`) : ''}
		}
	`

	return (
		<>
			<style>{css}</style>
			{component(id)}
		</>
	)
}

// Helper to create styles from design system
export function createStyles<T extends Record<string, StyleProps>>(styles: T): T {
	return styles
}

// Type-safe style composition
export function composeStyles(...styles: Partial<StyleProps>[]): StyleProps {
	const result = styles.reduce<StyleProps>((acc, style) => {
		if (!style) return acc

		// Copy base styles
		const merged = Object.assign({}, acc) as StyleProps
		const baseKeys = Object.keys(style).filter(
			key => key !== '&:hover' && key !== '&:focus'
		) as Array<keyof BaseStyles>

		for (const key of baseKeys) {
			const value = style[key]
			if (value !== undefined && (typeof value === 'string' || typeof value === 'number')) {
				merged[key] = value
			}
		}

		// Merge hover styles
		if (style['&:hover']) {
			merged['&:hover'] = Object.assign({}, acc['&:hover'], style['&:hover'])
		}

		// Merge focus styles
		if (style['&:focus']) {
			merged['&:focus'] = Object.assign({}, acc['&:focus'], style['&:focus'])
		}

		return merged
	}, {})

	return result
}
