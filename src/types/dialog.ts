import { z } from 'zod/v4'

export const DialogSchema = z.object({})

export const DialogTitleSchema = z
	.object({})
	.describe('Always include a dialog title when rendering a title for accessibility reasons')

export const DialogDescriptionSchema = z.object({})

export const DialogHeaderSchema = z.object({})

export const DialogContentSchema = z.object({})

export const DialogFooterSchema = z.object({})

export const DialogTriggerSchema = z.object({
	asChild: z.boolean().default(false)
})

export const DialogBodySchema = z.object({})

export type DialogProps = {
	children: React.ReactNode
}

export type DialogTitleProps = { children: React.ReactNode }

export type DialogDescriptionProps = { children: React.ReactNode }

export type DialogHeaderProps = { children: React.ReactNode }

export type DialogContentProps = { children: React.ReactNode }

export type DialogFooterProps = { children: React.ReactNode }

export type DialogTriggerProps = { children: React.ReactNode; asChild?: boolean }

export type DialogBodyProps = { children: React.ReactNode }
