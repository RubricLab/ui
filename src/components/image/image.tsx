import type { FC } from 'react'
import styles from './image.module.css'

export type ImageProps = {
	role: 'banner' | 'hero' | 'thumbnail' | 'feature' | 'background'
	src: string
	alt: string
}

const Image: FC<ImageProps> = ({ role, src, alt }) => {
	return <img src={src} alt={alt} className={styles[`image--${role}`]} />
}

export default Image
