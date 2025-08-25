import NextImage from 'next/image'
import { roundedClasses } from '../styles/classes'
import type { ImageProps } from '../types'
import { cn } from '../utils'

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, rounded = 'none' }) => {
	return (
		<div className="relative" style={{ height, width }}>
			<NextImage
				src={src}
				alt={alt}
				fill
				className={cn(roundedClasses[rounded])}
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/>
		</div>
	)
}
