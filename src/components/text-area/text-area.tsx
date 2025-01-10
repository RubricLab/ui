import type { ChangeEvent, TextareaHTMLAttributes } from 'react'
import styles from './text-area.module.css'

export type TextAreaState = 'default' | 'error' | 'success'

export interface TextAreaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
	/** Current value */
	value: string
	/** Change handler */
	onChange: (value: string) => void
	/** Input label */
	label?: string
	/** Placeholder text */
	placeholder?: string
	/** Number of visible text rows */
	rows?: number
	/** Validation state */
	state?: TextAreaState
	/** Error message */
	error?: string
	/** Success message */
	success?: string
}

export default function TextArea({
	value,
	onChange,
	label,
	placeholder,
	rows = 3,
	state = 'default',
	error,
	success,
	className,
	id: providedId,
	'aria-describedby': describedBy,
	disabled,
	...props
}: TextAreaProps) {
	// Generate stable IDs for accessibility
	const id =
		providedId || (label ? `textarea-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : undefined)
	const errorId = error ? `${id}-error` : undefined
	const successId = success ? `${id}-success` : undefined
	const ariaDescribedBy = [describedBy, errorId, successId].filter(Boolean).join(' ') || undefined

	// Handle change events
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value)
	}

	// Determine validation state class
	const stateClass = state !== 'default' ? ` ${styles[`text-area--${state}`]}` : ''

	return (
		<div className={`${styles['text-area']}${stateClass} ${className || ''}`}>
			{label && (
				<label htmlFor={id} className={styles['text-area__label']}>
					{label}
				</label>
			)}
			<textarea
				id={id}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				rows={rows}
				aria-invalid={state === 'error'}
				aria-describedby={ariaDescribedBy}
				disabled={disabled}
				className={styles['text-area__field']}
				{...props}
			/>
			{error && (
				<div id={errorId} className={styles['text-area__error']} role="alert">
					{error}
				</div>
			)}
			{success && (
				<div id={successId} className={styles['text-area__success']}>
					{success}
				</div>
			)}
		</div>
	)
}
