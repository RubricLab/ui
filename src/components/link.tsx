import { ArrowUpRightIcon } from 'lucide-react'
import type { z } from 'zod/v4'
import type { LinkProps, LinkVariantEnum } from '../types'
import { cn } from '../utils'

const linkVariantClasses: Record<z.infer<typeof LinkVariantEnum>, string> = {
	ghost: '',
	primary: 'text-blue-500 hover:underline underline-offset-2'
}

export const Link: React.FC<LinkProps> = ({
	href,
	children,
	target,
	variant = 'primary',
	className
}) => {
	return (
		<a
			href={href}
			target={target}
			rel={target === '_blank' ? 'noopener noreferrer' : undefined}
			className={cn('inline-flex items-center', variant && linkVariantClasses[variant], className)}
		>
			{children}
			{target === '_blank' && variant !== 'ghost' && <ArrowUpRightIcon className="size-4" />}
		</a>
	)
}
