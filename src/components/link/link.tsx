import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './link.module.css'

export type LinkRole = 'inline' | 'action'

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'role'> {
	/** Visual style and behavior of the link */
	ROLE: LinkRole
	/** Link destination */
	href: string
	/** Link content */
	children: ReactNode
	/** Whether the link opens in a new tab */
	external?: boolean
}

export default function Link({ ROLE, href, children, external, className, ...props }: LinkProps) {
	const externalProps = external
		? {
				'aria-label': `${typeof children === 'string' ? children : ''} (opens in new tab)`,
				rel: 'noopener noreferrer',
				target: '_blank'
			}
		: {}

	return (
		<a
			href={href}
			className={`${styles[`link--${ROLE}`]} ${className || ''}`}
			{...externalProps}
			{...props}
		>
			{children}
		</a>
	)
}
