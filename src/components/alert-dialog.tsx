'use client'

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import type * as React from 'react'
import { cn } from '../utils'
import { buttonVariants } from './button'

const AlertDialog = ({ ...props }: React.ComponentProps<typeof AlertDialogPrimitive.Root>) => {
	return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

const AlertDialogTrigger = ({
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) => {
	return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
}

const AlertDialogPortal = ({
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) => {
	return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
}

const AlertDialogOverlay = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) => {
	return (
		<AlertDialogPrimitive.Overlay
			data-slot="alert-dialog-overlay"
			className={cn(
				'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in',
				className
			)}
			{...props}
		/>
	)
}

const AlertDialogContent = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) => {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Content
				data-slot="alert-dialog-content"
				className={cn(
					'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-default border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg',
					className
				)}
				{...props}
			/>
		</AlertDialogPortal>
	)
}

const AlertDialogHeader = ({ className, ...props }: React.ComponentProps<'div'>) => {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
			{...props}
		/>
	)
}

const AlertDialogFooter = ({ className, ...props }: React.ComponentProps<'div'>) => {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
			{...props}
		/>
	)
}

const AlertDialogTitle = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) => {
	return (
		<AlertDialogPrimitive.Title
			data-slot="alert-dialog-title"
			className={cn('font-semibold text-lg', className)}
			{...props}
		/>
	)
}

const AlertDialogDescription = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) => {
	return (
		<AlertDialogPrimitive.Description
			data-slot="alert-dialog-description"
			className={cn('text-muted-foreground text-sm', className)}
			{...props}
		/>
	)
}

const AlertDialogAction = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) => {
	return <AlertDialogPrimitive.Action className={cn(buttonVariants(), className)} {...props} />
}

const AlertDialogCancel = ({
	className,
	...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) => {
	return (
		<AlertDialogPrimitive.Cancel
			className={cn('focus:outline-none', buttonVariants({ variant: 'ghost' }), className)}
			{...props}
		/>
	)
}

export {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTitle,
	AlertDialogTrigger
}
