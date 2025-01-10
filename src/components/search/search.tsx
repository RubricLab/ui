import type { ChangeEvent, InputHTMLAttributes } from 'react'
import styles from './search.module.css'

export type SearchRole = 'nav' | 'page' | 'filter'
export type SearchValidation = 'success' | 'error'

export interface SearchProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'role'> {
	/** The semantic role of the search */
	ROLE: SearchRole
	/** Current value */
	value: string
	/** Change handler */
	onChange: (value: string) => void
	/** Placeholder text */
	placeholder?: string
	/** Label for screen readers */
	label?: string
	/** Validation state */
	validation?: SearchValidation
	/** Validation message */
	validationMessage?: string
}

export default function Search({
	ROLE,
	value,
	onChange,
	placeholder = 'Search...',
	label = 'Search',
	className,
	id: providedId,
	disabled,
	validation,
	validationMessage,
	...props
}: SearchProps) {
	// Generate stable ID for accessibility
	const id = providedId || `search-${ROLE}`
	const validationId = `${id}-validation`

	// Handle change events
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	return (
		<div
			className={`${styles.search} ${styles[`search--${ROLE}`]} ${validation ? styles[`search--${validation}`] : ''} ${className || ''}`}
			data-validation={validation}
		>
			<label htmlFor={id} className={styles.search__label}>
				{label}
			</label>
			<div className={styles.search__wrapper}>
				<input
					type="search"
					id={id}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					disabled={disabled}
					className={styles.search__input}
					aria-invalid={validation === 'error'}
					aria-describedby={validationMessage ? validationId : undefined}
					{...props}
				/>
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					className={styles.search__icon}
					aria-hidden="true"
					focusable="false"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04z"
						fill="currentColor"
					/>
				</svg>
			</div>
			{validationMessage && (
				<span id={validationId} className={styles.search__validation}>
					{validationMessage}
				</span>
			)}
		</div>
	)
}
