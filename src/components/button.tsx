// components/button.tsx
'use client'

import type { ButtonVariant, DesignSystem } from '~/types'
import {
	getBackgroundColorClass,
	getBorderRadiusClass,
	getFontSizeClass,
	getPaddingClass,
	getTextColorClass
} from '../utils'
import Icon from './icon'

interface ButtonProps<DS extends DesignSystem> {
	onClick: () => void
	content: string
	type: keyof DS['components']['Button']
	icon?: Extract<keyof DS['icons'], string>
}

export default function Button<DS extends DesignSystem>(designSystem: DS) {
	return (props: ButtonProps<DS>) => {
		const { onClick, content, type, icon } = props
		const style = designSystem.components.Button[type as ButtonVariant]

		const classNames = [
			getBorderRadiusClass(style.borderRadius),
			getPaddingClass(style.padding),
			getFontSizeClass(style.fontSize),
			getBackgroundColorClass(style.backgroundColor, designSystem),
			getTextColorClass(style.textColor, designSystem),
			'flex items-center gap-2'
		].join(' ')

		const IconComponent = Icon(designSystem)

		return (
			<button type="button" className={classNames} onClick={onClick}>
				{icon && <IconComponent icon={icon} size="sm" />}
				{content}
			</button>
		)
	}
}
