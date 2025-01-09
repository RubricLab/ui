import type { FC, ReactNode } from 'react'
import styles from './link.module.css'

export type LinkProps = {
	role: 'inline' | 'action'
	href: string
	children: ReactNode
	external?: boolean
}

const Link: FC<LinkProps> = ({ role, href, children, external }) => {
	const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

	return (
		<a href={href} className={styles[`link--${role}`]} {...props}>
			{children}
		</a>
	)
}

export default Link
