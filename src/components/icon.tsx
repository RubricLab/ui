import type { Color, DesignSystem } from '../types'
import { createComponent } from '../utils'
import { DarkSwitch } from '../utils/darkSwitch'

type Size = 'sm' | 'md' | 'lg' | `${number}px`

interface IconProps<UI extends DesignSystem> {
	icon: keyof UI['icons'] & 'logo'
	size: Size
	fill?: Color
}

export default createComponent<DesignSystem, IconProps<DesignSystem>>({
	render: ({ icon, size, fill }, ui) => {
		const iconAsset = icon === 'logo' ? ui.logo.icon : ui.icons[icon]

		if (!iconAsset) {
			throw ''
		}

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

		if (fill) {
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
						<DarkSwitch
							component={id => <div id={id}>{iconAsset.mono(fill.light)}</div>}
							darkComponent={id => <div id={id}>{iconAsset.mono(fill.dark)}</div>}
						/>
					</div>
				</div>
			)
		}
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
					<DarkSwitch
						component={id => <div id={id}>{iconAsset.light()}</div>}
						darkComponent={id => <div id={id}>{iconAsset.dark()}</div>}
					/>
				</div>
			</div>
		)
	}
})
