import type { FC, ReactNode } from 'react'
import styles from './timeline.module.css'

export type TimelineProps = {
	children: ReactNode
}

const Timeline: FC<TimelineProps> = ({ children }) => {
	return <div className={styles.timeline}>{children}</div>
}

export default Timeline
