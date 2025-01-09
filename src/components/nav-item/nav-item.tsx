import type { FC, ReactNode } from 'react'
import styles from './nav-item.module.css'

export type NavItemProps = {
	role: 'primary' | 'secondary' | 'utility'
	href: string
	children: ReactNode
	current?: boolean
}

const NavItem: FC<NavItemProps> = ({ role, href, children, current = false }) => {
	return (
		<a
			href={href}
			className={styles['nav-item']}
			data-role={role}
			aria-current={current ? 'page' : undefined}
		>
			{children}
		</a>
	)
}

export default NavItem
