import type { FC, ReactNode } from 'react'
import styles from './table-row.module.css'

export type TableRowProps = {
	children: ReactNode
}

const TableRow: FC<TableRowProps> = ({ children }) => {
	return <tr className={styles['table-row']}>{children}</tr>
}

export default TableRow
