'use client'

import type { GridProps } from '@/types'
import { cn } from '@/utils'
import { gapClasses, heightClasses, widthClasses } from './classes'

export const Grid: React.FC<GridProps> = ({
	children,
	rows = 1,
	columns = 1,
	gap = 'none',
	height = 'fit',
	width = 'full'
}) => {
	return (
		<div
			className={cn('grid', gapClasses[gap], heightClasses[height], widthClasses[width])}
			style={{
				gridTemplateRows: `repeat(${rows}, 1fr)`,
				gridTemplateColumns: `repeat(${columns}, 1fr)`
			}}
		>
			{children}
		</div>
	)
}
