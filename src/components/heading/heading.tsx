import type { FC, ReactNode } from 'react'
import styles from './heading.module.css'

export type HeadingProps = {
	role: 'page' | 'section' | 'subsection' | 'minor'
	children: ReactNode
}

const Heading: FC<HeadingProps> = ({ role, children }) => {
	// Map roles to semantic HTML heading levels
	const Tag = {
		page: 'h1',
		section: 'h2',
		subsection: 'h3',
		minor: 'h4'
	}[role] as keyof JSX.IntrinsicElements

	return (
		<Tag className={styles.heading} data-role={role}>
			{children}
		</Tag>
	)
}

export default Heading
