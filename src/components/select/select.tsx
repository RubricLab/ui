import type { ChangeEvent, SelectHTMLAttributes } from 'react'
import styles from './select.module.css'

export type SelectState = 'default' | 'error' | 'success'

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
	/** Selected value */
	value: string
	/** Change handler */
	onChange: (value: string) => void
	/** Select label */
	label?: string
	/** Placeholder text */
	placeholder?: string
	/** Validation state */
	state?: SelectState
	/** Error message */
	error?: string
	/** Success message */
	success?: string
	/** Whether the field is required */
	required?: boolean
}

export default function Select({
	value,
	onChange,
	label,
	placeholder,
	state = 'default',
	error,
	success,
	className,
	id: providedId,
	'aria-describedby': describedBy,
	children,
	disabled,
	required,
	...props
}: SelectProps) {
	// Generate stable IDs for accessibility
	const id =
		providedId || (label ? `select-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined)
	const errorId = error ? `${id}-error` : undefined
	const successId = success ? `${id}-success` : undefined
	const ariaDescribedBy = [describedBy, errorId, successId].filter(Boolean).join(' ') || undefined

	// Handle change events
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value)
	}

	// Determine validation state class
	const stateClass = state !== 'default' ? ` ${styles[`select--${state}`]}` : ''

	return (
		<div className={`${styles.select}${stateClass} ${className || ''}`} data-state={state}>
			{label && (
				<label htmlFor={id} className={styles.select__label}>
					{label}
					{required && <span className={styles.select__required}> *</span>}
				</label>
			)}
			<div className={styles.select__wrapper}>
				<select
					id={id}
					value={value}
					onChange={handleChange}
					aria-invalid={state === 'error'}
					aria-describedby={ariaDescribedBy}
					aria-required={required}
					disabled={disabled}
					className={styles.select__field}
					{...props}
				>
					{placeholder && (
						<option value="" disabled>
							{placeholder}
						</option>
					)}
					{children}
				</select>
				<svg
					viewBox="0 0 24 24"
					className={styles.select__icon}
					aria-hidden="true"
					focusable="false"
					width="16"
					height="16"
				>
					<path d="M7 10l5 5 5-5z" fill="currentColor" />
				</svg>
			</div>
			{error && (
				<div id={errorId} className={styles.select__error} role="alert">
					{error}
				</div>
			)}
			{success && (
				<div id={successId} className={styles.select__success}>
					{success}
				</div>
			)}
		</div>
	)
}
