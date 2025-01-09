import type { FC, ReactNode } from 'react'
import styles from './tag.module.css'

export type TagProps = {
	role: 'filter' | 'selection' | 'category'
	children: ReactNode
	onRemove: () => void
}

const Tag: FC<TagProps> = ({ role, children, onRemove }) => {
	return (
		<span className={styles.tag} data-role={role}>
			<span className={styles.tag__content}>{children}</span>
			<button type="button" className={styles.tag__remove} onClick={onRemove} aria-label="Remove">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
				</svg>
			</button>
		</span>
	)
}

export default Tag
