import styles from './timeline-item.module.css'

const TimelineItem = ({
	step,
	title,
	children
}: {
	step: number
	title: string
	children: string
}) => {
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
