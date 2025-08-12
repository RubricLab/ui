'use client'

import type { ButtonProps, IconNames } from '@/types'
import { cva } from 'class-variance-authority'
import type { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import Link from 'next/link'
import type * as React from 'react'
import { camelToPascal, cn } from '@/utils'
import { widthClasses } from './classes'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

const buttonVariants = cva(
	'border transition-all cursor-pointer justify-center inline-flex gap-1 items-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
	{
		variants: {
			variant: {
				primary: 'bg-primary hover:bg-primary/90 text-white border-primary',
				secondary: 'bg-accent hover:bg-hover',
				outline: 'bg-background hover:bg-accent',
				ghost: 'bg-transparent border-transparent hover:border-accent hover:bg-accent',
				destructive:
					'bg-destructive/20 text-destructive/80 border-destructive hover:text-destructive/100 hover:bg-destructive/40'
			},
			size: {
				sm: 'h-6 text-sm',
				md: 'h-8 text-sm',
				lg: 'h-10'
			},
			arrangement: {
				hiddenLabel: '',
				leadingIcon: '',
				leadingLabel: ''
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md',
			arrangement: 'leadingLabel'
		},
		compoundVariants: [
			{
				arrangement: 'leadingLabel',
				className: 'px-2'
			},
			{
				arrangement: 'leadingIcon',
				className: 'px-2'
			},
			{
				size: 'sm',
				arrangement: 'hiddenLabel',
				className: 'h-6 w-6 text-sm'
			},
			{
				size: 'md',
				arrangement: 'hiddenLabel',
				className: 'h-8 w-8 text-sm'
			},
			{
				size: 'lg',
				arrangement: 'hiddenLabel',
				className: 'h-10 w-10'
			}
		]
	}
)

interface ButtonContentProps {
	Icon: LucideIcon | null
	arrangement: ButtonProps['arrangement']
	children: React.ReactNode
}

const ButtonContent = ({ arrangement, Icon, children }: ButtonContentProps) => (
	<>
		{Icon && arrangement === 'leadingIcon' && <Icon className="size-4 opacity-80" />}
		{arrangement !== 'hiddenLabel' && children}
		{Icon && arrangement === 'leadingLabel' && <Icon className="size-4 opacity-80" />}
		{Icon && arrangement === 'hiddenLabel' && <Icon className="size-4 opacity-80" />}
	</>
)

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	onClick,
	disabled = false,
	label,
	href,
	variant = 'secondary',
	size = 'md',
	width = 'fit',
	arrangement = 'leadingLabel',
	icon,
	onMouseEnter,
	onMouseLeave
}) => {
	const Icon = icon ? (LucideIcons[camelToPascal(icon) as IconNames] as LucideIcon) : null

	const buttonContent = (
		<ButtonContent arrangement={arrangement} Icon={Icon}>
			{label}
		</ButtonContent>
	)

	const buttonElement = href ? (
		<Link
			href={href}
			className={cn(
				'no-underline',
				buttonVariants({ variant, arrangement, size }),
				arrangement !== 'hiddenLabel' && widthClasses[width] // TODO: clean up
			)}
		>
			{buttonContent}
		</Link>
	) : (
		<button
			disabled={disabled}
			onClick={onClick}
			type={type}
			className={cn(
				buttonVariants({ variant, size, arrangement }),
				arrangement !== 'hiddenLabel' && widthClasses[width] // TODO: clean up
			)}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{buttonContent}
		</button>
	)

	if (arrangement === 'hiddenLabel') {
		return (
			<Tooltip>
				<TooltipTrigger asChild>{buttonElement}</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		)
	}

	return buttonElement
}

Button.displayName = 'Button'

export { Button, buttonVariants }
