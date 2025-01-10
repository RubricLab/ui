import type { HTMLAttributes, ReactNode } from 'react'
import styles from './page.module.css'

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
	/** Optional navigation component */
	nav?: ReactNode
	/** Main content */
	children: ReactNode
	/** Optional footer component */
	footer?: ReactNode
}

export default function Page({ nav, children, footer, className, ...props }: PageProps) {
	return (
		<div className={`${styles.page} ${className || ''}`} {...props}>
			{nav && <header className={styles.page__header}>{nav}</header>}
			<main className={styles.page__main}>{children}</main>
			{footer && <footer className={styles.page__footer}>{footer}</footer>}
		</div>
	)
}
