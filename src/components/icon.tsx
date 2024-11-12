import type { DesignSystem } from '../types'
import { createComponent } from '../utils'

type Size = 'sm' | 'md' | 'lg' | `${number}px`

interface IconProps<UI extends DesignSystem> {
	icon: keyof UI['icons']
	size: Size
}

function getSizeClass(size: Size) {
	switch (size) {
		case 'sm':
			return 'w-5 h-5'
		case 'md':
			return 'w-8 h-8'
		case 'lg':
			return 'w-10 h-10'
		default:
			return `w-[${size}] h-[${size}]`
	}
}

export default createComponent<DesignSystem, IconProps<DesignSystem>>({
	render: ({ icon, size }, ui) => {
		const iconAsset = ui.icons[icon]
		return (
			<div className={getSizeClass(size)}>
				<div className="flex hidden h-full w-full items-center justify-center dark:block">
					{iconAsset?.dark()}
				</div>
				<div className="flex h-full w-full items-center justify-center dark:hidden">
					{iconAsset?.light()}
				</div>
			</div>
		)
	}
})
