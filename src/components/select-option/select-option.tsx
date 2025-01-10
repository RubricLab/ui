import type { FC, ReactNode } from 'react'
import styles from './select-option.module.css'

const SelectOption = ({
	value,
	children,
	disabled
}: {
	value: string
	children: ReactNode
	disabled?: boolean
}) => {
	return (
		<option value={value} disabled={disabled} className={styles['select-option']}>
			{children}
		</option>
	)
}

export default SelectOption
