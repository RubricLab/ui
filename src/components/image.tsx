import * as React from 'react'
import { roundedClasses } from '../styles/classes'
import type { ImageProps } from '../types'
import { cn } from '../utils'

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
	({ src, alt, width, height, rounded = 'none', className }, ref) => {
		return (
			<img
				ref={ref}
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={cn(roundedClasses[rounded], className)}
				style={{ objectFit: 'cover', objectPosition: 'center' }}
			/>
		)
	}
)

Image.displayName = 'Image'

export { Image }
