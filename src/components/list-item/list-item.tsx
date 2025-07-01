import type { ReactNode } from 'react'
import styles from './list-item.module.css'

export default function ListItem({ children }: { children: ReactNode }) {
	return <li className={styles['list-item']}>{children}</li>
}
