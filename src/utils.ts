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

export function getBorderRadiusStyles(radius: BorderRadius) {
	const radiusMap = {
		none: {
			borderRadius: '0'
		},
		small: {
			borderRadius: '0.125rem'
		},
		medium: {
			borderRadius: '0.375rem'
		},
		large: {
			borderRadius: '0.5rem'
		}
	}
	return radiusMap[radius]
}

export function getPaddingStyles(padding: Padding): React.CSSProperties {
	const paddingMap = {
		none: { padding: '0' },
		small: { padding: '0.5rem' }, // p-2 = 0.5rem
		medium: { padding: '1rem' }, // p-4 = 1rem
		large: { padding: '1.5rem' } // p-6 = 1.5rem
	}
	return paddingMap[padding]
}

export function getFontSizeStyles(size: FontSize) {
	const sizeMap = {
		small: { fontSize: '0.875rem' }, // text-sm
		medium: { fontSize: '1rem' }, // text-base
		large: { fontSize: '1.125rem' } // text-lg
	}
	return sizeMap[size]
}

export function getBackgroundColorStyles<Colors extends { [K in keyof Colors]: Color }>(
	color: keyof Colors,
	{ colors }: { colors: Colors }
) {
	return {
		backgroundColor: colors[color].light,
		'@media (prefers-color-scheme: dark)': {
			backgroundColor: colors[color].dark
		}
	}
}

export function getTextColorStyles<Colors extends { [K in keyof Colors]: Color }>(
	color: keyof Colors,
	{ colors }: { colors: Colors }
) {
	return {
		color: colors[color].light,
		'@media (prefers-color-scheme: dark)': {
			color: colors[color].dark
		}
	}
}
