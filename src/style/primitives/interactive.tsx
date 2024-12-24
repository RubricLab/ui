// interactive-primitives.tsx

import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ----------------------------------------------------------------------------
   1) Button
   - Possibly we define a "variant" prop (primary, secondary, destructive, etc.)
     and map that to DS colors. We can also show states like hover, active, etc.
---------------------------------------------------------------------------- */
interface ButtonProps {
	ds: DesignSystem
	/** A variant to pick different color combos from DS. */
	variant?: 'primary' | 'secondary' | 'destructive'
	disabled?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export function Button({ ds, variant = 'primary', disabled, overrides, attributes }: ButtonProps) {
	// We'll pick background colors by variant:
	const backgroundByVariant = {
		primary: ds.colors.active.light,
		secondary: ds.colors.neutral.light,
		destructive: ds.colors.error.light
	}
	const darkBackgroundByVariant = {
		primary: ds.colors.active.dark,
		secondary: ds.colors.neutral.dark,
		destructive: ds.colors.error.dark
	}

	const styleDef: AllStates = {
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			gap: ds.sizes.information.space,
			padding: ds.sizes.content.space,
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			borderRadius: ds.sizes.content.rounding,
			border: '1px solid transparent',
			backgroundColor: backgroundByVariant[variant],
			color: ds.colors.bg.light,
			cursor: 'pointer',
			transition: 'all 0.2s ease-in-out'
		},
		dark: {
			backgroundColor: darkBackgroundByVariant[variant],
			color: ds.colors.bg.dark
		},
		hover: {
			opacity: 0.8
		},
		darkHover: {
			opacity: 0.8
		},
		active: {
			opacity: 0.6
		},
		darkActive: {
			opacity: 0.6
		},
		disabled: {
			backgroundColor: ds.colors.disabled.light,
			cursor: 'not-allowed'
		},
		darkDisabled: {
			backgroundColor: ds.colors.disabled.dark,
			cursor: 'not-allowed'
		},
		focus: {
			outline: 'none',
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		}
	}

	// If user provided overrides, merge them in
	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledButton = createStyledComponent<Pick<ButtonProps, 'ds' | 'attributes'>, 'button'>(
		'button',
		() => styleDef
	)

	return <StyledButton ds={ds} disabled={disabled} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   2) Link
   - A styled anchor (<a>) or perhaps a <Link> that can act like a button. 
   - We'll keep it simple: a standard anchor that inherits DS color & text style.
