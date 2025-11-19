import { gapClasses, heightClasses, widthClasses } from '../styles/classes'
import type { GridProps } from '../types'
import { cn } from '../utils'

export const Grid: React.FC<GridProps> = ({
	children,
	rows = 1,
	columns = 1,
	gap = 'none',
	height = 'fit',
	width = 'full',
	className
}) => {
	return (
		<div
			className={cn('grid', gapClasses[gap], heightClasses[height], widthClasses[width], className)}
			style={{
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gridTemplateRows: `repeat(${rows}, 1fr)`
			}}
		>
			{children}
		</div>
	)
}
