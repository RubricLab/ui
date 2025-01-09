import type { FC } from 'react'
import styles from './chart-bar.module.css'

export type ChartBarProps = {
	value: number
	maxValue: number
	label: string
}

const ChartBar: FC<ChartBarProps> = ({ value, maxValue, label }) => {
	const percentage = Math.min(Math.max((value / maxValue) * 100, 0), 100)

	return (
		<div className={styles['chart-bar']}>
			<div className={styles['chart-bar__label']}>{label}</div>
			<div className={styles['chart-bar__container']}>
				<div
					className={styles['chart-bar__fill']}
					style={{ ['--bar-value' as string]: `${percentage}%` }}
				/>
				<div className={styles['chart-bar__value']}>{value}</div>
			</div>
		</div>
	)
}

export default ChartBar
