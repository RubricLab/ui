import { cn } from '../utils'
import type { ReactNode } from 'react'
import type { z } from 'zod/v4'
import { gapClasses, textSizeClasses } from '../styles/classes'
import type { SizeEnum, TextSizeEnum } from '../types'

export const List = ({
	children,
	size = 'sm',
	gap = 'none'
}: {
	children: ReactNode
	size?: z.infer<typeof TextSizeEnum>
	gap?: z.infer<typeof SizeEnum>
}) => (
	<ul className={cn('flex list-disc flex-col pl-[12.5px]', textSizeClasses[size], gapClasses[gap])}>
		{children}
	</ul>
)

export const ListItem = ({ children }: { children: ReactNode }) => (
	<li className="leading-relaxed">{children}</li>
)
