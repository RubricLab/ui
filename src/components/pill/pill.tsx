import type { HTMLAttributes } from 'react'
import styles from './pill.module.css'

export type PillRole = 'status' | 'count' | 'label'

export interface PillProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'role' | 'children'> {
	/** The semantic role of the pill */
	ROLE: PillRole
	/** Pill content */
	children: string
}

export default function Pill({ ROLE, children, className, ...props }: PillProps) {
	// Determine appropriate ARIA role based on pill type
	const ariaRole = ROLE === 'status' ? 'status' : ROLE === 'count' ? 'meter' : 'note'

	return (
		<span
			className={`${styles.pill} ${styles[`pill--${ROLE}`]} ${className || ''}`}
			role={ariaRole}
			{...props}
		>
			{children}
		</span>
	)
}
