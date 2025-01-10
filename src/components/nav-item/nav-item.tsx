import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './nav-item.module.css'

export interface NavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'role'> {
	/** Link destination */
	href: string
	/** Navigation item content */
	children: ReactNode
	/** Whether this item represents the current page */
	current?: boolean
}

export default function NavItem({
	href,
	children,
	current = false,
	className,
	...props
}: NavItemProps) {
	return (
		<a
			href={href}
			className={`${styles['nav-item']} ${className || ''}`}
			aria-current={current ? 'page' : undefined}
			{...props}
		>
			{children}
		</a>
	)
}
