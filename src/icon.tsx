'use client'

import type { IconNames } from '@/types'
import type { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const Icon = ({ name, ...props }: { name: IconNames } & React.ComponentProps<'svg'>) => {
	const LucideIconComponent = LucideIcons[name] as LucideIcon | undefined
	if (!LucideIconComponent) return null
	return <LucideIconComponent {...props} />
}
