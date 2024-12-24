// form-primitives.tsx

import type { DesignSystem } from '../../types'
import { type AllStates, createStyledComponent } from '../utils'

/* ------------------------------------------------------------------
   1) Input
   - Handles text/number/email/password, etc.
   - "type" is required to ensure correctness.
------------------------------------------------------------------ */
interface InputProps {
	ds: DesignSystem
	type: React.InputHTMLAttributes<HTMLInputElement>['type'] // 'text' | 'email' | etc.
	overrides?: Partial<AllStates>
	attributes?: React.InputHTMLAttributes<HTMLInputElement>
}

export function Input({ ds, type, overrides, attributes }: InputProps) {
	// We'll define a typical "input" styling referencing ds for colors, spacing, etc.
	const styleDef: AllStates = {
		base: {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontFamily: 'body',
			fontSize: ds.sizes.content.text,
			border: `1px solid ${ds.colors.border.light}`,
			borderRadius: ds.sizes.content.rounding,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			border: `1px solid ${ds.colors.border.dark}`
		},
		focus: {
			outline: 'none',
			borderColor: ds.colors.active.light,
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			borderColor: ds.colors.active.dark,
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		disabled: {
			backgroundColor: ds.colors.disabled.light,
			cursor: 'not-allowed'
		},
		darkDisabled: {
			backgroundColor: ds.colors.disabled.dark,
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledInput = createStyledComponent<Pick<InputProps, 'ds' | 'attributes'>, 'input'>(
		'input',
		() => styleDef
	)

	return <StyledInput ds={ds} type={type} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   2) Textarea
   - A multi-line text input
------------------------------------------------------------------ */
interface TextareaProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.TextareaHTMLAttributes<HTMLTextAreaElement>
}

export function Textarea({ ds, overrides, attributes }: TextareaProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontFamily: 'body',
			fontSize: ds.sizes.content.text,
			border: `1px solid ${ds.colors.border.light}`,
			borderRadius: ds.sizes.content.rounding,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			minHeight: '100px',
			resize: 'vertical'
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			border: `1px solid ${ds.colors.border.dark}`
		},
		focus: {
			outline: 'none',
			borderColor: ds.colors.active.light,
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			borderColor: ds.colors.active.dark,
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		disabled: {
			backgroundColor: ds.colors.disabled.light,
			cursor: 'not-allowed'
		},
		darkDisabled: {
			backgroundColor: ds.colors.disabled.dark,
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledTextarea = createStyledComponent<Pick<TextareaProps, 'ds' | 'attributes'>, 'textarea'>(
		'textarea',
		() => styleDef
	)

	return <StyledTextarea ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   3) Select
   - A dropdown select
------------------------------------------------------------------ */
interface SelectProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.SelectHTMLAttributes<HTMLSelectElement>
}

export function Select({ ds, overrides, attributes }: SelectProps) {
	const styleDef: AllStates = {
		base: {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontFamily: 'body',
			fontSize: ds.sizes.content.text,
			borderRadius: ds.sizes.content.rounding,
			border: `1px solid ${ds.colors.border.light}`,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			cursor: 'pointer',
			appearance: 'none',
			transition: 'all 0.2s ease'
			// Possibly add background-image for a chevron icon, etc.
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			border: `1px solid ${ds.colors.border.dark}`
		},
		hover: {
			borderColor: ds.colors.active.light,
			backgroundColor: ds.colors.neutral.light
		},
		darkHover: {
			borderColor: ds.colors.active.dark,
			backgroundColor: ds.colors.neutral.dark
		},
		active: {
			borderColor: ds.colors.active.light
		},
		darkActive: {
			borderColor: ds.colors.active.dark
		},
		focus: {
			outline: 'none',
			borderColor: ds.colors.active.light,
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			borderColor: ds.colors.active.dark,
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		disabled: {
			backgroundColor: ds.colors.disabled.light,
			color: ds.colors.text.light,
			opacity: 0.6,
			cursor: 'not-allowed'
		},
		darkDisabled: {
			backgroundColor: ds.colors.disabled.dark,
			color: ds.colors.text.dark,
			opacity: 0.6,
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSelect = createStyledComponent<Pick<SelectProps, 'ds' | 'attributes'>, 'select'>(
		'select',
		() => styleDef
	)

	return <StyledSelect ds={ds} {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   4) Checkbox
   - A basic checkbox
------------------------------------------------------------------ */
interface CheckboxProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.InputHTMLAttributes<HTMLInputElement>
}

export function Checkbox({ ds, overrides, attributes }: CheckboxProps) {
	const styleDef: AllStates = {
		base: {
			boxSizing: 'border-box',
			width: ds.sizes.information.text,
			height: ds.sizes.information.text,
			margin: 0,
			marginRight: '0.5rem',
			cursor: 'pointer',
			accentColor: ds.colors.active.light // for modern browsers that support accent-color
		},
		dark: {
			accentColor: ds.colors.active.dark
		},
		focus: {
			outline: 'none',
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		disabled: {
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	// We'll enforce type="checkbox" under the hood
	const StyledCheckbox = createStyledComponent<Pick<CheckboxProps, 'ds' | 'attributes'>, 'input'>(
		'input',
		() => styleDef
	)

	return <StyledCheckbox ds={ds} type="checkbox" {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   5) Radio
   - Similar to Checkbox but type="radio"
------------------------------------------------------------------ */
interface RadioProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.InputHTMLAttributes<HTMLInputElement>
}

export function Radio({ ds, overrides, attributes }: RadioProps) {
	const styleDef: AllStates = {
		base: {
			boxSizing: 'border-box',
			width: ds.sizes.information.text,
			height: ds.sizes.information.text,
			margin: 0,
			marginRight: '0.5rem',
			cursor: 'pointer',
			accentColor: ds.colors.active.light
		},
		dark: {
			accentColor: ds.colors.active.dark
		},
		focus: {
			outline: 'none',
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		disabled: {
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledRadio = createStyledComponent<Pick<RadioProps, 'ds' | 'attributes'>, 'input'>(
		'input',
		() => styleDef
	)

	return <StyledRadio ds={ds} type="radio" {...(attributes || {})} />
}

/* ------------------------------------------------------------------
   6) Switch
   - A fancy toggle. Under the hood, it’s often a checkbox with
     additional styling or an absolutely positioned track + thumb.
   - For demonstration, we’ll keep it simple and just do a “switch-like”
     styled checkbox. A more advanced approach might be a custom track.
------------------------------------------------------------------ */
interface SwitchProps {
	ds: DesignSystem
	checked?: boolean
	disabled?: boolean
	overrides?: Partial<AllStates>
	attributes?: React.InputHTMLAttributes<HTMLInputElement>
}

export function Switch({ ds, checked, disabled, overrides, attributes }: SwitchProps) {
	const styleDef: AllStates = {
		base: {
			boxSizing: 'border-box',
			width: '2.5rem',
			height: '1.25rem',
			margin: 0,
			cursor: 'pointer',
			accentColor: ds.colors.active.light,
			// Typically we’d hide the native checkbox and add a track + thumb,
			// but let's keep it minimal and rely on accentColor changes:
			borderRadius: '100px'
		},
		dark: {
			accentColor: ds.colors.active.dark
		},
		focus: {
			outline: 'none',
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		},
		disabled: {
			cursor: 'not-allowed'
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledSwitch = createStyledComponent<Pick<SwitchProps, 'ds' | 'attributes'>, 'input'>(
		'input',
		() => styleDef
	)

	return (
		<StyledSwitch
			ds={ds}
			type="checkbox"
			checked={checked}
			disabled={disabled}
			{...(attributes || {})}
		/>
	)
}

/* ------------------------------------------------------------------
   7) FileUpload
   - Could be just a styled <input type="file" />
   - Or a drag-and-drop zone. Let's show a "div" approach for drag area.
   - Real usage might combine <input type="file" /> with hidden styling
     plus a visible drop area. We'll keep it minimal for demonstration.
------------------------------------------------------------------ */
interface FileUploadProps {
	ds: DesignSystem
	overrides?: Partial<AllStates>
	attributes?: React.HTMLAttributes<HTMLDivElement>
	/** If you want a “drag active” state, you can define a boolean here. */
	dragActive?: boolean
}

export function FileUpload({ ds, overrides, attributes, dragActive }: FileUploadProps) {
	// We'll style a container that the user can drag files onto.
	// In real usage, you'd handle onDragOver, onDrop, etc. in attributes.
	const styleDef: AllStates = {
		base: {
			display: 'flex',
			flexDirection: 'column',
			gap: ds.sizes.content.space,
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontFamily: 'body',
			fontSize: ds.sizes.content.text,
			borderRadius: ds.sizes.content.rounding,
			border: `2px dashed ${ds.colors.border.light}`,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			cursor: 'pointer',
			transition: 'all 0.2s ease-in-out'
		},
		dark: {
			border: `2px dashed ${ds.colors.border.dark}`,
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark
		},
		hover: {
			borderColor: ds.colors.active.light,
			backgroundColor: ds.colors.focus.light
		},
		darkHover: {
			borderColor: ds.colors.active.dark,
			backgroundColor: ds.colors.focus.dark
		},
		focus: {
			outline: 'none',
			borderColor: ds.colors.active.light,
			boxShadow: `0 0 0 2px ${ds.colors.focus.light}`
		},
		darkFocus: {
			borderColor: ds.colors.active.dark,
			boxShadow: `0 0 0 2px ${ds.colors.focus.dark}`
		}
	}

	if (dragActive) {
		// If you want extra style for dragActive, you can apply it here:
		styleDef.base = {
			...styleDef.base,
			borderColor: ds.colors.active.light,
			backgroundColor: ds.colors.focus.light
		}
		styleDef.dark = {
			...styleDef.dark,
			borderColor: ds.colors.active.dark,
			backgroundColor: ds.colors.focus.dark
		}
	}

	if (overrides) {
		Object.assign(styleDef, overrides)
	}

	const StyledFileUpload = createStyledComponent<Pick<FileUploadProps, 'ds' | 'attributes'>, 'div'>(
		'div',
		() => styleDef
	)

	return <StyledFileUpload ds={ds} {...(attributes || {})} />
}
