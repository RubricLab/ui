// utility-primitives.tsx

import { createPortal } from 'react-dom'
import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* -------------------------------------------------------------------------
   1) Portal
   - Renders children into a DOM node outside the parent component hierarchy.
   - Typically, you'd pass a container (e.g. document.body).
   - This does not use the design system for styling, it’s purely a structural helper.
-------------------------------------------------------------------------- */
interface PortalProps {
	ds: DesignSystem
	/** Where to portal (defaults to document.body if not specified). */
	container?: Element
	/** The content to portal. */
	children?: React.ReactNode
}

/**
 * Portal: purely structural, so we typically don’t do AllStates styling.
 * We’ll keep it minimal.
 */
export function Portal({ ds, container, children }: PortalProps) {
	return createPortal(children, container || document.body)
}

/* -------------------------------------------------------------------------
   2) VisuallyHidden
   - Hides content visually but keeps it accessible to screen readers.
   - We previously had an example in an earlier snippet, but let's finalize here.
-------------------------------------------------------------------------- */
interface VisuallyHiddenProps {
	ds: DesignSystem
	children: React.ReactNode
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLSpanElement>
}

export function VisuallyHidden({ ds, children, overrides, attributes }: VisuallyHiddenProps) {
	const styleDef: AllStates = {
		base: {
			position: 'absolute',
			width: '1px',
			height: '1px',
			padding: 0,
			margin: '-1px',
			overflow: 'hidden',
			clip: 'rect(0, 0, 0, 0)',
			whiteSpace: 'nowrap',
			border: 0
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledVH = createStyledComponent<Pick<VisuallyHiddenProps, 'ds' | 'attributes'>, 'span'>(
		'span',
		() => styleDef
	)
	return (
		<StyledVH ds={ds} {...(attributes || {})}>
			{children}
		</StyledVH>
	)
}

/* -------------------------------------------------------------------------
   3) AspectRatio
   - Enforces a fixed ratio (e.g. 16:9) for its children. Often used for images/videos.
   - Implementation approach: a wrapper with a pseudo-element or a block with padding.
-------------------------------------------------------------------------- */
interface AspectRatioProps {
	ds: DesignSystem
	/** e.g. 16/9, 4/3, etc. */
	ratio?: number
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	children?: React.ReactNode
}

export function AspectRatio({
	ds,
	ratio = 16 / 9,
	overrides,
	attributes,
	children
}: AspectRatioProps) {
	// We'll do the classic padding-bottom approach or a position:absolute child approach:
	const styleDef: AllStates = {
		base: {
			position: 'relative',
			width: '100%',
			height: 0,
			paddingBottom: `${(1 / ratio) * 100}%`,
			overflow: 'hidden'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledAR = createStyledComponent<Pick<AspectRatioProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	// The content will be absolutely positioned inside:
	const innerStyle: React.CSSProperties = {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}

	return (
		<StyledAR ds={ds} {...(attributes || {})}>
			<div style={innerStyle}>{children}</div>
		</StyledAR>
	)
}

/* -------------------------------------------------------------------------
   4) ScrollArea
   - A container that allows scrolling, potentially with a custom scrollbar.
   - Could reference DS tokens for scrollbar color, track color, etc.
-------------------------------------------------------------------------- */
interface ScrollAreaProps {
	ds: DesignSystem
	/** Height or max-height if you want a vertical scroll, etc. */
	height?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	children?: React.ReactNode
}

export function ScrollArea({
	ds,
	height = '200px',
	overrides,
	attributes,
	children
}: ScrollAreaProps) {
	const styleDef: AllStates = {
		base: {
			overflowY: 'auto',
			maxHeight: height,
			boxSizing: 'border-box'
			// Potentially styling the scrollbar:
			// scrollbarWidth, &::-webkit-scrollbar, etc.
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledScrollArea = createStyledComponent<Pick<ScrollAreaProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return (
		<StyledScrollArea ds={ds} {...(attributes || {})}>
			{children}
		</StyledScrollArea>
	)
}

/* -------------------------------------------------------------------------
   5) Resizable
   - A container that the user can drag to resize. 
   - HTML has `resizable: vertical | horizontal`, but typically we do a CSS approach:
     e.g. `resize: both; overflow: auto;`.
-------------------------------------------------------------------------- */
interface ResizableProps {
	ds: DesignSystem
	direction?: 'both' | 'horizontal' | 'vertical'
	minWidth?: string
	minHeight?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	children?: React.ReactNode
}

export function Resizable({
	ds,
	direction = 'both',
	minWidth = '100px',
	minHeight = '100px',
	overrides,
	attributes,
	children
}: ResizableProps) {
	const styleDef: AllStates = {
		base: {
			resize: direction,
			overflow: 'auto',
			minWidth,
			minHeight,
			boxSizing: 'border-box',
			backgroundColor: ds.colors.bg.light
		},
		dark: {
			backgroundColor: ds.colors.bg.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledResizable = createStyledComponent<Pick<ResizableProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return (
		<StyledResizable ds={ds} {...(attributes || {})}>
			{children}
		</StyledResizable>
	)
}

/* -------------------------------------------------------------------------
   6) Overlay (Utility Version)
   - We had an Overlay in feedback/overlays. We can define a simpler 
     or more "raw" utility version here if desired. 
     We’ll just do a quick example that’s basically the same. 
-------------------------------------------------------------------------- */
interface UtilityOverlayProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	children?: React.ReactNode
}

export function UtilityOverlay({ ds, open, overrides, attributes, children }: UtilityOverlayProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0,0,0,0.5)',
			zIndex: ds.zIndices?.modal ?? 999
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledOverlay = createStyledComponent<Pick<UtilityOverlayProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return (
		<StyledOverlay ds={ds} {...(attributes || {})}>
			{children}
		</StyledOverlay>
	)
}
