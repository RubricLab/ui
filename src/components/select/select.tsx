import type { ChangeEvent, FC, ReactNode } from 'react'
import styles from './select.module.css'

export type SelectProps = {
	value: string
	onChange: (value: string) => void
	children: ReactNode
	label?: string
	placeholder?: string
}

const Select: FC<SelectProps> = ({ value, onChange, children, label, placeholder }) => {
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value)
	}

	const id = label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined

	return (
		<div className={styles.select}>
			{label && (
				<label htmlFor={id} className={styles.select__label}>
					{label}
				</label>
			)}
			<select id={id} value={value} onChange={handleChange} className={styles.select__field}>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{children}
			</select>
			<svg viewBox="0 0 24 24" className={styles.select__icon} aria-hidden="true">
				<path d="M7 10l5 5 5-5z" />
			</svg>
		</div>
	)
}

export default Select
