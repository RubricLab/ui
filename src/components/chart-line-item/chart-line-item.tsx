import styles from './chart-line-item.module.css'

export type ChartLineItemProps = {
	x: number
	y: number
	label: string
}

const ChartLineItem = ({ x, y, label }: ChartLineItemProps) => {
	return (
		<>
			{/* Data point */}
			<circle className={styles['chart-line-item__point']} cx={x} cy={100 - y} />

			{/* Label */}
			<text className={styles['chart-line-item__label']} x={x} y={100 - y} textAnchor="middle">
				{label}
			</text>
		</>
	)
}

export default ChartLineItem
