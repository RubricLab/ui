import { z } from 'zod/v4'

// TODO: the props for the select could be simplified

export const SelectPropsSchema = z.object({
	defaultValue: z.string().nullable(),
	description: z.string().nullable(),
	disabled: z.boolean().nullable(),
	label: z.string().nullable(),
	required: z.boolean().nullable(),
	value: z.string().nullable()
})

export const SelectValueSchema = z.object({
	placeholder: z.string().nullable()
})

export const SelectTriggerSchema = z.object({})

export const SelectContentSchema = z.object({})

export const SelectItemSchema = z.object({
	disabled: z.boolean().nullable(),
	value: z.string()
})

export const SelectLabelSchema = z.object({})

export const SelectGroupSchema = z.object({})

export const SelectSeparatorSchema = z.object({})

export type SelectProps = {
	id?: string // additional
	defaultValue?: string
	value?: string
	label?: string
	description?: string
	required?: boolean
	disabled?: boolean
	children: React.ReactNode // additional
	onValueChange?: (val: string) => void // additional
}

export type SelectValueProps = {
	placeholder?: string
}

export type SelectTriggerProps = {
	id?: string
	children: React.ReactNode // additional
}

export type SelectContentProps = {
	children: React.ReactNode // additional
}

export type SelectItemProps = {
	disabled?: boolean
	value: string
	children: React.ReactNode // additional
}

export type SelectLabelProps = {
	children: React.ReactNode // additional
}

export type SelectGroupProps = {
	children: React.ReactNode // additional
}

export type SelectSeparatorProps = Record<string, never>
