import type { HTMLAttributes, ReactNode } from 'react'
import styles from './section.module.css'

export interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
	title?: ReactNode
	description?: ReactNode
	children: ReactNode
}

export default function Section({ title, description, children, className }: SectionProps) {
	return (
		<section className={`${styles.section} ${className || ''}`}>
			{(title || description) && (
				<header className={styles.section__header}>
					{title && <h2 className={styles.section__title}>{title}</h2>}
					{description && <div className={styles.section__description}>{description}</div>}
				</header>
			)}
			<div className={styles.section__content}>{children}</div>
		</section>
	)
}
