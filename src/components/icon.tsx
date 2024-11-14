import type { DesignSystem } from '../types'
import { createComponent } from '../utils'

type Size = 'sm' | 'md' | 'lg' | `${number}px`

interface IconProps<UI extends DesignSystem> {
	icon: keyof UI['icons']
	size: Size
}

export default createComponent<DesignSystem, IconProps<DesignSystem>>({
	render: ({ icon, size }, ui) => {
		const iconAsset = ui.icons[icon]

		function getSizeStyle(size: Size) {
			let sizeValue: string
			switch (size) {
				case 'sm':
					sizeValue = '20px' // Corresponds to w-5 h-5
					break
				case 'md':
					sizeValue = '32px' // Corresponds to w-8 h-8
					break
				case 'lg':
					sizeValue = '40px' // Corresponds to w-10 h-10
					break
				default:
					sizeValue = size
			}
			return { width: sizeValue, height: sizeValue }
		}

		const sizeStyle = getSizeStyle(size)

		return (
			<div style={{ ...sizeStyle }}>
				<div
					style={{
						display: 'flex',
						height: '100%',
						width: '100%',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					{iconAsset?.dark()}
				</div>
			</div>
		)
	}
})
