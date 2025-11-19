import type { ReactNode } from 'react'
import type { z } from 'zod/v4'
import { gapClasses, textSizeClasses } from '../styles/classes'
import type { SizeEnum, TextSizeEnum } from '../types'
import { cn } from '../utils'

export const List = ({
	children,
	size = 'sm',
	gap = 'none',
	className
}: {
	children: ReactNode
	size?: z.infer<typeof TextSizeEnum>
	gap?: z.infer<typeof SizeEnum>
	className?: string
}) => (
	<ul
		className={cn(
			'flex list-disc flex-col pl-[12.5px]',
			textSizeClasses[size],
			gapClasses[gap],
			className
		)}
	>
		{children}
	</ul>
)

export const ListItem = ({ children, className }: { children: ReactNode; className?: string }) => (
	<li className={cn('leading-relaxed', className)}>{children}</li>
)
