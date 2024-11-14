import { type CSSProperties, type ReactElement, useId } from 'react'

function kebabCase(str: string) {
	return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function deconstructStyles(styles: CSSProperties) {
	const styleEntries = Object.entries(styles)
		.map(([key, value]) => `\n\t${kebabCase(key)}: ${value};`)
		.join('')

	return `{${styleEntries}}`
}

export function Styled({
	styles,
	darkStyles,
	component
}: {
	styles: CSSProperties
	darkStyles: CSSProperties
	component: (id: string) => ReactElement
}) {
	const id = useId()
	const cssId = id.replace(/([^\w-])/g, '\\$1')

	const css = `#${cssId} ${deconstructStyles(styles)}

@media (prefers-color-scheme: dark) {
	#${cssId} ${deconstructStyles(darkStyles)}
}`

	return (
		<>
			<style>{css}</style>
			{component(id)}
		</>
	)
}
