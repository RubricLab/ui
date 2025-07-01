import type { ReactNode } from 'react'
import styles from './footer-section.module.css'

const FooterSection = ({ children }: { children: ReactNode }) => {
	return <div className={styles['footer-section']}>{children}</div>
}

export default FooterSection
