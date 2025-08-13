import type { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { IconNames } from '../types'

export const Icon = ({ name, size = 4 }: { name: IconNames; size?: number }) => {
	const LucideIconComponent = LucideIcons[name] as LucideIcon | undefined
	if (!LucideIconComponent) return null
	// Multiply by 4 because in Tailwind 1 is equal to 4 px so size-1 is equal to width and height as 4 px
	return <LucideIconComponent width={size * 4} height={size * 4} />
}
