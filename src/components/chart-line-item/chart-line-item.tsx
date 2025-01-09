import type { FC } from 'react'
import styles from './chart-line-item.module.css'

export type ChartLineItemProps = {
	value: number
	maxValue: number
	index: number
	total: number
	label: string
}

const ChartLineItem: FC<ChartLineItemProps> = ({ value, maxValue, index, total, label }) => {
	const x = (index / (total - 1)) * 100
	const y = 100 - (value / maxValue) * 100

	return (
		<>
			{/* Line segment */}
			{index > 0 && (
				<line
					className={styles['chart-line-item__line']}
					x1={((index - 1) / (total - 1)) * 100}
					y1={100 - (value / maxValue) * 100}
					x2={x}
					y2={y}
				/>
			)}

			{/* Data point */}
			<circle className={styles['chart-line-item__point']} cx={x} cy={y} r="1.5" />

			{/* Label */}
			<text className={styles['chart-line-item__label']} x={x} y="105" textAnchor="middle">
				{label}
			</text>
		</>
	)
}

export default ChartLineItem
