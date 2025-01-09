import type { ReactNode } from 'react'
import styles from './card.module.css'

export type CardProps = {
	role: 'info' | 'success' | 'warning' | 'danger' | 'feature'
	title?: ReactNode
	children: ReactNode
	icon?: ReactNode
}

export default function Card({ role, title, children, icon }: CardProps) {
	return (
		<div className={styles.card} data-role={role}>
			<div className={styles.card__content}>
				{(title || icon) && (
					<header className={styles.card__header}>
						{icon && <div className={styles.card__icon}>{icon}</div>}
						{title && <h3 className={styles.card__title}>{title}</h3>}
					</header>
				)}
				<div className={styles.card__body}>{children}</div>
			</div>
		</div>
	)
}
