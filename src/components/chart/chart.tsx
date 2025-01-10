import type { ReactNode } from 'react'
import styles from './chart.module.css'

export type ChartProps = {
	children: ReactNode
	width?: number
	height?: number
}

const Chart = ({ children, width = 500, height = 500 }: ChartProps) => {
	return (
		<div className={styles.chart} style={{ width, height }}>
			<svg
				viewBox={'0 0 100 100'}
				preserveAspectRatio="none"
				className={styles.chart__svg}
				role="img"
				aria-label="Chart"
			>
				{/* Grid lines */}
				<g className={styles.chart__grid}>
					{[0, 25, 50, 75, 100].map(y => (
						<line key={y} x1="0" y1={y} x2="100" y2={y} />
					))}
				</g>
				{children}
			</svg>
		</div>
	)
}

export default Chart
