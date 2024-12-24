import * as React from 'react'
import type { CSSProperties, ComponentType } from 'react'
import type { DesignSystem } from '../types' // Your DS type from above

/******************************************************************************
 * 1) Basic Type: All possible states + optional variants
 ******************************************************************************/
export interface AllStates {
	// Light states:
	base?: CSSProperties
	hover?: CSSProperties
	active?: CSSProperties
	focus?: CSSProperties
	disabled?: CSSProperties

	// Dark states:
	dark?: CSSProperties
	darkHover?: CSSProperties
	darkActive?: CSSProperties
	darkFocus?: CSSProperties
	darkDisabled?: CSSProperties

	/**
	 * Optional variants object:
	 * - The key is the variant name (e.g. "secondary", "truncate", "large", etc.)
	 * - The value is another partial AllStates object, so it can override base, hover, etc.
	 */
	variants?: Record<string, Partial<AllStates>>
}

/**
 * A style definition can be a literal object or a function of the design system
 * so that we can do: createStyledComponent('div', ds => ({ base: {...} }))
 */
export type StyleDefinition = AllStates | ((ds: DesignSystem) => AllStates)

/**
 * All styled components must receive a `ds: DesignSystem`.
 * Then they can also accept other standard HTML props.
 */
export interface DesignSystemProp {
	ds: DesignSystem
}

/******************************************************************************
 * 2) Utility: Merge two AllStates (for base + variant).
 *    If both define e.g. hover, we combine them: variant overrides base.
 ******************************************************************************/
function mergeAllStates(a?: Partial<AllStates>, b?: Partial<AllStates>): AllStates {
	// If either is undefined, return the other as-is
	if (!a) return b || {}
	if (!b) return a

	return {
		base: mergeCSS(a.base, b.base),
		hover: mergeCSS(a.hover, b.hover),
		active: mergeCSS(a.active, b.active),
		focus: mergeCSS(a.focus, b.focus),
		disabled: mergeCSS(a.disabled, b.disabled),

		dark: mergeCSS(a.dark, b.dark),
		darkHover: mergeCSS(a.darkHover, b.darkHover),
		darkActive: mergeCSS(a.darkActive, b.darkActive),
		darkFocus: mergeCSS(a.darkFocus, b.darkFocus),
		darkDisabled: mergeCSS(a.darkDisabled, b.darkDisabled),

		variants: {
			// For "variants", we recursively merge per key
			...a.variants,
			...Object.fromEntries(
				Object.entries(b.variants ?? {}).map(([variantKey, overrideVal]) => {
					const baseVal = a.variants?.[variantKey]
					return [variantKey, mergeAllStates(baseVal, overrideVal)]
				})
			)
		}
	} as AllStates
}

/** Merges two CSSProperties objects (shallow). Later entries override earlier ones. */
function mergeCSS(a?: CSSProperties, b?: CSSProperties): CSSProperties | undefined {
	if (!a) return b
	if (!b) return a
	return { ...a, ...b }
}

/******************************************************************************
 * 3) Utility: Convert a CSSProperties object into a CSS string
 ******************************************************************************/
function toCSSString(style: CSSProperties = {}): string {
	return Object.entries(style)
		.map(([key, value]) => {
			const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase()
			return `${kebab}: ${value};`
		})
		.join('\n')
}

/******************************************************************************
 * 4) Build the final CSS from a single AllStates definition + a unique selector
 ******************************************************************************/
function buildCSSFromAllStates(selector: string, def: AllStates): string {
	let css = ''

	// Base
	if (def.base) {
		css += `
${selector} {
  ${toCSSString(def.base)}
}
`
	}

	// Hover
	if (def.hover) {
		css += `
${selector}:hover:not(:disabled) {
  ${toCSSString(def.hover)}
}
`
	}

	// Active
	if (def.active) {
		css += `
${selector}:active:not(:disabled) {
  ${toCSSString(def.active)}
}
`
	}

	// Focus
	if (def.focus) {
		css += `
${selector}:focus-visible {
  ${toCSSString(def.focus)}
}
`
	}

	// Disabled
	if (def.disabled) {
		css += `
${selector}:disabled {
  ${toCSSString(def.disabled)}
}
`
	}

	// Dark mode media query
	const darkBlocks: string[] = []
	if (def.dark) {
		darkBlocks.push(`
${selector} {
  ${toCSSString(def.dark)}
}
`)
	}
	if (def.darkHover) {
		darkBlocks.push(`
${selector}:hover:not(:disabled) {
  ${toCSSString(def.darkHover)}
}
`)
	}
	if (def.darkActive) {
		darkBlocks.push(`
${selector}:active:not(:disabled) {
  ${toCSSString(def.darkActive)}
}
`)
	}
	if (def.darkFocus) {
		darkBlocks.push(`
${selector}:focus-visible {
  ${toCSSString(def.darkFocus)}
}
`)
	}
	if (def.darkDisabled) {
		darkBlocks.push(`
${selector}:disabled {
  ${toCSSString(def.darkDisabled)}
}
`)
	}

	if (darkBlocks.length > 0) {
		css += `
@media (prefers-color-scheme: dark) {
  ${darkBlocks.join('\n')}
}
`
	}

	return css
}

/******************************************************************************
 * 5) Build the overall CSS from a full definition, including variants.
 *    For each variant, we merge the base definition with the variant override,
 *    then generate a new set of blocks for the selector + [data-variant="X"].
 ******************************************************************************/
function buildCSS(selector: string, definition: AllStates): string {
	// 1. Build normal states for the base definition
	let css = buildCSSFromAllStates(selector, definition)

	// 2. For each variant, we do a merged definition => base + variant override
	if (definition.variants) {
		for (const [variantName, variantDef] of Object.entries(definition.variants)) {
			const mergedDef = mergeAllStates(definition, variantDef)
			const variantSelector = `${selector}[data-variant="${variantName}"]`
			css += buildCSSFromAllStates(variantSelector, mergedDef)
		}
	}

	return css
}

/******************************************************************************
 * 6) The main factory: createStyledComponent
 *    - Accepts a tag/Component
 *    - Accepts a style definition or function of DS
 *    - Returns a typed React component that inlines a <style> tag with unique ID
 ******************************************************************************/
export function createStyledComponent<
	Props extends DesignSystemProp,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	Tag extends keyof JSX.IntrinsicElements | ComponentType<any>
>(tagOrComponent: Tag, styleDefinition: StyleDefinition) {
	type ElProps = Tag extends keyof JSX.IntrinsicElements
		? Omit<JSX.IntrinsicElements[Tag], 'ref' | 'key'> // your choice on how you handle ref, key
		: Omit<React.ComponentProps<Tag>, 'ref' | 'key'>

	return function StyledComponent(props: Props & ElProps) {
		const { ds, ...rest } = props
		const id = React.useId().replace(/[^a-zA-Z0-9-_]/g, '')

		// Get the style object from DS if it’s a function:
		const resolvedDef = typeof styleDefinition === 'function' ? styleDefinition(ds) : styleDefinition

		// Build a single big CSS string:
		const css = buildCSS(`#${id}`, resolvedDef)

		// Render
		const finalProps = { id, ...rest } as ElProps & { id: string }

		return (
			<>
				<style>{css}</style>
				{typeof tagOrComponent === 'string'
					? React.createElement(tagOrComponent, finalProps)
					: React.createElement(tagOrComponent, { ...finalProps })}
			</>
		)
	}
}
