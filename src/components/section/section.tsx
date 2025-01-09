import type { FC, ReactNode } from 'react'
import styles from './section.module.css'

export type SectionProps = {
	title?: ReactNode
	description?: ReactNode
	children: ReactNode
}

const Section: FC<SectionProps> = ({ title, description, children }) => {
	return (
		<section className={styles.section}>
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

export default Section
