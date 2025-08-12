import type { LucideIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import type { IconNames } from '../types'

export const Icon = ({ name, ...props }: { name: IconNames } & React.ComponentProps<'svg'>) => {
	const LucideIconComponent = LucideIcons[name] as LucideIcon | undefined
	if (!LucideIconComponent) return null
	return <LucideIconComponent {...props} />
}
