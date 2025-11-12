import { roundedClasses } from '../styles/classes'
import type { ImageProps } from '../types'
import { cn } from '../utils'

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, rounded = 'none' }) => {
	return (
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			className={cn(roundedClasses[rounded])}
			style={{ objectFit: 'cover', objectPosition: 'center' }}
		/>
	)
}
