import React, { type CSSProperties } from 'react'
import type { DesignSystem } from './types'

type DesignSystemProp = {
	ds: DesignSystem
}

type Styles = {
	base?: CSSProperties
	dark?: CSSProperties
	focus?: CSSProperties
	darkFocus?: CSSProperties
	hover?: CSSProperties
	darkHover?: CSSProperties
	active?: CSSProperties
	darkActive?: CSSProperties
	disabled?: CSSProperties
	darkDisabled?: CSSProperties
}

function createStyledComponent<Props extends DesignSystemProp>(
	Component: keyof JSX.IntrinsicElements | React.ComponentType<Props>,
	getStyles: (ds: DesignSystem) => Styles
) {
	return function StyledComponent({ ds, ...props }: Props) {
		const id = React.useId().replace(/([^\w-])/g, '')
		const styles = getStyles(ds)

		const css = `
			#${id} {
				${Object.entries(styles.base || {})
					.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
					.join('\n')}
			}
			
			${
				styles.hover
					? `
				#${id}:hover:not(:disabled) {
					${Object.entries(styles.hover)
						.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
						.join('\n')}
				}
			`
					: ''
			}

			${
				styles.active
					? `
				#${id}:active:not(:disabled) {
					${Object.entries(styles.active)
						.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
						.join('\n')}
				}
			`
					: ''
			}
			
			${
				styles.focus
					? `
				#${id}:focus-visible {
					${Object.entries(styles.focus)
						.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
						.join('\n')}
				}
			`
					: ''
			}

			${
				styles.disabled
					? `
				#${id}:disabled {
					${Object.entries(styles.disabled)
						.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
						.join('\n')}
				}
			`
					: ''
			}
			
			@media (prefers-color-scheme: dark) {
				${
					styles.dark
						? `
					#${id} {
						${Object.entries(styles.dark)
							.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
							.join('\n')}
					}
				`
						: ''
				}
				
				${
					styles.darkHover
						? `
					#${id}:hover:not(:disabled) {
						${Object.entries(styles.darkHover)
							.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
							.join('\n')}
					}
				`
						: ''
				}

				${
					styles.darkActive
						? `
					#${id}:active:not(:disabled) {
						${Object.entries(styles.darkActive)
							.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
							.join('\n')}
					}
				`
						: ''
				}
				
				${
					styles.darkFocus
						? `
					#${id}:focus-visible {
						${Object.entries(styles.darkFocus)
							.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
							.join('\n')}
					}
				`
						: ''
				}

				${
					styles.darkDisabled
						? `
					#${id}:disabled {
						${Object.entries(styles.darkDisabled)
							.map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value};`)
							.join('\n')}
					}
				`
						: ''
				}
			}
		`

		const elementProps = { id, ...props } as Props & { id: string }

		return (
			<>
				<style>{css}</style>
				{typeof Component === 'string' ? (
					React.createElement(Component, elementProps)
				) : (
					<Component {...elementProps} />
				)}
			</>
		)
	}
}

type InputProps = DesignSystemProp & React.InputHTMLAttributes<HTMLInputElement>
type LabelProps = DesignSystemProp & React.LabelHTMLAttributes<HTMLLabelElement>
type SelectProps = DesignSystemProp & React.SelectHTMLAttributes<HTMLSelectElement>
type CheckboxProps = DesignSystemProp & React.InputHTMLAttributes<HTMLInputElement>
type ButtonProps = DesignSystemProp & React.ButtonHTMLAttributes<HTMLButtonElement>
type IconProps = DesignSystemProp & React.HTMLAttributes<HTMLSpanElement>
type HtmlProps = DesignSystemProp & React.HtmlHTMLAttributes<HTMLHtmlElement>
type BodyProps = DesignSystemProp & React.HTMLAttributes<HTMLBodyElement>
type DivProps = DesignSystemProp & React.HTMLAttributes<HTMLDivElement>
type TextareaProps = DesignSystemProp & React.TextareaHTMLAttributes<HTMLTextAreaElement>
type UploadProps = DesignSystemProp &
	React.HTMLAttributes<HTMLDivElement> & {
		active?: boolean
	}
type TextProps = DesignSystemProp &
	React.HTMLAttributes<HTMLDivElement> & {
		variant?: 'default' | 'secondary' | 'truncate'
	}
type BadgeProps = DesignSystemProp & React.HTMLAttributes<HTMLDivElement>

export const styled = {
	html: createStyledComponent<HtmlProps>('div', ds => ({
		base: {
			height: '100%',
			margin: 0,
			padding: 0,
			WebkitFontSmoothing: 'antialiased',
			MozOsxFontSmoothing: 'grayscale'
		}
	})),

	body: createStyledComponent<BodyProps>('div', ds => ({
		base: {
			height: `calc(100% - ${ds.sizes.content.space} * 2)`,
			margin: 0,
			padding: ds.sizes.content.space,
			fontFamily: 'body',
			fontSize: ds.sizes.content.text,
			lineHeight: 1.5
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark
		}
	})),

	input: createStyledComponent<InputProps>('input', ds => ({
		base: {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontSize: ds.sizes.content.text,
			fontFamily: 'body',
			borderRadius: ds.sizes.content.rounding,
			border: `1px solid ${ds.colors.border.light}`,
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
		}
	})),

	select: createStyledComponent<SelectProps>('select', ds => ({
		base: {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			paddingRight: '2rem',
			fontSize: ds.sizes.content.text,
			fontFamily: 'body',
			borderRadius: ds.sizes.content.rounding,
			border: `1px solid ${ds.colors.border.light}`,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			cursor: 'pointer',
			appearance: 'none',
			backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%231A1F36' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'right 0.5rem center',
			backgroundSize: '1rem',
			transition: 'all 0.2s ease'
		},
		hover: {
			borderColor: ds.colors.active.light,
			backgroundColor: ds.colors.neutral.light
		},
		active: {
			borderColor: ds.colors.active.light,
			backgroundColor: ds.colors.neutral.light
		},
		disabled: {
			backgroundColor: ds.colors.disabled.light,
			borderColor: ds.colors.border.light,
			color: ds.colors.text.light,
			opacity: 0.6,
			cursor: 'not-allowed'
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			border: `1px solid ${ds.colors.border.dark}`,
			backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23F6F8FA' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`
		},
		darkHover: {
			borderColor: ds.colors.active.dark,
			backgroundColor: ds.colors.neutral.dark
		},
		darkActive: {
			borderColor: ds.colors.active.dark,
			backgroundColor: ds.colors.neutral.dark
		},
		darkDisabled: {
			backgroundColor: ds.colors.disabled.dark,
			borderColor: ds.colors.border.dark,
			color: ds.colors.text.dark,
			opacity: 0.6,
			cursor: 'not-allowed'
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
	})),

	label: createStyledComponent<LabelProps>('label', ds => ({
		base: {
			display: 'block',
			marginBottom: '0.5rem',
			fontSize: ds.sizes.information.text,
			fontFamily: 'body',
			color: ds.colors.text.light
		},
		dark: {
			color: ds.colors.text.dark
		}
	})),

	checkbox: createStyledComponent<CheckboxProps>('input', ds => ({
		base: {
			marginRight: '0.5rem',
			width: ds.sizes.content.text,
			height: ds.sizes.content.text,
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
		}
	})),

	button: createStyledComponent<ButtonProps>('button', ds => ({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: '0.5rem',
			padding: ds.sizes.content.space,
			fontSize: ds.sizes.content.text,
			fontFamily: 'body',
			borderRadius: ds.sizes.content.rounding,
			border: `1px solid ${ds.colors.border.light}`,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			cursor: 'pointer',
			transition: 'all 0.2s ease-in-out'
		},
		hover: {
			backgroundColor: ds.colors.focus.light
		},
		active: {
			backgroundColor: ds.colors.active.light
		},
		disabled: {
			backgroundColor: ds.colors.disabled.light,
			cursor: 'not-allowed'
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			border: `1px solid ${ds.colors.border.dark}`
		},
		darkHover: {
			backgroundColor: ds.colors.focus.dark
		},
		darkActive: {
			backgroundColor: ds.colors.active.dark
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
	})),

	div: createStyledComponent<DivProps>('div', ds => ({
		base: {
			color: ds.colors.text.light
		},
		dark: {
			color: ds.colors.text.dark
		}
	})),

	textarea: createStyledComponent<TextareaProps>('textarea', ds => ({
		base: {
			display: 'block',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontSize: ds.sizes.content.text,
			fontFamily: 'body',
			borderRadius: ds.sizes.content.rounding,
			border: `1px solid ${ds.colors.border.light}`,
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
	})),

	icon: createStyledComponent<IconProps>('span', ds => ({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',

			width: ds.sizes.information.text,
			height: ds.sizes.information.text
		}
	})),

	text: createStyledComponent<TextProps>('div', ds => ({
		base: {
			color: ds.colors.text.light,
			fontSize: ds.sizes.content.text,
			fontFamily: 'body',
			lineHeight: 1.5,
			'[data-active] &': {
				color: 'white'
			}
		},
		dark: {
			color: ds.colors.text.dark,
			'[data-active] &': {
				color: 'white'
			}
		},
		variants: {
			secondary: {
				fontSize: '0.9em',
				opacity: 0.7
			},
			truncate: {
				overflow: 'hidden',
				textOverflow: 'ellipsis',
				whiteSpace: 'nowrap'
			}
		}
	})),

	upload: createStyledComponent<UploadProps>('div', ds => ({
		base: {
			display: 'flex',
			flexDirection: 'column',
			gap: '0.5rem',
			width: '100%',
			boxSizing: 'border-box',
			padding: ds.sizes.content.space,
			fontSize: ds.sizes.content.text,
			fontFamily: 'body',
			borderRadius: ds.sizes.content.rounding,
			border: `2px dashed ${ds.colors.border.light}`,
			backgroundColor: ds.colors.bg.light,
			color: ds.colors.text.light,
			cursor: 'pointer',
			transition: 'all 0.2s ease-in-out'
		},
		hover: {
			borderColor: ds.colors.active.light,
			backgroundColor: ds.colors.focus.light
		},
		dark: {
			backgroundColor: ds.colors.bg.dark,
			color: ds.colors.text.dark,
			border: `2px dashed ${ds.colors.border.dark}`
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
	})),

	'default-badge': createStyledComponent<BadgeProps>('div', ds => ({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			padding: `${ds.sizes.information.space} ${ds.sizes.content.space}`,
			fontSize: ds.sizes.information.text,
			borderRadius: ds.sizes.information.rounding,
			fontWeight: 'bold',
			fontFamily: 'body',
			backgroundColor: ds.colors.neutral.light,
			color: ds.colors.text.light
		},
		dark: {
			backgroundColor: ds.colors.neutral.dark,
			color: ds.colors.text.dark
		}
	})),

	'success-badge': createStyledComponent<BadgeProps>('div', ds => ({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			padding: `${ds.sizes.information.space} ${ds.sizes.content.space}`,
			fontSize: ds.sizes.information.text,
			borderRadius: ds.sizes.information.rounding,
			fontWeight: 'bold',
			fontFamily: 'body',
			backgroundColor: ds.colors.success.light,
			color: ds.colors.bg.light
		},
		dark: {
			backgroundColor: ds.colors.success.dark,
			color: ds.colors.bg.dark
		}
	})),

	'error-badge': createStyledComponent<BadgeProps>('div', ds => ({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			padding: `${ds.sizes.information.space} ${ds.sizes.content.space}`,
			fontSize: ds.sizes.information.text,
			borderRadius: ds.sizes.information.rounding,
			fontWeight: 'bold',
			fontFamily: 'body',
			backgroundColor: ds.colors.error.light,
			color: ds.colors.bg.light
		},
		dark: {
			backgroundColor: ds.colors.error.dark,
			color: ds.colors.bg.dark
		}
	})),

	'warning-badge': createStyledComponent<BadgeProps>('div', ds => ({
		base: {
			display: 'inline-flex',
			alignItems: 'center',
			gap: ds.sizes.information.space,
			padding: `${ds.sizes.information.space} ${ds.sizes.content.space}`,
			fontSize: ds.sizes.information.text,
			borderRadius: ds.sizes.information.rounding,
			fontWeight: 'bold',
			fontFamily: 'body',
			backgroundColor: ds.colors.warning.light,
			color: ds.colors.bg.light
		},
		dark: {
			backgroundColor: ds.colors.warning.dark,
			color: ds.colors.bg.dark
		}
	}))
}
