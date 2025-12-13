import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'
import {
	headingLevelClasses,
	paddingClasses,
	textSizeClasses,
	textVariantClasses
} from '../styles/classes'
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
import { cn } from '../utils'
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

const DialogTrigger = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Trigger>,
	DialogTriggerProps
>(({ children, asChild = false }, ref) => {
	return (
		<DialogPrimitive.Trigger
			ref={ref}
			data-slot="dialog-trigger"
			asChild={asChild}
			className={cn(textSizeClasses.sm, 'w-full')}
		>
			{/* To ensure children are wrapped in one parent is asChild is true */}
			{asChild ? <div>{children}</div> : children}
		</DialogPrimitive.Trigger>
	)
})

DialogTrigger.displayName = DialogPrimitive.Trigger.displayName

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

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	DialogContentProps
>(({ children, padding = 'lg' }, ref) => {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Content
				ref={ref}
				data-slot="dialog-content"
				className={cn(
					'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] rounded-default border bg-background shadow-lg duration-200 data-[state=closed]:animate-out data-[state=open]:animate-in sm:max-w-lg',
					paddingClasses[padding]
				)}
			>
				<Container gap="sm">{children}</Container>
				<DialogClose />
			</DialogPrimitive.Content>
		</DialogPortal>
	)
})

DialogContent.displayName = DialogPrimitive.Content.displayName

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

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	DialogTitleProps
>(({ children }, ref) => {
	return (
		<DialogPrimitive.Title
			ref={ref}
			data-slot="dialog-title"
			className={cn(headingLevelClasses[2])}
		>
			{children}
		</DialogPrimitive.Title>
	)
})

DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	DialogDescriptionProps
>(({ children }, ref) => {
	return (
		<DialogPrimitive.Description
			ref={ref}
			data-slot="dialog-description"
			className={cn(textVariantClasses.secondary, textSizeClasses.sm)}
		>
			{children}
		</DialogPrimitive.Description>
	)
})

DialogDescription.displayName = DialogPrimitive.Description.displayName

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
