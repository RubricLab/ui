'use client'

import { forwardRef } from 'react'

import { cn } from '../utils/cn'

const sizes = {
	small: 'text-xs p-[6px] min-h-14 rounded-[2px]',
	medium: 'text-sm p-[7px] min-h-16 rounded-[3px]',
	large: 'text-base p-[8px] min-h-20 rounded-[4px]'
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	size?: keyof typeof sizes
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, size = 'small', ...props }, ref) => {
		return (
			<textarea
				className={cn(
					'flex w-full border border-rubricui-contrast/10 bg-rubricui-contrast/5 text-rubricui-contrast shadow-sm placeholder:text-rubricui-contrast/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rubricui-contrast/10 disabled:cursor-not-allowed disabled:opacity-50',
					className,
					sizes[size]
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Textarea.displayName = 'Textarea'

export { Textarea }
