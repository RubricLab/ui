'use client'

import type { LinkProps, LinkVariantEnum } from './types'
import { cn } from '@/utils'
import { ArrowUpRightIcon } from 'lucide-react'
import NextLink from 'next/link'
import type { z } from 'zod/v4'

const linkVariantClasses: Record<z.infer<typeof LinkVariantEnum>, string> = {
	primary: 'text-blue-500 hover:underline underline-offset-2',
	ghost: ''
}

export const Link: React.FC<LinkProps> = ({ href, children, target, variant = 'primary' }) => {
	return (
		<NextLink
			href={href}
			target={target}
			className={cn('inline-flex items-center', variant && linkVariantClasses[variant])}
		>
			{children}
			{target === '_blank' && variant !== 'ghost' && <ArrowUpRightIcon className="size-4" />}
		</NextLink>
	)
}
