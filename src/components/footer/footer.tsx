import type { ReactNode } from 'react'
import styles from './footer.module.css'

const Footer = ({
	children
}: {
	children: ReactNode
}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>{children}</div>
		</footer>
	)
}

export default Footer
