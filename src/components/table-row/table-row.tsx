import type { ReactNode } from 'react'
import styles from './table-row.module.css'

const TableRow = ({
	children,
	isHeader,
	id,
	selected
}: {
	/** The content of the row */
	children: ReactNode
	/** Whether this is a header row */
	isHeader?: boolean
	/** Optional ID for the row */
	id?: string
	/** Optional selected state */
	selected?: boolean
}) => {
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
