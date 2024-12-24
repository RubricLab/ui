// typography-primitives.tsx

import type * as React from 'react'
import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ------------------------------------------------------------------
   1) Heading
   - We can handle h1..h6 using a single "level" prop,
     or define separate H1, H2, etc.
   - We’ll go with a single Heading here.
------------------------------------------------------------------ */
interface HeadingProps {
	ds: DesignSystem
	/**
	 * We’ll map level 1..6 to h1..h6.
	 * If you want separate components (H1, H2...) that’s fine too.
	 */
	level: 1 | 2 | 3 | 4 | 5 | 6
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLHeadingElement>
}

export function Heading({ ds, level, overrides, attributes }: HeadingProps) {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements

	// We might map each heading level to a DS size or scale:
	const fontSizesByLevel = {
		1: ds.sizes.title.text,
		2: ds.sizes.subtitle.text,
		3: ds.sizes.content.text,
		4: ds.sizes.content.text,
		5: ds.sizes.information.text,
		6: ds.sizes.information.text
	} as const

	const styleDef: AllStates = {
		base: {
			fontFamily: ds.fonts.heading ? 'heading' : 'sans-serif', // If you need a fallback
			fontSize: fontSizesByLevel[level],
			margin: 0,
			color: ds.colors.text.light,
			// Possibly fontWeight if your DS references a standard heading weight
			// e.g. fontWeight: 700,
			lineHeight: 1.2
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledHeading = createStyledComponent<Pick<HeadingProps, 'ds' | 'attributes'>, typeof Tag>(
		Tag,
		() => styleDef
	)
	return <StyledHeading ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   2) Text
   - A generic inline or block text component.
   - By default, let’s make it a <span>.
     If you prefer a <p> or something else, you can do so.
------------------------------------------------------------------ */
interface TextProps {
	ds: DesignSystem
	/**
	 * For demonstration, let’s allow block vs. inline.
	 * If block is true => <div> or <p>, else <span>.
	 */
	block?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLSpanElement | HTMLParagraphElement>
}

export function Text({ ds, block, overrides, attributes }: TextProps) {
	const Tag = block ? 'p' : 'span'

	const styleDef: AllStates = {
		base: {
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			color: ds.colors.text.light,
			lineHeight: 1.5,
			margin: block ? '0 0 1em 0' : undefined // if block
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	// We have to cast Tag properly because it might be 'span' or 'p'.
	const StyledText = createStyledComponent<Pick<TextProps, 'ds' | 'attributes'>, 'span'>(
		Tag as 'span',
		() => styleDef
	)
	return <StyledText ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   3) Paragraph
   - For a fully separate “paragraph,” you could do almost the same
   - We’ll do a bit more strict approach: always <p>, not optional
------------------------------------------------------------------ */
interface ParagraphProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLParagraphElement>
}

export function Paragraph({ ds, overrides, attributes }: ParagraphProps) {
	const styleDef: AllStates = {
		base: {
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			color: ds.colors.text.light,
			lineHeight: 1.5,
			margin: '0 0 1em 0'
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledParagraph = createStyledComponent<Pick<ParagraphProps, 'ds' | 'attributes'>, 'p'>(
		'p',
		() => styleDef
	)
	return <StyledParagraph ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   4) Label
   - Typically for form labels.
   - Could define label-specific styling: smaller text, margin, etc.
------------------------------------------------------------------ */
interface LabelProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.LabelHTMLAttributes<HTMLLabelElement>
}

export function Label({ ds, overrides, attributes }: LabelProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			marginBottom: '0.5rem',
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.information.text,
			color: ds.colors.text.light
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledLabel = createStyledComponent<Pick<LabelProps, 'ds' | 'attributes'>, 'label'>(
		'label',
		() => styleDef
	)
	return <StyledLabel ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   5) Code
   - For inline code, typically <code>.
   - We might define separate “CodeBlock” for <pre><code> usage.
------------------------------------------------------------------ */
interface CodeProps {
	ds: DesignSystem
	inline?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Code({ ds, inline = true, overrides, attributes }: CodeProps) {
	// If inline, we use <code>. If not inline, we might do <pre><code>...
	// But for simplicity, let's just do a <code> with block styling if !inline.
	const Tag = 'code'

	const styleDef: AllStates = {
		base: {
			fontFamily: ds.fonts.monospace ? 'monospace' : 'monospace', // If you have a DS fallback
			fontSize: ds.sizes.information.text,
			backgroundColor: ds.colors.neutral.light,
			color: ds.colors.text.light,
			padding: '2px 4px',
			borderRadius: ds.sizes.information.rounding,
			display: inline ? 'inline-block' : 'block',
			// If it's not inline, we can do some extra margin
			margin: inline ? undefined : '0 0 1em 0',
			whiteSpace: inline ? 'nowrap' : 'pre', // or pre-wrap
			lineHeight: 1.4
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark,
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledCode = createStyledComponent<Pick<CodeProps, 'ds' | 'attributes'>, typeof Tag>(
		Tag,
		() => styleDef
	)
	return <StyledCode ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   6) Blockquote
   - For quoting text. We can style with a left border, italic text, etc.
------------------------------------------------------------------ */
interface BlockquoteProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.BlockquoteHTMLAttributes<HTMLQuoteElement>
}

export function Blockquote({ ds, overrides, attributes }: BlockquoteProps) {
	const styleDef: AllStates = {
		base: {
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			margin: '1em 0',
			padding: '0.5em 1em',
			borderLeft: `4px solid ${ds.colors.border.light}`,
			color: ds.colors.text.light,
			// Maybe italic style for quotes
			fontStyle: 'italic'
		},
		dark: {
			color: ds.colors.text.dark,
			borderLeft: `4px solid ${ds.colors.border.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledBlockquote = createStyledComponent<
		Pick<BlockquoteProps, 'ds' | 'attributes'>,
		'blockquote'
	>('blockquote', () => styleDef)
	return <StyledBlockquote ds={ds} {...(attributes || {})} />
}
