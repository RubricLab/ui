import type { HTMLAttributes } from 'react'
import styles from './tag.module.css'

export type TagRole = 'filter' | 'selection' | 'category'

export interface TagProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'children'> {
	/** The semantic role of the tag */
	ROLE: TagRole
	/** Tag content */
	children: string
	/** Callback when remove button is clicked */
	onRemove?: () => void
}

export default function Tag({ ROLE, children, onRemove, className, ...props }: TagProps) {
	return (
		<span className={`${styles.tag} ${styles[`tag--${ROLE}`]} ${className || ''}`} {...props}>
			<span className={styles.tag__content}>{children}</span>
			{onRemove && (
				<button
					type="button"
					className={styles.tag__remove}
					onClick={onRemove}
					aria-label={`Remove ${children} tag`}
				>
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						aria-hidden="true"
						focusable="false"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M8 7.293l3.146-3.147.708.708L8.707 8l3.147 3.146-.708.708L8 8.707l-3.146 3.147-.708-.708L7.293 8 4.146 4.854l.708-.708L8 7.293z"
							fill="currentColor"
						/>
					</svg>
				</button>
			)}
		</span>
	)
}
