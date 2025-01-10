import type { FC, ReactNode } from 'react'
import styles from './table-row.module.css'

export type TableRowProps = {
	/** The content of the row */
	children: ReactNode
	/** Whether this is a header row */
	isHeader?: boolean
	/** Optional ID for the row */
	id?: string
	/** Optional selected state */
	selected?: boolean
}

const TableRow: FC<TableRowProps> = ({ children, isHeader, id, selected }) => {
	return (
		<tr
			className={styles['table-row']}
			role={isHeader ? 'row header' : 'row'}
			id={id}
			aria-selected={selected}
		>
			{children}
		</tr>
	)
}

export default TableRow
