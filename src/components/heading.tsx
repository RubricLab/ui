import { fontClasses, headingLevelClasses, textVariantClasses } from '../styles/classes'
import type { HeadingProps } from '../types'
import { cn } from '../utils'
import { Text } from './text'

export const Heading: React.FC<HeadingProps> = ({
	children,
	level = '1',
	variant = 'primary',
	font = 'sans',
	className
}) => {
	const sharedClassName = cn(
		headingLevelClasses[level],
		textVariantClasses[variant],
		fontClasses[font],
		className
	)

	switch (level) {
		case '1':
			return <h1 className={sharedClassName}>{children}</h1>
		case '2':
			return <h2 className={sharedClassName}>{children}</h2>
		case '3':
			return <h3 className={sharedClassName}>{children}</h3>
		case '4':
			return <h4 className={sharedClassName}>{children}</h4>
		default:
			return <Text className={sharedClassName}>{children}</Text>
	}
}
