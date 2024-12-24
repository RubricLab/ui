// nav-primitives.tsx

import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ----------------------------------------------------------------------------
   1) Nav
   - A generic <nav> container with DS-based styling.
----------------------------------------------------------------------------- */
interface NavProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Nav({ ds, overrides, attributes }: NavProps) {
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			alignItems: 'center',
			gap: ds.sizes.content.space,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			padding: ds.sizes.content.space,
			boxSizing: 'border-box'
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledNav = createStyledComponent<Pick<NavProps, 'ds' | 'attributes'>, 'nav'>(
		'nav',
		() => styleDef
	)
	return <StyledNav ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   2) Breadcrumb
   - Typically a <nav> + an <ol> or <ul> listing the path.
   - We'll define a single "Breadcrumb" container that wraps both <nav> and <ol>.
   - For real usage, you might define a separate "BreadcrumbItem" or just <li>.
----------------------------------------------------------------------------- */
interface BreadcrumbProps {
	ds: DesignSystem
	items: { text: string; href?: string }[]
	separator?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Breadcrumb({ ds, items, separator = '/', overrides, attributes }: BreadcrumbProps) {
	// We'll style the container <nav> and the <ol> inside it.
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			alignItems: 'center',
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif',
			fontSize: ds.sizes.content.text,
			color: ds.colors.text.light,
			gap: ds.sizes.information.space
		},
		dark: {
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledBreadcrumb = createStyledComponent<Pick<BreadcrumbProps, 'ds' | 'attributes'>, 'nav'>(
		'nav',
		() => styleDef
	)

	return (
		<StyledBreadcrumb ds={ds} aria-label="breadcrumb" {...(attributes || {})}>
			<ol style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
				{items.map((item, i) => {
					const isLast = i === items.length - 1
					return (
						<li key={i} style={{ display: 'flex', alignItems: 'center' }}>
							{item.href ? (
								<a href={item.href} style={{ color: ds.colors.active.light, textDecoration: 'none' }}>
									{item.text}
								</a>
							) : (
								<span>{item.text}</span>
							)}
							{!isLast && <span style={{ margin: `0 ${ds.sizes.information.space}` }}>{separator}</span>}
						</li>
					)
				})}
			</ol>
		</StyledBreadcrumb>
	)
}

/* ----------------------------------------------------------------------------
   3) Pagination
   - Typically a list of page numbers, next/prev links, etc. 
   - We'll do a simplified version that just displays numbered pages.
----------------------------------------------------------------------------- */
interface PaginationProps {
	ds: DesignSystem
	currentPage: number
	totalPages: number
	onPageChange?: (page: number) => void
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Pagination({
	ds,
	currentPage,
	totalPages,
	onPageChange,
	overrides,
	attributes
}: PaginationProps) {
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			alignItems: 'center',
			gap: ds.sizes.content.space,
			fontFamily: ds.fonts.body ? 'body' : 'sans-serif'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledPagination = createStyledComponent<Pick<PaginationProps, 'ds' | 'attributes'>, 'nav'>(
		'nav',
		() => styleDef
	)

	const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

	return (
		<StyledPagination ds={ds} aria-label="pagination" {...(attributes || {})}>
			<ul
				style={{
					display: 'flex',
					listStyle: 'none',
					margin: 0,
					padding: 0,
					gap: ds.sizes.information.space
				}}
			>
				{pages.map(page => (
					<li key={page}>
						<button
							type="button"
							style={{
								backgroundColor: page === currentPage ? ds.colors.active.light : 'transparent',
								color: page === currentPage ? ds.colors.bg.light : ds.colors.text.light,
								border: 'none',
								borderRadius: ds.sizes.information.rounding,
								padding: ds.sizes.information.space,
								cursor: 'pointer'
							}}
							onClick={() => onPageChange?.(page)}
						>
							{page}
						</button>
					</li>
				))}
			</ul>
		</StyledPagination>
	)
}

/* ----------------------------------------------------------------------------
   4) Sidebar
   - Typically a vertical navigation. We'll do a <aside> for semantics.
----------------------------------------------------------------------------- */
interface SidebarProps {
	ds: DesignSystem
	width?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Sidebar({ ds, width = '250px', overrides, attributes }: SidebarProps) {
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			flexDirection: 'column',
			width,
			boxSizing: 'border-box',
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			padding: ds.sizes.content.space,
			gap: ds.sizes.information.space
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSidebar = createStyledComponent<Pick<SidebarProps, 'ds' | 'attributes'>, 'aside'>(
		'aside',
		() => styleDef
	)

	return <StyledSidebar ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   5) Header
   - A top-level <header> for your site or app. 
   - Typically we might fix it at the top, but let's keep it simple.
----------------------------------------------------------------------------- */
interface HeaderProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Header({ ds, overrides, attributes }: HeaderProps) {
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			alignItems: 'center',
			padding: ds.sizes.content.space,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			boxSizing: 'border-box',
			boxShadow: `0 2px 4px ${ds.colors.shadow.light}`
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 4px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledHeader = createStyledComponent<Pick<HeaderProps, 'ds' | 'attributes'>, 'header'>(
		'header',
		() => styleDef
	)

	return <StyledHeader ds={ds} {...(attributes || {})} />
}

/* ----------------------------------------------------------------------------
   6) Footer
   - A bottom-level <footer>. Could be styled similarly to Header.
----------------------------------------------------------------------------- */
interface FooterProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLElement>
}

export function Footer({ ds, overrides, attributes }: FooterProps) {
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			alignItems: 'center',
			padding: ds.sizes.content.space,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			boxSizing: 'border-box',
			borderTop: `1px solid ${ds.colors.border.light}`
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			borderTop: `1px solid ${ds.colors.border.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledFooter = createStyledComponent<Pick<FooterProps, 'ds' | 'attributes'>, 'footer'>(
		'footer',
		() => styleDef
	)

	return <StyledFooter ds={ds} {...(attributes || {})} />
}
