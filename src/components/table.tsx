import type * as React from 'react'
import type { z } from 'zod/v4'
import type {
	TableBodyProps,
	TableCellProps,
	TableFooterProps,
	TableHeaderProps,
	TableHeadProps,
	TableProps,
	TableRowProps,
	TableVariantEnum
} from '../types'
import { cn } from '../utils'

const tableVariantClasses: Record<z.infer<typeof TableVariantEnum>, string> = {
	ghost: 'bg-background',
	primary: 'bg-accent',
	striped: 'bg-background [&_tbody_tr:nth-child(odd)]:bg-accent/80'
}

const Table: React.FC<TableProps> = ({ children, variant = 'primary' }) => {
	return (
		<table
			className={cn(
				'w-full border-collapse rounded-default border text-sm',
				variant && tableVariantClasses[variant]
			)}
		>
			{children}
		</table>
	)
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => (
	<thead className="bg-accent/5">{children}</thead>
)

const TableBody: React.FC<TableBodyProps> = ({ children }) => <tbody>{children}</tbody>

const TableFooter: React.FC<TableFooterProps> = ({ children }) => (
	<tfoot className="bg-accent/5 font-medium">{children}</tfoot>
)

const TableRow: React.FC<TableRowProps> = ({ children }) => (
	<tr className="rounded-default border-b transition-colors">{children}</tr>
)

const TableHead: React.FC<TableHeadProps> = ({ children }) => (
	<th className="px-2 py-1.5 text-left font-medium text-foreground/80">{children}</th>
)

const TableCell: React.FC<TableCellProps> = ({ children }) => (
	<td className="p-2 py-1.5 text-foreground/80">{children}</td>
)

export { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow }
