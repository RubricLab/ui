'use client'

import MarkdownJSX from 'markdown-to-jsx'
import { cn } from '../utils/cn'
import { forwardRef } from 'react'

const Markdown = forwardRef<
	HTMLDivElement,
	{
		children: string
		className?: string
		overrides?: Record<string, React.ComponentType>
	}
>(({ children, className, overrides }, ref) => {
	return (
		<MarkdownJSX
			options={{ forceBlock: true }}
			className={cn(
				'prose prose-sm prose-zinc dark:prose-invert break-words leading-normal prose-p:leading-normal',
				className
			)}
			overrides={overrides}
			ref={ref}
		>
			{children}
		</MarkdownJSX>
	)
})

Markdown.displayName = 'Markdown'

export { Markdown }
