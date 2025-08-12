import { cn } from '@/utils'
import { textSizeClasses, textVariantClasses } from '../styles/classes'
import type { TextProps } from '../types'

export const Text: React.FC<TextProps> = ({
	children,
	variant = 'primary',
	size = 'sm',
	bold,
	italic,
	underline
}) => {
	return (
		<span
			className={cn(
				textSizeClasses[size],
				textVariantClasses[variant],
				bold && 'font-bold',
				italic && 'italic',
				underline && 'underline underline-offset-2'
			)}
		>
			{children}
		</span>
	)
}
