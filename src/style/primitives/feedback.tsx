// feedback-overlays-primitives.tsx

import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* -------------------------------------------------------------------------
   1) Alert
   - A simple inline alert for success, error, warning, info, etc.
   - We can define a "variant" prop for color usage.
--------------------------------------------------------------------------- */
interface AlertProps {
	ds: DesignSystem
	/** typical variants: success, error, warning, info, etc. */
	variant?: 'success' | 'error' | 'warning' | 'info' | 'default'
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Alert({ ds, variant = 'default', overrides, attributes }: AlertProps) {
	const colorMap = {
		success: ds.colors.success?.light,
		error: ds.colors.error?.light,
		warning: ds.colors.warning?.light,
		info: ds.colors.active?.light, // or a new color for info
		default: ds.colors.neutral?.light
	}
	const darkColorMap = {
		success: ds.colors.success?.dark,
		error: ds.colors.error?.dark,
		warning: ds.colors.warning?.dark,
		info: ds.colors.active?.dark,
		default: ds.colors.neutral?.dark
	}

	const styleDef: AllStates = {
		base: {
			display: 'flex',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			padding: ds.sizes.content.space,
			backgroundColor: colorMap[variant] ?? ds.colors.neutral.light,
			color: ds.colors.text.light,
			borderRadius: ds.sizes.information.rounding,
			boxSizing: 'border-box'
		},
		dark: {
			backgroundColor: darkColorMap[variant] ?? ds.colors.neutral.dark,
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledAlert = createStyledComponent<Pick<AlertProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledAlert ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   2) Toast
   - Typically a small popup that appears in a corner.
   - We'll add a "position" prop to control top-right, top-left, etc.
   - Real usage might manage timing, stacking, etc.
--------------------------------------------------------------------------- */
interface ToastProps {
	ds: DesignSystem
	/** top-left, top-right, bottom-left, bottom-right, etc. */
	position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Toast({
	ds,
	position = 'top-right',
	open = true,
	overrides,
	attributes
}: ToastProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'fixed',
			zIndex: ds?.zIndices?.toast ?? 9999,
			padding: ds.sizes.content.space,
			backgroundColor: ds.colors.neutral.light,
			color: ds.colors.text.light,
			boxShadow: `0 2px 6px ${ds.colors.shadow.light}`,
			borderRadius: ds.sizes.content.rounding
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 6px ${ds.colors.shadow.dark}`
		}
	}

	// Positioning
	// We'll keep it simple and just do top or bottom, left or right with a small offset.
	const offset = '1rem'
	if (position === 'top-left') {
		;(styleDef.base ?? (undefined as never)).top = offset
		;(styleDef.base ?? (undefined as never)).left = offset
	} else if (position === 'top-right') {
		;(styleDef.base ?? (undefined as never)).top = offset
		;(styleDef.base ?? (undefined as never)).right = offset
	} else if (position === 'bottom-left') {
		;(styleDef.base ?? (undefined as never)).bottom = offset
		;(styleDef.base ?? (undefined as never)).left = offset
	} else {
		// bottom-right
		;(styleDef.base ?? (undefined as never)).bottom = offset
		;(styleDef.base ?? (undefined as never)).right = offset
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledToast = createStyledComponent<Pick<ToastProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return <StyledToast ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   3) Snackbar
   - Similar to a Toast, but often appears at the bottom center
   - Possibly includes an action button. We'll just do the styling.
--------------------------------------------------------------------------- */
interface SnackbarProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Snackbar({ ds, open = true, overrides, attributes }: SnackbarProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'flex' : 'none',
			alignItems: 'center',
			justifyContent: 'space-between',
			position: 'fixed',
			left: '50%',
			bottom: '1rem',
			transform: 'translateX(-50%)',
			zIndex: ds?.zIndices?.toast ?? 9999,
			minWidth: '300px',
			maxWidth: '90%',
			padding: ds.sizes.content.space,
			backgroundColor: ds.colors.neutral.light,
			color: ds.colors.text.light,
			boxShadow: `0 2px 6px ${ds.colors.shadow.light}`,
			borderRadius: ds.sizes.content.rounding
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 6px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSnackbar = createStyledComponent<Pick<SnackbarProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return <StyledSnackbar ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   4) Banner
   - A full-width announcement or notification at top or bottom of the page.
   - We'll let user pick "top" or "bottom" if they want, or default to top.
--------------------------------------------------------------------------- */
interface BannerProps {
	ds: DesignSystem
	position?: 'top' | 'bottom'
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Banner({ ds, position = 'top', open = true, overrides, attributes }: BannerProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'flex' : 'none',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			position: 'fixed',
			left: 0,
			right: 0,
			[position]: 0, // either top=0 or bottom=0
			padding: ds.sizes.content.space,
			backgroundColor: ds.colors.active.light,
			color: ds.colors.bg.light,
			zIndex: ds?.zIndices?.modal ?? 1000,
			boxShadow: `0 2px 6px ${ds.colors.shadow.light}`
		},
		dark: {
			backgroundColor: ds.colors.active.dark,
			color: ds.colors.bg.dark,
			boxShadow: `0 2px 6px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledBanner = createStyledComponent<Pick<BannerProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return <StyledBanner ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   5) Skeleton
   - A placeholder for loading content, often with an animated shimmer.
--------------------------------------------------------------------------- */
interface SkeletonProps {
	ds: DesignSystem
	/** Could be 'text', 'circle', 'rect' or any shape. */
	shape?: 'text' | 'circle' | 'rect'
	width?: string
	height?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Skeleton({
	ds,
	shape = 'text',
	width = '100%',
	height = '1em',
	overrides,
	attributes
}: SkeletonProps) {
	// We'll define minimal styling plus a background that might animate.
	const styleDef: AllStates = {
		base: {
			display: 'block',
			backgroundColor: ds.colors.disabled.light,
			borderRadius: shape === 'circle' ? '50%' : ds.sizes.information.rounding,
			width,
			height,
			overflow: 'hidden',
			position: 'relative'
		},
		dark: {
			backgroundColor: ds.colors.disabled.dark
		}
	}

	// If you want an animation (shimmer), you can define a keyframes in a style tag,
	// or an inline approach. For brevity, let's skip the keyframes logic.

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSkeleton = createStyledComponent<Pick<SkeletonProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledSkeleton ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   6) Overlay
   - A semi-transparent backdrop that sits on top of the page 
     behind modals, drawers, etc.
--------------------------------------------------------------------------- */
interface OverlayProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Overlay({ ds, open = false, overrides, attributes }: OverlayProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'fixed',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: 'rgba(0, 0, 0, 0.5)',
			zIndex: ds?.zIndices?.modal ?? 1000
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledOverlay = createStyledComponent<Pick<OverlayProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledOverlay ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   7) Drawer
   - A side panel that slides in from left or right. 
   - We'll keep it simple and just show/hide with open + a transform.
--------------------------------------------------------------------------- */
interface DrawerProps {
	ds: DesignSystem
	open?: boolean
	side?: 'left' | 'right'
	width?: string
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Drawer({
	ds,
	open = false,
	side = 'left',
	width = '300px',
	overrides,
	attributes
}: DrawerProps) {
	const styleDef: AllStates = {
		base: {
			position: 'fixed',
			top: 0,
			bottom: 0,
			width,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			boxShadow: side === 'left' ? '2px 0 6px rgba(0,0,0,0.2)' : '-2px 0 6px rgba(0,0,0,0.2)',
			transform: open ? 'translateX(0)' : side === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
			transition: 'transform 0.3s ease',
			[side]: 0,
			zIndex: ds?.zIndices?.modal ?? 1100
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledDrawer = createStyledComponent<Pick<DrawerProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledDrawer ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   8) Modal
   - A centered overlay with a backdrop typically
   - We'll just handle the modal box styling. 
   - The user can combine it with <Overlay> if they want.
--------------------------------------------------------------------------- */
interface ModalProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
}

export function Modal({ ds, open = false, overrides, attributes }: ModalProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			boxShadow: `0 2px 8px ${ds.colors.shadow.light}`,
			borderRadius: ds.sizes.content.rounding,
			padding: ds.sizes.content.space,
			zIndex: ds?.zIndices?.modal ?? 1100
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 8px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledModal = createStyledComponent<Pick<ModalProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledModal ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   9) Dialog
   - Similar to a Modal, but might use <dialog> or have different semantics.
   - We'll treat it similarly here for styling demonstration.
--------------------------------------------------------------------------- */
interface DialogProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDialogElement>
}

export function Dialog({ ds, open = false, overrides, attributes }: DialogProps) {
	// We'll use the native <dialog> element just to illustrate.
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			boxShadow: `0 2px 8px ${ds.colors.shadow.light}`,
			borderRadius: ds.sizes.content.rounding,
			padding: ds.sizes.content.space,
			zIndex: ds?.zIndices?.modal ?? 1100
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 8px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	// We cast to 'dialog' for createElement.
	const StyledDialog = createStyledComponent<Pick<DialogProps, 'ds' | 'attributes'>, 'dialog'>(
		'dialog',
		() => styleDef
	)
	return <StyledDialog ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   10) Tooltip
   - A small bubble that appears on hover/focus. 
   - We'll just handle the styling and position. 
   - Real usage might do a Portal + position logic.
--------------------------------------------------------------------------- */
interface TooltipProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	position?: 'top' | 'bottom' | 'left' | 'right'
}

export function Tooltip({
	ds,
	open = false,
	position = 'top',
	overrides,
	attributes
}: TooltipProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'absolute',
			padding: ds.sizes.information.space,
			backgroundColor: ds.colors.neutral.light,
			color: ds.colors.text.light,
			borderRadius: ds.sizes.information.rounding,
			boxShadow: `0 2px 4px ${ds.colors.shadow.light}`,
			whiteSpace: 'nowrap',
			zIndex: ds?.zIndices?.dropdown ?? 1200
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 4px ${ds.colors.shadow.dark}`
		}
	}

	// We won't do actual positioning logic, but you might do e.g. styleDef.base!.top = ...
	// or rely on the parent to set it. The key is it’s "position: absolute" for layering.

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledTooltip = createStyledComponent<Pick<TooltipProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledTooltip ds={ds} {...(attributes || {})} />
}

/* -------------------------------------------------------------------------
   11) Popover
   - Similar to a Tooltip but typically larger or interactive. 
   - We'll do the same pattern. 
--------------------------------------------------------------------------- */
interface PopoverProps {
	ds: DesignSystem
	open?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	position?: 'top' | 'bottom' | 'left' | 'right'
}

export function Popover({
	ds,
	open = false,
	position = 'bottom',
	overrides,
	attributes
}: PopoverProps) {
	const styleDef: AllStates = {
		base: {
			display: open ? 'block' : 'none',
			position: 'absolute',
			padding: ds.sizes.content.space,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			borderRadius: ds.sizes.content.rounding,
			boxShadow: `0 2px 8px ${ds.colors.shadow.light}`,
			zIndex: ds?.zIndices?.dropdown ?? 1200
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			boxShadow: `0 2px 8px ${ds.colors.shadow.dark}`
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledPopover = createStyledComponent<Pick<PopoverProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)
	return <StyledPopover ds={ds} {...(attributes || {})} />
}
