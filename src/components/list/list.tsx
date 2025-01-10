import type { ReactNode } from 'react'
import styles from './list.module.css'

const List = ({ children }: { children: ReactNode }) => {
	return <ul className={styles.list}>{children}</ul>
}

export default List
