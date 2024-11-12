// utils.ts

import type { ReactElement } from 'react'
import Button from './components/button'
import type { BorderRadius, Color, DesignSystem, FontSize, Padding } from './types'

export function createComponent<UI, Props>({
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

export function createUI<DS extends DesignSystem>(designSystem: DS) {
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

export function getBackgroundColorClass<Colors extends { [K in keyof Colors]: Color }>(
	color: keyof Colors,
	ui: { colors: Colors }
) {
	const colorValue = ui.colors[color]
	if (!colorValue) {
		throw new Error(`Color ${String(color)} not found in design system`)
	}
	return `bg-[${colorValue.light}] dark:bg-[${colorValue.dark}]`
}

export function getTextColorClass<DS extends DesignSystem>(color: keyof DS['colors'], ui: DS) {
	return `text-[${ui.colors[color]?.light}] dark:text-[${ui.colors[color]?.dark}]`
}
