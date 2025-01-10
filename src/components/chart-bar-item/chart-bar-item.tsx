import styles from './chart-bar-item.module.css'

export type ChartBarItemProps = {
	value: number
	maxValue: number
	label: string
	index: number
	totalBars: number
}

const ChartBarItem = ({ value, maxValue, label, index, totalBars }: ChartBarItemProps) => {
	const height = Math.min(Math.max((value / maxValue) * 100, 0), 100)
	const width = (0.5 * 100) / totalBars
	const gap = width
	const x = index * (width + gap) + gap / 2
	const y = 100 - height

	return (
		<>
			<rect className={styles['chart-bar-item__fill']} x={x} y={y} width={width} height={height} />
			<text className={styles['chart-bar-item__label']} x={x + width / 2} y={110} textAnchor="middle">
				{label}
			</text>
		</>
	)
}

export default ChartBarItem
