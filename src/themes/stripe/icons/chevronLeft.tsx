import type { Asset } from '@rubriclab/ui'

export const chevronLeft: Asset = {
	light: () => (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<title>Chevron Left</title>
			<path fill="black" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
		</svg>
	),
	dark: () => (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<title>Chevron Left</title>
			<path fill="white" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
		</svg>
	),
	mono: (fill: `#${string}`) => (
		<svg width="100%" height="100%" viewBox="0 0 24 24">
			<title>Chevron Left</title>
			<path fill={fill} d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
		</svg>
	)
}
