import type { HTMLAttributes, ReactNode } from 'react'
import styles from './card.module.css'

export type CardRole = 'brand' | 'information' | 'success' | 'destructive' | 'warning'

type BaseHTMLProps = Omit<HTMLAttributes<HTMLElement>, 'role' | 'title'>

export interface CardProps extends BaseHTMLProps {
	/** Visual hierarchy and purpose of the card */
	ROLE: CardRole
	/** Card header text or component */
	title?: ReactNode
	/** Card content */
	children: ReactNode
	/** Optional icon to display in the header */
	icon?: ReactNode
}

export default function Card({ ROLE, title, children, icon, className, ...props }: CardProps) {
	return (
		<article className={`${styles.card} ${className || ''}`} data-role={ROLE} {...props}>
			<div className={styles.card__content}>
				{(title || icon) && (
					<header className={styles.card__header}>
						{icon && (
							<div className={styles.card__icon} aria-hidden="true">
								{icon}
							</div>
						)}
						{title && <h2 className={styles.card__title}>{title}</h2>}
					</header>
				)}
				<div className={styles.card__body}>{children}</div>
			</div>
		</article>
	)
}
