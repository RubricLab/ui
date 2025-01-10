import type { HTMLAttributes, ReactNode } from 'react'
import styles from './heading.module.css'

export type HeadingRole = 'page' | 'section' | 'subsection' | 'minor'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

const roleToTag: Record<HeadingRole, HeadingTag> = {
	page: 'h1',
	section: 'h2',
	subsection: 'h3',
	minor: 'h4'
}

export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, 'role'> {
	/** Semantic role determining size and importance */
	ROLE: HeadingRole
	/** Heading content */
	children: ReactNode
}

export default function Heading({ ROLE, children, className, ...props }: HeadingProps) {
	const Tag = roleToTag[ROLE]

	return (
		<Tag className={`${styles.heading} ${className || ''}`} data-role={ROLE} {...props}>
			{children}
		</Tag>
	)
}
