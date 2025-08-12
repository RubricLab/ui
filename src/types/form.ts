import { z } from 'zod/v4'

export const FormTitleSchema = z.object({})

export const FormDescriptionSchema = z.object({})

export const FormHeaderSchema = z.object({})

export const FormContentSchema = z.object({})

export const FormFooterSchema = z.object({})

export const FormPropsSchema = z.object({})

export type FormTitleProps = { children: React.ReactNode }

export type FormDescriptionProps = { children: React.ReactNode }

export type FormHeaderProps = { children: React.ReactNode }

export type FormContentProps = { children: React.ReactNode }

export type FormFooterProps = { children: React.ReactNode }

export type FormProps = {
	children: React.ReactNode
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}