---------------------------------------------------------------------------- */
interface LinkProps {
	ds: DesignSystem
	/** The URL destination. If you want it optional, you can do so. */
	href: string
	overrides?: Partial<AllStates>
	attributes?: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export function Link({ ds, href, overrides, attributes }: LinkProps) {
	const styleDef: AllStates = {
		base: {
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			color: ds.colors.active.light,
			textDecoration: 'none',
			cursor: 'pointer',
			transition: 'color 0.2s ease'
		},
		dark: {
			color: ds.colors.active.dark
		},
		hover: {
			textDecoration: 'underline'
		},
		// Could also do a hover color shift. e.g. color: ds.colors.focus.light
		// but let's keep it simple
		focus: {
			outline: 'none',
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		active: {
			opacity: 0.8
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledLink = createStyledComponent<Pick<LinkProps, 'ds' | 'attributes'>, 'a'>(
		'a',
		() => styleDef
	)
	return <StyledLink ds={ds} href={href} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   3) Menu / MenuItem
   - A simple vertical menu container plus a menu item. 
   - Real usage might have open/close states, submenus, etc. 
   - We'll just do basic styling.
---------------------------------------------------------------------------- */

/**
 * Menu: a container (e.g. <ul>) that holds MenuItems (<li>).
 * We style it with DS-based spacing, background if needed, etc.
 */
interface MenuProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLUListElement>
}

export function Menu({ ds, overrides, attributes }: MenuProps) {
	const styleDef: AllStates = {
		base: {
			listStyle: 'none',
			margin: 0,
			padding: 0,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledMenu = createStyledComponent<Pick<MenuProps, 'ds' | 'attributes'>, 'ul'>(
		'ul',
		() => styleDef
	)
	return <StyledMenu ds={ds} {...(attributes || {})} />
}

/**
 * MenuItem: typically a <li> that might be clickable or a link.
 * We show hover states, etc.
 */
interface MenuItemProps {
	ds: DesignSystem
	/** If you want the item to be "active" or "selected", we can do a boolean. */
	active?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.LiHTMLAttributes<HTMLLIElement>
}

export function MenuItem({ ds, active, overrides, attributes }: MenuItemProps) {
	// We'll do a mild background highlight if active or hovered
	const styleDef: AllStates = {
		base: {
			padding: ds.sizes.information.space,
			cursor: 'pointer',
			backgroundColor: active ? ds.colors.focus.light : 'transparent'
		},
		dark: {
			backgroundColor: active ? ds.colors.focus.dark : 'transparent'
		},
		hover: {
			backgroundColor: ds.colors.neutral.light
		},
		darkHover: {
			backgroundColor: ds.colors.neutral.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledMenuItem = createStyledComponent<Pick<MenuItemProps, 'ds' | 'attributes'>, 'li'>(
		'li',
		() => styleDef
	)
	return <StyledMenuItem ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   4) Tabs
   - Typically we have <TabList> containing multiple <Tab>, 
     and <TabPanel> for content.
   - We'll just define styling primitives: TabList, Tab, TabPanel.
---------------------------------------------------------------------------- */

/**
 * TabList: a container for tabs, e.g. <div role="tablist"> or <ul>
 */
interface TabListProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function TabList({ ds, overrides, attributes }: TabListProps) {
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			gap: ds.sizes.information.space,
			borderBottom: `1px solid ${ds.colors.border.light}`,
			boxSizing: 'border-box'
		},
		dark: {
			borderBottom: `1px solid ${ds.colors.border.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledTabList = createStyledComponent<Pick<TabListProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledTabList ds={ds} role="tablist" {...(attributes || {})} />
}

/**
 * Tab: an individual tab. Usually a button or something similar.
 * We can highlight if it's active.
 */
interface TabProps {
	ds: DesignSystem
	active?: boolean
	disabled?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export function Tab({ ds, active, disabled, overrides, attributes }: TabProps) {
	const styleDef: AllStates = {
		base: {
			display: 'inline-block',
			padding: `${ds.sizes.information.space} ${ds.sizes.content.space}`,
			border: 'none',
			backgroundColor: 'transparent',
			cursor: 'pointer',
			color: ds.colors.text.light,
			borderBottom: active ? `3px solid ${ds.colors.active.light}` : '3px solid transparent'
		},
		dark: {
			color: ds.colors.text.dark,
			borderBottom: active ? `3px solid ${ds.colors.active.dark}` : '3px solid transparent'
		},
		hover: {
			backgroundColor: ds.colors.neutral.light
		},
		darkHover: {
			backgroundColor: ds.colors.neutral.dark
		},
		disabled: {
			opacity: 0.6,
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledTab = createStyledComponent<Pick<TabProps, 'ds' | 'attributes'>, 'button'>(
		'button',
		() => styleDef
	)
	return <StyledTab ds={ds} disabled={disabled} role="tab" {...(attributes || {})} />
}

/**
 * TabPanel: the content area for a tab.
 * We'll hide it if it's not active, for example.
 */
interface TabPanelProps {
	ds: DesignSystem
	active?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function TabPanel({ ds, active, overrides, attributes }: TabPanelProps) {
	const styleDef: AllStates = {
		base: {
			display: active ? 'block' : 'none',
			padding: ds.sizes.content.space
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledTabPanel = createStyledComponent<Pick<TabPanelProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledTabPanel ds={ds} role="tabpanel" {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   5) Accordion
   - Typically we have an Accordion container, 
     multiple AccordionItem, each with a header + content.
   - We'll just do two small components for demonstration:
     AccordionItem (wrapper) and AccordionHeader, AccordionContent. 
   - Real usage might manage open/close states and ARIA attributes.
---------------------------------------------------------------------------- */

/**
 * AccordionItem: a container for the item
 */
interface AccordionItemProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function AccordionItem({ ds, overrides, attributes }: AccordionItemProps) {
	const styleDef: AllStates = {
		base: {
			borderBottom: `1px solid ${ds.colors.border.light}`
		},
		dark: {
			borderBottom: `1px solid ${ds.colors.border.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledAccordionItem = createStyledComponent<
		Pick<AccordionItemProps, 'ds' | 'attributes'>,
		'div'
	>('div', () => styleDef)
	return <StyledAccordionItem ds={ds} {...(attributes || {})} />
}

/**
 * AccordionHeader: a button or div that toggles the content’s visibility.
 */
interface AccordionHeaderProps {
	ds: DesignSystem
	expanded?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export function AccordionHeader({ ds, expanded, overrides, attributes }: AccordionHeaderProps) {
	const styleDef: AllStates = {
		base: {
			width: '100%',
			display: 'flex',
			alignItems: 'center',
			padding: ds.sizes.information.space,
			backgroundColor: expanded ? ds.colors.focus.light : ds.colors.neutral.light,
			cursor: 'pointer',
			border: 'none',
			textAlign: 'left'
		},
		dark: {
			backgroundColor: expanded ? ds.colors.focus.dark : ds.colors.neutral.dark
		},
		hover: {
			backgroundColor: ds.colors.neutral.light
		},
		darkHover: {
			backgroundColor: ds.colors.neutral.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledAccordionHeader = createStyledComponent<
		Pick<AccordionHeaderProps, 'ds' | 'attributes'>,
		'button'
	>('button', () => styleDef)

	return <StyledAccordionHeader ds={ds} {...(attributes || {})} />
}

/**
 * AccordionContent: The collapsible content area
 */
interface AccordionContentProps {
	ds: DesignSystem
	expanded?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function AccordionContent({ ds, expanded, overrides, attributes }: AccordionContentProps) {
	const styleDef: AllStates = {
		base: {
			display: expanded ? 'block' : 'none',
			padding: ds.sizes.information.space,
			backgroundColor: ds.colors.bg.light
		},
		dark: {
			backgroundColor: ds.colors.bg.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledAccordionContent = createStyledComponent<
		Pick<AccordionContentProps, 'ds' | 'attributes'>,
		'div'
	>('div', () => styleDef)

	return <StyledAccordionContent ds={ds} {...(attributes || {})} />
}
