import type { ChangeEvent, FC } from 'react'
import styles from './input.module.css'

export type InputProps = {
	value: string
	onChange: (value: string) => void
	placeholder?: string
	label?: string
	type?: 'text' | 'email' | 'password' | 'number'
}

const Input: FC<InputProps> = ({ value, onChange, placeholder, label, type = 'text' }) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value)
	}

	const id = label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined

	return (
		<div className={styles.input}>
			{label && (
				<label htmlFor={id} className={styles.input__label}>
					{label}
				</label>
			)}
			<input
				id={id}
				type={type}
				value={value}
				onChange={handleChange}
				placeholder={placeholder}
				className={styles.input__field}
			/>
		</div>
	)
}

export default Input
