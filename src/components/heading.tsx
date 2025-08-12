import { cn } from '@/utils'
import { headingLevelClasses, textVariantClasses } from '../styles/classes'
import type { HeadingProps } from '../types'

export const Heading: React.FC<HeadingProps> = ({ children, level = '1', variant = 'primary' }) => {
	const className = cn(headingLevelClasses[level], textVariantClasses[variant])

	switch (level) {
		case '1':
			return <h1 className={className}>{children}</h1>
		case '2':
			return <h2 className={className}>{children}</h2>
		case '3':
			return <h3 className={className}>{children}</h3>
		case '4':
			return <h4 className={className}>{children}</h4>
		default:
			return <span className={className}>{children}</span>
	}
}
