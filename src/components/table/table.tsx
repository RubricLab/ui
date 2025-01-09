import type { FC, ReactNode } from 'react'
import styles from './table.module.css'

export type TableProps = {
	children: ReactNode
}

const Table: FC<TableProps> = ({ children }) => {
	return (
		<div className={styles.table__wrapper}>
			<table className={styles.table}>{children}</table>
		</div>
	)
}

export default Table
