import type * as React from 'react'
import { type DialogProps, Drawer as DrawerPrimitive } from 'vaul'
import { headingLevelClasses, textSizeClasses, textVariantClasses } from '../styles/classes'
import type {
	DrawerBodyProps,
	DrawerContentProps,
	DrawerDescriptionProps,
	DrawerFooterProps,
	DrawerHeaderProps,
	DrawerProps,
	DrawerTitleProps,
	DrawerTriggerProps
} from '../types/drawer'
import { cn } from '../utils'
import { Button } from './button'
import { Container } from './container'

const Drawer: React.FC<DrawerProps & DialogProps> = ({
	children,
	direction = 'right',
	...props
}) => {
	return (
		<DrawerPrimitive.Root data-slot="drawer" direction={direction} {...props}>
			{children}
		</DrawerPrimitive.Root>
	)
}

const DrawerTrigger: React.FC<DrawerTriggerProps> = ({ children, asChild = false }) => {
	return (
		<DrawerPrimitive.Trigger
			data-slot="drawer-trigger"
			asChild={asChild}
			className={textSizeClasses.sm}
		>
			{/* To ensure children are wrapped in one parent is asChild is true */}
			{asChild ? <div>{children}</div> : children}
		</DrawerPrimitive.Trigger>
	)
}

const DrawerPortal = (props: React.ComponentProps<typeof DrawerPrimitive.Portal>) => {
	return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

const DrawerClose = () => {
	return (
		<Container className="absolute top-4 right-4" arrangement="row" justify="end">
			<DrawerPrimitive.Close data-slot="drawer-close" asChild>
				<Button label="Close" arrangement="hiddenLabel" icon="x" size="sm" variant="ghost" />
			</DrawerPrimitive.Close>
		</Container>
	)
}

const DrawerOverlay = ({
	className,
	...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) => {
	return (
		<DrawerPrimitive.Overlay
			data-slot="drawer-overlay"
			className={cn(
				'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=open]:animate-in',
				className
			)}
			{...props}
		/>
	)
}

const DrawerContent: React.FC<DrawerContentProps> = ({ children }) => {
	return (
		<DrawerPortal data-slot="drawer-portal">
			<DrawerOverlay />
			<DrawerPrimitive.Content
				data-slot="drawer-content"
				className={cn(
					'group/drawer-content fixed z-50 flex h-auto flex-col bg-background',
					'my-2 rounded-l-lg data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
					'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
					'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
					'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
					'rounded-default border'
				)}
			>
				<Container gap="sm" padding="md">
					{children}
				</Container>
				<DrawerClose />
			</DrawerPrimitive.Content>
		</DrawerPortal>
	)
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({ children }) => {
	return (
		<Container data-slot="drawer-header" gap="xs">
			{children}
		</Container>
	)
}

const DrawerFooter: React.FC<DrawerFooterProps> = ({ children }) => {
	return (
		<Container data-slot="drawer-footer" arrangement="row" justify="end" gap="sm">
			{children}
		</Container>
	)
}

const DrawerTitle: React.FC<DrawerTitleProps> = ({ children }) => {
	return (
		<DrawerPrimitive.Title data-slot="drawer-title" className={cn(headingLevelClasses[2])}>
			{children}
		</DrawerPrimitive.Title>
	)
}

const DrawerDescription: React.FC<DrawerDescriptionProps> = ({ children }) => {
	return (
		<DrawerPrimitive.Description
			data-slot="drawer-description"
			className={cn(textVariantClasses.secondary, textSizeClasses.sm)}
		>
			{children}
		</DrawerPrimitive.Description>
	)
}

const DrawerBody: React.FC<DrawerBodyProps> = ({ children }) => {
	return (
		<Container gap="sm" className={textSizeClasses.sm}>
			{children}
		</Container>
	)
}

export {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
}
