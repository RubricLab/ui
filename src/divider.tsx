'use client'

import type { DividerProps } from './types'

export const Divider: React.FC<DividerProps> = ({ direction }) => {
	if (direction === 'horizontal') return <hr className="w-full border-t" />

	return <div className="h-full border-l" />
}
