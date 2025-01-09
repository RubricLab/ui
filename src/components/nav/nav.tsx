import type { FC, ReactNode } from 'react'
import styles from './nav.module.css'

export type NavProps = {
	children: ReactNode
}

const Nav: FC<NavProps> = ({ children }) => {
	return (
		<div className={styles.nav}>
			<div className={styles.nav__content}>{children}</div>
		</div>
	)
}

export default Nav
