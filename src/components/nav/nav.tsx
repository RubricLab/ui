import type { HTMLAttributes, ReactNode } from 'react'
import styles from './nav.module.css'

export interface NavProps extends HTMLAttributes<HTMLElement> {
	/** Navigation content */
	children: ReactNode
}

export default function Nav({ children, className, ...props }: NavProps) {
	return (
		<nav className={`${styles.nav} ${className || ''}`} {...props}>
			<div className={styles.nav__content}>{children}</div>
		</nav>
	)
}
