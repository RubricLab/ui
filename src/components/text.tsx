import { fontClasses, textSizeClasses, textVariantClasses } from '../styles/classes'
import type { TextProps } from '../types'
import { cn } from '../utils'

export const Text: React.FC<TextProps> = ({
	children,
	variant = 'primary',
	size = 'sm',
	bold,
	italic,
	underline,
	font = 'sans'
}) => {
	return (
		<span
			className={cn(
				textSizeClasses[size],
				textVariantClasses[variant],
				bold && 'font-bold',
				italic && 'italic',
				underline && 'underline underline-offset-2',
				fontClasses[font]
			)}
		>
			{children}
		</span>
	)
}
