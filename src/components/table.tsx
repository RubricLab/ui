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
	({ children, variant = 'primary' }, ref) => {
		return (
			<div className="w-full overflow-hidden rounded-default border">
				<table ref={ref} className={cn('w-full text-sm', variant && tableVariantClasses[variant])}>
					{children}
				</table>
			</div>
		)
	}
)

Table.displayName = 'Table'

const TableHeader = React.forwardRef<HTMLTableSectionElement, TableHeaderProps>(
	({ children }, ref) => (
		<thead ref={ref} className="border-b bg-accent/5">
			{children}
		</thead>
	)
)

TableHeader.displayName = 'TableHeader'

const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(({ children }, ref) => (
	<tbody ref={ref} className="[&>tr:last-child]:border-b-0 [&>tr]:border-b">
		{children}
	</tbody>
))

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
	({ children }, ref) => (
		<tfoot ref={ref} className="bg-accent/5 font-medium">
			{children}
		</tfoot>
	)
)

TableFooter.displayName = 'TableFooter'

const TableHead = React.forwardRef<HTMLTableCellElement, TableHeadProps>(({ children }, ref) => (
	<th ref={ref} className="px-2 py-1.5 text-left font-medium text-foreground/80">
		{children}
	</th>
))

TableHead.displayName = 'TableHead'

const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(({ children }, ref) => (
	<td ref={ref} className="p-2 py-1.5 text-foreground/80">
		{children}
	</td>
))

TableCell.displayName = 'TableCell'

export { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow }
