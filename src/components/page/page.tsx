import type { FC, ReactNode } from 'react'
import styles from './page.module.css'

export type PageProps = {
	nav?: ReactNode
	children: ReactNode
	footer?: ReactNode
}

const Page: FC<PageProps> = ({ nav, children, footer }) => {
	return (
		<div className={styles.page}>
			{nav && <nav className={styles.page__nav}>{nav}</nav>}
			<main className={styles.page__main}>{children}</main>
			{footer && <footer className={styles.page__footer}>{footer}</footer>}
		</div>
	)
}

export default Page
