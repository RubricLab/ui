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
}

export type TableHeaderProps = {
	children: React.ReactNode
}

export type TableBodyProps = {
	children: React.ReactNode
}

export type TableFooterProps = {
	children: React.ReactNode
}

export type TableRowProps = {
	children: React.ReactNode
}

export type TableHeadProps = {
	children: React.ReactNode
}

export type TableCellProps = {
	children: React.ReactNode
}
