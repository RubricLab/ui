import styles from './chart-line-item.module.css'

export type ChartLineItemProps = {
	x: number
	y: number
	maxValue: number
	label: string
}

const ChartLineItem = ({ x, y, maxValue, label }: ChartLineItemProps) => {
	// Convert to SVG coordinates
	const svgX = x * 100
	const svgY = 100 - (y / maxValue) * 100

	return (
		<>
			{/* Data point */}
			<circle className={styles['chart-line-item__point']} cx={svgX} cy={svgY} />

			{/* Label */}
			<text className={styles['chart-line-item__label']} x={svgX} y="105" textAnchor="middle">
				{label}
			</text>
		</>
	)
}

export default ChartLineItem
