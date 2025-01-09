import type { ReactNode } from 'react'
import styles from './button.module.css'

export type ButtonProps = {
	ROLE: 'primary' | 'secondary' | 'success' | 'danger'
	children: ReactNode
	onClick: () => void
}

export default function Button({ ROLE, children, onClick }: ButtonProps) {
	return (
		<button
			className={`${styles.button} ${styles[`button--${ROLE}`]}`}
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	)
}
