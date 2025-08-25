import type { z } from 'zod/v4'
import type { PillProps, PillSizeEnum, PillVariantEnum } from '../types'
import { cn } from '../utils'

const pillVariants: Record<z.infer<typeof PillVariantEnum>, string> = {
	error: 'bg-red-500/10 text-red-700 dark:bg-red-500/10 dark:text-red-500',
	loading: 'bg-yellow-500/10 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-500',
	muted: 'bg-gray-500/10 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400',
	primary: 'bg-blue-500/10 text-blue-700 dark:bg-blue-500/10 dark:text-blue-500',
	secondary: 'bg-purple-500/10 text-purple-700 dark:bg-purple-500/10 dark:text-purple-500',
	success: 'bg-lime-200 dark:bg-lime-950 text-lime-700 dark:text-lime-500',
	warning: 'bg-orange-500/10 text-orange-700 dark:bg-orange-500/10 dark:text-orange-500'
}

const pillSizes: Record<z.infer<typeof PillSizeEnum>, string> = {
	lg: 'px-3 py-1 text-base gap-1.5',
	md: 'px-2.5 py-0.5 text-sm gap-1.5',
	sm: 'px-2 py-0.5 text-xs gap-1'
}

export const Pill: React.FC<PillProps> = ({ variant = 'primary', size = 'md', children }) => {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-full font-light',
				pillVariants[variant],
				pillSizes[size]
			)}
		>
			{children}
		</span>
	)
}
