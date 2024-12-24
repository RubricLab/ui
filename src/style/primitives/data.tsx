// data-display-primitives.tsx

import React from 'react'
import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ----------------------------------------------------------------------------
   1) Table (with sub-components: TableHead, TableBody, TableRow, TableCell)
   - A typical <table> styling that references DS for colors, spacing, etc.
   - We won't handle advanced features like sorting, sticky headers, etc.
----------------------------------------------------------------------------- */
interface TableProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.TableHTMLAttributes<HTMLTableElement>
}

export function Table({ ds, overrides, attributes }: TableProps) {
	const styleDef: AllStates = {
		base: {
			width: '100%',
			borderCollapse: 'collapse',
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			color: ds.colors.text.light
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledTable = createStyledComponent<Pick<TableProps, 'ds' | 'attributes'>, 'table'>(
		'table',
		() => styleDef
	)
	return <StyledTable ds={ds} {...(attributes || {})} />
}

interface TableHeadProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLTableSectionElement>
}

export function TableHead({ ds, overrides, attributes }: TableHeadProps) {
	const styleDef: AllStates = {
		base: {
			backgroundColor: ds.colors.neutral.light
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledThead = createStyledComponent<Pick<TableHeadProps, 'ds' | 'attributes'>, 'thead'>(
		'thead',
		() => styleDef
	)
	return <StyledThead ds={ds} {...(attributes || {})} />
}

interface TableBodyProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLTableSectionElement>
}

export function TableBody({ ds, overrides, attributes }: TableBodyProps) {
	const styleDef: AllStates = { base: {} }
	if (overrides) Object.assign(styleDef, overrides)
	const StyledTbody = createStyledComponent<Pick<TableBodyProps, 'ds' | 'attributes'>, 'tbody'>(
		'tbody',
		() => styleDef
	)
	return <StyledTbody ds={ds} {...(attributes || {})} />
}

interface TableRowProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLTableRowElement>
}

export function TableRow({ ds, overrides, attributes }: TableRowProps) {
	const styleDef: AllStates = {
		base: {
			borderBottom: `1px solid ${ds.colors.border.light}`
		},
		dark: {
			borderBottom: `1px solid ${ds.colors.border.dark}`
		},
		hover: {
			backgroundColor: ds.colors.neutral.light
		},
		darkHover: {
			backgroundColor: ds.colors.neutral.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledTr = createStyledComponent<Pick<TableRowProps, 'ds' | 'attributes'>, 'tr'>(
		'tr',
		() => styleDef
	)
	return <StyledTr ds={ds} {...(attributes || {})} />
}

interface TableCellProps {
	ds: DesignSystem
	/** Typically 'th' or 'td'. We can default to 'td'. */
	as?: 'th' | 'td'
	overrides?: Partial<AllStates>
	attributes?:
		| React.ThHTMLAttributes<HTMLTableCellElement>
		| React.TdHTMLAttributes<HTMLTableCellElement>
}

export function TableCell({ ds, as = 'td', overrides, attributes }: TableCellProps) {
	const styleDef: AllStates = {
		base: {
			padding: ds.sizes.information.space,
			textAlign: 'left'
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledTdOrTh = createStyledComponent<Pick<TableCellProps, 'ds' | 'attributes'>, 'td' | 'th'>(
		as,
		() => styleDef
	)
	return <StyledTdOrTh ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   2) List (unordered or ordered)
   - We'll define a small "List" that defaults to <ul>,
     plus "ListItem" that’s <li>. 
   - If you want an ordered list, you can pass an `ordered` prop.
----------------------------------------------------------------------------- */
interface ListProps {
	ds: DesignSystem
	ordered?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLOListElement | HTMLUListElement>
}

export function List({ ds, ordered, overrides, attributes }: ListProps) {
	const Tag = ordered ? 'ol' : 'ul'
	const styleDef: AllStates = {
		base: {
			listStyle: ordered ? 'decimal' : 'disc',
			margin: 0,
			paddingLeft: ds.sizes.content.space,
			color: ds.colors.text.light,
			fontSize: ds.sizes.content.text,
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif'
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledList = createStyledComponent<Pick<ListProps, 'ds' | 'attributes'>, typeof Tag>(
		Tag,
		() => styleDef
	)
	return <StyledList ds={ds} {...(attributes || {})} />
}

interface ListItemProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.LiHTMLAttributes<HTMLLIElement>
}

export function ListItem({ ds, overrides, attributes }: ListItemProps) {
	const styleDef: AllStates = {
		base: {
			marginBottom: '0.25rem'
		}
	}
	if (overrides) Object.assign(styleDef, overrides)

	const StyledLi = createStyledComponent<Pick<ListItemProps, 'ds' | 'attributes'>, 'li'>(
		'li',
		() => styleDef
	)
	return <StyledLi ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   3) Card
   - A container with a background, border or shadow, perhaps some padding.
----------------------------------------------------------------------------- */
interface CardProps {
	ds: DesignSystem
	hoverable?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Card({ ds, hoverable, overrides, attributes }: CardProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			borderRadius: ds.sizes.content.rounding,
			boxShadow: `0 1px 3px ${ds.colors.shadow.light}`,
			padding: ds.sizes.content.space,
			transition: 'box-shadow 0.2s ease-in-out'
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 1px 3px ${ds.colors.shadow.dark}`
		}
	}

	if (hoverable) {
		styleDef.hover = {
			boxShadow: `0 2px 6px ${ds.colors.shadow.light}`
		}
		styleDef.darkHover = {
			boxShadow: `0 2px 6px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledCard = createStyledComponent<Pick<CardProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledCard ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   4) Badge
   - A small label or count, often used for statuses. 
   - We might define a "variant" prop for success, warning, error, etc.
----------------------------------------------------------------------------- */
interface BadgeProps {
	ds: DesignSystem
	variant?: 'default' | 'success' | 'error' | 'warning' | 'info'
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLSpanElement>
}

export function Badge({ ds, variant = 'default', overrides, attributes }: BadgeProps) {
	const variantToColor = {
		default: ds.colors.neutral.light,
		success: ds.colors.success.light,
		error: ds.colors.error.light,
		warning: ds.colors.warning.light,
		info: ds.colors.active.light
	}
	const variantToDarkColor = {
		default: ds.colors.neutral.dark,
		success: ds.colors.success.dark,
		error: ds.colors.error.dark,
		warning: ds.colors.warning.dark,
		info: ds.colors.active.dark
	}

	const styleDef: AllStates = {
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			padding: `${ds.sizes.information.space} ${ds.sizes.content.space}`,
			fontSize: ds.sizes.information.text,
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontWeight: 'bold',
			borderRadius: ds.sizes.information.rounding,
			backgroundColor: variantToColor[variant],
			color: ds.colors.text.light
		},
		dark: {
			backgroundColor: variantToDarkColor[variant],
			color: ds.colors.text.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledBadge = createStyledComponent<Pick<BadgeProps, 'ds' | 'attributes'>, 'span'>(
		'span',
		() => styleDef
	)
	return <StyledBadge ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   5) Avatar
   - A circle or square with an image or initials. 
   - We'll keep it simple: pass either `src` or fallback to initials.
----------------------------------------------------------------------------- */
interface AvatarProps {
	ds: DesignSystem
	src?: string
	alt?: string
	initials?: string
	size?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Avatar({
	ds,
	src,
	alt,
	initials,
	size = '40px',
	overrides,
	attributes
}: AvatarProps) {
	// We’ll do a styled <div> with background-image if src is provided,
	// or just text if initials are provided.
	const styleDef: AllStates = {
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: size,
			height: size,
			borderRadius: '50%',
			backgroundColor: ds.colors.neutral.light,
			color: ds.colors.text.light,
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.information.text,
			overflow: 'hidden'
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark,
			color: ds.colors.text.dark
		}
	}

	// If we have an image, we can do background-image or an <img> inside.
	// For demonstration, let's do a background-image approach:
	if (src) {
		if (styleDef.base) {
			styleDef.base.backgroundImage = `url(${src})`
			styleDef.base.backgroundSize = 'cover'
			styleDef.base.backgroundPosition = 'center'
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledAvatar = createStyledComponent<Pick<AvatarProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return (
		<StyledAvatar ds={ds} role="img" aria-label={alt || initials} {...(attributes || {})}>
			{/* If no src but we have initials, show them. If we have src, the text won't be visible anyway. */}
			{!src && initials}
		</StyledAvatar>
	)
}

/* ----------------------------------------------------------------------------
   6) Icon
   - Typically a wrapper around an SVG or DS icon. 
   - We might pass an icon name or a React node. 
   - We'll keep it minimal: a <span> that positions or sizes an icon.
----------------------------------------------------------------------------- */
interface IconProps {
	ds: DesignSystem
	/** Icon name if your DS has an icons record, or a node */
	icon?: keyof DesignSystem['icons'] | React.ReactNode
	size?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLSpanElement>
}

export function Icon({
	ds,
	icon,
	size = ds.sizes.information.text,
	overrides,
	attributes
}: IconProps) {
	const styleDef: AllStates = {
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			width: size,
			height: size
		},
		dark: {}
	}
	if (overrides) Object.assign(styleDef, overrides)

	const StyledIcon = createStyledComponent<Pick<IconProps, 'ds' | 'attributes'>, 'span'>(
		'span',
		() => styleDef
	)

	// If icon is a key of ds.icons, we can render ds.icons[icon].mono( ...some color... ) or something similar
	let content: React.ReactNode = null
	if (typeof icon === 'string' && ds.icons[icon as keyof typeof ds.icons]) {
		content = ds.icons[icon as keyof typeof ds.icons].mono(ds.colors.text.light)
	} else if (React.isValidElement(icon)) {
		content = icon
	}

	return (
		<StyledIcon ds={ds} {...(attributes || {})}>
			{content}
		</StyledIcon>
	)
}

/* ----------------------------------------------------------------------------
   7) Progress
   - A progress bar with a "value" and "max". 
   - Real usage might also handle "indeterminate" if value is not set.
----------------------------------------------------------------------------- */
interface ProgressProps {
	ds: DesignSystem
	value?: number
	max?: number
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Progress({ ds, value = 0, max = 100, overrides, attributes }: ProgressProps) {
	const percentage = Math.min(100, Math.max(0, (value / max) * 100))

	const styleDef: AllStates = {
		base: {
			width: '100%',
			backgroundColor: ds.colors.disabled.light,
			height: '8px',
			borderRadius: ds.sizes.information.rounding,
			overflow: 'hidden',
			position: 'relative'
		},
		dark: {
			backgroundColor: ds.colors.disabled.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	const StyledProgress = createStyledComponent<Pick<ProgressProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	// We'll nest a child div for the filled portion
	const filledStyle: React.CSSProperties = {
		backgroundColor: ds.colors.active.light,
		width: `${percentage}%`,
		height: '100%'
	}

	return (
		<StyledProgress
			ds={ds}
			role="progressbar"
			aria-valuenow={value}
			aria-valuemax={max}
			{...(attributes || {})}
		>
			<div style={filledStyle} />
		</StyledProgress>
	)
}

/* ----------------------------------------------------------------------------
   8) Spinner
   - A loading spinner. We'll do a simple ring approach with a border,
     or you might embed an SVG. 
----------------------------------------------------------------------------- */
interface SpinnerProps {
	ds: DesignSystem
	size?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Spinner({ ds, size = '32px', overrides, attributes }: SpinnerProps) {
	// We'll do a ring approach with border
	const styleDef: AllStates = {
		base: {
			width: size,
			height: size,
			border: `4px solid ${ds.colors.disabled.light}`,
			borderTopColor: ds.colors.active.light,
			borderRadius: '50%',
			animation: 'spin 1s linear infinite',
			boxSizing: 'border-box'
		},
		dark: {
			border: `4px solid ${ds.colors.disabled.dark}`,
			borderTopColor: ds.colors.active.dark
		}
	}

	if (overrides) Object.assign(styleDef, overrides)

	// We can define a simple keyframe in a <style> tag or inline
	// For brevity, let's define it in an inline style prop
	const spinKeyframes = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `

	const StyledSpinner = createStyledComponent<Pick<SpinnerProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return (
		<>
			<style>{spinKeyframes}</style>
			<StyledSpinner ds={ds} {...(attributes || {})} />
		</>
	)
}
