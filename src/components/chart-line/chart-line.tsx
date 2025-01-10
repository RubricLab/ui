import type { FC } from 'react'
import styles from './chart-line.module.css'

export type Point = {
	x: number
	y: number
}

export type ChartLineProps = {
	points: Point[]
	maxValue: number
}

const ChartLine: FC<ChartLineProps> = ({ points, maxValue }) => {
	// Convert points to SVG coordinates
	const svgPoints = points.map(point => ({
		x: point.x,
		y: 100 - (point.y / maxValue) * 100
	}))

	return (
		<>
			{svgPoints.map((point, index) => {
				if (index === 0) return null
				const prevPoint = svgPoints[index - 1]
				return (
					<line
						key={index}
						className={styles['chart-line__segment']}
						x1={prevPoint?.x}
						y1={prevPoint?.y}
						x2={point.x}
						y2={point.y}
					/>
				)
			})}
		</>
	)
}

export default ChartLine
