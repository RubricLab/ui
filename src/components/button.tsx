// components/button.tsx
'use client'

import type { DesignSystem } from '../types'
import { createComponent } from '../utils'
import {
	getBackgroundColorClass,
	getBorderRadiusClass,
	getFontSizeClass,
	getPaddingClass,
	getTextColorClass
} from '../utils'
import Icon from './icon'

interface ButtonProps<UI extends DesignSystem> {
	onClick: () => void
	content: string
	type: keyof UI['components']['Button']
	icon?: keyof UI['icons']
}

export default createComponent({
	render: ({ onClick, content, type, icon }: ButtonProps<typeof ui>, ui) => {
		const { borderRadius, padding, fontSize, backgroundColor, textColor } = ui.components.Button[type]

		const classNames = [
			getBorderRadiusClass(borderRadius),
			getPaddingClass(padding),
			getFontSizeClass(fontSize),
			getBackgroundColorClass(backgroundColor, ui),
			getTextColorClass(textColor, ui),
			'flex items-center gap-2'
		].join(' ')

		const IconComponent = Icon(ui)

		return (
			<button type="button" className={classNames} onClick={onClick}>
				{icon && <IconComponent icon={icon} size="sm" />}
				{content}
			</button>
		)
	}
})
