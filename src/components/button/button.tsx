import type { ButtonHTMLAttributes } from 'react'
import styles from './button.module.css'

export type ButtonRole = 'brand' | 'information' | 'success' | 'destructive' | 'warning'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'role'> {
	/** The semantic role of the button */
	ROLE: ButtonRole
}

export default function Button({
	ROLE,
	children,
	className,
	type = 'button',
	disabled,
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	...props
}: ButtonProps) {
	return (
		<button
			className={`${styles.button} ${styles[`button--${ROLE}`]} ${className || ''}`}
			type={type}
			disabled={disabled}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
			{...props}
		>
			{children}
		</button>
	)
}
