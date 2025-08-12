import { z } from 'zod/v4'

export const DrawerSchema = z.object({})

export const DrawerTitleSchema = z
	.object({})
	.describe('Always include a drawer title when rendering a drawer for accessibility reasons')

export const DrawerDescriptionSchema = z.object({})

export const DrawerHeaderSchema = z.object({})

export const DrawerContentSchema = z.object({})

export const DrawerFooterSchema = z.object({})

export const DrawerTriggerSchema = z.object({
	asChild: z.boolean().default(false)
})

export const DrawerBodySchema = z.object({})

export type DrawerProps = {
	children: React.ReactNode
}

export type DrawerTitleProps = { children: React.ReactNode }

export type DrawerDescriptionProps = { children: React.ReactNode }

export type DrawerHeaderProps = { children: React.ReactNode }

export type DrawerContentProps = { children: React.ReactNode }

export type DrawerFooterProps = { children: React.ReactNode }

export type DrawerTriggerProps = { children: React.ReactNode; asChild?: boolean }

export type DrawerBodyProps = { children: React.ReactNode }
