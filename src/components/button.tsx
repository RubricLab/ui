import { cva } from 'class-variance-authority'
import Link from 'next/link'
import type * as React from 'react'
import { widthClasses } from '../styles'
import type { ButtonProps, IconNames } from '../types'
import { camelToPascal, cn } from '../utils'
import { Icon as UiIcon } from './icon'
import { Tooltip, TooltipContent, TooltipTrigger } from './tooltip'

const buttonVariants = cva(
	'border rounded-default transition-all cursor-pointer justify-center inline-flex gap-1 items-center whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
	{
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
				arrangement: 'hiddenLabel',
				className: 'h-6 w-6 text-sm',
				size: 'sm'
			},
			{
				arrangement: 'hiddenLabel',
				className: 'h-9 w-9 text-sm',
				size: 'md'
			},
			{
				arrangement: 'hiddenLabel',
				className: 'h-12 w-12',
				size: 'lg'
			}
		],
		defaultVariants: {
			arrangement: 'leadingLabel',
			size: 'md',
			variant: 'primary'
		},
		variants: {
			arrangement: {
				hiddenLabel: '',
				leadingIcon: '',
				leadingLabel: ''
			},
			size: {
				lg: 'h-12',
				md: 'h-9 text-sm',
				sm: 'h-6 text-sm'
			},
			variant: {
				destructive:
					'bg-destructive/20 text-destructive/80 border-destructive hover:text-destructive/100 hover:bg-destructive/40',
				ghost: 'bg-transparent border-transparent hover:border-accent hover:bg-accent',
				outline: 'bg-background hover:bg-accent',
				primary: 'bg-primary hover:bg-primary/90 text-background border-primary',
				secondary: 'bg-accent hover:bg-hover'
			}
		}
	}
)

interface ButtonContentProps {
	iconName: IconNames | null
	arrangement: ButtonProps['arrangement']
	children: React.ReactNode
}

const ButtonContent = ({ arrangement, iconName, children }: ButtonContentProps) => (
	<>
		{iconName && arrangement === 'leadingIcon' && (
			<span className="opacity-80">
				<UiIcon name={iconName} />
			</span>
		)}
		{arrangement !== 'hiddenLabel' && children}
		{iconName && arrangement === 'leadingLabel' && (
			<span className="opacity-80">
				<UiIcon name={iconName} />
			</span>
		)}
		{iconName && arrangement === 'hiddenLabel' && (
			<span className="opacity-80">
				<UiIcon name={iconName} />
			</span>
		)}
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
	const iconName = icon ? (camelToPascal(icon) as IconNames) : null

	const buttonContent = (
		<ButtonContent arrangement={arrangement} iconName={iconName}>
			{label}
		</ButtonContent>
	)

	const buttonElement = href ? (
		<Link
			href={href}
			className={cn(
				'no-underline',
				buttonVariants({ arrangement, size, variant }),
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
				buttonVariants({ arrangement, size, variant }),
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
