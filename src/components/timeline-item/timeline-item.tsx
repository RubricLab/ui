import type { FC } from 'react'
import styles from './timeline-item.module.css'

export type TimelineItemProps = {
	step: number
	title: string
	children: string
}

const TimelineItem: FC<TimelineItemProps> = ({ step, title, children }) => {
	return (
		<div className={styles['timeline-item']}>
			<div className={styles['timeline-item__marker']}>
				<span className={styles['timeline-item__step']}>{step}</span>
			</div>
			<div className={styles['timeline-item__content']}>
				<h3 className={styles['timeline-item__title']}>{title}</h3>
				<div className={styles['timeline-item__body']}>{children}</div>
			</div>
		</div>
	)
}

export default TimelineItem
