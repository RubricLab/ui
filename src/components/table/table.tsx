import type { FC, ReactNode } from 'react'
import styles from './table.module.css'

export type TableProps = {
	/** The content of the table */
	children: ReactNode
	/** Optional caption for the table */
	caption?: string
	/** Optional description for screen readers */
	description?: string
}

const Table: FC<TableProps> = ({ children, caption, description }) => {
	return (
		<section className={styles.table__wrapper} aria-label={caption || 'Data table'}>
			<table className={styles.table} aria-describedby={description ? 'table-desc' : undefined}>
				{caption && <caption>{caption}</caption>}
				{description && (
					<caption id="table-desc" className="sr-only">
						{description}
					</caption>
				)}
				<tbody>{children}</tbody>
			</table>
		</section>
	)
}

export default Table
