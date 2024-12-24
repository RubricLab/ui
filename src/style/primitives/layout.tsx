// layout-primitives.tsx

import type * as React from 'react'
import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ------------------------------------------------------------------
   1) Box
   - Minimal container; always 'div'
   - "overrides" for advanced style overrides
------------------------------------------------------------------ */
interface BoxProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Box({ ds, overrides, attributes }: BoxProps) {
	const styleDef: AllStates = {
		base: {
			boxSizing: 'border-box'
		}
	}

	// If user wants to override e.g. base, dark, hover states, we merge them.
	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const Styled = createStyledComponent<Pick<BoxProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <Styled ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   2) Flex
   - Defaults display: flex
   - Optional direction, wrap, align, justify...
   - We'll keep them all optional for demonstration. 
     If you want them required, just remove ?
------------------------------------------------------------------ */
interface FlexProps {
	ds: DesignSystem
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
	wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
	align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
	gap?: keyof DesignSystem['sizes']
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Flex(props: FlexProps) {
	const { ds, direction, wrap, align, justify, gap, overrides, attributes } = props

	const styleDef: AllStates = {
		base: {
			display: 'flex',
			flexDirection: direction ?? 'row',
			flexWrap: wrap ?? 'nowrap',
			alignItems: align ?? 'stretch',
			justifyContent: justify ?? 'flex-start',
			boxSizing: 'border-box'
		}
	}

	// If gap is given and maps to a DS size, apply that.
	// If you want strictly DS-based spacing, you might remove the fallback.
	if (gap && ds.sizes[gap]) {
		;(styleDef.base ?? (undefined as never)).gap = ds.sizes[gap].space
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledFlex = createStyledComponent<Pick<FlexProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledFlex ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   3) Grid
   - Similar to Flex, but defaults display: grid.
   - Optional columns, rows, gap, etc.
------------------------------------------------------------------ */
interface GridProps {
	ds: DesignSystem
	columns?: string
	rows?: string
	gap?: keyof DesignSystem['sizes']
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Grid(props: GridProps) {
	const { ds, columns, rows, gap, overrides, attributes } = props

	const styleDef: AllStates = {
		base: {
			display: 'grid',
			gridTemplateColumns: columns ?? '1fr',
			gridTemplateRows: rows ?? 'auto',
			boxSizing: 'border-box'
		}
	}

	if (gap && ds.sizes[gap]) {
		;(styleDef.base ?? (undefined as never)).gap = ds.sizes[gap].space
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledGrid = createStyledComponent<Pick<GridProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledGrid ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   4) Stack
   - Requires direction
   - "spacing" must be a DS size key or 'none'
------------------------------------------------------------------ */
interface StackProps {
	ds: DesignSystem
	direction: 'vertical' | 'horizontal'
	spacing?: keyof DesignSystem['sizes'] | 'none'
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Stack(props: StackProps) {
	const { ds, direction, spacing, overrides, attributes } = props

	const flexDirection = direction === 'vertical' ? 'column' : 'row'

	const baseStyles: React.CSSProperties = {
		display: 'flex',
		flexDirection,
		boxSizing: 'border-box'
	}

	if (spacing && spacing !== 'none' && ds.sizes[spacing]) {
		baseStyles.gap = ds.sizes[spacing].space
	}

	const styleDef: AllStates = {
		base: baseStyles
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledStack = createStyledComponent<Pick<StackProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledStack ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   5) Container
   - Typically used to center content, limit maxWidth, etc.
------------------------------------------------------------------ */
interface ContainerProps {
	ds: DesignSystem
	/** If you want to let them pick from DS sizes or a custom string, up to you. */
	maxWidth?: string
	centered?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Container(props: ContainerProps) {
	const { ds, maxWidth, centered = true, overrides, attributes } = props

	const styleDef: AllStates = {
		base: {
			boxSizing: 'border-box',
			// Center horizontally if centered is true
			margin: centered ? '0 auto' : undefined,
			padding: ds.sizes.content.space,
			maxWidth: maxWidth ?? '1200px'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledContainer = createStyledComponent<Pick<ContainerProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledContainer ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   6) Section
   - Semantic wrapper <section>
   - Minimal base styling
------------------------------------------------------------------ */
interface SectionProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Section({ ds, overrides, attributes }: SectionProps) {
	const styleDef: AllStates = {
		base: {
			boxSizing: 'border-box',
			padding: ds.sizes.content.space
			// If you want a background or border, you can add it here
			// backgroundColor: ds.colors.neutral.light, etc.
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSection = createStyledComponent<Pick<SectionProps, 'ds' | 'attributes'>, 'section'>(
		'section',
		() => styleDef
	)
	return <StyledSection ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   7) Divider
   - thickness, vertical
   - toggles <hr> vs <div>
------------------------------------------------------------------ */
interface DividerProps {
	ds: DesignSystem
	thickness?: string
	vertical?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLHRElement | HTMLDivElement>
}

export function Divider(props: DividerProps) {
	const { ds, thickness, vertical, overrides, attributes } = props

	// If vertical is true, we use a <div>, else <hr>.
	const Tag = vertical ? 'div' : 'hr'
	const styleDef: AllStates = { base: {} }

	if (vertical) {
		styleDef.base = {
			width: thickness ?? ds.borders?.thin ?? '1px',
			height: '100%',
			backgroundColor: ds.colors.border.light,
			boxSizing: 'border-box'
		}
		// Dark mode
		styleDef.dark = {
			backgroundColor: ds.colors.border.dark
		}
	} else {
		// Horizontal
		styleDef.base = {
			border: 'none',
			borderBottom: `${thickness ?? ds.borders?.thin ?? '1px'} solid ${ds.colors.border.light}`,
			boxSizing: 'border-box'
		}
		styleDef.dark = {
			borderBottom: `${thickness ?? ds.borders?.thin ?? '1px'} solid ${ds.colors.border.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	// Type-cast since Tag can be 'hr' or 'div'
	const StyledDivider = createStyledComponent<Pick<DividerProps, 'ds' | 'attributes'>, 'hr' | 'div'>(
		Tag as 'hr',
		() => styleDef
	)

	return <StyledDivider ds={ds} {...(attributes || {})} />
}
