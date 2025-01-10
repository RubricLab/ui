import type { FC, ReactNode } from 'react'
import styles from './chart.module.css'

export type ChartProps = {
	children: ReactNode
	width: number
	height: number
}

const Chart: FC<ChartProps> = ({ children, width = 500, height = 500 }) => {
	return (
		<div className={styles.chart}>
			<div className={styles.chart__container}>
				<svg
					viewBox={`0 0 ${width} ${height}`}
					preserveAspectRatio="none"
					className={styles.chart__svg}
					role="img"
					aria-label="Chart"
				>
					{/* Grid lines */}
					<g className={styles.chart__grid}>
						{[0, 25, 50, 75, 100].map(y => (
							<line key={y} x1="0" y1={y} x2={width} y2={y} />
						))}
					</g>
					{children}
				</svg>
			</div>
		</div>
	)
}

export default Chart
