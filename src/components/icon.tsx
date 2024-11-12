import { type Icon as IconType, ui } from '../types'

type Size = 'sm' | 'md' | 'lg' | `${number}px`

type IconProps = {
	icon: IconType
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

export default function Icon({ icon, size }: IconProps) {
	return (
		<div className={getSizeClass(size)}>
			<div className="flex hidden h-full w-full items-center justify-center dark:block">
				{ui.icons[icon].dark()}
			</div>
			<div className="flex h-full w-full items-center justify-center dark:hidden">
				{ui.icons[icon].light()}
			</div>
		</div>
	)
}
