import type { HTMLAttributes } from 'react'
import styles from './loader.module.css'

export type LoaderRole = 'spinner' | 'progress' | 'dots' | 'pulse'

export interface LoaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role'> {
	/** Visual style and behavior of the loader */
	ROLE: LoaderRole
	/** Optional label text */
	label?: string
	/** Progress value between 0 and 100 (only for progress role) */
	progress?: number
}

export default function Loader({ ROLE, label, progress, className, ...props }: LoaderProps) {
	const validProgress = progress !== undefined ? Math.min(100, Math.max(0, progress)) : undefined

	return (
		<div
			className={`${styles.loader} ${styles[`loader--${ROLE}`]} ${className || ''}`}
			role={validProgress !== undefined ? 'progressbar' : 'status'}
			// aria-label={label || 'Loading'}
			// aria-valuenow={validProgress}
			// aria-valuemin={validProgress !== undefined ? 0 : undefined}
			// aria-valuemax={validProgress !== undefined ? 100 : undefined}
			{...props}
		>
			{ROLE === 'spinner' && (
				<svg viewBox="0 0 50 50" className={styles.loader__spinner} aria-hidden="true">
					<circle cx="25" cy="25" r="20" fill="none" strokeWidth="5" />
				</svg>
			)}

			{ROLE === 'progress' && (
				<div className={styles.loader__progress}>
					<div
						className={styles.loader__progress__bar}
						style={validProgress !== undefined ? { width: `${validProgress}%` } : undefined}
					/>
				</div>
			)}

			{ROLE === 'dots' && (
				<div className={styles.loader__dots}>
					<div className={styles.loader__dot} />
					<div className={styles.loader__dot} />
					<div className={styles.loader__dot} />
				</div>
			)}

			{ROLE === 'pulse' && (
				<div className={styles.loader__pulse}>
					<div className={styles.loader__pulse__ring} />
					<div className={styles.loader__pulse__ring} />
					<div className={styles.loader__pulse__ring} />
				</div>
			)}

			{label && <span className={styles.loader__label}>{label}</span>}
		</div>
	)
}
