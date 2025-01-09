import type { ReactNode } from 'react'
import styles from './button.module.css'

export type ButtonProps = {
	role: 'primary' | 'secondary' | 'success' | 'danger'
	children: ReactNode
	onClick: () => void
}

export default function Button({ role, children, onClick }: ButtonProps) {
	return (
		<button type="button" onClick={onClick} className={styles[`button--${role}`]}>
			{children}
		</button>
	)
}
