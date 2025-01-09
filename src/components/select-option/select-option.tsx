import type { FC, ReactNode } from 'react'
import styles from './select-option.module.css'

export type SelectOptionProps = {
	value: string
	children: ReactNode
	disabled?: boolean
}

const SelectOption: FC<SelectOptionProps> = ({ value, children, disabled }) => {
	return (
		<option value={value} disabled={disabled} className={styles['select-option']}>
			{children}
		</option>
	)
}

export default SelectOption
