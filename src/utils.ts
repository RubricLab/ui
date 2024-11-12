// utils.ts

import type { ReactElement } from 'react'
import { Button } from '.'
import type { BorderRadius, ColorKey, FontSize, Padding } from './types'
import type { DesignSystem } from './types'

export function createComponent<UI extends DesignSystem, Props>({
	render
}: {
	render: (props: Props, ui: UI) => ReactElement
}) {
	return (ui: UI) => {
		return (userProps: Props) => {
			return render(userProps, ui)
		}
	}
}

export function createUI<System extends DesignSystem>(designSystem: System) {
	return {
		colors: Object.entries(designSystem.colors).reduce(
			(acc, [key, value]) => {
				acc[key] = value.light
				acc[`dark-${key}`] = value.dark
				return acc
			},
			{} as Record<string, string>
		),
		Button: Button(designSystem)
	}
}

export function getBorderRadiusClass(radius: BorderRadius): string {
	const radiusMap = {
		none: 'rounded-none',
		small: 'rounded-sm',
		medium: 'rounded-md',
		large: 'rounded-lg'
	}
	return radiusMap[radius]
}

export function getPaddingClass(padding: Padding): string {
	const paddingMap = {
		none: 'p-0',
		small: 'p-2',
		medium: 'p-4',
		large: 'p-6'
	}
	return paddingMap[padding]
}

export function getFontSizeClass(size: FontSize): string {
	const sizeMap = {
		small: 'text-sm',
		medium: 'text-base',
		large: 'text-lg'
	}
	return sizeMap[size]
}

export function getBackgroundColorClass(colorKey: ColorKey, ui: DesignSystem) {
	return `bg-[${ui.colors[colorKey].light}] dark:bg-[${ui.colors[colorKey].dark}]`
}

export function getTextColorClass(colorKey: ColorKey, ui: DesignSystem) {
	return `text-[${ui.colors[colorKey].light}] dark:text-[${ui.colors[colorKey].dark}]`
}
