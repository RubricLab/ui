import styles from './image.module.css'

const Image = ({
	role,
	src,
	alt
}: {
	role: 'banner' | 'hero' | 'thumbnail' | 'feature' | 'background'
	src: string
	alt: string
}) => {
	return <img src={src} alt={alt} className={styles[`image--${role}`]} />
}

export default Image
