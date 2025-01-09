import type { FC, ReactNode } from 'react'
import styles from './pill.module.css'

export type PillProps = {
	role: 'status' | 'count' | 'label'
	children: ReactNode
}

const Pill: FC<PillProps> = ({ role, children }) => {
	return (
		<span className={styles.pill} data-role={role}>
			{children}
		</span>
	)
}

export default Pill
