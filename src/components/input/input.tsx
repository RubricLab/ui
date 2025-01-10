import type { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
export type InputState = 'default' | 'error' | 'success'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	/** Input type */
	type?: InputType
	/** Input label */
	label?: string
	/** Validation state */
	state?: InputState
	/** Error message */
	error?: string
	/** Success message */
	success?: string
}

export default function Input({
	type = 'text',
	label,
	state = 'default',
	error,
	success,
	className,
	id: providedId,
	'aria-describedby': describedBy,
	...props
}: InputProps) {
	// Generate stable IDs for accessibility
	const id =
		providedId || (label ? `input-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined)
	const errorId = error ? `${id}-error` : undefined
	const successId = success ? `${id}-success` : undefined
	const ariaDescribedBy = [describedBy, errorId, successId].filter(Boolean).join(' ') || undefined

	// Determine validation state class
	const stateClass = state !== 'default' ? ` ${styles[`input--${state}`]}` : ''

	return (
		<div className={`${styles.input}${stateClass} ${className || ''}`}>
			{label && (
				<label htmlFor={id} className={styles.input__label}>
					{label}
				</label>
			)}
			<input
				id={id}
				type={type}
				aria-invalid={state === 'error'}
				aria-describedby={ariaDescribedBy}
				className={styles.input__field}
				{...props}
			/>
			{error && (
				<div id={errorId} className={styles.input__error} role="alert">
					{error}
				</div>
			)}
			{success && (
				<div id={successId} className={styles.input__success}>
					{success}
				</div>
			)}
		</div>
	)
}
