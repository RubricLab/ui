import type { TextVariantEnum } from './types'
import { cn } from '@/utils'
import type { z } from 'zod/v4'
import { textVariantClasses } from './classes'

export type SpanProps = {
	children: React.ReactNode
	bold?: boolean
	italic?: boolean
	underline?: boolean
	variant?: z.infer<typeof TextVariantEnum>
}

export const Span: React.FC<SpanProps> = ({ children, bold, italic, underline, variant }) => {
	return (
		<span
			className={cn(
				'',
				bold && 'font-bold',
				italic && 'italic',
				underline && 'underline',
				variant && textVariantClasses[variant]
			)}
		>
			{children}
		</span>
	)
}
