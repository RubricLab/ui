import type { ChangeEvent, FC } from 'react'
import styles from './text-area.module.css'

export type TextAreaProps = {
	value: string
	onChange: (value: string) => void
	placeholder?: string
	label?: string
	rows?: number
}

const TextArea: FC<TextAreaProps> = ({ value, onChange, placeholder, label, rows = 3 }) => {
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value)
	}

	const id = label ? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined

	return (
		<div className={styles['text-area']}>
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
				className={styles['text-area__field']}
			/>
		</div>
	)
}

export default TextArea
