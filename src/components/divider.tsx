import type { DividerProps } from '../types'
import { cn } from '../utils'

export const Divider: React.FC<DividerProps> = ({ direction = 'horizontal', className }) => {
	if (direction === 'horizontal') return <hr className={cn('w-full border-t', className)} />
	return <div className={cn('h-full border-l', className)} />
}
