import * as React from 'react'
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

const Table = React.forwardRef<HTMLTableElement, TableProps>(
	({ children, variant = 'primary', className }, ref) => {
		return (
			<div className="w-full overflow-x-auto rounded-default border">
				<table
					ref={ref}
					className={cn('w-full text-sm', variant && tableVariantClasses[variant], className)}
				>
					{children}
				</table>
			</div>
		)
	}
)

Table.displayName = 'Table'

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
	({ children, className }, ref) => (
		<thead ref={ref} className={cn('border-b bg-accent/5', className)}>
			{children}
		</thead>
	)
)

TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
	({ children, className }, ref) => (
		<tbody ref={ref} className={cn('[&>tr:last-child]:border-b-0 [&>tr]:border-b', className)}>
			{children}
		</tbody>
	)
)

TableBody.displayName = 'TableBody'

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
	({ children, className }, ref) => (
		<tr ref={ref} className={cn('transition-colors', className)}>
			{children}
		</tr>
	)
)

TableRow.displayName = 'TableRow'

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
	({ children, className }, ref) => (
		<tfoot ref={ref} className={cn('bg-accent/5 font-medium', className)}>
			{children}
		</tfoot>
	)
)

TableFooter.displayName = 'TableFooter'

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(
	({ children, className }, ref) => (
		<th ref={ref} className={cn('px-2 py-1.5 text-left font-medium text-foreground/80', className)}>
			{children}
		</th>
	)
)

TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
	({ children, className }, ref) => (
		<td ref={ref} className={cn('p-2 py-1.5 text-foreground/80', className)}>
			{children}
		</td>
	)
)

TableCell.displayName = 'TableCell'

export { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow }
