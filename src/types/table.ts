import type * as React from 'react'
import { z } from 'zod/v4'

export const TableVariantEnum = z.enum(['primary', 'ghost', 'striped'])

export const TablePropsSchema = z.object({
	variant: TableVariantEnum.default('primary')
})

export const TableHeaderSchema = z.object({})

export const TableBodySchema = z.object({})

export const TableFooterSchema = z.object({})

export const TableRowSchema = z.object({})

export const TableHeadSchema = z.object({})

export const TableCellSchema = z.object({})

export type TableProps = {
	variant?: z.infer<typeof TableVariantEnum>
	children: React.ReactNode
	ref?: React.Ref<HTMLTableElement> // additional
}

export type TableHeaderProps = {
	children: React.ReactNode
	ref?: React.Ref<HTMLTableSectionElement> // additional
}

export type TableBodyProps = {
	children: React.ReactNode
	ref?: React.Ref<HTMLTableSectionElement> // additional
}

export type TableFooterProps = {
	children: React.ReactNode
	ref?: React.Ref<HTMLTableSectionElement> // additional
}

export type TableRowProps = {
	children: React.ReactNode
	className?: string // additional
	ref?: React.Ref<HTMLTableRowElement> // additional
}

export type TableHeadProps = {
	children: React.ReactNode
	ref?: React.Ref<HTMLTableCellElement> // additional
}

export type TableCellProps = {
	children: React.ReactNode
	ref?: React.Ref<HTMLTableCellElement> // additional
}
