'use client'

import type { Icon as IconType } from '~/types'
import Icon from './icon'

type ButtonProps = {
	onClick: () => void
	content: string
	type: 'primary' | 'subtle'
	icon?: IconType
}

export default function Button({ onClick, content, type, icon }: ButtonProps) {
	return (
		<button
			type="button"
			className="m-2 rounded-xl border-2 border-neutral-200 bg-neutral-100 p-2 px-4 text-black dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
			onClick={onClick}
		>
			<div className="flex items-center gap-2">
				{icon && <Icon icon={icon} size="sm" />}
				{content}
			</div>
		</button>
	)
}
