import type { ReactNode } from 'react'
import styles from './timeline.module.css'

const Timeline = ({
	children
}: {
	children: ReactNode
}) => {
	return <div className={styles.timeline}>{children}</div>
}

export default Timeline
