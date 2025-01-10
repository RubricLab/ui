import type { FC, ReactNode } from 'react'
import styles from './table-cell.module.css'

export type TableCellProps = {
	/** The role of the cell (header or data) */
	role: 'header' | 'data'
	/** The content of the cell */
	children: ReactNode
	/** Text alignment within the cell */
	align?: 'left' | 'center' | 'right'
	/** For header cells, defines the cells it headers (optional) */
	scope?: 'row' | 'col' | 'rowgroup' | 'colgroup'
	/** Optional ID for the cell */
	id?: string
	/** Optional headers this cell is described by */
	headers?: string
}

const TableCell: FC<TableCellProps> = ({ role, children, align = 'left', scope, id, headers }) => {
	const Tag = role === 'header' ? 'th' : 'td'
	const scopeAttr = role === 'header' ? { scope: scope || 'col' } : {}

	return (
		<Tag
			className={styles['table-cell']}
			data-role={role}
			data-align={align}
			{...scopeAttr}
			id={id}
			headers={headers}
		>
			{children}
		</Tag>
	)
}

export default TableCell
