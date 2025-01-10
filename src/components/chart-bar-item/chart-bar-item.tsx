import type { FC } from 'react'
import styles from './chart-bar-item.module.css'

export type ChartBarItemProps = {
	value: number
	maxValue: number
	label: string
	index: number
	gap?: number
	totalBars: number
}

const ChartBarItem: FC<ChartBarItemProps> = ({ value, maxValue, label, index, totalBars }) => {
	const height = Math.min(Math.max((value / maxValue) * 100, 0), 100)
	const width = 100 / totalBars
	const gap = width / 2
	const x = index * (width + gap) + gap
	const y = 100 - height

	return (
		<g className={styles['chart-bar-item']}>
			<rect className={styles['chart-bar-item__fill']} x={x} y={y} width={width} height={height} />
			<text
				className={styles['chart-bar-item__label']}
				x={x + width / 2}
				y={100 + gap}
				textAnchor="middle"
			>
				{label}
			</text>
		</g>
	)
}

export default ChartBarItem
