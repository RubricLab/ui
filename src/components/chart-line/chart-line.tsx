import type { FC, ReactNode } from 'react'
import styles from './chart-line.module.css'

export type ChartLineProps = {
	maxValue: number
	children: ReactNode
}

const ChartLine: FC<ChartLineProps> = ({ maxValue, children }) => {
	return (
		<div className={styles['chart-line']}>
			<svg
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				className={styles['chart-line__svg']}
				role="img"
				aria-label="Line chart"
			>
				{/* Grid lines */}
				<g className={styles['chart-line__grid']}>
					{[0, 25, 50, 75, 100].map(y => (
						<line key={y} x1="0" y1={y} x2="100" y2={y} />
					))}
				</g>
				{children}
			</svg>
		</div>
	)
}

export default ChartLine
