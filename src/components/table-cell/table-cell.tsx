import type { ReactNode } from 'react'
import styles from './table-cell.module.css'

const TableCell = ({
	ROLE,
	children,
	align = 'left',
	scope,
	id,
	headers
}: {
	/** The role of the cell (header or data) */
	ROLE: 'header' | 'data'
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
}) => {
	const Tag = ROLE === 'header' ? 'th' : 'td'
	const scopeAttr = ROLE === 'header' ? { scope: scope || 'col' } : {}

	return (
		<Tag
			className={styles['table-cell']}
			data-role={ROLE}
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
