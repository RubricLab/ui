import { cn } from '@/utils'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import type * as React from 'react'
import { headingLevelClasses, textSizeClasses, textVariantClasses } from '../styles/classes'
import type {
	DialogBodyProps,
	DialogContentProps,
	DialogDescriptionProps,
	DialogFooterProps,
	DialogHeaderProps,
	DialogProps,
	DialogTitleProps,
	DialogTriggerProps
} from '../types/dialog'
import { Button } from './button'
import { Container } from './container'

const Dialog: React.FC<DialogProps> = ({ children, open, onOpenChange }) => {
	return (
		<DialogPrimitive.Root
			data-slot="dialog"
			{...(open !== undefined ? { open } : {})}
			{...(onOpenChange ? { onOpenChange } : {})}
		>
			{children}
		</DialogPrimitive.Root>
	)
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, asChild = false }) => {
	return (
		<DialogPrimitive.Trigger
			data-slot="dialog-trigger"
			asChild={asChild}
			className={cn(textSizeClasses.sm, 'w-full')}
		>
			{/* To ensure children are wrapped in one parent is asChild is true */}
			{asChild ? <div>{children}</div> : children}
		</DialogPrimitive.Trigger>
	)
}

const DialogPortal: React.FC<React.ComponentProps<typeof DialogPrimitive.Portal>> = ({
	...props
}) => {
	return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

const DialogClose: React.FC = () => {
	return (
		// TODO: remove className
		<Container className="absolute top-4 right-4" arrangement="row" justify="end">
			<DialogPrimitive.Close asChild>
				<Button label="Close" arrangement="hiddenLabel" icon="x" size="sm" variant="ghost" />
			</DialogPrimitive.Close>
		</Container>
	)
}

const DialogOverlay: React.FC<React.ComponentProps<typeof DialogPrimitive.Overlay>> = ({
	className,
	...props
}) => {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in',
				className
			)}
			{...props}
		/>
	)
}

const DialogContent: React.FC<DialogContentProps> = ({ children }) => {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className="data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] border bg-background p-6 shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg"
			>
				<Container gap="sm">{children}</Container>
				<DialogClose />
			</DialogPrimitive.Content>
		</DialogPortal>
	)
}

const DialogHeader: React.FC<DialogHeaderProps> = ({ children }) => {
	return (
		<Container data-slot="dialog-header" gap="xs">
			{children}
		</Container>
	)
}

const DialogFooter: React.FC<DialogFooterProps> = ({ children }) => {
	return (
		<Container data-slot="dialog-footer" arrangement="row" justify="end" gap="sm">
			{children}
		</Container>
	)
}

const DialogTitle: React.FC<DialogTitleProps> = ({ children }) => {
	return (
		<DialogPrimitive.Title data-slot="dialog-title" className={cn(headingLevelClasses[2])}>
			{children}
		</DialogPrimitive.Title>
	)
}

const DialogDescription: React.FC<DialogDescriptionProps> = ({ children }) => {
	return (
		<DialogPrimitive.Description
			data-slot="dialog-description"
			className={cn(textVariantClasses.secondary, textSizeClasses.sm)}
		>
			{children}
		</DialogPrimitive.Description>
	)
}

const DialogBody: React.FC<DialogBodyProps> = ({ children }) => {
	return (
		<Container gap="sm" className={textSizeClasses.sm}>
			{children}
		</Container>
	)
}

export {
	Dialog,
	DialogBody,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
}
