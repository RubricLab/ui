import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import styles from './dropdown.module.css'

export type DropdownProps = {
	role: 'menu' | 'filter' | 'details'
	label: ReactNode
	children: ReactNode
}

const Dropdown: FC<DropdownProps> = ({ role, label, children }) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className={styles.dropdown} data-role={role}>
			<button
				type="button"
				className={styles.dropdown__trigger}
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
			>
				<span className={styles.dropdown__label}>{label}</span>
				<svg
					viewBox="0 0 24 24"
					className={styles.dropdown__icon}
					aria-hidden="true"
					data-open={isOpen}
				>
					<path d="M7 10l5 5 5-5z" />
				</svg>
			</button>
			{isOpen && <div className={styles.dropdown__content}>{children}</div>}
		</div>
	)
}

export default Dropdown
