import type { FC, ReactNode } from 'react'
import styles from './footer-section.module.css'

export type FooterSectionProps = {
	children: ReactNode
}

const FooterSection: FC<FooterSectionProps> = ({ children }) => {
	return <div className={styles['footer-section']}>{children}</div>
}

export default FooterSection
