import type { FC, ReactNode } from 'react'
import styles from './footer.module.css'

export type FooterProps = {
	children: ReactNode
}

const Footer: FC<FooterProps> = ({ children }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__content}>{children}</div>
		</footer>
	)
}

export default Footer
