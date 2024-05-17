import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import clsx from 'clsx'
import * as React from 'react'

const buttonVariants = cva(
	'inline-flex items-center border-[1px] justify-center dark:border-[#fcfcfc] border-[#050505] leading-[120%] dark:text-[#fcfcfc] text-[#050505] dark:bg-[#050505] bg-[#fcfcfc] focus:outline-2 focus:outline-offset-2 focus:outline-[#fcfcfc] disabled:opacity-80 disabled:pointer-events-none',
	{
		variants: {
			variant: {
				default: '',
				destructive: '',
				outline: '',
				secondary: '',
				ghost: '',
				link: ''
			},
			size: {
				sm: 'rounded-[2px] py-[3px] px-[6px] text-[12px]',
				md: 'rounded-[3px] py-[4px] px-[8px] text-[16px]',
				lg: 'rounded-[4px] py-[6px] px-[14px] text-[18px]'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'md'
		}
	}
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({className, variant, size, asChild = false, ...props}, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={clsx(buttonVariants({variant, size, className}))}
				ref={ref}
				{...props}
			/>
		)
	}
)
Button.displayName = 'Button'

export {Button, buttonVariants}
