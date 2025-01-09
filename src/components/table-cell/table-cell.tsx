import type { FC, ReactNode } from 'react'
import styles from './table-cell.module.css'

export type TableCellProps = {
	role: 'header' | 'data'
	children: ReactNode
	align?: 'left' | 'center' | 'right'
}

const TableCell: FC<TableCellProps> = ({ role, children, align = 'left' }) => {
	const Tag = role === 'header' ? 'th' : 'td'

	return (
		<Tag className={styles['table-cell']} data-role={role} data-align={align}>
			{children}
		</Tag>
	)
}

export default TableCell
